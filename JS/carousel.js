const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const carousel = document.querySelector(".carousel-container");
const slides = document.querySelectorAll(".container-slide");


let currentIndex = 0;


// Función para mostrar la diapositiva en el índice especificado
function showSlide(index) {
    
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    slides[index].style.display = 'block';
}



showSlide(currentIndex);


nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
});


prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex <= 0) {
        currentIndex = slides.length - 1;
    }
    showSlide(currentIndex);
});
