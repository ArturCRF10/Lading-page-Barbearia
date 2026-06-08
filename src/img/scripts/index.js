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
