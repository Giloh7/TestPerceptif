<?php
$txt = $_POST['nameId'];
$file = 'result/' .$txt. ".txt";
file_put_contents($file, "name = " . $txt . ";\n", FILE_APPEND | LOCK_EX);
// $myfile = fopen('result/' .$txt. ".txt", "w") or die("Unable to open file!");
// fwrite($myfile, $txt);
// fclose($myfile);
?>
