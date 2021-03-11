<?php
    // required headers
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; chatset=UTF-8");

    // database connection
    include_once '../config/database.php';
    include_once '../objects/user.php';

    // initiate database and user object 
    $database = new Database();
    $db = $database->getConnection();

    // initialize object
    $user = new User($db);

    // query products
    $stmt = $user->read();
    $num = $stmt->rowCount();

    // check for number of records
    if ($num > 0){

        // users array
        $userArray=array();

        while($row=$stmt->fetch(PDO::FETCH_ASSOC)){
            extract($row);
            $users = array("id"=>$userId, "email"=>$email, "phone"=>$phone);
            array_push($userArray,$users);
        }
        
        // set response code 
        http_response_code(200);

        // show in json format
        echo json_encode($userArray);
    }else{
        // set response code
        http_response_code(400);
        echo json_encode(array("message"=>"No users found"));
    }

    
?>