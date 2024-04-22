<?php
// Отримання даних з форми
$name = $_POST['name'];
$address = $_POST['address'];
$email = $_POST['email'];
$message = $_POST['message'];

// Тут можна виконати відправку електронного листа або зберегти дані у базу даних, якщо потрібно

// Приклад відправки електронного листа (встановіть правильні налаштування)
$to = "alexthukynov@gmail.com";
$subject = "New Message from Contact Form";
$body = "Name: $name\nname: $address\nEmail: $email\nMessage:\n$message";
$headers = "From: $email\n$name";

if (mail($to, $subject, $body, $headers)) {
    echo 'Message sent successfully.';
} else {
    echo 'Error sending message.';
}
?>