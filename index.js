// Función para encriptar el texto
function encriptar() {
  // Obtiene el valor del campo de texto con id "texto"
  let textoOriginal = document.getElementById("texto").value;
  // Copia el texto original para mantenerlo intacto
  let texto = textoOriginal;

  // Obtiene el elemento con id "parrafo"
  let parrafo = document.getElementById("parrafo");
  // Obtiene el elemento con id "muñeco"
  let muñeco = document.getElementById("muñeco");

  // Reemplaza las vocales en el texto con cadenas específicas
  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  // Verifica si el campo de texto no está vacío
  if (texto.length != 0) {
    // Mostrar el texto encriptado en lugar de la imagen
    document.getElementById("mensaje-encriptado").style.display = "block";
    document.getElementById("mensaje-encriptado").innerHTML = `
      <p>Texto encriptado: ${textoCifrado}</p>
    `;
    // Mostrar el botón de copiar texto
    document.querySelector(".encriptado .botones").style.display = "block";
    // Ocultar la imagen del muñeco
    muñeco.style.display = "none";
  } else {
    // Si el campo de texto está vacío, mostrar la imagen del muñeco y mensaje por defecto
    muñeco.style.display = "block";
    // Cambia el contenido del párrafo
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    // Ocultar el botón de copiar texto
    document.querySelector(".encriptado .botones").style.display = "none";
    // Muestra una alerta indicando que se debe ingresar un texto
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }

  // Mostrar el texto original en el textarea
  document.getElementById("texto").value = textoOriginal;
}

// Función para desencriptar el texto
function desencriptar() {
  // Obtiene el valor del campo de texto con id "texto"
  let textoOriginal = document.getElementById("texto").value;
  // Copia el texto original para mantenerlo intacto
  let texto = textoOriginal;

  // Obtiene el elemento con id "parrafo"
  let parrafo = document.getElementById("parrafo");
  // Obtiene el elemento con id "muñeco"
  let muñeco = document.getElementById("muñeco");

  // Reemplaza las cadenas específicas en el texto con las vocales originales
  let textoDesencriptado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  // Verifica si el campo de texto no está vacío
  if (texto.length != 0) {
    // Mostrar el texto desencriptado en lugar de la imagen
    document.getElementById("mensaje-encriptado").style.display = "block";
    document.getElementById("mensaje-encriptado").innerHTML = `
      <p>Texto desencriptado: ${textoDesencriptado}</p>
    `;
    // Mostrar el botón de copiar texto
    document.querySelector(".encriptado .botones").style.display = "block";
    // Ocultar la imagen del muñeco
    muñeco.style.display = "none";
  } else {
    // Si el campo de texto está vacío, mostrar la imagen del muñeco y mensaje por defecto
    muñeco.style.display = "block";
    // Cambia el contenido del párrafo
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    // Ocultar el botón de copiar texto
    document.querySelector(".encriptado .botones").style.display = "none";
    // Muestra una alerta indicando que se debe ingresar un texto
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }

  // Mostrar el texto original en el textarea
  document.getElementById("texto").value = textoOriginal;
}

// Función para copiar el texto encriptado
function copiarTexto() {
  // Selecciona el contenido del elemento con id "parrafo"
  let textoEncriptado = document.getElementById("mensaje-encriptado").querySelector("p").innerText;

  // Crea un elemento textarea temporal para copiar el texto
  let textarea = document.createElement("textarea");
  textarea.value = textoEncriptado;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px"; // Mueve el textarea fuera del rango visual
  document.body.appendChild(textarea);
  
  // Selecciona y copia el texto encriptado
  textarea.select();
  document.execCommand("copy");

  // Remueve el textarea temporal
  document.body.removeChild(textarea);

  // Muestra una alerta indicando que el texto ha sido copiado
  swal("¡Texto copiado!", "El texto encriptado ha sido copiado al portapapeles.", "success");
}






