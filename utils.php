<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = "apetroaei.claudiu99@gmail.com";
    $subject = "New message from " . $email;

    if (mail($to, $subject, $message)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email.";
    }
}
