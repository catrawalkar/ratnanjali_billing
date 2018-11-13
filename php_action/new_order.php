<?php
    require("connection.php");
    $id=0;
    $name=$_REQUEST["name_valid"];
    $email=$_REQUEST["email_valid"];
    $mobile_no=$_REQUEST["mobile_no_valid"];
    $date_of_birth=$_REQUEST["date_of_birth_valid"];
    
    $query="insert into customer values('$id','$name','$email','$mobile_no','$date_of_birth')";
    $insert= mysqli_query($connect,$query) or die("Cannot insert to database");
?>