<?php 

	require "conn.php";
	if(isset($_POST["tel"])||isset($_POST['submit'])){
		$telphone=@$_POST["tel"];
	}else{
		exit("非法操作");
	}
	$result=mysql_query("select * from userifo where tel='$telphone'");

	if(mysql_fetch_array($result)){
		echo true;
	}else{
		echo false;
	}

	if(isset($_POST['submit'])){
		$tel=$_POST['tel'];
		$password=md5($_POST['password']);
		$query="insert userifo value(default,'$tel','$password')";
		mysql_query($query);
		header('location:../src/html/login.html');//php的跳转
	}
 ?>