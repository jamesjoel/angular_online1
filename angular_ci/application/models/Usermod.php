<?php

class Usermod extends CI_Model{

	function __construct()
	{
		parent::__construct();
		$this->load->database();
	}

	function checkUsername($u)
	{
		$this->db->where("username",$u);
		return $this->db->get("user1");
	}
}


?>