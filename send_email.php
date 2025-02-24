<?php
// Отримання даних з форми
$name = $_POST['name'];
$address = $_POST['address'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Тут можна виконати відправку електронного листа або зберегти дані у базу даних, якщо потрібно

// Приклад відправки електронного листа (встановіть правильні налаштування)
// $to = "proservice.ukr@gmail.com";
$to = "alexthukynov@gmail.com";
$subject = "New Message from Contact Form";
$body = "Name: $name;
$address\nPhone: $email\nMessage: $message";
$headers = "From: $name\n$email";

if (mail($to, $subject, $body, $headers)) {
    echo 'Message sent successfully.';
} else {
    echo 'Error sending message.';
}
?>