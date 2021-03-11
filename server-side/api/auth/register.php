<?php
    include '../config/database.php';

    // table name
    $tableName = 'users';

    // connection string
    $conn = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

    // get json input and store in obj variable
    $json = file_get_contents('php://input');
    $obj = json_decode($json, true);

    // save user data into variables
    $email = $obj['email'];
    $phone = $obj['phone'];
    $password = md5($obj['password']);

    // validate email in db
    $query = "SELECT * FROM users WHERE email='$email'";
    $check = mysqli_fetch_array(mysqli_query($conn,$query));
    $userId = md5(uniqid(rand(),true));


    if(isset($check)){
        $errorMessage = 'Email Already Exists! Try with a different message!';
        $jsonError = json_encode($errorMessage);
        echo $jsonError;
    }else{
        insertData($userId, $conn, $tableName, $email, $password, $phone);

    }

    // function to insert data
    function insertData($userId, $conn, $tableName, $email, $password, $phone){
        $queryInsert = "insert into users (userId,email,password,phone) values ('$userId','$email','$password','$phone')";

        if (mysqli_query($conn, $queryInsert)){
            $successMessage = 'User Regsitered Successfully';
            $jsonSuccess = json_encode($successMessage);
        }else{
            $errorMessage = 'User Registration Failed';
            $jsonFailure = json_encode($errorMessage);
            echo $jsonFailure;
        }
    }

    mysqli_close($conn);
?>