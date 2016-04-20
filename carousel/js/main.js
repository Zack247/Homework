// Create an array of image paths
var images = ["images/image_1.jpg", "images/image_2.jpg", "images/image_3.jpg", "images/image_4.jpg", "images/image_5.jpg", "images/image_6.jpg"];
// set a variable for our currentPosition
var currentPosition = 0;
// var lastImage = images[images.length - 1];

// When the user clicks on the next button
$('#next').on('click', function () {
    currentPosition = currentPosition + 1;
    console.log(currentPosition)
    console.log("HELLO", images[currentPosition])
    $('#image-to-vote-on').attr('src', images[currentPosition] );









    // add one to the currentPosition
    // if ( (currentPosition) < (lastImage) ) {
    // 	images = currentPosition;
    // }
    // // Change the src of #image-to-vote-on to image at that index
    // $('#image-to-vote-on').attr('src', 'images', 'currentPosition' )
    // // // if currentPosition is the last index
    // if (currentPosition) {
    // 	currentPosition === [5];
    // // 	 // Disable the next button
    // 	document.getElementById('next').disabled = true;
    // }
    // Disable the next button
});
// When the user clicks on the previous button







// other trys //



// // When the user clicks on the next button
// $('#next').on('click', function () {
//     // add one to the currentPosition
    currentPosition = [currentPosition + 1 ];
    
//     // Change the src of #image-to-vote-on to image at that index
//     $('#image-to-vote-on').attr('src', 'images', 'currentPosition' )
//     // if currentPosition is the last index
//     if (currentPosition) {
//     	currentPosition === [5];
//     	 // Disable the next button
//     	document.getElementById('next').disabled = true;
//     }
//     // Disable the next button
// });
// // When the user clicks on the previous button














