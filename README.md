# Laboratorio 02: JavaScript en el Cliente y Despliegue con Docker

## Información del Grupo
* **Integrantes:** RONALD WILMER MANRIQUE SUPANTA, MANUEL DJINS VALDIVIA FLORES, DIEGO JOAQUÍN CAHUANA VERA
* **Asignatura:** Desarrollo de Aplicaciones Web
* **Escuela:** Ingeniería de Sistemas - UNSA

---

## Descripción del Proyecto
[cite_start]Resolución de ejercicios prácticos de JavaScript nativo sin uso de HTML predefinido en el `<body>`, utilizando manipulación dinámica del DOM[cite: 475, 548]. [cite_start]El proyecto incluye una versión de desarrollo (código legible) y una versión de producción (código ofuscado) para cada ejercicio[cite: 552, 703].

### Ejercicios Realizados
| Ejercicio | Descripción | Ubicación (Desarrollo) | Ubicación (Ofuscado) |
| :--- | :--- | :--- | :--- |
| **01** | Teclado virtual aleatorio | `/ejercicio-1` | `/Ejercicio 1 - ofuscado code` |
| **02** | Calculadora con `eval()` y pilas | `/ejercicio-2` | `/ejercicio-2(Ofuscado)` |
| **03** | Juego 'El Ahorcado' con Canvas | `/ejercicio-3` | `/Ejercicio 3 - ofuscado code` |

---

## Protocolo de Despliegue con Docker

[cite_start]Para garantizar la reproducibilidad, cada ejercicio está contenido en una imagen ligera basada en `nginx:alpine`[cite: 478, 493].

### Archivo Dockerfile (Template)
Se ha utilizado la siguiente configuración para generar los contenedores:
```dockerfile
# Imagen base ligera
FROM nginx:alpine
# Copiar archivos del ejercicio al servidor
COPY . /usr/share/nginx/html
# Exponer puerto 80
EXPOSE 80

laboratorio-02/
├── README.md                 # Documentación de despliegue y estructura
├── ejercicio-1/              # Código fuente (Desarrollo)
│   ├── index.html            # Estructura básica (body vacío) [cite: 711, 712]
│   ├── ejercicio01.js        # Lógica original del teclado aleatorio
│   └── Dockerfile            # Configuración Docker para este ejercicio
├── Ejercicio 1 - ofuscado code/
│   ├── index.html            # Apunta a ejercicio01.min.js
│   └── ejercicio01.min.js    # Código ofuscado [cite: 703]
├── ejercicio-2/              # Código fuente (Desarrollo)
│   ├── index.html
│   ├── ejercicio02.js        # Lógica de calculadora con eval() [cite: 746]
│   └── Dockerfile
├── ejercicio-2(Ofuscado)/
│   ├── index.html
│   └── ejercicio02.min.js
├── ejercicio-3/              # Código fuente (Desarrollo)
│   ├── index.html
│   ├── ejercicio03.js        # Lógica del ahorcado con Canvas [cite: 787]
│   └── Dockerfile
├── Ejercicio 3 - ofuscado code/
│   ├── index.html
│   └── ejercicio03.min.js

