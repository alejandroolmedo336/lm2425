$(document).ready(function() {
    // Función para mostrar el mensaje de bienvenida con animación y estilo
    function mostrarBienvenida(nombre) {
    $('#mensajeBienvenida')
        .text(`¡Bienvenido, ${nombre}!`) // Inserta el texto
        .css({                          // Aplica estilo dinámico con jQuery
            'background-color': '#d1ecf1',
            'color': '#0c5460',
            'border': '1px solid #bee5eb',
            'font-weight': 'bold'
        })
        .fadeIn(1000)                   // Muestra con animación de opacidad
        .animate({ opacity: 1 }, 1000); // Asegura que quede visible con opacidad completa
}


    // Comprobar si hay un nombre guardado al cargar la página
    const nombreGuardado = localStorage.getItem('nombreUsuario');
if (nombreGuardado) {
    mostrarBienvenida(nombreGuardado);
}

    // Capturar el envío del formulario
    $('#formularioNombre').on('submit', function(e) {
    e.preventDefault(); // Evita que se recargue la página

    const nombre = $('#nombre').val().trim(); // Obtiene el valor del input

    if (nombre !== '') {
        localStorage.setItem('nombreUsuario', nombre); // Guarda el nombre en localStorage
        mostrarBienvenida(nombre); // Muestra el mensaje de bienvenida
    }
});
});
