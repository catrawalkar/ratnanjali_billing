<?php
    require("connection.php");
    $id=0;
    $name=$_REQUEST["name_valid"];
    $email=$_REQUEST["email_valid"];
    $mobile_no=$_REQUEST["mobile_no_valid"];
    $date_of_birth=$_REQUEST["date_of_birth_valid"];
    $total = $_REQUEST["total"];

    $query="insert into customer values('$id','$name','$email','$mobile_no','$date_of_birth')";
    $insert= mysqli_query($connect,$query) or die("Cannot insert to database");
    $query1= "insert into orders values('$id', '2' , '$total', 'placed')";
    $insert1= mysqli_query($connect,$query1) or die("Cannot insert to database");

?>