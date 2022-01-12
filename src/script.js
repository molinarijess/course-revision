function displayTemperature() {
  let city = prompt("What city are you in?");
  let temperature = prompt("What's the current temperature?");
  let emoji = document.querySelector("h1");

  if (temperature > 0) {
    emoji.innerHTML = `☀️ <div class="title"> Currently ${temperature}º in ${city}</div>`;
  } else {
    if (city.length === 0 || temperature.length === 0) {
      emoji.innerHTML = `🌤
        <div class="title">Currently 21º in Tokyo</div>`;
    } else {
      emoji.innerHTML = `❄️ <div class="title"> Currently ${temperature}º in ${city}</div>`;
    }
  }
}

let searchCityButton = document.querySelector("button");
searchCityButton.addEventListener("click", displayTemperature);
