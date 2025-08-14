// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =[];

/// Funcion para limpiar la caja ///
function limpiarCaja(){
    let valorCaja = document.getElementById('amigo').value = '';;

}

//// Funcion para agregar los nombres a la lista /// 

function agregarAmigo() {
    let nombreamigo = document.getElementById('amigo').value.trim();
    if (nombreamigo === '') {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(nombreamigo);
        limpiarCaja();
    }
}

