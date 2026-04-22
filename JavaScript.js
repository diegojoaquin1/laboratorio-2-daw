const mensaje = document.createElement("h1");
mensaje.innerText = "Ejercicio-1-Desarrollo de aplicaciones web-Lab";
document.body.appendChild(mensaje);

const inputClave = document.createElement("input");
inputClave.type = "password";
inputClave.id = "password-input";
document.body.appendChild(inputClave);

const contenedorTeclado = document.createElement("div");
document.body.appendChild(contenedorTeclado);

function desordenarNumeros() {
    let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = numeros.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
    }
    return numeros;
}

const numerosMezclados = desordenarNumeros();

numerosMezclados.forEach(num => {
    const boton = document.createElement("button");
    boton.innerText = num;
    
    boton.onclick = () => {
        inputClave.value += num;
    };
    
    contenedorTeclado.appendChild(boton);
});

const Limpiar = document.createElement("button");
Limpiar.innerText = "LIMPIAR";

Limpiar.onclick = () => {
    inputClave.value = "";
};

document.body.appendChild(Limpiar);