var slideIndexLeft = 0;
var slideIndexRight = 0;

document.addEventListener("DOMContentLoaded", function() {
    showSlidesLeft(slideIndexLeft);
    showSlidesRight(slideIndexRight);
});

function plusSlidesLeft(n) {
    showSlidesLeft(slideIndexLeft += n);
}

function plusSlidesRight(n) {
    showSlidesRight(slideIndexRight += n); // Ajuste: Chamando a função showSlidesRight para os botões da imagem da direita
}

function currentSlideLeft(n) {
    showSlidesLeft(slideIndexLeft = n);
}

function currentSlideRight(n) {
    showSlidesRight(slideIndexRight = n); // Ajuste: Chamando a função showSlidesRight para os botões da imagem da direita
}

function showSlidesLeft(n) {
    var slides = document.querySelectorAll('.slider-left img');
    var dots = document.querySelectorAll('.slider-left .dot');
    
    if (n >= slides.length) {slideIndexLeft = 0}
    if (n < 0) {slideIndexLeft = slides.length - 1}

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[slideIndexLeft].style.display = "block";
    dots[slideIndexLeft].classList.add("active");
}

function showSlidesRight(n) {
    var slides = document.querySelectorAll('.imagem-direita .img img');
    var dots = document.querySelectorAll('.imagem-direita .botão-direita .dot');
    
    if (n >= slides.length) {slideIndexRight = 0}
    if (n < 0) {slideIndexRight = slides.length - 1}

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[slideIndexRight].style.display = "block";
    dots[slideIndexRight].classList.add("active");
}
document.addEventListener("DOMContentLoaded", function() {
    // Referências aos botões do menu de navegação
    const btnServicos = document.getElementById("serviços");
    const btnQuemSomos = document.getElementById("quem-somos");
    const btnTrabalhos = document.getElementById("trabalhos-realizados");

    // Função para rolar até uma seção específica
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    document.getElementById('serviços').addEventListener('click', function() {
        scrollToElement('servicos-secao');
    });

    document.getElementById('quem-somos').addEventListener('click', function() {
        scrollToElement('quem-somos-secao');
    });

    document.getElementById('trabalhos-realizados').addEventListener('click', function() {
        scrollToElement('trabalhos-realizados-secao');
    });



    function scrollToElement(elementId) {
        var element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
});
