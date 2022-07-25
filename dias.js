// Dias 


const DateTime = luxon.DateTime;
const Interval = luxon.Interval;

document.getElementById('salida').style.visibility = "hidden";

let diaIngreso = document.getElementById('start');
let diaSalida = document.getElementById('finish');



diaIngreso.addEventListener('change', () => {
    const fechaIngreso = diaIngreso.value;  // toma la fecha elegida 
    const fechaIngresoArray = fechaIngreso.split("-"); // separa los valores separados por - para crear una array
    const [año, mes, dia] = fechaIngresoArray; // decontruye el array
  
    const a = Number(año);
    const m = Number(mes);
    const d = Number(dia);

    localStorage.setItem("diaIngreso", JSON.stringify(fechaIngresoArray));
    console.log(fechaIngresoArray)
    let diaI = DateTime.local (a,m,d)

    document.getElementById('salida').style.visibility = "visible";

    diaSalida.addEventListener('change', () => {
        const fechaSalida = diaSalida.value;  // toma la fecha elegida 
        const fechaSalidaArray = fechaSalida.split("-"); // separa los valores separados por - para crear una array
        const [año, mes, dia] = fechaSalidaArray; // decontruye el array

        const as = Number(año);
        const ms = Number(mes);
        const ds = Number(dia);

        localStorage.setItem("diaSalida", JSON.stringify(fechaSalidaArray));
        console.log(fechaSalidaArray)
        let diaS = DateTime.local (as,ms,ds)

        const diax = Interval.fromDateTimes(diaI,diaS)    
        console.log (diax.length('days'))
        
        localStorage.setItem("dias", JSON.stringify(diax.length('days')));

        
    })
})

let boton = document.getElementById("cancelar")
boton.addEventListener('click', () => {
    document.getElementById('salida').style.visibility = "hidden";
    localStorage.removeItem ("dias");
    localStorage.removeItem ("diaIngreso");
    localStorage.removeItem ("diaSalida");
})

