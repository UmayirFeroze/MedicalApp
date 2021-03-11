<?php
    include '../config/database.php';

    $conn = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
    $json = file_get_contents('php://input');
    $obj = json_decode($json,true);

    // set values to variables 
    $tableName = 'users';
    $email = $obj['email'];
    $password = $obj['password'];

    $query = "select * from users where email = '$email' and password = '$password'  LIMIT 1";
    $check = mysqli_fetch_array(mysqli_query($conn,$query));
    

    if(isset($check)){

        $json=array('DataMatched'=>'false','userId'=>'empty');
        $json['DataMatched'] = 'true';
        $json['userId'] =$check['userId'];
        $json['email'] =$check['email'];
    
        $json= json_encode($json);
        echo $json ; 
     } else {
        $errMessage = 'Invalid Email or Password Please Try Again' ;
        $errMessageJSon = json_encode($errMessage);
         echo $errMessageJSon ;
     }
     mysqli_close($conn);
?>