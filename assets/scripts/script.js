const themeToggle = document.getElementById('themeToggle');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');
const body = document.body;

// Store theme in memory instead of localStorage
let isDark = false;

function applyTheme() {
  if (isDark) {
    body.classList.add('dark-mode');
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
  } else {
    body.classList.remove('dark-mode');
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
  }
}

// Apply theme on page load
applyTheme();

themeToggle.addEventListener('click', () => {
  isDark = !isDark;
  applyTheme();
});

const resumeButton = document.querySelector('.resume');
resumeButton.addEventListener('click', () => {
  window.open('https://drive.google.com/file/d/1zaLl7CHhg6JJvxF_o8y6SwrzDc7ZpP4n/view?usp=sharing', '_blank');
});