window.onload = function() {
  // Get username from localStorage or prompt for it if not available
  let username = localStorage.getItem("username");
  if (!username) {
    username = prompt("Enter your username:");
    localStorage.setItem("username", username);
  }
  displayUser();
};

function displayUser() {
  const userInfo = document.getElementById("user-info");
  const username = localStorage.getItem("username");
  if (username) {
    userInfo.innerHTML = `
      👋 <strong>${username}</strong>
      <button onclick="showScoreboard()" style="margin-left:10px;">Scoreboard</button>
    `;
  }
}

function showScoreboard() {
  alert("Scoreboard for " + localStorage.getItem("username"));
  // You can open a new page or modal here, for example:
  // window.location.href = "scoreboard.html";
}

// Adding mousemove event listener for project cards
const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--y', `${e.clientY - rect.top}px`);
  });
});

// Smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

 
cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--y', `${e.clientY - rect.top}px`);
  });
});



window.onload = function() {
  let username = localStorage.getItem("username");
  if (!username) {
    username = prompt("Enter your username:");
    localStorage.setItem("username", username);
  }
  displayUser();
};

function displayUser() {
  const userInfo = document.getElementById("user-info");
  const username = localStorage.getItem("username");
  if (username) {
    userInfo.innerHTML = `
      👋 <strong>${username}</strong>
      <button onclick="showScoreboard()" style="margin-left:10px;">Scoreboard</button>
    `;
  }
}

function showScoreboard() {
  alert("Scoreboard for " + localStorage.getItem("username"));
  // Yahan tu scoreboard.html ya modal open kar sakta hai
}

function showScore() {
  let finalScore = 0;
  selectedAnswers.forEach((ans, index) => {
    if (ans === questions[index].correct) {
      finalScore++;
    }
  });
  window.location.href = `scoreboard.html?score=${finalScore}`;
}


window.location.href = 'scoreboard.html?score=' + score;
