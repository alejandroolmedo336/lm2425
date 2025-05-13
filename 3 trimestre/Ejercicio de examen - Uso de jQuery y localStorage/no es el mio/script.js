$(document).ready(function() {
    let puntos = 0;
    let maximo = localStorage.getItem("maximo") || 0;
    $("#maximo").text(maximo);

    const $rojo = $("#rojo");
    let clicValido = false;
    let tiempoRestante = 30; // segundos

    function moverYMostrar() {
        let x = Math.random() * 250;
        let y = Math.random() * 250;
        $rojo.css({ top: y + "px", left: x + "px" }).fadeIn(100);

        setTimeout(() => {
            $rojo.fadeOut(100);
        }, 800);
    }

    $rojo.on("click", function() {
        if (!clicValido) return;
        puntos++;
        $("#puntos").text(puntos);

        if (puntos > maximo) {
            maximo = puntos;
            localStorage.setItem("maximo", maximo);
            $("#maximo").text(maximo);
        }

        clicValido = false;
        $rojo.fadeOut(100);
    });

    // Iniciar juego con duración de 30 segundos
    const juego = setInterval(() => {
        if (tiempoRestante <= 0) {
            clearInterval(juego);
            $rojo.hide(); // Oculta el círculo
            alert(`¡Tiempo terminado! Obtuviste ${puntos} punto(s).`);
            return;
        }

        clicValido = true;
        moverYMostrar();
        tiempoRestante--;
    }, 1000);
});
