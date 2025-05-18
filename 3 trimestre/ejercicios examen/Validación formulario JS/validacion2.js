document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formularioRegistro");

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();
        let valido = true;

        // Nombre
        const nombre = document.getElementById("nombre").value.trim();
        if (nombre === "") {
            mostrarError("error-nombre", "El nombre es obligatorio.");
            valido = false;
        } else {
            ocultarError("error-nombre");
        }

        // Apellidos
        const apellidos = document.getElementById("apellidos").value.trim();
        if (apellidos === "") {
            mostrarError("error-apellidos", "Los apellidos son obligatorios.");
            valido = false;
        } else {
            ocultarError("error-apellidos");
        }

        // Teléfono
        const telefono = document.getElementById("telefono").value.trim();
        const regexTelefono = /^[0-9]{9}$/; // ✅ Teléfono debe contener exactamente 9 dígitos
        if (!regexTelefono.test(telefono)) {
            mostrarError("error-telefono", "Introduce un teléfono válido de 9 dígitos.");
            valido = false;
        } else {
            ocultarError("error-telefono");
        }

        // Email
        const email = document.getElementById("email").value.trim();
        const regexEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/; // ✅ Email debe tener un formato válido
        if (!regexEmail.test(email)) {
            mostrarError("error-email", "Introduce un correo electrónico válido.");
            valido = false;
        } else {
            ocultarError("error-email");
        }

        // Contraseña
        const contrasena1 = document.getElementById("contrasena1").value;
        if (contrasena1.length < 6) { // ✅ Contraseña debe tener al menos 6 caracteres
            mostrarError("error-contrasena1", "La contraseña debe tener al menos 6 caracteres.");
            valido = false;
        } else {
            ocultarError("error-contrasena1");
        }

        // Confirmar contraseña
        const contrasena2 = document.getElementById("contrasena2").value;
        if (contrasena1 !== contrasena2) {
            mostrarError("error-contrasena2", "Las contraseñas no coinciden.");
            valido = false;
        } else {
            ocultarError("error-contrasena2");
        }

        // Aceptar términos
        const aceptaTerminos = document.getElementById("aceptarTerminos").checked;
        if (!aceptaTerminos) {
            mostrarError("error-terminos", "Debes aceptar los términos de uso.");
            valido = false;
        } else {
            ocultarError("error-terminos");
        }

        if (valido) {
            alert("¡Registro exitoso!");
            formulario.reset();
            limpiarErrores();
        }
    });

    // FUNCIONES DE AYUDA (estas sí son comunes)
    function mostrarError(idError, mensaje) {
        const error = document.getElementById(idError);
        error.textContent = mensaje;
        error.classList.add("activo");
    }

    function ocultarError(idError) {
        const error = document.getElementById(idError);
        error.textContent = "";
        error.classList.remove("activo");
    }

    function limpiarErrores() {
        const errores = document.querySelectorAll(".error");
        errores.forEach(error => {
            error.textContent = "";
            error.classList.remove("activo");
        });
    }
});
