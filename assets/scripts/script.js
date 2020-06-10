console.log("Something");

// DEFINE VARIABLES
var buttonRightEl = document.getElementById("button-right");

var currentImageIndex = 0;
var arrayOfImages = [
  "https://i.pinimg.com/originals/9d/8c/af/9d8cafe01b6cbb93f27bf7ce1c6ee79d.jpg",
  "https://i.pinimg.com/originals/be/a3/f0/bea3f078684fdc167e9d061fd97d73fa.jpg",
  "https://i.pinimg.com/originals/19/dd/11/19dd1100d8b578d052748eca30fa824a.jpg",
];

// DEFINE FUNCTIONS
function setFeaturedImage() {
  // Use DOM Manipulation to take an image and put it on the page.
  document
    .getElementById("featured-image")
    .setAttribute("src", arrayOfImages[currentImageIndex]);
}

// FUNCTION CALLS
setFeaturedImage();

// EVENT LISTENERS
buttonRightEl.addEventListener("click", function(){
    // console.log("You clicked the right button");
    // 1. Increment the current index
    // console.log(currentImageIndex);
    currentImageIndex++;
    // console.log(currentImageIndex);
    // 2. Call the setFeaturedImage function
    setFeaturedImage();
})