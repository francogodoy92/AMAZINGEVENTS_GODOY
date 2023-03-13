let tdUno = document.getElementById("tdUno")
let tdDos = document.getElementById("tdDos")
let tdTres = document.getElementById("tdTres")



fetch('../assets/amazing.json')
.then(response => response.json())
.then(data => {
    const datos = data
    console.log(datos)
    mayorPorcentaje(datos.events, tdUno)
    menorPorcentaje(datos.events, tdDos)
    mayorCapacidad(datos.events, tdTres)
    let upcomingEvents = (datos.events).filter(function (event) {
        return event.date >= data.currentDate;
      });
      let pastEvents = (datos.events).filter(function (event) {
        return event.date < data.currentDate;
      });
      console.log(pastEvents)
      console.log(upcomingEvents)
})
.catch(error => console.error(error));

function mayorPorcentaje(array, container){
    let arrayConAsistencias = [...array.filter(element => element.assistance)]
    let arrayMayorPorcentaje = []
    arrayConAsistencias.forEach(element => {
        let porcentaje = element.assistance / element.capacity * 100 
        console.log(porcentaje)
        if (porcentaje > 94){
            return arrayMayorPorcentaje.push(`${element.name}`)
        }
    })
    
    console.log(arrayMayorPorcentaje)
    container.innerHTML = `<td>${arrayMayorPorcentaje}</td>`
}

function menorPorcentaje(array, conteiner){
    let arrayConAsistencias = [...array.filter(element => element.assistance)]
    let arrayMenorPorcentaje = []
    arrayConAsistencias.forEach(element => {
        let porcentaje = element.assistance / element.capacity * 100 
        console.log(porcentaje)
        if (porcentaje < 70){
            return arrayMenorPorcentaje.push(`${element.name}`)
        }
    })
    
    console.log(arrayMenorPorcentaje)
    conteiner.innerHTML = `<td>${arrayMenorPorcentaje}</td>`

}

function mayorCapacidad(array, conteiner) {
  let mayorCapacidad = 0;
  let eventoConMayorCapacidad = '';  
  array.forEach(element => {
    if (element.capacity > mayorCapacidad) {
      mayorCapacidad = element.capacity;
      eventoConMayorCapacidad = element.name;
    }
  });

  conteiner.innerHTML = `<td>${eventoConMayorCapacidad}</td>`;
}

let upcomingContainer = document.getElementById("upcoming-container")
let pastContainer = document.getElementById("past-container")









/* function crearCategoriasTablaUpcoming(events, container) {
  let html = '';
  events.forEach(function(cat) {
    html += `
      <tr>
        <td>${cat.category}</td>
        <td>${cat.estimate * cat.price}</td>
        <td>${((cat.estimate * 100 )/ cat.capacity).toFixed(2)}</td>
      </tr>
    `;
  });
  container.innerHTML = html;
}
 */

/* function crearCategoriasTablaUpcoming(category, container) {
    let html = '';
    for (let i = 0; i < category.length; i++) {
      html += `
        <tr>
          <td>${category[i].category}</td>
          <td>${category[i].estimate * category[i].price}</td>
          <td>${((category[i].assistance * 100 )/ category[i].capacity).toFixed(2)}</td>
        </tr>
      `;
    }
    container.innerHTML = html;
  }
   */
