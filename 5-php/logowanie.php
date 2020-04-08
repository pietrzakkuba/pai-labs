<?php
    session_start();
    require("funkcje.php");
    if (isset($_POST["send"])) {
        $login = test_input($_POST["login"]);
        $password = test_input($_POST["password"]);
        // echo "Przesłany login: " . $login . "<br>";
        // echo "Przesłane hasło: " . $password . "<br><br>";

        foreach (array($osoba1, $osoba2) as $osoba) {
            if ($osoba->login == $login && $osoba->haslo == $password) {
                $_SESSION["zalogowanyImie"] = $osoba->imieNazwisko;
                $_SESSION["zalogowany"] = 1;
                header("Location: user.php");
            }
        }
        if ($_SESSION["zalogowany"] != 1) {
            header("Location: index.php");
        }
    }
?>