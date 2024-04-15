const textareas = document.querySelectorAll("textarea");
const charCounts = document.querySelectorAll("[data-js^='charCount']");

textareas.forEach(function (textarea, index) {
  const charCount = charCounts[index];

  // Funktion zum Zählen der verbleibenden Zeichen
  function countCharacters() {
    const remainingChars = 150 - textarea.value.length;
    charCount.textContent = remainingChars;
  }

  // Eventlistener für Tastatureingabe und Einfügen von Text
  textarea.addEventListener("input", countCharacters);

  // Initialen Aufruf, um den Zähler zu aktualisieren
  countCharacters();
});
