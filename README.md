# Sobre el proyecto #
Es una aplicación donde el usuario puede agregar nombres y guardarlos en una lista. Luego, mediante un botón, se elige al azar uno de los nombres.

## ¿Como funciona? ##

**Agregar amigos**  
   - El usuario escribe un nombre en el campo de texto. Al presionar el botón **"Agregar"**, el nombre se guarda en un array.
   - La lista de amigos se actualiza automáticamente en la página para mostrar todos los nombres ingresados.

**Sorteo aleatorio**  
   - Al presionar el botón **"Sortear Amigo"**, se selecciona un índice aleatorio del array. Se obtiene el nombre correspondiente a ese índice y se muestra en pantalla.

**Validaciones**  
   - No se permite agregar nombres vacíos.
   - Si se intenta sortear sin nombres en la lista, se muestra un mensaje de alerta.

## ¿Como funciona el codigo? ##
**Agregar nombres**
-El usuario ingresa el nombre en el campo de texto y presiona el boton **"Agregar"**
-Luego se llama a la función agregarAmigo()

