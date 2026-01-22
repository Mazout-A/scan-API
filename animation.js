const mots = ["Choisis", "Scanne", "Teste", "Maîtrise"];
let motIndex = 0;
let lettreIndex = 0;
let isDeleting = false;
//-------------------------------------------------//
//-------------------Variable ID-------------------//
//-------------------------------------------------//
const dynamique = document.getElementById("dynamic-word");
//-------------------------------------------------//
//------------Function machienAEcrire--------------//
//-------------------------------------------------//
const typeEffect = () => {
  const currentWord = mots[motIndex];
  let typeSpeed = 150;

  if (isDeleting) {
    lettreIndex--;
    typeSpeed = 75;
  } else {
    lettreIndex++;
  }

  dynamique.textContent = currentWord.slice(0, lettreIndex);

  if (isDeleting === false && lettreIndex === currentWord.length) {
    isDeleting = true;
    typeSpeed = 2000;
  } else if (isDeleting === true && lettreIndex === 0) {
    isDeleting = false;
    motIndex++;
    typeSpeed = 500;
  }

  if (motIndex === mots.length) {
    motIndex = 0;
  }

  setTimeout(typeEffect, typeSpeed);
};
typeEffect();
//-------------------------------------------------//
//-----------------ajout class btn-----------------//
//-------------------------------------------------//
const rond = document.getElementById("btn1");

rond.addEventListener("click", () => {
  rond.classList.toggle("btn1");
});
//-------------------------------------------------//
//-faire apparaitre un texte en enlevant la class--//
//-------------------------------------------------//
const boutton = document.getElementById("btn2");
const text = document.getElementById("i");

boutton.addEventListener("click", () => {
  text.classList.toggle("i");
});
//-------------------------------------------------//
//-----prend texte dans input mettre dans le p-----//
//-------------------------------------------------//
const perroquet = document.getElementById("input-perroquet");
const paragraphe = document.getElementById("texte-perroquet");

perroquet.addEventListener("input", () => {
  paragraphe.textContent = perroquet.value;
});
