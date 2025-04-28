<?php
// Set the dimensions for the image
$imageWidth = 300;
$imageHeight = 150;

// Create a blank image with the given dimensions
$image = imagecreatetruecolor($imageWidth, $imageHeight);

// Set colors
$backgroundColor = imagecolorallocate($image, 255, 255, 255); // White background
$squareColor1 = imagecolorallocate($image, 255, 0, 0); // Red square
$squareColor2 = imagecolorallocate($image, 0, 0, 255); // Blue square

// Fill the background with white color
imagefill($image, 0, 0, $backgroundColor);

// Draw the first square (Red)
$squareSize = 100;
imagefilledrectangle($image, 50, 25, 50 + $squareSize, 25 + $squareSize, $squareColor1);

// Draw the second square (Blue)
imagefilledrectangle($image, 50 + $squareSize + 20, 25, 50 + $squareSize + 20 + $squareSize, 25 + $squareSize, $squareColor2);

// Set the Content-Type header so the browser knows how to display the image
header('Content-Type: image/png');

// Output the image to the browser as PNG
imagepng($image);

// Free the memory used by the image
imagedestroy($image);
?>
