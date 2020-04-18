<?php session_start(); ?>
<?php
        $link = mysqli_connect("localhost", "scott", "tiger", "instytut");
        if (!$link) {
            printf("Connect failed: %s\n", mysqli_connect_error());
            exit();
        }
        if (isset($_POST['id_prac']) &&
            is_numeric($_POST['id_prac']) &&
            is_string($_POST['nazwisko']))
            {
                $sql = "INSERT INTO pracownicy(id_prac,nazwisko) VALUES(?,?)";
                $stmt = $link->prepare($sql);
                $stmt->bind_param("is", $_POST['id_prac'], $_POST['nazwisko']);
                $result = $stmt->execute();
                if (!$result) {
                    // printf("Query failed: %s\n", mysqli_error($link));
                    $_SESSION["error"] = 1;
                    header("Location: form06_post.php");
                }
                else {
                    $_SESSION["success"] = 1;
                    header("Location: form06_get.php");
                }
                $stmt->close();
            }
            else {
                $_SESSION["error"] = 1;
                header("Location: form06_post.php");
            }
            $link->close();
            
?>       