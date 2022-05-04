<?php	
    // If validation fails, these functions will return an error message and quit the php script.
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

    // escape single-quote for fname lname email.
    $_POST['fname'] = $conn -> real_escape_string($_POST['fname']);
    $_POST['lname'] = $conn -> real_escape_string($_POST['lname']);
    $_POST['email'] = $conn -> real_escape_string($_POST['email']);

    // If we didn't exit due to a failed validation, we save the form info into a sql database.
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
        echo "error inserting row to database";
    }

    mysqli_close($conn);
    
    function validate_fname($field) {
        $pattern = "/^[a-zA-Z'.\-\s]{1,30}$/"; 
        if (!preg_match($pattern, $field)) {
            die("error fname");
        }
    }

    function validate_lname($field) {
        $pattern = "/^[a-zA-Z'.\-\s]{1,30}$/"; 
       
        if (!preg_match($pattern, $field)) {
            die("error lname");
        }
    }

    function validate_email($field) {
        $pattern = "/^[a-z0-9'\-_.]+@[a-z0-9]+(\.[a-z]+)*$/"; 
        if (!preg_match($pattern, $field)) {
            die("error email");
        }
    }

    function validate_mobilenum($field) {
        if ($field == "" || strlen($field) > 10 || strlen($field) < 9 ) {
            die("error mobilenum ");
        }
    }

    function validate_gender($field) {
        if ($field != "Male" && $field != "Female") {
            die("error gender");
        }
    }

    function validate_city($field) {
        if ($field == "") {
            die("error city");
        }
    }

    function validate_state($field) {
        if ($field == "") {
            die("error state");
        }
    }

    function validate_qualification($field) {
        if ($field == "none") {
            die("error qualification");
        }
    }

    function validate_password($field) {
        $pattern = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{3,10}$/"; 
        if (!preg_match($pattern, $field)) {
            die("error password");
        }
    }
?>