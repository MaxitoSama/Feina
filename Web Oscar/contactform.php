<?php
	$name=$_POST['name'];
	$mailFrom=$_POST['mail'];
	$message=$_POST['message'];

	$subject='Contactar con Drassen';

	$mailTo="marc.garcia.u@gmail.com";
	$headers="From: ".$mailFrom;
	$txt="You have Received an e-mail from ".$name.".\n\n".$message;

	mail($mailTo,$subject,$txt,$headers);
	header("Location: Contacta.html");
?>