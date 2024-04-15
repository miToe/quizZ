const setupBookmarkToggle = () => {
  const bookmarkToggleButtons = document.querySelectorAll(
    '[data-js="bookmark"]'
  );

  bookmarkToggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("active");
    });
  });
};

const setupAnswerToggle = () => {
  const answerToggleButtons = document.querySelectorAll('[data-js="answer"]');

  answerToggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const answerToggle = document.querySelector(
        '[data-js="this-is-the-answer"]'
      );
      if (button.innerHTML === "Show") {
        button.innerHTML = "Hide";
      } else {
        button.innerHTML = "Show";
      }
      button.nextElementSibling.classList.toggle("hide");
    });
  });
};

setupBookmarkToggle();
setupAnswerToggle();
