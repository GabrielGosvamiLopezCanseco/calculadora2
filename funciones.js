function AgregarNumero(id, n) {
    let texto = document.getElementById("texto");
    texto.value = texto.value + n;
    guardarOperacion(texto.value); // Guarda cada vez que se agrega un número
}

function Empezar(id) {
    let texto = document.getElementById("texto");
    try {
        let resultado = math.evaluate(texto.value);
        console.log(resultado);
        texto.value = resultado;
        guardarOperacion(texto.value); // Guarda el resultado
    } catch (error) {
        texto.value = "Operación no permitida";
    }
}

function Eliminar(id) {
    let texto = document.getElementById("texto");
    texto.value = "";
    guardarOperacion(texto.value); // Limpia el guardado
}

function EsNumero(id) {
    // Aquí podrías implementar validaciones de entrada si es necesario
}

function QuitarNumero(id) {
    let texto = document.getElementById("texto");
    texto.value = texto.value.substring(0, texto.value.length - 1);
    guardarOperacion(texto.value); // Guarda después de quitar un número
}

// --- Nuevas funciones para manejar localStorage ---

// Guarda la última operación en localStorage
function guardarOperacion(valor) {
    localStorage.setItem("ultimaOperacion", valor);
}

// Carga la última operación guardada al abrir la página
function cargarOperacion() {
    let ultimaOperacion = localStorage.getItem("ultimaOperacion");
    if (ultimaOperacion) {
        document.getElementById("texto").value = ultimaOperacion;
    }
}

// Ejecuta al cargar la página
window.onload = cargarOperacion;
