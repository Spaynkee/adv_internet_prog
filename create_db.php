<?php

try {
    $conn = new mysqli('localhost', 'root', '');
}
catch (Exception $e) {
    die ("error ".$e);
}

if (!$conn) {
    die ("error <br />".mysqli_connect_error());
}

echo "DB Connected<br />";

$sql = "CREATE DATABASE project";

if (mysqli_query($conn, $sql)) {
    echo "Database Created<br />";
}
else {
    echo "error creating database<br />";
}

mysqli_close($conn);

$conn = new mysqli('localhost', 'root', '', 'project');

$create_table = "Create Table Registered (
    id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(30) NOT NULL,
    lastname VARCHAR(30) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mobilenum BIGINT(10) NOT NULL,
    gender VARCHAR(6) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    qualification VARCHAR(50) NOT NULL,
    password VARCHAR(10) NOT NULL,
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )";

if (mysqli_query($conn, $create_table)) {
    echo "Table Created<br />";
}
else {
    echo "error creating Table<br />";
}

mysqli_close($conn);
?>