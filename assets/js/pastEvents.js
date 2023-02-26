let events = data.events;

const cards = document.createDocumentFragment();

let container = document.getElementById("container-cards");

let oldEvents = events.filter((events) => events.date < data.currentDate);

function imprimirCard(array, contenedor) {
    for (let event of array) {
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

imprimirCard(oldEvents, container);
