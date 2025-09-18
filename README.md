🎉 Sorteo de Amigos

El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación desarrollando un programa sencillo que permita:

- Agregar nombres de amigos a una lista.

- Visualizar los amigos ingresados.

- Realizar un sorteo aleatorio para elegir un amigo.

🚀 Funcionalidades

* Agregar amigos:

    - Se escribe un nombre en el campo de texto y se añade al arreglo amigos.

    - Si el nombre está vacío, se muestra una alerta de error.

* Mostrar lista:

    - Cada vez que se agrega un amigo, la lista (`<ul>`) en el HTML se actualiza dinámicamente.

    - La lista se recorre con el método forEach.

* Limpiar campo:

    - Después de añadir un nombre, el campo de entrada se vacía automáticamente.

* Sortear amigo:

    - Si hay al menos un amigo en la lista, el sistema selecciona un índice aleatorio con

        ```
        let indice = Math.floor(Math.random() * amigos.length)
        ```

    - Se muestra el nombre del amigo sorteado en un elemento `<p>` en el HTML.

    - Si no hay amigos, se muestra una alerta indicando que no hay amigos para sortear.

📁 Estructura de Archivos
```
📦 sorteo-amigos
 ┣ 📜 index.html   # Estructura principal
 ┣ 📜 style.css    # (Opcional) Estilos para la interfaz
 ┗ 📜 app.js    # Lógica en JavaScript
 ┗ 📜 README.md    # Documentación del proyecto
```


- `index.html`: Contiene la estructura básica del HTML, incluyendo el campo de entrada, botones y la lista para mostrar los amigos.
- `app.js`: Contiene la lógica del programa, incluyendo las funciones para agregar amigos, actualizar la lista y sortear un amigo.
- `styles.css`: (opcional) Contiene estilos básicos para mejorar la apariencia del programa.


🛠️ Cómo usar

- Clona o descarga este repositorio.

- Abre index.html en tu navegador.

- Ingresa nombres en el campo de texto y pulsa el botón Agregar amigo.

- La lista de amigos se mostrará en pantalla.

- Pulsa el botón Sortear amigo para elegir uno al azar.

✨ Tecnologías utilizadas

- HTML5

- CSS3 (opcional para estilos)

- JavaScript (ES6+)