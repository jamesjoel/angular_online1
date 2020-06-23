<?php
require(APPPATH.'libraries/REST_Controller.php');

class Api extends REST_Controller {

	function __construct(){
	
		parent::__construct();
        $this->load->model("usermod");
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
                $tokenData["id"]=$data['id'];
                $output['token'] = AUTHORIZATION::generateToken($tokenData);
                $this->set_response($output, REST_Controller::HTTP_OK);
            }
            else
            {
                $this->set_response(array("success"=>false, "msgType"=>2), REST_Controller::HTTP_UNAUTHORIZED); 

            }
        }
        else
        {
            $this->response(array("success"=>false, "msgType"=>1), REST_Controller::HTTP_UNAUTHORIZED); 
        }
        

    }























        /*$this->set_response($this->post());
        $tokenData = array();
        $tokenData['id'] = 1; //TODO: Replace with data for token
        $output['token'] = AUTHORIZATION::generateToken($tokenData);
        $this->set_response($output, REST_Controller::HTTP_OK);
        */
        //$decodedToken = AUTHORIZATION::validateToken("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.f0fkZGe81nLqpjaLlV8VLVZwTEuayLrKtoGKF6sR0gI");
        //$this->set_response($decodedToken, REST_Controller::HTTP_OK);













        
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
    function login_get()
    {
    	$this->response(array("name"=>"rohit"), 200);
    }
    
}
/*

public function token_post()
    {
        $headers = $this->input->request_headers();

        if (array_key_exists('Authorization', $headers) && !empty($headers['Authorization'])) {
            $decodedToken = AUTHORIZATION::validateToken($headers['Authorization']);
            if ($decodedToken != false) {
                $this->set_response($decodedToken, REST_Controller::HTTP_OK);
                return;
            }
        }

        $this->set_response("Unauthorised", REST_Controller::HTTP_UNAUTHORIZED);
    }

*/