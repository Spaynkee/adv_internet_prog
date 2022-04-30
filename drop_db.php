<?php
$conn = new mysqli('localhost', 'root', '');

if (!$conn) {
    die ("Failed".mysqli_connect_error());
}
echo "DB Connected\n";

$sql = "DROP DATABASE project";

if (mysqli_query($conn, $sql)) {
    echo "Database dropped \n";
}
else {
    echo "Error dropping database";
}
mysqli_close($conn);
echo "\nDB Dropped.";
?>