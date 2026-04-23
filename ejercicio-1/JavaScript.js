// --- ENCABEZADO ---
const titulo = document.createElement("h1");
titulo.innerText = "Ejercicio-1-Desarrollo de aplicaciones web-Lab";
document.body.appendChild(titulo);

// --- SELECCIÓN DE TARJETA ---
const txtSel = document.createElement("label");
txtSel.innerText = "Seleccione: ";
document.body.appendChild(txtSel);

const sel = document.createElement("select");
const opt = document.createElement("option");
opt.innerText = "Multired Global Débito";
sel.appendChild(opt);
document.body.appendChild(sel);

document.body.appendChild(document.createElement("br"));

// --- NÚMERO DE TARJETA ---
const txtCard = document.createElement("label");
txtCard.innerText = "Número de tarjeta: ";
document.body.appendChild(txtCard);

const card = document.createElement("input");
card.type = "text";
document.body.appendChild(card);

document.body.appendChild(document.createElement("br"));

// --- ENTRADA DE CLAVE ---
const txtPass = document.createElement("label");
txtPass.innerText = "Ingrese su clave: ";
document.body.appendChild(txtPass);

const pass = document.createElement("input");
pass.type = "password"; 
document.body.appendChild(pass);

document.body.appendChild(document.createElement("br"));

// --- TECLADO NUMÉRICO ALEATORIO ---
const panel = document.createElement("div"); //cont boton
document.body.appendChild(panel);

function mezclar() {
    let n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = n.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [n[i], n[j]] = [n[j], n[i]]; 
    }
    return n;
}

const num = mezclar();

num.forEach(d => {
    const btn = document.createElement("button");
    btn.innerText = d;
    btn.onclick = () => {
        pass.value += d; 
    };
    panel.appendChild(btn);
});

// Botón para borrar la clave
const clr = document.createElement("button");
clr.innerText = "LIMPIAR";
clr.onclick = () => {
    pass.value = "";
};
document.body.appendChild(clr);

document.body.appendChild(document.createElement("br"));

// --- SISTEMA DE CAPTCHA ---
function crearCap() {
    const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let res = "";
    for (let i = 0; i < 5; i++) {
        res += abc.charAt(Math.floor(Math.random() * abc.length));
    }
    return res;
}

const txtCap = document.createElement("label");
txtCap.innerText = "Ingresa el texto de la imagen: ";
document.body.appendChild(txtCap);

const cap = document.createElement("span");
cap.innerText = crearCap(); 
document.body.appendChild(cap);

const userCap = document.createElement("input");
userCap.type = "text";
document.body.appendChild(userCap);

document.body.appendChild(document.createElement("br"));

// --- BOTÓN FINAL DE INGRESO ---
const login = document.createElement("button");
login.innerText = "INGRESAR";
login.onclick = () => {
    if (userCap.value === cap.innerText) {
        alert("Acceso concedido");
    } else {
        alert("Captcha incorrecto");
    }
};
document.body.appendChild(login);

// --- ESTILOS CSS ---

// Contenedor del teclado en cuadrícula de 3 columnas
panel.style.display = "grid";
panel.style.gridTemplateColumns = "repeat(3, 50px)";
panel.style.gap = "8px";
panel.style.margin = "15px 0";

// Estilo para los botones numéricos
const botonesNum = panel.querySelectorAll("button");
botonesNum.forEach(b => {
    b.style.width = "50px";
    b.style.height = "50px";
    b.style.fontSize = "18px";
    b.style.fontWeight = "bold";
    b.style.cursor = "pointer";
    b.style.backgroundColor = "#f0f0f0";
    b.style.border = "1px solid #ccc";
    b.style.borderRadius = "4px";
});

// Estilo del botón LIMPIAR
clr.style.backgroundColor = "#555";
clr.style.color = "white";
clr.style.padding = "8px 15px";
clr.style.border = "none";
clr.style.borderRadius = "4px";
clr.style.cursor = "pointer";
clr.style.marginTop = "5px";

// Estilo del Captcha 
cap.style.backgroundColor = "#eee";
cap.style.padding = "8px 12px";
cap.style.margin = "0 10px";
cap.style.border = "1px dashed #777";
cap.style.fontWeight = "bold";
cap.style.fontStyle = "italic";
cap.style.letterSpacing = "4px";

// Estilo del botón INGRESAR
login.style.marginTop = "25px";
login.style.padding = "12px 40px";
login.style.backgroundColor = "#a00";
login.style.color = "white";
login.style.border = "none";
login.style.borderRadius = "25px";
login.style.fontWeight = "bold";
login.style.cursor = "pointer";

// Espaciado general para etiquetas e inputs
const todosLosInputs = document.querySelectorAll("input, select, label");
todosLosInputs.forEach(el => {
    el.style.fontFamily = "Arial, sans-serif";
    if (el.tagName !== "LABEL") {
        el.style.margin = "8px 0";
        el.style.padding = "5px";
    }
});