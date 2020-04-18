<?php session_start(); ?>
<html>
    <?php
        print<<<KONIEC
        <html>
        <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        </head>
        <body>
        <form action="form06_redirect.php" method="POST">
        id_prac <input type="text" name="id_prac">
        nazwisko <input type="text" name="nazwisko">
        <input type="submit" value="Wstaw">
        <input type="reset" value="Wyczysc">
        </form>
        KONIEC;
    if (isset($_SESSION['error']) && $_SESSION['error'] == 1) {
        printf("<br><br>error my friend! :c<br><br>");
        $_SESSION['error'] = 0;
    }
    ?>
    <body>
        <br>
        <br>
        <br>

        <a href="./form06_get.php">LINK DO GET</a>
    </body>
</html>