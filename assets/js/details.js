import data from "./amazing.js";

const events = data.events;

const queryString = location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const eventsId = events.find(element => element._id == id)


const details = document.getElementById("details-conteiner")

details.innerHTML = `<img src="${eventsId.image}" alt="${eventsId.name}">
<div>
    <h2>${eventsId.name}</h2>
    <p>${eventsId.description}</p>
    <p>${eventsId.place}</p>
    <p>${eventsId.date}</p>
    <p>$${eventsId.price}</p>
</div>
`
