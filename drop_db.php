<?php
$conn = new mysqli('localhost', 'root', '');

if (!$conn) {
    die ("Failed".mysqli_connect_error());
}
echo "DB Connected <br />";

$sql = "DROP DATABASE project";

if (mysqli_query($conn, $sql)) {
    echo "Database dropped  <br />";
}
else {
    echo "Error dropping database <br />";
}
mysqli_close($conn);
echo "DB Dropped.<br />";
?>