<?php
class User
{
    // DB connection and table name
    private $conn;
    private $tableName = "users";

    // Object Properties
    public $userId;
    public $email;
    public $password;
    public $phone;

    // constructor with $db as database connection
    public function __construct($db)
    {
        $this->conn = $db;
    }

    // read users
    function read()
    {
        $query = "SELECT * FROM .$this->tableName";
        // prepare query statement 
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    function readOne(){
        $query = "SELECT * FROM .$this->tableName. WHERE 'userId' = .$this->userId.";
        $stmt = $this->conn->prepare($query);
        
        $stmt->execute();
        return $stmt;
    }
}
?>