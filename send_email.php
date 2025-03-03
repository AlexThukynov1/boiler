<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $address = $_POST["address"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    $to = "proservice.ukr@gmail.com";
    $subject = "Нове повідомлення з форми зворотного зв'язку";
    $body = "Ім'я: " . $name . "\n" .
        "Адреса: " . $address . "\n" .
        "Телефон: " . $phone . "\n" .
        "Повідомлення: " . $message;

    $headers = "From: proservice.net.ua"; 

    if (mail($to, $subject, $body, $headers)) {
        echo "Повідомлення успішно відправлено!";
    } else {
        echo "Виникла помилка під час відправлення повідомлення.";
    }
}
?>