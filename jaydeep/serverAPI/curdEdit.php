<?php

header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

$con = mysqli_connect("localhost", "root", "", "curd");
$input = json_decode(file_get_contents('php://input'), true); // the $_POST data come in $input array
$method = $_SERVER['REQUEST_METHOD'];
$id  = $_GET["id"];
switch($method){

	case 'GET' : $res = mysqli_query($con, "SELECT * FROM curdtbl WHERE id = '".$id."'");
				$arrData=array();
				// while(
					$data = mysqli_fetch_assoc($res);
				// )
					// print_r($data);
					// die();
				// {
					// $arrData[]=$data;
					print_r($data);
					// die();
				// }
				echo json_encode($data);
				break;
	

	case 'PUT' : extract($input);
				mysqli_query($con,"UPDATE curdtbl SET fullname='$fullname', lastname ='$lastname', email ='$email', password ='$password', mobile='$mobile', gender='$gender', city ='$city' WHERE id=".$_GET['id']);
				echo json_encode($input);
				break;

	}

?>
