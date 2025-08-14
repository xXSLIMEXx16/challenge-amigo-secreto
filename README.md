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

## ¿Como funciona el código? ##
**como se agregan nombres** 

El usuario ingresa el nombre en el campo de texto y presiona el botón **"Agregar"**, el cual llama a la función `agregarAmigo()`. Esta función verifica el contenido del campo de texto:

Si está vacío, muestra una alerta con el mensaje: **"Por favor, inserte un nombre."**. En caso contrario, toma el texto ingresado y lo agrega al array llamado **amigos[]**. Luego llama a otras dos funones: 

-`limpiarCaja()`: Esta función lo que hace es inicializar el campo de texto.

-`mostrarLista()` : Esta funcíon lo que hace es mostrar en pantalla todos los nombres que estan guardados en el array **amigos[]**

**como se elige un nombre al azar**

El usuario una vez que presione el botón **"Agregar"** se llama a la función `sortearAmigo()`: 

-Compara si el array **amigos[]** tiene elementos, si tiene, selecciona uno al azar con `Math.floor(Math.random() * amigos.length)` y muestra su nombre en pantalla. En caso contrario que no tenga ningun elemento muestra una alerta con lo siguiente **"lista vacía"**

