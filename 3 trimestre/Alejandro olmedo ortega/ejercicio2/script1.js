document.addEventListener('DOMContentLoaded', function() {
    let form = document.getElementById('formSuscripcion');


    form.addEventListener('submit', function(event) {
        let valido = true;

    //limpiar errores
    document.querySelectorAll(".error").forEach(el => this.style.display = 'none');

    //nombre
    let nombre = document.getElementById('nombreCompleto').value.trim();
    if (nombre === '') {
        mostrarError('errorNombreCompleto');
        valido = false;
    }

    //correo
    let correo = document.getElementById('correoElectronico').value.trim();
    let regexcorreo = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!regexcorreo.test(correo)) {
        mostrarError('errorCorreoElectronico');
        valido = false;
    }

    //DNI
    let dni = document.getElementById('dni').value.trim();
    if (dni === '') {
        mostrarError('errorDNI');
        valido = false;
    }

    //preferencias
    let preferencias = document.querySelectorAll('input[name="preferencia"]:cheked');
    if (preferencias.length === 0) {
        mostrarError('errorPreferencias');
        valido = false;
    }

    //frecuencia
    let frecuencia = document.getElementById('frecuenciaEnvio').value;
    if (!frecuencia) {
        mostrarError('errorFrecuenciaEnvio');
        valido = false;
    }

    //terminos
    let terminos = document.getElementById('terminos').checked;
    if (!terminos) {
        mostrarError('errorTerminos');
        valido = false
    }

    //falla algun campo
    if (!valido) {
        event.preventDefault(".error").style.display = 'block';
    }

    function mostrarError(id) {
        let elemento = document.getElementById(id);
        if (elemento) {
            elemento.style.display = 'block';
        }
    }
})
})