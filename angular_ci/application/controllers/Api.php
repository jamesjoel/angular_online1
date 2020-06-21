<?php
require(APPPATH.'libraries/REST_Controller.php');

//https://code.tutsplus.com/tutorials/working-with-restful-services-in-codeigniter--net-8814
class Api extends REST_Controller {

	function __construct(){
	
		parent::__construct();
        $this->load->model("usermod");
	
		$this->key = "hello world";
        $this->cipher = "AES-128-ECB";
	}

	public function index()
	{
		
	}
	function login_post() // localhost/ci/index.php/api/login
    {
        
        $u = $this->post("username");
        $p = $this->post("password");
        $res = $this->usermod->checkUsername($u);

        if($res->num_rows()>=1)
        {
            $data = $res->row_array();
            if($data['password']==$p)
            {

                $token=openssl_encrypt($data['id'], $this->cipher, $this->key);
                $this->response(array("success"=>true, "token"=>$token), 200);
                // echo $token=openssl_decrypt("W5BXBl59la8fGNxv6/Z7cA==", $this->cipher, $this->key);
            }
            else
            {
                $this->response(array("success"=>false, "msgType"=>2), 401); // Pass

            }
        }
        else
        {
            $this->response(array("success"=>false, "msgType"=>1), 401); // User and Pass
        }
    	// $this->response($this->post(), 200);
        /*if(!$this->get('id'))
        {
            $this->response(NULL, 400);
        }
 
        $user = $this->user_model->get( $this->get('id') );
         
        if($user)
        {
            $this->response($user, 200); // 200 being the HTTP response code
        }
 
        else
        {
            $this->response(NULL, 404);
        }*/
    }
    function login_get()
    {
    	$this->response(array("name"=>"rohit"), 200);
    }
    
}
