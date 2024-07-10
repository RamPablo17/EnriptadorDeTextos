function encriptar() {
  var texto = document.getElementById("texto").value;
  
  // Validar caracteres permitidos
  if (!validarTexto(texto)) {
    alert("Solo se permiten letras minúsculas sin acentos ni caracteres especiales.");
    return;
  }
  
  var textoEncriptado = texto
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

  mostrarMensajeEncriptado(textoEncriptado);
}

function desencriptar() {
  var texto = document.getElementById("texto").value;
  
  // Validar caracteres permitidos
  if (!validarTexto(texto)) {
    alert("Solo se permiten letras minúsculas sin acentos ni caracteres especiales.");
    return;
  }
  
  var textoDesencriptado = texto
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

  mostrarMensajeEncriptado(textoDesencriptado);
}

function mostrarMensajeEncriptado(mensaje) {
  var tituloMensaje = document.getElementById("Titulo-mensaje");
  var instruccion = document.getElementById("Instruccion");
  var textoEncriptado = document.getElementById("Texto-encriptado");
  var botonCopiar = document.getElementById("Boton-copiar");
  var munecoImg = document.querySelector(".muñeco-img");

  tituloMensaje.style.display = "none";
  instruccion.style.display = "none";
  textoEncriptado.style.display = "block";
  textoEncriptado.textContent = mensaje;
  botonCopiar.style.display = "block";
  munecoImg.style.display = "none";
}

function copiarTexto() {
  var textoEncriptado = document.getElementById("Texto-encriptado").textContent;
  navigator.clipboard.writeText(textoEncriptado)
      .then(() => {
          alert("Texto copiado al portapapeles");
      })
      .catch(err => {
          alert("Hubo un error al copiar el texto: ", err);
      });
}

function validarTexto(texto) {
  // Expresión regular para verificar si el texto solo contiene letras minúsculas y sin acentos
  var regex = /^[a-z]+$/;
  return regex.test(texto);
}
