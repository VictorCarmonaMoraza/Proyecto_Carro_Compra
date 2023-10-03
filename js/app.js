//Variables
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");

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
  console.log(curso);

  //Crear un objeto con el contenido del curso
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    // precioAnterior: curso.querySelector("p").textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1
  };
  console.table(infoCurso)
}
