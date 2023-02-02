const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");
const other_mode = document.getElementById("other_mode");

//Dark or Light images:
function imageMode(mode) {
  image1.src = `img/${mode}/undraw_conceptual_idea_${mode}.svg`;
  image2.src = `img/${mode}/undraw_feeling_proud_${mode}.svg`;
  image3.src = `img/${mode}/undraw_proud_coder_${mode}.svg`;
}

function toggleDarkMode(themeMode) {
  nav.style.backgroundColor =
    themeMode == "dark" ? "rgb (0 0 0 / 50%)" : themeMode == "light"?  "rgb(255 255 255 / 50%)": 
   "rgb (0 0 0 / 25%)";
  textBox.style.backgroundColor =
    themeMode == "dark" ? "rgb(255 255 255 / 50%)" : themeMode == "light"? "rgb(0 0 0 / 50%)":
    "rgb (0 0 0 / 25%)";
  toggleIcon.children[0].textContent =
    themeMode == "dark" ? "Dark Mode" : themeMode == "light" ? "Light Mode" : 
    "Other Mode"
  themeMode == "dark" ? (toggleIcon.children[1].classList.remove("fa-sun"),
  toggleIcon.children[1].classList.add("fa-moon"))
    : themeMode == "light" ? (toggleIcon.children[1].classList.remove("fa-moon"),
    toggleIcon.children[1].classList.add("fa-sun")): 
    toggleIcon.children[1].classList.remove("fa-moon","fa-sun");
    toggleIcon.children[1].classList.add("fa-fill-drip")
   themeMode == "dark" ? imageMode("dark") : themeMode == "light" ? imageMode("light") : 
   imageMode("other")
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleDarkMode("dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    toggleDarkMode("light");
  }
}

//Change other Mode:
function changeOtherMode(event) {
  document.documentElement.setAttribute("data-theme", "other");
  localStorage.setItem("theme", "other");
  toggleDarkMode("other");
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

other_mode.addEventListener("click", changeOtherMode);

//  Check Local Storage For Theme

const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    toggleDarkMode('dark');
  }
  else if (currentTheme === "light") {
    toggleSwitch.checked = false;
    toggleDarkMode('light');
  }
 else {
    toggleSwitch.checked = false;
    toggleDarkMode('other');
  }
}
