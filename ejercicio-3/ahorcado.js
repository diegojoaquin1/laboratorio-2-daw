// Creacion de DOM, CONTENEDOR PRINCIPAL 
const contenedor = document.createElement("div");
contenedor.style.textAlign = "center"; // Centrar contenido para que se vea mejor
document.body.appendChild(contenedor);

// Para el titulo
const titulo = document.createElement("h1");
titulo.innerText = "/ El Ahorcado - Arequipa /";
contenedor.appendChild(titulo);

// Para el boton que iniciara el juego
const btnIniciar = document.createElement("button");
btnIniciar.innerText = "¡Que empiece el juego!";
contenedor.appendChild(btnIniciar);

// Estilos del botón de inicio
btnIniciar.style.padding = "15px 30px";
btnIniciar.style.fontSize = "16px";
btnIniciar.style.backgroundColor = "#800000"; // Granate Arequipa real
btnIniciar.style.color = "white";
btnIniciar.style.border = "none";
btnIniciar.style.borderRadius = "8px";
btnIniciar.style.cursor = "pointer";
btnIniciar.style.display = "block";
btnIniciar.style.margin = "20px auto";

// Para el Canvas
const canvas = document.createElement("canvas");
canvas.width = 440;
canvas.height = 300; // Ajustado el alto
canvas.style.border = "5px solid gray";
canvas.style.backgroundColor = "#f9f9f9";
contenedor.appendChild(canvas);

const ctx = canvas.getContext("2d");

const palabraHTML = document.createElement("h3");
palabraHTML.style.fontSize = "30px";
palabraHTML.style.letterSpacing = "5px";
contenedor.appendChild(palabraHTML);

const erroresHTML = document.createElement("p");
contenedor.appendChild(erroresHTML);

const mensaje = document.createElement("h2");
contenedor.appendChild(mensaje);

const contenedorLetras = document.createElement("div");
contenedorLetras.style.maxWidth = "600px";
contenedorLetras.style.margin = "0 auto";
contenedor.appendChild(contenedorLetras);

// VARIABLES 
const palabras = ["AREQUIPA" , "CHACHANI" , "PAUCARPATA" , "SOCABAYA" , "MISTI" , "MIRAFLORES", "MELGAR"];
let palabraSecreta = "";
let palabraMostrada = [];
let errores = 0;
const maxErrores = 10;

btnIniciar.onclick = function () {
    palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
    palabraMostrada = Array(palabraSecreta.length).fill("_");
    errores = 0;
    mensaje.innerText = "";
    limpiarCanvas();
    actualizarPantalla();
    crearLetras();
};

function actualizarPantalla() {
    palabraHTML.innerText = palabraMostrada.join(" ");
    erroresHTML.innerText = "Errores: " + errores + " / " + maxErrores;
}

function crearLetras() {
    contenedorLetras.innerHTML = "";
    for (let i = 65; i <= 90; i++) {
        const letra = String.fromCharCode(i);
        const btn = document.createElement("button");
        btn.innerText = letra;
        
        // CORRECCIÓN: Los estilos deben ir DENTRO del for
        btn.style.margin = "3px";
        btn.style.padding = "10px 15px";
        btn.style.fontSize = "16px";
        btn.style.border = "none";
        btn.style.borderRadius = "5px";
        btn.style.background = "#706d6d";
        btn.style.color = "white";
        btn.style.cursor = "pointer";

        btn.onclick = function () {
            manejarLetra(letra, btn);
        };
        contenedorLetras.appendChild(btn);
    }
}

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

function verificar() {
    if (!palabraMostrada.includes("_")) {
        mensaje.innerText = "¡Ganaste!";
        mensaje.style.color = "green";
        desactivar();
    }
    if (errores === maxErrores) {
        mensaje.innerText = "Perdiste. Era: " + palabraSecreta;
        mensaje.style.color = "red";
        desactivar();
    }
}

function desactivar() {
    const botones = contenedorLetras.querySelectorAll("button");
    botones.forEach(b => b.disabled = true);
}

function limpiarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#333";
}

// CORRECCIÓN: Agregar beginPath() en cada caso para que las líneas se dibujen bien
function dibujar() {
    ctx.beginPath(); 
    switch (errores) {
        case 1: ctx.moveTo(10, 280); ctx.lineTo(190, 280); break; // Base
        case 2: ctx.moveTo(50, 280); ctx.lineTo(50, 20); break;   // Poste
        case 3: ctx.moveTo(50, 20); ctx.lineTo(130, 20); break;   // Travesaño
        case 4: ctx.moveTo(130, 20); ctx.lineTo(130, 50); break;  // Cuerda
        case 5: ctx.arc(130, 70, 20, 0, Math.PI * 2); break;      // Cabeza
        case 6: ctx.moveTo(130, 90); ctx.lineTo(130, 170); break; // Cuerpo
        case 7: ctx.moveTo(130, 110); ctx.lineTo(100, 140); break;// Brazo izq
        case 8: ctx.moveTo(130, 110); ctx.lineTo(160, 140); break;// Brazo der
        case 9: ctx.moveTo(130, 170); ctx.lineTo(100, 210); break;// Pierna izq
        case 10: ctx.moveTo(130, 170); ctx.lineTo(160, 210); break;// Pierna der
    }
    ctx.stroke();
}