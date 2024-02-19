<?php
if (isset($_GET['action']) && $_GET['action'] === 'new_image') {
    // Generate a new random image URL using your preferred method
    $imageUrl = "https://picsum.photos/id/83/1200/800" . rand(N, 3);
    echo json_encode(['imageUrl' => $imageUrl]);
    // Make sure to exit the script after sending JSON response
    exit;
} else {
    // Handle normal image display with current number
    $imageUrl = "https://picsum.photos/1200/800?random=" . rand();
}
?>
<div class="img-container">
    <img id="image-iframe" src="<?php echo $imageUrl; ?>" alt="Random Image" download>
</div>
<script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
<script>
    $( document ).ready(function() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const img = urlParams.get('img');

        if(img == "New") {
            const imageIframe = document.getElementById("image-iframe");
            
            // Get the image URL from the iframe
            const imageSrc = imageIframe.src;
            console.log(imageSrc);

            // Construct the URL for download.php with the image URL as a query parameter
            const downloadUrl = "download.php?imageUrl=" + encodeURIComponent(imageSrc);

            // Initiate the download by redirecting to download.php
            window.location.href = downloadUrl;
        }
    });
</script>
