<?php 

require "conn.php";
$result_lunbo=mysql_query("select * from dangdang_lunbo");
$arr_lunbo=array();
for($i=0;$i<mysql_num_rows($result_lunbo);$i++){
	$arr_lunbo[$i]=mysql_fetch_array($result_lunbo,MYSQL_ASSOC);	
};




$result_lunbo_low=mysql_query("select * from lunbo_low");
$arr_lunbo_low=array();
for($i=0;$i<mysql_num_rows($result_lunbo_low);$i++){
	$arr_lunbo_low[$i]=mysql_fetch_array($result_lunbo_low,MYSQL_ASSOC);	
};



$result_miaosha=mysql_query("select * from miaosha");
$arr_miaosha=array();
for($i=0;$i<mysql_num_rows($result_miaosha);$i++){
	$arr_miaosha[$i]=mysql_fetch_array($result_miaosha,MYSQL_ASSOC);	
};

$result_miaosha_right=mysql_query("select * from miaosha_right");
$arr_miaosha_right=array();
for($i=0;$i<mysql_num_rows($result_miaosha_right);$i++){
	$arr_miaosha_right[$i]=mysql_fetch_array($result_miaosha_right,MYSQL_ASSOC);	
};

$result_lunbo_right=mysql_query("select * from lunbo_right");
$arr_lunbo_right=array();
for($i=0;$i<mysql_num_rows($result_lunbo_right);$i++){
	$arr_lunbo_right[$i]=mysql_fetch_array($result_lunbo_right,MYSQL_ASSOC);	
};


$result_book_ppt=mysql_query("select * from book_ppt");
$arr_book_ppt=array();
for($i=0;$i<mysql_num_rows($result_book_ppt);$i++){
	$arr_book_ppt[$i]=mysql_fetch_array($result_book_ppt,MYSQL_ASSOC);	
};


$result_book=mysql_query("select * from book");
$arr_book=array();
for($i=0;$i<mysql_num_rows($result_book);$i++){
	$arr_book[$i]=mysql_fetch_array($result_book,MYSQL_ASSOC);	
};


$result_clothes_ppt=mysql_query("select * from clothes_ppt");
$arr_clothes_ppt=array();
for($i=0;$i<mysql_num_rows($result_clothes_ppt);$i++){
	$arr_clothes_ppt[$i]=mysql_fetch_array($result_clothes_ppt,MYSQL_ASSOC);	
};

$result_clothes=mysql_query("select * from clothes");
$arr_clothes=array();
for($i=0;$i<mysql_num_rows($result_clothes);$i++){
	$arr_clothes[$i]=mysql_fetch_array($result_clothes,MYSQL_ASSOC);	
};

$result_commodity=mysql_query("select * from commodity");
$arr_commodity=array();
for($i=0;$i<mysql_num_rows($result_commodity);$i++){
	$arr_commodity[$i]=mysql_fetch_array($result_commodity,MYSQL_ASSOC);	
};

$result_brand_logo1=mysql_query("select * from brand_logo");
$arr_brand_logo1=array();
for($i=0;$i<mysql_num_rows($result_brand_logo1);$i++){
	$arr_brand_logo1[$i]=mysql_fetch_array($result_brand_logo1,MYSQL_ASSOC);	
};
$result_brand_logo2=mysql_query("select * from brand_logo2");
$arr_brand_logo2=array();
for($i=0;$i<mysql_num_rows($result_brand_logo2);$i++){
	$arr_brand_logo2[$i]=mysql_fetch_array($result_brand_logo2,MYSQL_ASSOC);	
};
	class dateifo{
		function fn(){
			global $arr_lunbo,$arr_lunbo_low,$arr_miaosha,$arr_miaosha_right,$arr_lunbo_right,$arr_book_ppt,$arr_book,$arr_clothes_ppt,$arr_clothes,$arr_commodity,$arr_brand_logo1,$arr_brand_logo2;
			$this->index1=$arr_lunbo;
			$this->index2=$arr_lunbo_low;
			$this->index3=$arr_miaosha;
			$this->index4=$arr_miaosha_right;
			$this->index5=$arr_lunbo_right;
			$this->index6=$arr_book_ppt;
			$this->index7=$arr_book;
			$this->index8=$arr_clothes_ppt;
			$this->index9=$arr_clothes;
			$this->index10=$arr_commodity;
			$this->index11=$arr_brand_logo1;
			$this->index12=$arr_brand_logo2;
			echo json_encode($this);
		}
	}
	$dates=new dateifo();
	$dates->fn();


?>