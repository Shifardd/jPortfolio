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
  window.open('https://docs.google.com/document/d/16z6p2y4TegMceGIsjIKMaU7Qpc62AcEs03TRGw7zr0Y/edit?usp=sharing', '_blank');
});


const icon = document.getElementById('cursor-icon');

let iconX = 0, iconY = 0;
let mouseX = 0, mouseY = 0;
const speed = 6; // Constant pixels per frame

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  const dx = mouseX - iconX;
  const dy = mouseY - iconY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance > speed) {
    // 1. Move the icon
    iconX += (dx / distance) * speed;
    iconY += (dy / distance) * speed;

    // 2. Check direction for flipping (Left vs Right)
    // We use scaleX(-1) to flip without turning upside down
    const flip = dx < 0 ? -1 : 1;

    // 3. Apply position and flip
    icon.style.transform = `translate(${iconX - 50}px, ${iconY + 50}px) scaleX(${flip})`;
    
    // Optional: Add a CSS class to trigger a "bobbing" animation only when moving
    icon.style.animation = "walking-bounce 0.2s infinite alternate";
  } else {
    // When stopped, remove the bounce animation so it looks "still"
    icon.style.animation = "none";
  }

  requestAnimationFrame(animate);
}

// Add the "walking" bounce to your CSS via JS or in your <style> tag
const style = document.createElement('style');
style.innerHTML = `
  @keyframes walking-bounce {
    from { margin-top: 0px; }
    to { margin-top: -4px; }
  }
`;
document.head.appendChild(style);

animate();