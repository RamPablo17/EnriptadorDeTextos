// Función para encriptar el texto
function encriptar() {
  // Obtener el texto ingresado por el usuario desde el textarea
  let texto = document.getElementById("texto").value;
  
  // Obtener elementos del DOM que se van a modificar
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let textoEncriptado = document.getElementById("texto-encriptado");
  let muñecoImg = document.querySelector('.encriptado .muñeco-img');
  let btnCopiar = document.getElementById("btn-copiar");

  // Reemplazar las vocales con secuencias específicas para encriptar
  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  // Verificar si el campo de texto no está vacío
  if (texto.length != 0) {
    // Mostrar mensaje de éxito y resultados encriptados
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    textoEncriptado.textContent = textoCifrado; // Mostrar texto encriptado
    muñecoImg.style.display = 'none'; // Ocultar imagen de muñeco
    tituloMensaje.style.display = "none"; // Ocultar mensaje de error
    btnCopiar.style.display = "block"; // Mostrar botón de copiar texto
  } else {
    // Mostrar mensaje de error y restablecer elementos visuales
    muñecoImg.style.display = 'block'; // Mostrar imagen de muñeco
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    tituloMensaje.style.display = "block"; // Mostrar mensaje de error
    btnCopiar.style.display = "none"; // Ocultar botón de copiar texto
    alert("Debes ingresar un texto"); // Alerta al usuario sobre campo vacío
  }
}

// Función para desencriptar el texto
function desencriptar() {
  // Obtener el texto ingresado por el usuario desde el textarea
  let texto = document.getElementById("texto").value;
  
  // Obtener elementos del DOM que se van a modificar
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let textoDesencriptado = document.getElementById("texto-encriptado");
  let muñecoImg = document.querySelector('.encriptado .muñeco-img');
  let btnCopiar = document.getElementById("btn-copiar");

  // Reemplazar las secuencias encriptadas por las vocales originales
  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  // Verificar si el campo de texto no está vacío
  if (texto.length != 0) {
    // Mostrar mensaje de éxito y resultados desencriptados
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    textoDesencriptado.textContent = textoCifrado; // Mostrar texto desencriptado
    muñecoImg.style.display = 'none'; // Ocultar imagen de muñeco
    tituloMensaje.style.display = "none"; // Ocultar mensaje de error
    btnCopiar.style.display = "block"; // Mostrar botón de copiar texto
  } else {
    // Mostrar mensaje de error y restablecer elementos visuales
    muñecoImg.style.display = 'block'; // Mostrar imagen de muñeco
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    tituloMensaje.style.display = "block"; // Mostrar mensaje de error
    btnCopiar.style.display = "none"; // Ocultar botón de copiar texto
    alert("Debes ingresar un texto"); // Alerta al usuario sobre campo vacío
  }
}

// Función para copiar el texto encriptado o desencriptado al portapapeles
function copiarTexto() {
  // Obtener el texto encriptado o desencriptado desde el elemento HTML
  let textoCopiar = document.getElementById("texto-encriptado").textContent;
  
  // Usar la API del portapapeles para escribir el texto copiado
  navigator.clipboard.writeText(textoCopiar)
    .then(() => {
      alert("Texto copiado al portapapeles"); // Alerta de éxito al copiar
    })
    .catch(err => {
      console.error('No se pudo copiar el texto: ', err); // Manejo de errores
    });
}
