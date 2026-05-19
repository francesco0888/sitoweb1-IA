// Indice della slide corrente
let slideIndex = 1;

// Esegue la funzione quando l'HTML è stato caricato
document.addEventListener("DOMContentLoaded", function() {
    mostraSlide(slideIndex);
});

// Funzione chiamata dai pulsanti prev/next
function cambiaSlide(n) {
    mostraSlide(slideIndex += n);
}

// Funzione principale che gestisce lo slideshow
function mostraSlide(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    
    if (slides.length === 0) return;
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Nasconde tutte le slide
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Mostra solo la slide corrente (corretto!)
    slides[slideIndex - 1].style.display = "block";
}