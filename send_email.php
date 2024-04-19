<?php
// Отримання даних з форми
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Тут можна виконати відправку електронного листа або зберегти дані у базу даних, якщо потрібно

// Приклад відправки електронного листа (встановіть правильні налаштування)
$to = "alexthukynov@gmail.com";
$subject = "New Message from Contact Form";
$body = "Name: $name\nEmail: $email\nMessage:\n$message";
$headers = "From: $email";

if (mail($to, $subject, $body, $headers)) {
    echo 'Message sent successfully.';
} else {
    echo 'Error sending message.';
}
?>