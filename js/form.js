// const submitButton = document.querySelector('[data-js="submitForm"]');
const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formElements = e.target.elements;

  const question = formElements.question.value;
  const answer = formElements.answer.value;
  const tag = formElements.tag.value;

  const section = document.querySelector('[data-js="card-section"]');
  const answerCharCount = 150 - answer.length;
  const questionCharCount = 150 - question.length;

  const article = document.createElement("article");

  article.className = "question-card";
  article.innerHTML = `
    <p class="question">${question}</p>
    <p class="subtitle">there are ${questionCharCount} characters left</p>
            <button class="card-bookmark">
              <span class="material-symbols-outlined"> bookmark </span>
            </button>
            <button class="show-answer " data-js="answer-button">Show answer</button>
            <p >${answer}</p>
            <p class="subtitle" >there are ${answerCharCount} characters left</p>
            <ul class="category-tags">

              <li>${tag}</li>
            </ul>
    `;

  section.append(article);
  form.reset();
});
