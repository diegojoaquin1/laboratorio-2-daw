// CONTENEDOR PRINCIPAL 
const contenedor = document.createElement("div");
document.body.appendChild(contenedor);

// TITULO
const titulo = document.createElement("h1");
titulo.innerText = "/ El Ahorcado - from Arequipa /";
contenedor.appendChild(titulo);

// BOTÓN INICIAR
const btnIniciar = document.createElement("button");
btnIniciar.innerText = "¡Que empiece el juego!";
contenedor.appendChild(btnIniciar);

// CANVAS
const canvas = document.createElement("canvas");
canvas.width = 440;
canvas.height = 450;
canvas.style.border = "5px solid black";
contenedor.appendChild(canvas);

const ctx = canvas.getContext("2d");

// PALABRA
const palabraHTML = document.createElement("h3");
contenedor.appendChild(palabraHTML);

// ERRORES 
const erroresHTML = document.createElement("p");
contenedor.appendChild(erroresHTML);

// MENSAJE
const mensaje = document.createElement("h2");
contenedor.appendChild(mensaje);

// CONTENEDOR LETRAS
const contenedorLetras = document.createElement("div");
contenedor.appendChild(contenedorLetras);

// VARIABLES 
const palabras = ["AREQUIPA" , "CHACHANI" , "PAUCARPATA" , "SOCABAYA" , "MISTI" , "MIRAFLORES", "MELGAR"]

let palabraSecreta = "";
let palabraMostrada = [];
let errores = 0;
const maxErrores = 10;

// ====== INICIAR JUEGO ======
btnIniciar.onclick = function () {
    palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
    palabraMostrada = Array(palabraSecreta.length).fill("_");
    errores = 0;

    mensaje.innerText = "";
    limpiarCanvas();
    actualizarPantalla();
    crearLetras();
};

// ====== ACTUALIZAR ======
function actualizarPantalla() {
    palabraHTML.innerText = palabraMostrada.join(" ");
    erroresHTML.innerText = "Errores: " + errores + " / " + maxErrores;
}

// ====== CREAR BOTONES ======
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
}

// ====== MANEJAR LETRA ======
function manejarLetra(letra, boton) {
    boton.disabled = true;

    if (palabraSecreta.includes(letra)) {
        boton.style.background = "green";

        for (let i = 0; i < palabraSecreta.length; i++) {
            if (palabraSecreta[i] === letra) {
                palabraMostrada[i] = letra;
            }
        }

    } else {
        boton.style.background = "red";
        errores++;
        dibujar();
    }

    actualizarPantalla();
    verificar();
}

// ====== VERIFICAR ======
function verificar() {
    if (!palabraMostrada.includes("_")) {
        mensaje.innerText = "¡Ganaste!";
        desactivar();
    }

    if (errores === maxErrores) {
        mensaje.innerText = "Perdiste. Era: " + palabraSecreta;
        desactivar();
    }
}

// ====== DESACTIVAR BOTONES ======
function desactivar() {
    const botones = contenedorLetras.querySelectorAll("button");
    botones.forEach(b => b.disabled = true);
}

// ====== LIMPIAR CANVAS ======
function limpiarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// ====== DIBUJAR ======
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



          