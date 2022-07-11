const formulario = document.getElementById("presupuesto");

formulario.addEventListener("submit", validarFormulario);

function validarFormulario (event) {
    event.preventDefault();

    let form = event.target;

    let nombre = form.children[0].value.toUpperCase();
    let cantidadPersonas = Number(form.children[1].value);
    let dias = Number(form.children[2].value);
    let cochera = Number(form.children[3].value);

    console.log(nombre)
    console.log(cantidadPersonas)
    console.log(dias)
    console.log(cochera)

    // Tamaño de la cabaña

    const cabanas = ["SIMPLE", "DOBLE", "FAMILIAR"];
    let cabana = ""
    console.log(cabanas);

    switch(cantidadPersonas){
        case 1:
            cantidadPersonas = 2500;
            cabana = cabanas[0];               
            break;
        case 2:
            cantidadPersonas = 3500;
            cabana = cabanas[1];
            break;
        case 3:
            cantidadPersonas = 5000;
            cabana = cabanas[2];
            break;
        default:
            alert("tenes que elgir una cabaña")
            cantidadPersonas = isNaN;
            break;              
    }

    // Cochera

    const cocheras = [];

    switch(cochera){
        case 1:
            cochera = 500;
            cocheras.push("SI");
            break;
        case 2:
            cochera = 0;
            cocheras.push("NO");
            break;
        default:
            alert("No elegiste cochera")
            cochera = isNaN;
            break;              
    }

    console.log(cochera)
    console.log(cocheras)

    //  Reserva - Presupuesto

    if (nombre == "") {
        alert("No ingresaste tu nombre");
    }
    if (dias =="") {
        alert("Ingresa la cantiad de dias");
        dias = "NO";    
    }

    let presupuesto = (cantidadPersonas + cochera) * dias;

    
    
    let mensaje = document.getElementById("mensaje")

    if (isNaN(presupuesto)) {
        mensaje.innerText = "ALGO SALIO MAL, INTENTALO DE NUEVO O COMUNICATE CON NOSOTROS VIA MAIL";
    }else if (cochera == 500) {
        mensaje.innerText = "* " + nombre + ", SOLICITASTE UNA RESERVA, POR UNA CABAÑA "+cabana+ " CON COCHERA, EL PRESUPUESTO ES DE $ " + presupuesto;
    }else{
        mensaje.innerText = "* " + nombre + ", SOLICITASTE UNA RESERVA, POR UNA CABAÑA "+cabana+ " SIN COCHERA, EL PRESUPUESTO ES DE $ " + presupuesto;
    }


    // Objetos y arrays - Creando base de datos clientes

    const cliente = {nombre, cabana, dias, cocheras, presupuesto};

    const reserva = JSON.stringify(cliente);

    localStorage.setItem ("reserva", reserva);

    console.log(cliente)




}



















