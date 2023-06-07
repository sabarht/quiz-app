const bookmarkButton = document.querySelectorAll(".card-bookmark");
console.log(bookmarkButton);

bookmarkButton.forEach((eachButton) => {
  eachButton.addEventListener("click", () => {
    eachButton.classList.toggle("bookmarked");
  });
});

const answerButton = document.querySelector('[data-js="answer-button"]');
const answerElement = document.querySelector('[data-js="answer"]');

answerButton.addEventListener("click", toggleButton);

function toggleButton() {
  if (answerElement.classList.contains("answer-element-hidden")) {
    answerElement.classList.remove("answer-element-hidden");
    answerButton.innerHTML = "Hide Answer";
  } else {
    answerElement.classList.add("answer-element-hidden");
    answerButton.innerHTML = "Show Answer";
  }
}
