<?php 
    session_start()
?>
<!DOCTYPE html>
<html>

<head>
    <title>PHP</title>
    <meta charset='UTF-8' />
</head>

<body>
    <?php
    if (isset($_POST["wyloguj"])) {
        $_SESSION["zalogowany"] = 0;
    }
    ?>
    <h1>Nasz system</h1>
    <form method="post", action="logowanie.php">
        <fieldset>
            <legend>Logowanie</legend>
            <label for="uname">Login:</label>
            <input type="text"  name="login">
            <br>
            <label for="psw">Hasło:</label>
            <input type="password" name="password">
            <br>
            <input type="submit" value="Zaloguj" name="send">
        </fieldset>
    </form>
    <form action="cookie.php" method="get">
        <fieldset>
            <legend>Tworzenie cookie</legend>
            <input type="number" name="czas">
            <input type="submit" value="Cookie" name="utworzCookie">
        </fieldset>
    </form>
    <br>
    <?php
        if (isset($_COOKIE["ciacho"])) {
            echo $_COOKIE["ciacho"];
        } else {
            echo "cookie nie ustawione";
        }
    ?>
</body>

</html>