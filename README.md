# Laboratorio 02: JavaScript en el Cliente y Despliegue con Docker

## Información del Grupo
* **RONALD WILMER MANRIQUE SUPANTA**
* **MANUEL DJINS VALDIVIA FLORES**
* **DIEGO JOAQUÍN CAHUANA VERA**

**Asignatura:** Desarrollo de Aplicaciones Web  
**Semestre:** III  
**Escuela:** Ingeniería de Sistemas - UNSA  

---

## Descripción del Proyecto
Este repositorio contiene la resolución de los ejercicios avanzados de JavaScript nativo, enfocados en la manipulación dinámica del DOM y la gestión de eventos sin contenido HTML predefinido. Para el despliegue, se ha utilizado una arquitectura de contenedores basada en Docker con un servidor web Apache configurado mediante VirtualHosts.

### Ejercicios Incluidos:
1. **Ejercicio 1:** Implementación de un teclado numérico aleatorio y sistema de validación de Captcha para entornos bancarios.
2. **Ejercicio 2:** Cree una calculadora básica, como la de los sistemas operativos, que utilice la función eval().
3. **Ejercicio 3:** Cree una versión del juego 'el ahorcado' que grafique con canvas, paso a paso, desde el evento onclick()
en los botones.

---

## Protocolo de Despliegue

### Requisitos Previos
* Tener instalado [Docker Desktop](https://www.docker.com/products/docker-desktop/).
* Haber configurado el archivo `hosts` del sistema.

### Pasos para la Ejecución
1. **Configurar el Host local:**
   Añadir la siguiente línea al archivo de hosts de su sistema operativo (`C:\Windows\System32\drivers\etc\hosts` en Windows):
   ```text
   127.0.0.1 ejercicios.local
