document.addEventListener('DOMContentLoaded', function() {
    const mioInfo = document.getElementById('mioinfo');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                mioInfo.style.opacity = '1'; // Hacer visible
                mioInfo.style.animation = 'slide-left 1.5s ease-in forwards'; // Aplicar animación
                observer.unobserve(mioInfo); // Dejar de observar después de la animación
            }
        });
    });

    observer.observe(mioInfo); // Comenzar a observar el elemento
});


document.addEventListener('DOMContentLoaded', function(){
    const proyectos= document.getElementById('proyectos');
    const observador = new IntersectionObserver((entries)=> {
        entries.forEach(entry=> {
            if (entry.isIntersecting) {
                proyectos.style.opacity = '1';
                proyectos.style.animation = 'slide-right 4s ease-in forwards'
                observador.unobserve(proyectos)
            }
        });
    });
    observador.observe(proyectos);
});

document.addEventListener('DOMContentLoaded', function(){
    const experiencias= document.getElementById('experiencias');
    const observador = new IntersectionObserver((entries)=> {
        entries.forEach(entry=> {
            if (entry.isIntersecting) {
                experiencias.style.opacity = '1';
                experiencias.style.animation = 'opacidad 2s ease-in forwards'
                observador.unobserve(experiencias)
            }
        });
    });
    observador.observe(experiencias);
});

document.addEventListener('DOMContentLoaded', function(){
    const experiencias= document.getElementById('experiencias-2');
    const observador = new IntersectionObserver((entries)=> {
        entries.forEach(entry=> {
            if (entry.isIntersecting) {
                experiencias.style.opacity = '1';
                experiencias.style.animation = 'opacidad 2s ease-in forwards'
                observador.unobserve(experiencias)
            }
        });
    });
    observador.observe(experiencias);
});
document.addEventListener('DOMContentLoaded', function(){
    const experiencias= document.getElementById('experiencias-3');
    const observador = new IntersectionObserver((entries)=> {
        entries.forEach(entry=> {
            if (entry.isIntersecting) {
                experiencias.style.opacity = '1';
                experiencias.style.animation = 'opacidad 2s ease-in forwards'
                observador.unobserve(experiencias)
            }
        });
    });
    observador.observe(experiencias);
});
