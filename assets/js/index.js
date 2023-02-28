const events = data.events;

const cards = document.createDocumentFragment();

let container = document.getElementById("container-cards");

function imprimirCard(array, contenedor) {
  for (let event of array) {
    cards.innerHTML = "";
    let div = document.createElement("div");
    div.className = "card col-md-3 m-3";
    div.innerHTML += `
        <img src="${event.image}" alt="Event Image">
        <h3>${event.name}</h3>   
        <p>${event.category}</p>
        <div class="item-card">
            <p>$${event.price}</p>
            <a class="btn" href="./pages/details.html">View More</a>
        </div>
        `;
    cards.appendChild(div);
  }
  contenedor.appendChild(cards);
}

imprimirCard(events, container);

let categoryContainer = document.getElementById("checkbox");
let categoryContainerPadre = document.getElementById("form-father");
let categorias = Array.from(
  new Set(events.map((elemento) => elemento.category))
);

const check = document.createDocumentFragment();

function renderCheckboxs(category) {
  let checkboxs = document.createElement("fieldset");
  category.forEach((element) => {
    checkboxs.innerHTML += `<label class="text-white m-2" for="${element}">${element}</label>
    <input type="checkbox" name="category" value="${element}" id="${element}">`;
    check.appendChild(checkboxs);
  });
  categoryContainer.appendChild(check);
}
renderCheckboxs(categorias);

/* function filtrarPorCategoria(eventos){
  let checked = (Array.from(document.querySelectorAll("input[type ='checkbox']:checked")).map(element => element.value));
  let arrayFiltrado = checked.map(value => eventos.filter(elemento => {elemento.category === value})).flat();
  if (checked.length == false) {
    return events;
  } else {
    return arrayFiltrado;
  }
}
 */