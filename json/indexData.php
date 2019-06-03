<?php
header('Content-Type:application/json; charset=utf-8');
$data = file_get_contents('./indexData.json');
$data = json_decode($data);
$page = $_GET['page'];
$pageSize = $_GET['pageSize'];
$offset = ($page - 1) * $pageSize;
$result = array_slice($data,$offset,$pageSize);
$page++;
echo json_encode(array('page'=>$page,'items'=>$result));
sleep(1);


?>