<?php

$recepient = "lu.vldmr@gmail.com"; //Почта куда будут приходить письма
$subject = "Заявка с сайта Форма обратной связи ajax"; //Сообщение
$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n"; 
$headers .= "From: test.ru <test.ru>\r\n"; 

$name = trim($_POST["name"]);
$mail = trim($_POST["email"]);
$phone = trim($_POST["tel"]);
$company = trim($_POST["company"]); //Поля
$comp = trim($_POST["compQnty"]);
$serv = trim($_POST["servQnty"]);
$iptel = trim($_POST["ipQnty"]);
$total = trim($_POST["totalQnty"]);

// $message = "Имя: $name <br/> Телефон: $phone <br/> Сообщение: $company <br/> Сообщение: $mail <br/> Сообщение: $serv <br/> Сообщение: $comp <br/> Сообщение: $iptel <br/> Сообщение: $total";
$message ="<table>

<tr>
  <td>Имя</td>
  <td><b>$name</b></td>
  </tr>
  <tr>
  <td>Почта</td>
  <td>$mail</td>
  </tr>
  <tr>
  <td>Телефон</td>
  <td>$phone</td>
  </tr>
  <tr>
  <td>Компания</td>
  <td>$company</td>
  </tr>
  <tr>
  <td>Кол-во компьютеров</td>
  <td>$comp</td>
  </tr>
  <tr>
  <td>Кол-во серверов</td>
  <td>$serv</td>
  </tr>
  <tr>
  <td>Ip-телефония</td>
  <td>$iptel</td>
  </tr>
  <tr>
  <td>Сумма</td>
  <td>$total</td>
</tr>
</table>";
mail($recepient, $subject, $message, $headers); ?>
