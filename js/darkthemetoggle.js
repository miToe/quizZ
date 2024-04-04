// // Überprüfen, ob der Wert im Web Storage bereits vorhanden ist
// if (localStorage.getItem("darkmode") === "1") {
//   document.body.classList.add("darkside"); // Füge die Klasse hinzu, um die Seite zu markieren
//   document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("darkmode").checked = true;
//   });
// }

// // Setze den Status der Checkbox basierend auf dem Wert im Web Storage
// document.addEventListener("DOMContentLoaded", function () {
//   if (localStorage.getItem("darkmode") === "1") {
//     document.getElementById("darkmode").checked = true;
//   }
// });

// // Event-Listener für die Checkbox
// document.getElementById("darkmode").addEventListener("change", function () {
//   if (this.checked) {
//     // Wenn die Checkbox aktiviert ist, setze den Wert im Web Storage auf 1
//     localStorage.setItem("darkmode", "1");
//     document.body.classList.add("darkside"); // Füge die Klasse hinzu, um die Seite zu markieren
//   } else {
//     // Wenn die Checkbox deaktiviert ist, entferne den Wert aus dem Web Storage
//     localStorage.removeItem("darkmode");
//     document.body.classList.remove("darkside"); // Entferne die Klasse, um die Seite zu markieren
//   }
// });

const toggle = document.querySelector("[data-js=darkmode]");

let storedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");
if (storedTheme)
  document.documentElement.setAttribute("data-theme", storedTheme);

if (storedTheme === "dark") toggle.checked = true;

toggle.onclick = () => {
  let currentTheme = document.documentElement.getAttribute("data-theme");
  let targetTheme = "light";

  if (currentTheme === "light") {
    targetTheme = "dark";
  }

  document.documentElement.setAttribute("data-theme", targetTheme);
  localStorage.setItem("theme", targetTheme);
};
