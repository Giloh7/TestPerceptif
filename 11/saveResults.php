<?php
$txt = $_POST['nameId'];
$syntax = $_POST['syntax'];
$attractive = $_POST['attractive'];
$song = $_POST['activeSong'];

$file = 'result/' .$txt. ".txt";

file_put_contents($file, "active song = ". $song . ";\n", FILE_APPEND | LOCK_EX);
file_put_contents($file, "syntax = ". $syntax . ";\n", FILE_APPEND | LOCK_EX);
file_put_contents($file, "attractive = ". $attractive . ";\n", FILE_APPEND | LOCK_EX);
file_put_contents($file, $rep, FILE_APPEND | LOCK_EX);
// $myfile = fopen('result/' .$txt. ".txt", "w") or die("Unable to open file!");
// fwrite($myfile, $txt);
// fclose($myfile);
?>
