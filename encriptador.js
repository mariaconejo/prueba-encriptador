const divNoEncontrado = document.querySelector('#munheco');
const divEncontrado = document.querySelector('#textoEncontrado');
const botonEncriptador = document.querySelector('#encriptar');
const botonDesencriptador = document.querySelector('#desencriptar');
const textoEntrada = document.querySelector('textarea');
const textoSalida = document.querySelector('#textoSalida');
const copia = document.querySelector('#copiar');
const aviso = document.querySelector('#textoCopiado');
var prohibidos = /[A-ZáéíóúÁÉÍÓ]/;

function encriptar(texto){
    return texto.replace(/e/g,'enter').replace(/i/g,'imes').replace(/a/g,'ai').replace(/o/g,'ober').replace(/u/g,'ufat');
}

function clickBotonEncriptar(){
    const textoPuro = textoEntrada.value;
    if(prohibidos.test(textoPuro)){
        alert("Por favor ingrese un texto que contenga solamente letras minúsculas sin acentos.");
    }
    else{
        divNoEncontrado.style.display = 'none';
        divEncontrado.style.display = 'inline-block';
        var textoEncriptado = encriptar(textoPuro);
        textoSalida.textContent = textoEncriptado;
    }
}

function desencriptar(texto){
    return texto.replace(/enter/g,'e').replace(/imes/g,'i').replace(/ai/g,'a').replace(/ober/g,'o').replace(/ufat/g, 'u');
}

function clickBotonDesencriptar(){
    let textoPuro = textoEntrada.value;
    if(prohibidos.test(textoPuro)){
        alert("Por favor ingrese un texto que contenga solamente letras minúsculas sin acentos.");
    }
    else{
        divNoEncontrado.style.display = 'none';
        divEncontrado.style.display = 'inline-block';
        var textoDesencriptado = desencriptar(textoPuro);
        textoSalida.textContent = textoDesencriptado;
    }
    
}

function mostrarMunheco(){
    if(textoEntrada.value == ""){
        divNoEncontrado.style.display = 'inline-block';
        divEncontrado.style.display = 'none';
    }
}

function botonCopiar(){
    navigator.clipboard.writeText(textoSalida.textContent);
    aviso.style.opacity = '1';
    setTimeout(() => {aviso.style.opacity = '0';}, 700);
}

setInterval(mostrarMunheco,100);

botonEncriptador.onclick = clickBotonEncriptar;
botonDesencriptador.onclick = clickBotonDesencriptar;
copia.onclick = botonCopiar;
