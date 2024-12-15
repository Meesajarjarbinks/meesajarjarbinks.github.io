darkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    darkModeButton.textContent = 'Light Mode';
  } else {
    darkModeButton.textContent = 'Dark Mode';
  }
})
// Slinkimo į viršų mygtukas
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopButton = document.getElementById("scrollupbutton");
  
  // mygtuko slėpimas
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });

  // malonus perėjimas
  scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
// Funkcija, kuri gauna dabartinį laiką ir paverčia jį į formatą vv:mm:ss
function updateClock() {
  // Gaukite dabartinį laiką
  const now = new Date();

  // Suformuokite valandas, minutes ir sekundes
  const hours = String(now.getHours()).padStart(2, '0'); // Dviejų skaitmenų valandos
  const minutes = String(now.getMinutes()).padStart(2, '0'); // Dviejų skaitmenų minutės
  const seconds = String(now.getSeconds()).padStart(2, '0'); // Dviejų skaitmenų sekundės

  // Paverskite laiką į formatą hh:mm:ss
  const timeString = `${hours}:${minutes}:${seconds}`;

  // Raskite laikrodžio elementą HTML faile
  const clockElement = document.getElementById('Resumetext');

  // Atnaujinkite laikrodžio tekstą
  clockElement.textContent = timeString;
}

// Nustatykite, kad funkcija būtų vykdoma kas sekundę
setInterval(updateClock, 1000);

// Inicialiai atnaujinkite laikrodį, kad nereikėtų laukti pirmos sekundės
updateClock();