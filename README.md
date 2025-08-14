# Sobre el proyecto #
Es una aplicación donde el usuario puede agregar nombres y guardarlos en una lista. Luego, mediante un botón, se elige al azar uno de los nombres.

## ¿Como funciona? ##

**Agregar amigos**  
   - El usuario escribe un nombre en el campo de texto.
   - Al presionar el botón **"Adicionar"**, el nombre se agrega al arreglo de amigos.
   - La lista de amigos se actualiza automáticamente en la página para mostrar todos los nombres ingresados.

**Mostrar la lista**  
   - Cada vez que se agrega un nombre, se recorre el arreglo y se crea un elemento `<li>` por cada amigo.
   - La lista en pantalla se limpia antes de agregar los elementos para evitar duplicados.

**Sorteo aleatorio**  
   - Al presionar el botón **"Sortear Amigo"**, se selecciona un índice aleatorio del arreglo usando `Math.random()` y `Math.floor()`.
   - Se obtiene el nombre correspondiente a ese índice y se muestra en pantalla.

**Validaciones**  
   - No se permite agregar nombres vacíos.
   - Si se intenta sortear sin nombres en la lista, se muestra un mensaje de alerta.


