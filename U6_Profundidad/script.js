document.querySelectorAll(".book").forEach(function (elemento) {
    elemento.addEventListener("click", function () {
        this.classList.toggle("descubierto");
    });
});

const header = document.querySelector("header");

const headroom = new Headroom(header);
headroom.init();
