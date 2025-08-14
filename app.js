// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =[];

/// Agrega los nombres a la lista ///
function mostrarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i]; 

        lista.appendChild(li);
    }
}

/// Funcion para limpiar la caja ///
function limpiarCaja(){
    let valorCaja = document.getElementById('amigo').value = '';

}

//// Funcion para agregar los nombres a la lista /// 

function agregarAmigo() {
    let nombreamigo = document.getElementById('amigo').value.trim();
    if (nombreamigo === '') {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(nombreamigo);
        limpiarCaja();
        mostrarLista(); 
    }
}

/// Funcion para sortear amigos ///
function sortearAmigo() {

    if (amigos.length > 0) {
    let nombre_aleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[nombre_aleatorio];
    document.getElementById('resultado').innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
    }else {
        alert("Lista vacia");
}

}

