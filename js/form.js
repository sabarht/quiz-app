const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formElements = e.target.elements;
  const question = formElements.question.value;
  const answer = formElements.answer.value;
  const tag = formElements.tag.value;

  const section = document.querySelector('[data-js="card-section"]');

  const article = document.createElement("article");

  article.className = "question-card";
  article.innerHTML = `
  <p class="question">${question}</p>
  <p >${answer}</p>
  <ul class="category-tags">
  <li>${tag}</li>
  </ul>
  `;
  section.append(article);

  form.reset();
});

const questionChars = document.querySelector('[ data-js="question-chars"]');
form.addEventListener("input", () => {
  const questionTextarea = document.querySelector(
    '[ data-js="question-input"]'
  );

  const remainingChars = 150 - questionTextarea.value.length;
  const message1 = `${remainingChars} characters left`;
  questionChars.innerText = message1;
});
