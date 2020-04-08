<?php session_start(); ?>
<!DOCTYPE html>
<html>

<head>
    <title>PHP</title>
    <meta charset='UTF-8' />
</head>

<body>
    <?php
    require_once("funkcje.php");
    if (isset($_GET["utworzCookie"])) {
        if (setcookie("ciacho", "5", time() + $_GET["czas"])) {
            echo "ustawiono cookie";
        } else {
            echo "nie ustawiono cookie";
        }
    }
    ?>
    <a href="./index.php">do głównej</a>
</body>

</html>