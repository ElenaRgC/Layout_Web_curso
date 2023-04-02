var i = 0;

function cambiarPersonaje() {
    var imagen = document.getElementById("img");
    var nombre = document.getElementById("nombre");
    var salud = document.getElementById("salud");
    var wiki = document.getElementById("wiki");

    if (i % 2 == 0) {
        imagen.setAttribute("src", "./img/Lothric.webp");
        imagen.setAttribute(
            "alt",
            "Captura de pantalla de Dark Souls III mostrando a Lothric"
        );
        imagen.style.objectPosition = "center center";

        nombre.innerHTML = "Lothric, joven príncipe";
        salud.innerHTML = "11.644 PS";
        wiki.innerHTML = "Lothric en Fandom.com";
    } else {
        imagen.setAttribute("src", "./img/Lorian_Principe_Anciano.webp");
        imagen.setAttribute(
            "alt",
            "Captura de pantalla de Dark Souls III mostrando a Lorian"
        );
        imagen.style.objectPosition = "75% center";

        nombre.innerHTML = "Lorian, Príncipe Anciano";
        salud.innerHTML = "7.730 PS";
        wiki.innerHTML = "Lorian en Fandom.com";
    }

    i++;
}
