// Creacion de DOM, CONTENEDOR PRINCIPAL 
const contenedor = document.createElement("div");
document.body.appendChild(contenedor);

// Para el titulo
const titulo = document.createElement("h1");
titulo.innerText = "/ El Ahorcado - Arequipa /";
contenedor.appendChild(titulo);

// Para el boton que iniciara el juego
const btnIniciar = document.createElement("button");
btnIniciar.innerText = "¡Que empiece el juego!";
contenedor.appendChild(btnIniciar);

btnIniciar.style.padding = "15px 30px";
btnIniciar.style.fontSize = "10px";
btnIniciar.style.backgroundColor = "blue"; // Granate Arequipa
btnIniciar.style.color = "white";
btnIniciar.style.border = "none";
btnIniciar.style.borderRadius = "8px";
btnIniciar.style.cursor = "pointer";
btnIniciar.style.fontFamily = "Arial, sans-serif";
btnIniciar.style.fontWeight = "bold";
btnIniciar.style.transition = "0.3s";
btnIniciar.style.marginTop = "20px";

// Para el Canvas o zona de dibujo
const canvas = document.createElement("canvas");
canvas.width = 440;
canvas.height = 450;
canvas.style.border = "15px solid gray";
contenedor.appendChild(canvas);

// para el lapiz, algo muy importante
const ctx = canvas.getContext("2d");

// Para mostrar las letras: _ A _ B _
const palabraHTML = document.createElement("h3");
contenedor.appendChild(palabraHTML);

// Para los errores  
const erroresHTML = document.createElement("p");
contenedor.appendChild(erroresHTML);

// Mostrar el mensaje de haber ganado o no
const mensaje = document.createElement("h2");
contenedor.appendChild(mensaje);

// Contenedor de letras desde la A a la Z
const contenedorLetras = document.createElement("div");
contenedor.appendChild(contenedorLetras);

// VARIABLES 
const palabras = ["AREQUIPA" , "CHACHANI" , "PAUCARPATA" , "SOCABAYA" , "MISTI" , "MIRAFLORES", "MELGAR"]

//Se guardara la palabra eligida
let palabraSecreta = "";
let palabraMostrada = [];

//Contador de errores
let errores = 0;

// Limites antes de perder
const maxErrores = 10;

// Para iniciar el juego
btnIniciar.onclick = function () {
    palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
    palabraMostrada = Array(palabraSecreta.length).fill("_");
    errores = 0;

    mensaje.innerText = "";
    limpiarCanvas();
    actualizarPantalla();
    crearLetras();
};

// Para actualizar la pantalla
function actualizarPantalla() {
    palabraHTML.innerText = palabraMostrada.join(" ");
    erroresHTML.innerText = "Errores: " + errores + " / " + maxErrores;
}

// Para crear botones
function crearLetras() {
    contenedorLetras.innerHTML = "";

    for (let i = 65; i <= 90; i++) {
        const letra = String.fromCharCode(i);

        const btn = document.createElement("button");
        btn.innerText = letra;

        btn.onclick = function () {
            manejarLetra(letra, btn);
        };

        contenedorLetras.appendChild(btn);
    }

    btn.style.margin = "3px";
    btn.style.padding = "10px";
    btn.style.border = "none";
    btn.style.borderRadius = "5px";
    btn.style.background = "#706d6d";
}

// Para manejar la letra
function manejarLetra(letra, boton) {
    boton.disabled = true;

    if (palabraSecreta.includes(letra)) {
        boton.style.background = "green";
        boton.style.color = "white";

        for (let i = 0; i < palabraSecreta.length; i++) {
            if (palabraSecreta[i] === letra) {
                palabraMostrada[i] = letra;
            }
        }

    } else {
        boton.style.background = "red";
        boton.style.color = "white";
        errores++;
        dibujar();
    }

    actualizarPantalla();
    verificar();
}

// Verificacion 
function verificar() {
    if (!palabraMostrada.includes("_")) {
        mensaje.innerText = "¡Ganaste!";
        desactivar();
    }

    if (errores === maxErrores) {
        mensaje.innerText = "Perdiste. La palabra correcta era: " + palabraSecreta;
        desactivar();
    }
}

// Desactivar los botones
function desactivar() {
    const botones = contenedorLetras.querySelectorAll("button");
    botones.forEach(b => b.disabled = true);
}

// Para limpiar el canvas 
function limpiarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Para el dibujo de las lineas
function dibujar() {
    switch (errores) {
        case 1:
            ctx.moveTo(10, 230);
            ctx.lineTo(190, 230);
            ctx.stroke();
            break;
        case 2:
            ctx.moveTo(50, 230);
            ctx.lineTo(50, 20);
            ctx.stroke();
            break;
        case 3:
            ctx.moveTo(50, 20);
            ctx.lineTo(130, 20);
            ctx.stroke();
            break;
        case 4:
            ctx.moveTo(130, 20);
            ctx.lineTo(130, 50);
            ctx.stroke();
            break;
        case 5:
            ctx.beginPath();
            ctx.arc(130, 70, 20, 0, Math.PI * 2);
            ctx.stroke();
            break;
        case 6:
            ctx.moveTo(130, 90);
            ctx.lineTo(130, 150);
            ctx.stroke();
            break;
        case 7:
            ctx.moveTo(130, 100);
            ctx.lineTo(100, 130);
            ctx.stroke();
            break;
        case 8:
            ctx.moveTo(130, 100);
            ctx.lineTo(160, 130);
            ctx.stroke();
            break;
        case 9:
            ctx.moveTo(130, 150);
            ctx.lineTo(100, 190);
            ctx.stroke();
            break;
        case 10:
            ctx.moveTo(130, 150);
            ctx.lineTo(160, 190);
            ctx.stroke();
            break;
    }
}



          