<?php
include 'dbconnect.php';
header("Content-type: text/html; charset=utf-8");
if($_SERVER['REQUEST_METHOD'] == "POST")
{
    $id = $_POST['blogid'];
    $sql = "DELETE FROM `bloglist` WHERE blogid =".$id;
    $sql3 = "DELETE FROM `conversation` WHERE blogid =".$id;
    mysqli_query($conn,$sql);
    mysqli_query($conn,$sql3);
    echo '<a href="admin.php">Go Back</a>';
}

?>