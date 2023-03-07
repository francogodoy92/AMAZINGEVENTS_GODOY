import data from "./amazing.js";

let events = data.events;

console.log(events);

let div = document.getElementById("container-cards");
div.innerHTML = ``;

function renderCards(datos, contenedor) {
  contenedor.innerHTML = "";
  let eventosString = "";
  datos.forEach((event) => {
    eventosString += `<div class="card col-md-3 m-3">
    <img src="${event.image}" alt="Event Image">
        <h3>${event.name}</h3>   
        <p>${event.category}</p>
        <div class="item-card">
            <p>$${event.price}</p>
            <a class="btn" href="/pages/details.html?id=${event._id}" >View More</a>
        </div>
    </div>`;
  });
  contenedor.innerHTML = eventosString;
}

renderCards(events, div);

let categoryConteiner = document.getElementById("checkbox");
let categoryConteinerPadre = document.getElementById("form-father");

let categorias = Array.from(
  new Set(events.map((elemento) => elemento.category))
);

console.log(categorias);

function renderCheckboxs(category, conteiner) {
  let checkboxs = "";
  category.forEach((element) => {
    checkboxs += `<label class="text-white m-2" for="${element}">${element}</label>
   <input type="checkbox" name="category" value="${element}" id="${element}">`;
  });
  conteiner.innerHTML += checkboxs;
}

renderCheckboxs(categorias, categoryConteiner);

categoryConteinerPadre.addEventListener("change", (element) => {
  let filtradoPorCategoria = filtrar();
  console.log(filtradoPorCategoria);
  renderCards(filtradoPorCategoria, div);
});

function filtrarPorCategoria(eventos) {
  let checked = Array.from(
    document.querySelectorAll("input[type ='checkbox']:checked")
  ).map((element) => element.value);
  let arrayFiltrado = checked
    .map((value) =>
      eventos.filter((elemento) => {
        return elemento.category === value;
      })
    )
    .flat();
  if (checked.length == false) {
    return events;
  } else {
    return arrayFiltrado;
  }
}

let input = document.getElementById("input-text");

input.addEventListener("input", () => {
  let filtradoPorBusqueda = filtrar();
  renderCards(filtradoPorBusqueda, div);
});

function filtrarPorBusqueda(eventos, valueSearch) {
  return eventos.filter((evento) =>
    evento.name.toLowerCase().includes(valueSearch.toLowerCase())
  );
}

function filtrar() {
  let filtradoPorCategoria = filtrarPorCategoria(events, categorias);
  let filtradoPorBusqueda = filtrarPorBusqueda(
    filtradoPorCategoria,
    input.value
  );
  return filtradoPorBusqueda;
}
