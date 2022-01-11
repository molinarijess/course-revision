let currentHour = prompt("What time is it?");
if (currentHour < 12) {
  alert("Good Morning");
} else {
  if (currentHour > 18) {
    alert("Good Evening");
  } else {
    alert("Good Afternoon");
  }
}
