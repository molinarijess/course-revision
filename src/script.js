function personalInfo() {
  let name = prompt("What's your name?");
  let age = prompt("How old are you?");
  let h1 = document.querySelector("h1");
  if (age >= 18) {
    h1.innerHTML = `Hi, ${name}! Welcome to SheCodes!`;
  } else {
    h1.innerHTML = `Sorry, ${name}. You cannot join SheCodes`;
  }
}

let searchButton = document.querySelector("button");
searchButton.addEventListener("click", personalInfo);
