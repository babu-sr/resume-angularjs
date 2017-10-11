<?php

	/*$post_data = file_get_contents("php://input");
	$data = json_decode($post_data);
	$responseData['name'] = $data->post->name;
	$responseData['email'] = $data->post->email;
	$responseData['message'] = $data->post->message;*/
	
	$responseData['name'] = $_POST['name'];
	$responseData['email'] = $_POST['email'];
	$responseData['message'] = $_POST['message'];
	
	$responseData['success'] = true;
	
	echo json_encode($responseData);
?>
