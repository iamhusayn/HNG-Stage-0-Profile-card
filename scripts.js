setInterval(setTime, 1000);

function setTime() {
  const increase = new Date();
  document.getElementById("utctime").innerHTML = increase.toLocaleTimeString();
}