function mostrartoast(){
    const toast = document.getElementById("toast");

    toast.classList.add("show");

    setTimeout(()=>{
        toast.classList.remove("show");
    },2000)
}
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.links-incio');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

const track = document.querySelector(".track");
const imagens = document.querySelectorAll(".track img");

const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");

let indice = 0;

function moverCarrossel() {
    const largura = 300;

    track.style.transform = `translateX(-${indice * largura}px)`;
}

btnNext.addEventListener("click", () => {
    indice++;

    if (indice >= imagens.length) {
        indice = 0;
    }

    moverCarrossel();
});

btnPrev.addEventListener("click", () => {
    indice--;

    if (indice < 0) {
        indice = imagens.length - 1;
    }

    moverCarrossel();
});


        