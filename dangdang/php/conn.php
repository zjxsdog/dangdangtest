<?php
header("content-type:text/html;charset=utf-8");

define("SERVER","localhost");
define("USERNAME","root");
define("PASSWORD","");
$conn=mysql_connect(SERVER,USERNAME,PASSWORD);
if(!$conn){
	die("数据库连接失败".mysql_error());
}
mysql_select_db("dangdang");
mysql_query("SET NAMES UTF8");

?>