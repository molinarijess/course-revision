function contactButton() {
  let name = prompt("Hello, What's your name?");
  let email = prompt("We'll contact you by email, drop it below");
  name = name.trim();
  name = name.toLocaleLowerCase();

  if (email.length === 0 || name.length === 0) {
    alert("Please, compleate everything to receive new contents");
  } else {
    document.body.onload;
    const ul = document.getElementById("process");
    const newLi = document.createElement("li");
    const newH3 = document.createElement("h3");
    const newContent = document.createTextNode(
      `Thank you ${name}, you'll receive an email shortly!`
    );
    ul.prepend(newLi);
    newLi.appendChild(newH3);
    newH3.appendChild(newContent);
  }
}

let contactUs = document.querySelector("button");
contactUs.addEventListener("click", contactButton);
