// TODO: Add toggle-functions to created card!

const form = document.querySelector('[data-js="form"]');
const cardsContainer = document.querySelector("main");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Read data from input fields
  const question = document.getElementById("question").value;
  const answer = document.getElementById("answer").value;
  const tag = document.getElementById("tag").value.split(",");

  // Generate DOM elements for card
  const card = document.createElement("section");
  card.classList.add("card");

  const bookmarkElement = document.createElement("label");
  bookmarkElement.classList.add("bookmark");
  bookmarkElement.setAttribute("data-js", "bookmark");
  bookmarkElement.setAttribute("aria-label", "Bookmark");
  card.appendChild(bookmarkElement);

  const questionElement = document.createElement("h2");
  questionElement.classList.add("question");
  questionElement.textContent = question;
  card.appendChild(questionElement);

  const submitButton = document.createElement("button");
  submitButton.textContent = "Show";
  card.appendChild(submitButton);

  const answerElement = document.createElement("p");
  answerElement.classList.add("answer", "hidden");
  answerElement.textContent = answer;
  card.appendChild(answerElement);

  const tagElementList = document.createElement("ul");
  tagElementList.classList.add("categories");
  const tagElementLi = document.createElement("li");
  tagElementLi.textContent = "#" + tag;
  card.appendChild(tagElementList);

  // Loop through input values
  tag.forEach(function (value) {
    // Remove leading/trailing whitespace
    const trimmedValue = "#" + value.trim();

    if (trimmedValue) {
      // Create new list item
      const listItem = document.createElement("li");
      listItem.textContent = trimmedValue;

      // Append list item to output list
      tagElementList.appendChild(listItem);
    }
  });

  // Append card to the page
  cardsContainer.appendChild(card);

  // Clear input fields
  document.getElementById("question").value = "";
  document.getElementById("answer").value = "";
  document.getElementById("tag").value = "";
});
