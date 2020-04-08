<?php session_start(); ?>
<!DOCTYPE html>
<html>

<head>
    <title>PHP</title>
    <meta charset='UTF-8' />
</head>

<body>
    <!-- <a href="./index.php">index</a><br> -->
    <?php
    require_once("funkcje.php");
    if (isset($_SESSION["zalogowany"]) && $_SESSION["zalogowany"] == 1) {
        echo $_SESSION["zalogowanyImie"];
    } else {
        header("Location: index.php");
    }
    ?>
    <form action="index.php" method="post">
        <input type="submit" value="wyloguj" name="wyloguj">
    </form>
    <form action="user.php" method="post" enctype="multipart/form-data">
        <input type="file" name="myfile"><br>
        <input type="submit" , value="upload" , name="upload">
    </form>
    <?php
    if (isset($_POST["upload"])) {
        $target_dir = "./images/";
        $target_file = $target_dir . basename($_FILES["myfile"]["name"]);
        if (move_uploaded_file($_FILES["myfile"]["tmp_name"], $target_file)) {
            echo "<img src='./images/nn.png' alt='no photo'/>";
        } else {
            echo "Error.";
        }
    }
       
    ?>
</body>

</html>