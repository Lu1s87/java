const formulario = document.getElementById("presupuesto");

formulario.addEventListener("submit", validarFormulario);

function validarFormulario (event) {
    event.preventDefault();

    let form = event.target;

    let nombre = form.children[0].value.toUpperCase();
    let mail = form.children[1].value;    
    let cantidadPersonas = Number(form.children[2].value);
    let cochera = Number(form.children[3].value);

    console.log(nombre);
    console.log(mail);
    console.log(cantidadPersonas);
    console.log(cochera);

    // Seccion cabaña

    const cabanas = ["SIMPLE", "DOBLE", "FAMILIAR"];
    let cabana = ""

    let avisoCaba = document.getElementById("checkCabana");

    switch(cantidadPersonas){
        case 1:
            cantidadPersonas = 2500;
            cabana = cabanas[0];
            avisoCaba.innerText = "";               
            break;
        case 2:
            cantidadPersonas = 3500;
            cabana = cabanas[1];
            avisoCaba.innerText = "";
            break;
        case 3:
            cantidadPersonas = 5000;
            cabana = cabanas[2];
            avisoCaba.innerText = "";
            break;
        default:            
            avisoCaba.innerText = "* seleccione una cabaña";
            cantidadPersonas = isNaN;
            break;              
    }

    // Seccion cochera

    const cocheras = [];

    let avisoCoche = document.getElementById("checkCoche");

    switch(cochera){
        case 1:
            cochera = 500;
            cocheras.push("SI");
            avisoCoche.innerText = "";
            break;
        case 2:
            cochera = 0;
            cocheras.push("NO");
            avisoCoche.innerText = "";
            break;
        default:            
            avisoCoche.innerText = "* seleccione una opción de cochera";
            cochera = isNaN;
            break;              
    }

    // Validacion nombre, dias, mail 

    let dias = JSON.parse(localStorage.getItem("dias"));
    
    let avisoNombre = document.getElementById("checkNombre");
    nombre === "" ? (avisoNombre.innerText = "* ingrese un nombre", dias = "NO" ) :  avisoNombre.innerText = "";

    let avisoMail = document.getElementById("checkMail");
    mail === "" ? (avisoMail.innerText = "* Ingrese un e-mail", dias = "NO") :  avisoMail.innerText = "";

    let avisoDias = document.getElementById("checkDias");
    dias == null ? (avisoDias.innerText = "* selecione una fecha", dias = "NO") : avisoDias.innerText = "";

    //  Reserva - Presupuesto

    let presupuesto = (cantidadPersonas + cochera) * dias;
   
    let mensaje = document.getElementById("mensaje")

    if (isNaN(presupuesto)) {
        mensaje.innerText = "ALGO SALIO MAL, INTENTALO DE NUEVO O COMUNICATE CON NOSOTROS VIA MAIL";
    }else if (cochera == 500) {
        mensaje.innerText = "* " + nombre + ", SOLICITASTE UNA RESERVA DE " +dias+ " DIAS, DE UNA CABAÑA "+cabana+ " CON COCHERA, EL PRESUPUESTO ES DE $ " + presupuesto+". DENTRO DE POCO NOS COMUNICAREMOS CON VOS BRINDANDOTE LOS DATOS DE PAGO PARA CONFIRMAR LA RESERVA";
    }else{
        mensaje.innerText = "* " + nombre + ", SOLICITASTE UNA RESERVA DE " +dias+ " DIAS, DE UNA CABAÑA "+cabana+ " SIN COCHERA, EL PRESUPUESTO ES DE $ " + presupuesto+". DENTRO DE POCO NOS COMUNICAREMOS CON VOS BRINDANDOTE LOS DATOS DE PAGO PARA CONFIRMAR LA RESERVA";
    }


    const ingreso = JSON.parse(localStorage.getItem("diaIngreso"));
    const salida = JSON.parse(localStorage.getItem("diaSalida"));

    const cliente = {nombre, ingreso, salida, cabana, dias, cocheras, presupuesto};
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
        title: "Pedido de reserva",
        body: cliente,
        userId: 1,
        }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    })

    .then((response) => response.json())
    .then((data) => console.log(data))    

    localStorage.setItem("reserva", JSON.stringify(cliente));

}

const reservas = document.getElementById("reserva");

fetch("/reservas.json")
    .then( (response) => response.json() )
    .then( (data) => {
        mostrarReservas(data);
    } )


const mostrarReservas = (data) => {
    data.forEach(post => {
        const li = document.createElement("li");
        li.innerHTML = `                    
                        <td>Ingreso: ${post.fechaIngreso} ---</td>
                        <td>Salida: ${post.fechaSalida} ---</td>
                        <td>Cabaña: ${post.cabana}</td>
                                                 
        `
        reservas.append(li)
    });
}

















