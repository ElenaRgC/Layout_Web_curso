import * as basicScroll from "basicscroll";

document.querySelectorAll(".book").forEach(function (elemento) {
    elemento.addEventListener("click", function () {
        this.classList.toggle("descubierto");
    });
});

const instance = basicScroll.create({
    elem: document.querySelector(".element"),
    from: "top-bottom",
    to: "middle-middle",
    props: {
        "--opacity": {
            from: 0.01,
            to: 0.99,
        },
    },
});

instance.start();
