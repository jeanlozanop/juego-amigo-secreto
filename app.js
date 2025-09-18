// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// crear un array para almacenar los nombres de los amigos
let amigos = [];

// función para agregar un amigo al array
function agregarAmigo() {
  let input = document.getElementById('amigo'); // Obtener el valor del campo de entrada
  let nombre = input.value.trim();  // .trim() elimina espacios en blanco al inicio y al final

  if (nombre !== "") {
    amigos.push(nombre);
    input.value = "";
    actualizarListaAmigos();
  } else {
    alert("Por favor, ingresa un nombre válido.");
  }
  limpiarCampo()
  console.log(amigos);
}

function limpiarCampo() { // Esta función limpia el campo de entrada del usuario
    document.getElementById('amigo').value = ''; // Limpia el valor del campo de entrada
    return;
}   

// función para actualizar la lista de amigos
function actualizarListaAmigos() {

  // Seleccionamos el <ul> y limpiamos su contenido
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = ""; // Limpiar la lista antes de actualizarla   

  // Recorremos el array y creamos un <li> para cada amigo
  // for (let i = 0; i < amigos.length; i++) {
  //   // Crear un nuevo <li>
  //   let item = document.createElement('li');
  //   // Asignar el texto al <li>
  //   item.textContent = amigos[i];
  //   // Agregar el <li> al <ul>
  //   lista.appendChild(item);
  // }

  // Otra forma de recorrer el array usando forEach
    amigos.forEach(function(amigo) {
      let item = document.createElement('li');
      item.textContent = amigo;
      lista.appendChild(item);
    });

  return;
}

// función para sortear un amigo
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos para sortear. Por favor, agrega al menos un amigo.");
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Genera un índice aleatorio, Math.floor redondea hacia abajo
  let amigoSorteado = amigos[indiceAleatorio]; // Obtiene el nombre del amigo sorteado
  // Busca en el HTML un elemento con el id="resultado" e Inserta dentro de ese elemento el texto:
  document.getElementById('resultado').innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
  return;
}

