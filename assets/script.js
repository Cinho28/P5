// Sélection des éléments du DOM//

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");
const dotElements = document.querySelectorAll(".dot");
const dotSelected = document.querySelector(".dot_selected");
let actualImage = document.querySelector(".banner-img");
let texteImage = document.querySelector("#banner p");
let currentIndex = 0;



const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//création des dots en fonction du nombre de slides//
slides.forEach(() => {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	dotsContainer.appendChild(dot);
});
updateDots(currentIndex);



//fonction pour changer la slide//
function previousSlide(newIndex) {
		newIndex = currentIndex;
		newIndex--;
		if (newIndex < 0) {
			newIndex = 3;
		}
		currentIndex = newIndex;
		
		actualImage.setAttribute('src', 'assets/images/slideshow/' + slides[currentIndex].image);
		texteImage.innerHTML = slides[currentIndex].tagLine;
		console.log("Index mis à jour :", currentIndex);
		return newIndex
}
function nextSlide(newIndex) {
		newIndex = currentIndex;
		newIndex++;
		if (newIndex > 3) {
			newIndex = 0;
		}
		currentIndex = newIndex;
		actualImage.setAttribute('src', 'assets/images/slideshow/' + slides[currentIndex].image);
		texteImage.innerHTML = slides[currentIndex].tagLine;
		console.log("Index mis à jour :", currentIndex);
		return newIndex
}





function updateDots(currentIndex) {
	const dots = document.querySelectorAll('.dot');
	dots.forEach(dot => dot.classList.remove('dot_selected'));
	dots[currentIndex].classList.add('dot_selected');
}






arrowLeft.addEventListener("click", () => {
	previousSlide();
	updateDots(currentIndex);
});


arrowRight.addEventListener("click", () => {
	nextSlide();
	updateDots(currentIndex);
});











/*comment créer un element html dans le JavaScript (création, l'ajout de classe, injection dans le HTML)

const newElement = document.createElement("div");
newElement.textContent = "Ceci est un nouvel élément";
newElement.classList.add("ma-classe");
document.body.appendChild(newElement);*/
