<?php	
    validate_fname($_POST['fname']);
    validate_lname($_POST['lname']);
    validate_email($_POST['email']);
    validate_password($_POST['password']);

    # then store into sql.
    # if sql is successful, return success.
    echo "success";
    
    function validate_fname($field) {
        $pattern = "/^[a-zA-Z'.\-\s]{1,30}$/"; 
        if (preg_match($pattern, $field)){
        }
        else {
            echo "error";
            die();
        }
    }

    function validate_lname($field) {
        $pattern = "/^[a-zA-Z'.\-\s]{1,30}$/"; 
        if (preg_match($pattern, $field)){
        }
        else {
            echo "error";
            die();
        }
    }

    function validate_email($field) {
        $pattern = "/^[a-z0-9'\-_.]+@[a-z0-9]+(\.[a-z]+)+$/"; 
        if (preg_match($pattern, $field)){
        }
        else {
            echo "error";
            die();
        }
    }

    function validate_password($field) {
        $pattern = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{1,10}$/"; 
        if (preg_match($pattern, $field)){
        }
        else {
            echo "error";
            die();
        }
    }
?>