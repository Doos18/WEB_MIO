const bot_ant = document.getElementById("bot_ant");
const bot_next = document.getElementById("bot_next");
const carousel2 = document.querySelector(".carousel-container-2");
const slides2 = document.querySelectorAll(".container-slide-2");


let font_0 = 0;


// Función para mostrar la diapositiva en el índice especificado
function showSlide2(Index) {
    
    slides2.forEach((slides2) => {
        slides2.style.display = 'none';
    });

    slides2[Index].style.display = 'block';
}



showSlide2(font_0);

// Botón Siguiente
bot_next.addEventListener("click", () => {
    font_0++;
    if (font_0 >= slides2.length) {
        font_0 = 0;
    }
    showSlide2(font_0);
});

// Botón Anterior
bot_ant.addEventListener("click", () => {
    font_0--;
    if (font_0 < 0) {
        font_0 = slides2.length - 1;
    }
    showSlide2(font_0);
});
