// Tamsaus rėžimo mygtukas
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

//laikrodžio kodas
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

//Formos kodas
document.getElementById('submitButton').addEventListener('click', function() {
  // Gauti vartotojo įvestus duomenis
  const firstName = document.getElementById('first-name-id').value;
  const lastName = document.getElementById('last-name-id').value;
  const email = document.getElementById('email-id').value;
  const phone = document.getElementById('Phonenumber-id').value;
  const address = document.getElementById('address-id').value;

  // Klausimų vertinimai
  const question1 = Number(document.getElementById('question1').value);
  const question2 = Number(document.getElementById('question2').value);
  const question3 = Number(document.getElementById('question3').value);
  const question4 = Number(document.getElementById('question4').value);
  const question5 = Number(document.getElementById('question5').value);

  // Patikrinimai
  if (!email.includes('@') || !email.includes('.')) {
    alert('Neteisingas el. pašto adresas.');
    return;
  }

  const phonePattern = /^[0-9]{3}[- ]?[0-9]{3}[- ]?[0-9]{5}$/;
  if (!phonePattern.test(phone)) {
    alert('Telefono numeris turi būti formato: 123-456-78901 arba 123 456 78901.');
    return;
  }

  if (address.trim() === '') {
    alert('Adresas negali būti tuščias.');
    return;
  }

  // Sukurti objektą su duomenimis
  const formData = {
    firstName,
    lastName,
    email,
    phone,
    address,
    ratings: {
      design: question1,
      usability: question2,
      content: question3,
      recommendation: question4,
      speed: question5,
    },
  };

  // Apskaičiuoti klausimų vidurkį
  const averageRating = (
    (question1 + question2 + question3 + question4 + question5) / 5
  ).toFixed(2);

  // Išvesti rezultatą į konsolę
  console.log(formData);

  // Išvesti rezultatą tinklapyje
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = ''; // Išvalyti esamus rezultatus

  // Formatuoti išvestį
  resultsDiv.innerHTML += `<div class="result-line"><strong>Vardas:</strong> ${firstName}</div>`;
  resultsDiv.innerHTML += `<div class="result-line"><strong>Pavardė:</strong> ${lastName}</div>`;
  resultsDiv.innerHTML += `<div class="result-line"><strong>El. paštas:</strong> ${email}</div>`;
  resultsDiv.innerHTML += `<div class="result-line"><strong>Telefono numeris:</strong> ${phone}</div>`;
  resultsDiv.innerHTML += `<div class="result-line"><strong>Adresas:</strong> ${address}</div>`;
  resultsDiv.innerHTML += `<div class="result-line"><strong>Kaip vertinate svetainės dizainą:</strong> ${question1}</div>`;
  resultsDiv.innerHTML += `<div class="result-line"><strong>Kaip vertinate svetainės patogumą:</strong> ${question2}</div>`;
  resultsDiv.innerHTML += `<div class="result-line"><strong>Kaip vertinate turinio kokybę:</strong> ${question3}</div>`;
  resultsDiv.innerHTML += `<div class="result-line"><strong>Kaip tikėtina, kad rekomenduosite svetainę draugui:</strong> ${question4}</div>`;
  resultsDiv.innerHTML += `<div class="result-line"><strong>Kaip vertinate svetainės greitį:</strong> ${question5}</div>`;

  // Pridėti vidurkio rezultatą su spalvos nustatymu
  let color;
  if (averageRating <= 4) {
    color = 'red';
  } else if (averageRating <= 7) {
    color = 'orange';
  } else {
    color = 'green';
  }
  resultsDiv.innerHTML += `<div class="result-line" style="color: ${color};"><strong>Vidurkis:</strong> ${firstName} ${lastName} (${email}): ${averageRating}</div>`;
});
