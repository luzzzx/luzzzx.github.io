<?php

$recepient = "lu.vldmr@gmail.com"; //Почта куда будут приходить письма
$subject = "Заявка с сайта Форма обратной связи ajax"; //Сообщение
$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n"; 
$headers .= "From: test.ru <test.ru>\r\n"; 

$name = trim($_POST["name"]);
$phone = trim($_POST["tel"]);
$email = trim($_POST["email"]);
$company = trim($_POST["company"]);
$sub = trim($_POST["sub"]);
$massage = trim($_POST["text"]); //Поля

$message = "Имя: $name <br/> Телефон: $phone <br/> Сообщение: $email <br/> Сообщение: $company <br/> Сообщение: $sub <br/> Сообщение: $massage";

mail($recepient, $subject, $message, $headers); ?>