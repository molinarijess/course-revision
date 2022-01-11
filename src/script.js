let country = prompt("What country are you from?");
country = country.toLowerCase();
country = country.trim();
country = country.replace("brasil", "brazil");

if (country === "portugal" || country === "brazil") {
  alert("You speak Portuguese");
} else {
  alert("You don't speak Portuguese");
}
