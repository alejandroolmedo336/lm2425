document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formularioRegistro");

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();
        let valido = true;

        if (!validarCampoTexto("nombre", "error-nombre", "El nombre es obligatorio.")) valido = false;
        if (!validarCampoTexto("apellidos", "error-apellidos", "Los apellidos son obligatorios.")) valido = false;
        if (!validarTelefono("telefono", "error-telefono")) valido = false;
        if (!validarEmail("email", "error-email")) valido = false;
        if (!validarPassword("contrasena1", "error-contrasena1")) valido = false;
        if (!validarPasswordCoincide("contrasena1", "contrasena2", "error-contrasena2")) valido = false;
        if (!validarCheckbox("aceptarTerminos", "error-terminos", "Debes aceptar los términos de uso.")) valido = false;

        if (valido) {
            alert("¡Registro exitoso!");
            formulario.reset();
            limpiarErrores();
        }
    });

    function validarCampoTexto(idCampo, idError, mensaje) {
        const valor = document.getElementById(idCampo).value.trim();
        if (valor === "") {
            mostrarError(idError, mensaje);
            return false;
        }
        ocultarError(idError);
        return true;
    }

    function validarTelefono(idCampo, idError) {
        const valor = document.getElementById(idCampo).value.trim();
        const regex = /^[0-9]{9}$/; // ✅ Teléfono debe contener exactamente 9 dígitos
        if (!regex.test(valor)) {
            mostrarError(idError, "Introduce un teléfono válido de 9 dígitos.");
            return false;
        }
        ocultarError(idError);
        return true;
    }

    function validarEmail(idCampo, idError) {
        const valor = document.getElementById(idCampo).value.trim();
        const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/; // ✅ Email debe tener un formato válido (usuario@dominio)
        if (!regex.test(valor)) {
            mostrarError(idError, "Introduce un correo electrónico válido.");
            return false;
        }
        ocultarError(idError);
        return true;
    }

    function validarPassword(idCampo, idError) {
        const valor = document.getElementById(idCampo).value;
        if (valor.length < 6) { // ✅ Contraseña debe tener al menos 6 caracteres
            mostrarError(idError, "La contraseña debe tener al menos 6 caracteres.");
            return false;
        }
        ocultarError(idError);
        return true;
    }

    function validarPasswordCoincide(idPass1, idPass2, idError) {
        const pass1 = document.getElementById(idPass1).value;
        const pass2 = document.getElementById(idPass2).value;
        if (pass1 !== pass2) {
            mostrarError(idError, "Las contraseñas no coinciden.");
            return false;
        }
        ocultarError(idError);
        return true;
    }

    function validarCheckbox(idCheckbox, idError, mensaje) {
        const check = document.getElementById(idCheckbox).checked;
        if (!check) {
            mostrarError(idError, mensaje);
            return false;
        }
        ocultarError(idError);
        return true;
    }

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
