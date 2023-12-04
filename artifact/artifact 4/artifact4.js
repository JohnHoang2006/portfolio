//Created by Pratima Suneel

var myImages =[ "yui.png",
              "VRC.png",
               "happy.png",
               "sad.jpg",
			      "web.jpg",]

var captionImages =["Laugh", "Love", "Lunch", "Dance", "Happy", "Sad"]; 

var index = 0; 

var nextButton = document.getElementById("next"); 

var previousButton = document.getElementById("previous");  

//
// Event handler for next button
// Called by the EventListener on the click event of the next button
//
function next() {

  if (myImages.length == index+1) {  // Are we at the end of our image array?
     index = 0;                      // If so, wrap around to the beginning of the array
  } else {
     index++;                        // else, move ahead
  }
  
  updateImage();                     // We have a new index, so update the image
  
} 

//
// Event handler for back button
// Called by the EventListener on the click event of the previous button
//
function back() {

   if (index == 0) {
      index = myImages.length - 1; // Wrap around to the end of the array;
   } else {
      index--;
   }
   
   updateImage();
   
 } 
  //TODO work for you!

//
// Function to update the image with the current index value.
// This functiob updates the src, alt and text content corresponding to the
// current index value by looking up the elements in the image and
// captureImages array
//
function updateImage() {

   document.getElementById("slideshow").src = myImages[index];
   document.getElementById("slideshow").alt= captionImages[index];
   document.getElementById("caption").textContent = captionImages[index];
   
}

//
// Function to run an automatic image change.
// This is called on a timer every 2 secs
//
function autoSlide() {

  if (document.getElementById("auto").checked) {
     next(); 
  }   
  
}

setInterval(autoSlide, 2000); // Timer to run every 2 secs: Function to run is autoSlide()
                             // i.e. Run autoSlide() every 2 secs


nextButton.addEventListener("click", next, false); // Add an event listener for the next button
                                                   // First argument: click indicates the click event
                                                   // Second argument: next indicates the function to call when button is clicked
                                                   // Third argument: false indicates bubbling up of events

previousButton.addEventListener("click", back, false); // Add an event listener for the previous button
                                                       // First argument: click indicates the click event
                                                       // Second argument: next indicates the function to call when button is clicked
                                                       // Third argument: false indicates bubbling up of events

