// Array de objetos para agregar información al DOM.

const vehiculos = [{id: "1", nombre:"Peugeot 308", imagen:"308.jpeg", precio:"$4500", propietario:"Juan Salinas",contacto:"2613374046"},{id: "2" , nombre:"Toyota Corolla", imagen:"corolla.jpeg", precio:"$5500", propietario:"Rosa Colombo",contacto:"2614375046"},{id: "3" ,nombre:"Volkswagen Polo", imagen:"polo.jpeg", precio:"$3900", propietario:"Marcos Acuña",contacto:"2615374456"},{id:"4",nombre:"Volkswagen Vento", imagen:"vento.jpeg", precio:"$5500",propietario: "María Allianz",contacto:"2616653045"},{id:"5", nombre:"Nissan Versa", imagen:"versa.jpeg", precio:"$6000", propietario:" Mario Peña",contacto:"2615624145"},{id:"6", nombre:"Honda HR-V", imagen:"honda.jpeg", precio:"$5800", propietario:" Esteban Flores",contacto:"2617453157"}];


// Se recorre el array con for..of
for (const producto of vehiculos) {
    $("#app").append(`<div class='col-md-3 col-sm-1 m-3'>
                    <div class='card'>
                    <div><h4 class='text-center text-dark bg-light'>${producto.nombre}</h4></div>
                    <img src="./img/${producto.imagen}"></img>
                    <div class='col-12'><p class='text-dark p-1 text-center'>El precio por día es de:${producto.precio}</p></div>
                    <button id="btn${producto.id}">Alquilar</button>
                    </div>`);
    
    //Se asocia el evento a botón recién creado.
    $(`#btn${producto.id}`).on('click', function () {
        console.log(`Se alquiló: ${producto.nombre}`);
        alert("Gracias por interesarte en la unidad: " + producto.nombre+" .Para cerrar el proceso, debes contactarte con: "+ producto.propietario+" al "+producto.contacto);
    });
}

//Se agrega un formulario con jQuery en un div específico del DOM.
$("#reservas").append(`<form id="myForm">
                    <label for='campo1'>Nombre y Apellido</label> 
                    <input id='campo1' type="text" placeholder="Ej: Santiago Molina">
                    <label for='campo2'>Fecha de retiro de la unidad:</label> 
                    <input id='campo2' type="date">
                    <label for='campo3'>Fecha de devolución:</label> 
                    <input id='campo3' type="date">
                    <label for='campo4'>Vehículo a reservar:</label> 
                    <select id='campo4'>
                    <option value="Peugeot-308">Peugeot 308</option>
                    <option value="Toyota-Corolla">Toyota Corolla</option>
                    <option value="Volkswagen-Polo">Volkswagen Polo</option>
                    <option value="Volkswagen-Vento">Volkswagen Vento</option>
                    <option value="Nissan-Versa">Nissan Versa</option>
                    <option value="Honda-HRV">Honda HR-V</option>
                    </select>
                    <input id='envio_form' type="button" value='Reservar'>
                </form>`)

$("#myForm").submit(function (e) {
    e.preventDefault();
});

//Se asocia el evento click al formulario con botón del formulario
$("#envio_form").click(function() {
    console.log($("#campo1").val());
    console.log($("#campo2").val());
    console.log($("#campo3").val());
    console.log($("#campo4").val());
    $("#myForm").submit();
})


$( "#envio_form" ).click(function() {
    alert( "Su reserva fue registrada correctamente"  );
});


/* Agrego animaciones con JQuery: */

$("#titulo").animate({  opacity:'0.8',
                        height:'80px',
                        width:'550px'}, 
                        "slow",             
                        function(){        
                            console.log("finalizó la animación");
                        });


function removeElementWithAnimation(id) {
    let elemento = $("#" + id).fadeOut("slow");
}

$("#reserva1").click(function() {
    removeElementWithAnimation("aviso");
});


function mostrarMensaje(id) {
    let elemento = $("#" + id).fadeIn("slow");
}

$("#reserva2").click(function() {
    mostrarMensaje("aviso");
});

                    