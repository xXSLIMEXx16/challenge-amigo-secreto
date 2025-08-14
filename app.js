// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =[];

function agregarAmigo() {
    let nombreamigo = document.getElementById('amigo').value.trim();
    if (nombreamigo === '') {
        alert("Por favor, inserte un nombre.");
    } else {
        // Aquí pones lo que quieres hacer con el nombre válido
        console.log("Nombre ingresado:", nombreamigo);
    }
}

