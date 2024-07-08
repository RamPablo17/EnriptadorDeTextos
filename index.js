// Función para encriptar el texto
function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let textoEncriptado = document.getElementById("texto-encriptado");
  let muñecoImg = document.querySelector('.encriptado .muñeco-img');
  let btnCopiar = document.getElementById("btn-copiar");

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length != 0) {
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    textoEncriptado.textContent = textoCifrado; // Mostrar texto encriptado
    muñecoImg.style.display = 'none'; // Ocultar imagen de muñeco
    tituloMensaje.style.display = "none"; // Ocultar mensaje de error
    btnCopiar.style.display = "block"; // Mostrar botón de copiar texto
  } else {
    muñecoImg.style.display = 'block'; // Mostrar imagen de muñeco
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    tituloMensaje.style.display = "block"; // Mostrar mensaje de error
    btnCopiar.style.display = "none"; // Ocultar botón de copiar texto
    alert("Debes ingresar un texto");
  }
}

// Función para desencriptar el texto
function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let textoDesencriptado = document.getElementById("texto-encriptado");
  let muñecoImg = document.querySelector('.encriptado .muñeco-img');
  let btnCopiar = document.getElementById("btn-copiar");

  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  if (texto.length != 0) {
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    textoDesencriptado.textContent = textoCifrado; // Mostrar texto desencriptado
    muñecoImg.style.display = 'none'; // Ocultar imagen de muñeco
    tituloMensaje.style.display = "none"; // Ocultar mensaje de error
    btnCopiar.style.display = "block"; // Mostrar botón de copiar texto
  } else {
    muñecoImg.style.display = 'block'; // Mostrar imagen de muñeco
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    tituloMensaje.style.display = "block"; // Mostrar mensaje de error
    btnCopiar.style.display = "none"; // Ocultar botón de copiar texto
    alert("Debes ingresar un texto");
  }
}

// Función para copiar el texto encriptado o desencriptado
function copiarTexto() {
  let textoCopiar = document.getElementById("texto-encriptado").textContent;
  navigator.clipboard.writeText(textoCopiar)
    .then(() => {
      alert("Texto copiado al portapapeles");
    })
    .catch(err => {
      console.error('No se pudo copiar el texto: ', err);
    });
}





