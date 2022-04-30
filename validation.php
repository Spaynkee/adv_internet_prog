<?php	
    validate_fname($_POST['fname']);
    validate_lname($_POST['lname']);
    validate_email($_POST['email']);
    validate_mobilenum($_POST['mobilenum']);
    validate_gender($_POST['gender']);
    validate_city($_POST['city']);
    validate_state($_POST['state']);
    validate_qualification($_POST['qualification']);
    validate_password($_POST['password']);

    $conn = new mysqli('localhost', 'root', '', 'project');

    if (!$conn) {
        die ("Failed".mysqli_connect_error());
    }

    $sql = "INSERT INTO registered (firstname, lastname, email, mobilenum, gender, city, state, qualification, password) values ('"
    .$_POST['fname']."','"
    .$_POST['lname']."','"
    .$_POST['email']."',"
    .$_POST['mobilenum'].",'"
    .$_POST['gender']."','"
    .$_POST['city']."','"
    .$_POST['state']."','"
    .$_POST['qualification']."','"
    .$_POST['password']."')";

    if (mysqli_query($conn, $sql)) {
        echo "Row Inserted into DB";
    }
    else {
        echo "Error inserting row to database";
    }

    mysqli_close($conn);
    
    function validate_fname($field) {
        $pattern = "/^[a-zA-Z'.\-\s]{1,30}$/"; 
        if (!preg_match($pattern, $field)) {
            echo "error fname";
            die();
        }
    }

    function validate_lname($field) {
        $pattern = "/^[a-zA-Z'.\-\s]{1,30}$/"; 
       
        if (!preg_match($pattern, $field)) {
            echo "error lname";
            die();
        }
    }

    function validate_email($field) {
        $pattern = "/^[a-z0-9'\-_.]+@[a-z0-9]+(\.[a-z]+)+$/"; 
        if (!preg_match($pattern, $field)) {
            echo "error email";
            die();
        }
    }

    function validate_mobilenum($field) {
        if ($field == "" || strlen($field) > 20 ) {
            echo "error mobilenum ";
            die();
        }
    }

    function validate_gender($field) {
        if ($field != "Male" && $field != "Female") {
            echo "error gender";
            die();
        }
    }

    function validate_city($field) {
        if ($field == "") {
            echo "error city ";
            die();
        }
    }

    function validate_state($field) {
        if ($field == "") {
            echo "error state";
            die();
        }
    }

    function validate_qualification($field) {
        if ($field == "none") {
            echo "error qualification";
            die();
        }
    }

    function validate_password($field) {
        $pattern = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{1,10}$/"; 
        if (!preg_match($pattern, $field)) {
            echo "error password";
            die();
        }
    }
?>