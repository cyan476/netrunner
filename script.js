document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('start-btn');
  const startMenu = document.getElementById('start-menu');

  startBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    startMenu.classList.toggle('hidden');
  });

  document.addEventListener('click', (e) => {
    if (!startMenu.contains(e.target) && !startBtn.contains(e.target)) {
      startMenu.classList.add('hidden');
    }
  });

  const appItems = document.querySelectorAll('.app-item');
  appItems.forEach(item => {
    item.addEventListener('click', () => {
      const appName = item.getAttribute('data-app');
      console.log(`Launching app: ${appName}`);
      startMenu.classList.add('hidden');
    });
  });
});