<?php
// if(isset($_GET['imageUrl'])) {
//     $imageUrl = $_GET['imageUrl']; // Get the image URL from the query string
    
//     // Set content type based on the image file type
//     $imageInfo = getimagesize($imageUrl);
//     if($imageInfo && isset($imageInfo['mime'])) {
//         header('Content-Type: ' . $imageInfo['mime']);
//     } else {
//         // Set a default content type if mime type detection fails
//         header('Content-Type: image/jpeg');
//     }

//     // Optional: Set suggested filename (uncomment if desired)
//     header('Content-Disposition: attachment; filename="downloaded_image.jpg"');

//     // Output the image content
//     readfile($imageUrl);

//     header("Location: http://localhost/Mijn_eigen_shit/uitprobeerGit/uitprobeersels/random-img/");
// } else {
//     echo "Error: Image URL not provided.";
// }
?>

<?php
if(isset($_GET['imageUrl'])) {
    $imageUrl = $_GET['imageUrl']; // Get the image URL from the query string

    // Fetch the image content
    $imageContent = file_get_contents($imageUrl);

    if ($imageContent !== false) {
        // Set content type based on the image file type (assuming it's always jpeg)
        header('Content-Type: image/jpeg');

        // Output the image content
        echo $imageContent;
    } else {
        echo "Error: Failed to fetch image content.";
    }
} else {
    echo "Error: Image URL not provided.";
}
?>
