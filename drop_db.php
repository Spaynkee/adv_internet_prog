<?php
try {
    $conn = new mysqli('localhost', 'root', '', 'project');
}
catch (Exception $e) {
    die ("error ".$e);
}

if (!$conn) {
    die ("error <br />".mysqli_connect_error());
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