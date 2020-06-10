console.log("Something");

// DEFINE VARIABLES
var buttonRightEl = document.getElementById("button-right");
var buttonLeftEl = document.getElementById("button-left");
var featuredEl = document.getElementById("featured");

var currentImageIndex = 0;

var arrayOfPeople = [
  {
    imageUrl:
      "https://i.pinimg.com/originals/9d/8c/af/9d8cafe01b6cbb93f27bf7ce1c6ee79d.jpg",
    name: "Hitchcock",
    quote:
      "Snapchat messages disappear. You can send anything to anybody, and after they see it, it's like I never sent it.",
  },
  {
    imageUrl:
      "https://i.pinimg.com/originals/be/a3/f0/bea3f078684fdc167e9d061fd97d73fa.jpg",
    name: "Rosa",
    quote: "Something Rosa would say.",
  },
  {
    imageUrl:
      "https://i.pinimg.com/originals/19/dd/11/19dd1100d8b578d052748eca30fa824a.jpg",
    name: "Scully",
    quote: "Someothing Scully",
  },
];

// DEFINE FUNCTIONS
// function setFeaturedImage() {
//   // Use DOM Manipulation to take an image and put it on the page.
//   document
//     .getElementById("featured-image")
//     .setAttribute("src", arrayOfPeople[currentImageIndex].imageUrl);
// }

// function setFeaturedName() {
//   document.getElementById("featured-name").textContent =
//     arrayOfPeople[currentImageIndex].name;
// }

/**
 * setFeatured dynamically generates a new yearbook profile on the page, based on the index of the people array.
 */
function setFeatured() {
  var currentPerson = arrayOfPeople[currentImageIndex];
  // Clear out the innerHTML to remove previous person.
  featuredEl.innerHTML = "";
  // Create an image element.
  var imageEl = document.createElement("img");
  imageEl.setAttribute("src", currentPerson.imageUrl);
  imageEl.setAttribute("id", "featured-image");
  // Create an h3 for the name.
  var nameEl = document.createElement("h3");
  nameEl.textContent = currentPerson.name;
  // Create a paragraph for the quote.
  var quoteEl = document.createElement("p");
  quoteEl.textContent = currentPerson.quote;
  var buttonEl = document.createElement("button");
  buttonEl.textContent = "Add to friends";
  // Append new elements to the DOM.
  featuredEl.append(imageEl);
  featuredEl.append(nameEl);
  featuredEl.append(quoteEl);
  featuredEl.append(buttonEl);
}

// FUNCTION CALLS
// setFeaturedImage();
// setFeaturedName();
setFeatured();

// EVENT LISTENERS

featuredEl.addEventListener("click", function(event) {
    console.log("You clicked the parent element");
    if(event.target.matches("button")){
        console.log("You actually clicked the button");
    }
})


buttonRightEl.addEventListener("click", function () {
  // console.log("You clicked the right button");
  // 1. Increment the current index
  // console.log(currentImageIndex);
  currentImageIndex++;
  // console.log(currentImageIndex);
  // 2. Call the setFeaturedImage function
  //   setFeaturedImage();
  //   setFeaturedName();
  setFeatured();
});

buttonLeftEl.addEventListener("click", function () {
  currentImageIndex--;
  //   setFeaturedImage();
  //   setFeaturedName();
  setFeatured();
});
