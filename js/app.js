//Variables
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];

cargarEventListeners();
//Registrar todos los eventos
function cargarEventListeners() {
  //Cuandpo agregas un curso presionando "Agregar al carrito"
  //if(listaCursos){
  listaCursos.addEventListener("click", agregarCurso);
  //}
}

//Funciones
function agregarCurso(e) {
  e.preventDefault();

  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    //console.log(e.target.parentElement.parentElement);

    leerDatosCurso(cursoSeleccionado);
  }
}

//Lee el contenido del html al que le dimos click y extare la informacion del curso
function leerDatosCurso(curso) {
  //console.log(curso);

  //Crear un objeto con el contenido del curso
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    // precioAnterior: curso.querySelector("p").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  //Agrega elementos al arreglo del carrito
  articulosCarrito = [...articulosCarrito, infoCurso];
  carritoHTML();

  console.log(articulosCarrito);
}

//Muestra el carrito de compras  en el HTML
function carritoHTML() {
  //Limpiar el HTML
  limpiarHTML();

  //Recorre el carrito y genera el HTML
  articulosCarrito.forEach((curso) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>
        ${curso.titulo}
        </td>`;

    //Agrega el HTML del carrito en el body
    contenedorCarrito.appendChild(row);
  });
}

//Elimina los cursos de tbody
function limpiarHTML() {
  //Forma lenta
  contenedorCarrito.innerHTML = "";

  //Forma rapida, MIentras haya un hijo que la condicion se cumpla
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
