<?php
class DB {
    private $host;
    private $user;
    private $password;
    private $dbname;

    public function _construct() {
        $this->host = "localhost";
        $this->user = "root";
        $this->password = "";
        $this->dbname = "montalban";
    }
    public function createCommection() {
        try {
            $conn = new mysqli($this->host,$this->user,  $this->password, $this->dbname);

            if ($conn->error) {
                return "Error: " , $conn->error;
            }
            return $conn;
        }
        catch (Exemption $e) {
            echo "Error: " , $e->getMessage();
        }
    }
}