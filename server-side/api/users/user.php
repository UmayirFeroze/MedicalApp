<?php
    include_once '../config/database.php';

    // user table name 
    $tableName = 'users';

    $conn = new mysqli($HostName, $DatabaseName , $HostUser , $HostPass);
    mysqli_set_charset($conn, 'utf8');

    $sql = "SELECT * FROM .$tableName.";

    $result = $conn->query($sql);

    // validate response
    if($result->num > 0){
        while($row[]= $result->fetch_assoc()){
            $item=$row;
            $json = json_encode($item);
        }
    }else{
        echo json_encode(array("message"=>"No users found"));
        mysqli_close($conn);
    }
?>