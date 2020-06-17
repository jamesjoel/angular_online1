<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

$con = mysqli_connect("localhost", "root", "", "angular");
$input = json_decode(file_get_contents('php://input'), true);
$method = $_SERVER['REQUEST_METHOD'];

switch($method){
	case 'GET' : $res = mysqli_query($con, "SELECT * FROM users");
				$arrData=array();
				while($data = mysqli_fetch_assoc($res))
				{
					$arrData[]=$data;
				}
				echo json_encode($arrData);
				break;
	case 'POST' : $arr = extract($input);
				mysqli_query($con, "INSERT INTO users (name, city) VALUES ('$name', '$city')");
				$id = mysqli_insert_id($con);
				
				$res = mysqli_query($con, "SELECT * FROM users WHERE id=".$id);
				echo json_encode(mysqli_fetch_assoc($res));
				break;
}
?>
