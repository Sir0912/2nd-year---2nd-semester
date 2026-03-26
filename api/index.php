<?php 
session_start();
if (isset($_GET["pass"])) {
    $pass = $_POST["pass"];
    if ($pass == 123)
     $_SESSION["userId"] = base64_encode(1);
        echo "<script>
        alert('successful login');
        </script>";

} else {
    echo "<script>
    alert('invalid log');
    </script>";
}
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h5>
        Result: <span id="result"> </span>
        </h5>
        <input type="text" id="pass"
        placeholder = "Absolute Value">

        <button type="button" id = "btnEncode">
            Encode Text
        </button>
        <button type="button" id="btnDecode">
            Decode Text
        </button>

</body>
<script>
</html> 