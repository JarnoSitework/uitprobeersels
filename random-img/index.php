<?php
  session_start(); // Start a session to store the number

  if (!isset($_SESSION['number'])) {
    $_SESSION['number'] = 1; // Initialize number if not set
  }

  $number = $_SESSION['number'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Picture</title>
    <link rel="shortcut icon" href="https://picsum.photos/1200/800?random=1" type="image/x-icon">
    <!-- CSS only -->
    <style>
        body {
            background: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
            overflow:hidden;
            width: 100vw;
            height: 100vh;
        }
        .img-container {
            overflow:hidden;
            position:relative;
            height:100%;
            width:100%;
        }
        #image-iframe {
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%, -50%);
            width:95%;
            height:95%;
            object-fit:contain;
        }
        #download-button {
            position: absolute;
            right: 10px;
            bottom: 10px;
        }
        #reload-button {
            position: absolute;
            right: 10px;
            bottom: 50px;
        }
    </style>
</head>
<body>
    <!-- https://picsum.photos/1200/800?random=1 -->
    <div class="img-container">
        <a href="#">
            <img id="image-iframe" src="https://picsum.photos/1200/800" alt="Random Image">
        </a>
    </div>
    <button id="reload-button">Reload</button>

    <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
    <script>
    const incrementButton = document.getElementById("reload-button");

    incrementButton.addEventListener("click", () => {
        window.location.reload();
        // let imageElement = document.getElementById("image-iframe"); // Get the image element
        // let imageUrl = imageElement.src; // Extract the image URL from the src attribute
        // console.log(imageUrl); 
        // window.open(imageUrl, "_blank"); // Opens the image in a new tab

    });
    // function openImageInNewTab(event) {
    //     let imageUrl = event.target.src;
    //     window.open(imageUrl, "_blank");
    // }

    </script>
</body>
</html>