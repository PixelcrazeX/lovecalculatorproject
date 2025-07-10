function calculateLove() {
  const name1 = document.getElementById("yourName").value.trim();
  const name2 = document.getElementById("crushName").value.trim();

  if (!name1 || !name2) {
    alert("Please enter both names!");
    return;
  }

  let loveScore = Math.floor(Math.random() * 100) + 1;
  let message = `${name1} ❤️ ${name2} = ${loveScore}%`;

  if (loveScore > 80) {
    message += "\nPerfect Match! 💍🌹";
  } else if (loveScore > 50) {
    message += "\nNice Bond! Keep loving 💕";
  } else {
    message += "\nTry to understand each other more 🫂";
  }

  document.getElementById("resultText").innerText = message;
}