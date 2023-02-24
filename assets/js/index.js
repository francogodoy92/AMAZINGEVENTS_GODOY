let container = document.getElementById("container-cards");
let events = data.events;


function imprimirCard(array, contenedor) {
    for (let event of array) {
        let div = document.createElement("div");
        div.className = "card col-md-3 m-3"
        div.innerHTML += `
        <img src="${event.image}" alt="Event Image">
        <h2>${event.name}</h2>   
        <p>${event.description}</p>
        <div class="item-card">
            <p>$${event.price}</p>
            <a class="btn" href="./pages/details.html">View More</a>
        </div>
        `
        contenedor.appendChild(div)
    }
    
}

imprimirCard(events, container);


//CONSULTAR PARA QUE NO APAREZCA TODO EL TEXTO ASI NO SE MUEVE EL BUTTON, O MOVER EL BUTTON A LA ESQUINA INFERIOR DERECHA