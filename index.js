// Show more - Show Less Button
const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text"); //text is the breakup

readMoreBtn.addEventListener("click", (e) => {
  // I want to listen to an event, which is the click event (e) and I want to run this function
  // toggle = the process of dynamically adding or removing a CSS class from an HTML element
  text.classList.toggle("show-more"); //this class will toggle in our text - in the inspector in elements the class is changing - now CSS - inline - /* with a click on the btn the text will now expand/ increase
  if (readMoreBtn.innerText === "Continue Reading") {
    readMoreBtn.innerText = "Read Less";
  } else {
    readMoreBtn.innerText = "Continue Reading";
  }
});
// If condition: with the click it will check for the read more text. if it is equal to "read more" it will change it to "read less".
// when i click again and it is not equal to "read more" it goes to else and changing it to "read more".

// https://www.youtube.com/watch?v=TvVY8c1uvG8 -> VIDEO FOR THE SHOW MORE / SHOW LESS BUTTON
