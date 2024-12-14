darkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    darkModeButton.textContent = 'Light Mode';
  } else {
    darkModeButton.textContent = 'Dark Mode';
  }
})
// Scroll-to-Top Button Logic
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopButton = document.getElementById("scrollupbutton");
  
  // Show or hide the button based on scroll position
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });

  // Smooth scroll to the top on button click
  scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});