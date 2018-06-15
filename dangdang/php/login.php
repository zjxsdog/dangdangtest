<?php 

	require "conn.php";


	if(isset($_POST['tel'])){
		$username=$_POST['tel'];
		$password=md5($_POST['password']);
	}else{
		exit('非法操作');
	}


	$result=mysql_query("select * from userifo where tel='$username' and password='$password' ");
	if(mysql_fetch_array($result)){
		echo true;
	}else{
		echo false;
	}



 ?>