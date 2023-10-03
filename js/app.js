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
    console.log(e.target);
  }
}
