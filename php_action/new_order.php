<?php
    $button=$_REQUEST["button"];
    if($button=="new_order"){
        require("connection.php");
        $id=0;
        $name=$_REQUEST["name_valid"];
        $email=$_REQUEST["email_valid"];
        $mobile_no=$_REQUEST["mobile_no_valid"];
        $date_of_birth=$_REQUEST["date_of_birth_valid"];
        $total = $_REQUEST["total"];
        $items = $_REQUEST["items"];
        $items = explode(',', $items);
        foreach ($items as $key => $value) {
            echo "splittedstring[".$key."] = ".$value."<br>";
            }

        $query="insert into customer values('$id','$name','$email','$mobile_no','$date_of_birth')";
        $insert= mysqli_query($connect,$query) or die("Cannot insert to database");

        $select="SELECT id FROM customer ORDER BY ID DESC LIMIT 1";
        $result = mysqli_query($connect, $select) or die("Cannot select from database");
        $array = mysqli_fetch_assoc($result);
        $customer_id = $array['id'];

        $query1= "insert into orders values('$id', '$customer_id' , '$total', 'placed')";
        $insert1= mysqli_query($connect,$query1) or die("Cannot insert to database");

        $select1="SELECT id FROM orders ORDER BY ID DESC LIMIT 1";
        $result1 = mysqli_query($connect, $select) or die("Cannot select from database");
        $array1 = mysqli_fetch_assoc($result);
        $order_id = $array1['id'];

    }

?>