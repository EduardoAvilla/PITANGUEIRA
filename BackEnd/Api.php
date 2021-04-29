<?php


function CriaJson( ){
	$nome ="x";
	$cliente="x";
	$data="x";
	$tipo="x";
 $myArr = array($nome, $cliente, $data, $tipo);

$myJSON = json_encode($myArr);

echo $myJSON;
}

CriaJson();



?>