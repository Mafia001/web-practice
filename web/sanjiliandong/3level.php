<?php
header('content-type:application:json;charset=utf8');
header('Access-Control-Allow-Origin:*');
ini_set("display_errors", 0);
error_reporting(E_ALL ^ E_NOTICE);
error_reporting(E_ALL ^ E_WARNING);
$mysql_server_name="localhost"; //数据库服务器名称
$mysql_username=""; // 连接数据库用户名
$mysql_password=""; // 连接数据库密码
$mysql_database=""; // 数据库的名字

// 连接到数据库
$conn=mysql_connect($mysql_server_name, $mysql_username,
    $mysql_password);
if(!$conn) {
    echo "数据库连接失败！".mysql_error;
}
mysql_select_db($mysql_database, $conn);
mysql_set_charset('utf8');

sanjiliandong();

close_conn();

//显示所有用户
function sanjiliandong() {
    global $conn;
    if($conn) {
		$id=$_GET['id'];
		$area=$_GET['area'];
		$array_data = array();
		//输出省份
		if($area==province){
			$result=mysql_query("select * from provinces");
			while($row = mysql_fetch_array($result)) {
				$array_temp = array("id"=>$row['id'],"provinceid"=>$row['provinceid'], "province"=>$row['province']);
                 array_push($array_data, $array_temp);
        }
        $json = json_encode($array_data);
        echo $json;

		}
		//输出城市
		if($area==cities){
			$result=mysql_query("select * from cities where provinceid=$id");
			while($row = mysql_fetch_array($result)) {
				$array_temp = array("id"=>$row['id'],"cityid"=>$row['cityid'], "city"=>$row['city'],"provinceid"=>$row['provinceid']);
                 array_push($array_data, $array_temp);
        }
			$json = json_encode($array_data);
			echo $json;
		}
		//输出地区
		if($area==areas){
			$result=mysql_query("select * from areas where cityid=$id");
			while($row = mysql_fetch_array($result)) {
				$array_temp = array("id"=>$row['id'],"areaid"=>$row['areaid'], "area"=>$row['area'],"cityid"=>$row['cityid']);
                 array_push($array_data, $array_temp);
        }
			$json = json_encode($array_data);
			echo $json;
		}

    }
}

//关闭连接
function close_conn() {
    global $conn;
    mysql_close($conn);
}
?>  