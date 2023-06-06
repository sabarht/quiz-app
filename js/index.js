const bookmarkButton = document.querySelector(".card-bookmark");

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmarked");

  // if (bookmarkButton.classList.contains("bookmarked")) {

  // } else {
  // }
});

const answerButton = document.querySelector('[data-js="answer-button"]');
answerButton.addEventListener("click", () => {
  if (answerButton.innerHTML == "Show answer") {
    answerButton.textContent = "Hide Answer";
  } else {
    answerButton.textContent = "Show answer";
  }
  console.log("answerButton.value");
  console.log(answerButton.innerHTML);
  // answerButton.classList.toggle
});
