// Elementos
// =========================
// ELEMENTOS
// =========================

const formulario = document.getElementById("formulario");
const carga = document.getElementById("carga");
const caos = document.getElementById("caos");
const avatar = document.getElementById("avatar");

const btnComenzar = document.getElementById("btnComenzar");

const titulo = document.getElementById("tituloCarga");
const subtitulo = document.getElementById("subtitulo");
const progreso = document.getElementById("progreso");
const porcentaje = document.getElementById("porcentaje");

const video = document.getElementById("avatar-video");

// =========================
// MENSAJES
// =========================

const mensajes = [
    {
        p: 10,
        titulo: "Preparando demostración...",
        sub: "Inicializando recursos"
    },
    {
        p: 35,
        titulo: "Analizando información...",
        sub: "Procesando datos"
    },
    {
        p: 60,
        titulo: "Verificando configuración...",
        sub: "Casi terminamos"
    },
    {
        p: 85,
        titulo: "Finalizando...",
        sub: "Espere un momento"
    },
    {
        p: 100,
        titulo: "Demostración lista",
        sub: ""
    }
];

// =========================
// BOTÓN
// =========================

btnComenzar.addEventListener("click", () => {

    formulario.style.display = "none";

    carga.style.display = "flex";

    iniciarCarga();

});

// =========================
// CARGA
// =========================

function iniciarCarga() {

    let valor = 0;

    const intervalo = setInterval(() => {

        valor++;

        progreso.style.width = valor + "%";
        porcentaje.textContent = valor + "%";

        mensajes.forEach(item => {

            if (valor === item.p) {

                titulo.textContent = item.titulo;
                subtitulo.textContent = item.sub;

            }

        });

        if (valor >= 100) {

            clearInterval(intervalo);

            setTimeout(() => {

                mostrarCaos();

            }, 1500);

        }

    }, 70);

}

// =========================
// PANTALLA NEGRA
// =========================

function mostrarCaos() {

    carga.style.display = "none";

    caos.style.display = "flex";

    setTimeout(() => {

        caos.style.display = "none";

        mostrarAvatar();

    }, 4000);

}

// =========================
// AVATAR
// =========================

function mostrarAvatar() {

    avatar.style.display = "flex";

    video.play().catch(() => {});

}