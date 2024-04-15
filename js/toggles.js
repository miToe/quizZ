// Bookmark it!

const bookmark_toggle = document.querySelectorAll('[data-js="bookmark"]');
console.log("da");

bookmark_toggle.forEach((element) => {
  element.addEventListener("click", () => {
    console.log("yes!");
    element.classList.toggle("active");
  });
});

// Show/Hide Answer

const answer_toggle_button = document.querySelectorAll('[data-js="answer"]');

answer_toggle_button.forEach((element) => {
  element.addEventListener("click", () => {
    const answer_toggle = document.querySelector(
      '[data-js="this-is-the-answer"]'
    );
    console.log("test");
    if (element.innerHTML === "Show") {
      element.innerHTML = "Hide";
    } else {
      element.innerHTML = "Show";
    }
    element.nextElementSibling.classList.toggle("hide");
    console.log("Antwort", answer_toggle);
  });
});
