import data from "./amazing.js";

const events = data.events;

const queryString = location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const eventsId = events.find(element => element._id == id)


const details = document.getElementById("details-conteiner")

details.innerHTML = `<img src="${eventsId.image}" alt="${eventsId.name}">
<div>
    <h2 class="detailstitle">${eventsId.name}</h2>
    <p class="detailstext">${eventsId.description}</p>
    <p class="detailstext">${eventsId.place}</p>
    <p class="detailstext">${eventsId.date}</p>
    <p class="detailsprice">$${eventsId.price}</p>
</div>
`
