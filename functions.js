darkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    darkModeButton.textContent = 'Light Mode';
  } else {
    darkModeButton.textContent = 'Dark Mode';
  }
})