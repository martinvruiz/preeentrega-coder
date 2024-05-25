//Primer Preentrega

/*let userName = prompt('Ingresa tu nombre').toLowerCase()

if(userName !== ""){
    alert('Bienvenido ' + userName)
    let userNumber = parseFloat(prompt(userName + ` ingresa un numero para saber si es un numero par o impar`))
    do{
        if(userNumber % 2 == 0){
            alert("Es par")
            userNumber = parseFloat(prompt(userName + ` ingresa otro numero para saber si es un numero par o impar`))
            userNumberLog()
        }else{
            alert("Es impar")
            userNumber = parseFloat(prompt(userName + ` ingresa otro numero para saber si es un numero par o impar`))
            userNumberLog()
        }
        
        if(userNumber == NaN){
            break
        }
        function userNumberLog(){
            console.log(userNumber)
        }
    }while(userNumber)
}else{
    userName = prompt('Incorrecto, ingresar uno nuevo').toLowerCase()
}
*/

//Segunda Preentrega

let btn1 = document.getElementById("show")
let btn2 = document.getElementById("search")
let btn3 = document.getElementById("add")

/*let usuario = parseInt(prompt("Ingrese opcion: \n1. Mostrar todos los paises \n2. Buscar por nombre de pais \n3. Buscar por zona horaria(GMT)"))*/

//Funcion para que el usuario pueda elegir nuevamente una opcion
function opciones(){
    usuario = parseInt(prompt("Ingrese opcion: \n1. Mostrar todos los paises \n2. Buscar por nombre de pais \n3. Buscar por zona horaria(GMT)"))
}


//funcion constructora de objetos
function Pais(nombre, zonaHoraria,continente){
    this.nombre = nombre
    this.zonaHoraria = zonaHoraria
    this.Continente = continente
}

let pais1 = new Pais("Argentina", "-3", "America")
let pais2 = new Pais("Bolivia", "-4","America")
let pais3 = new Pais("Brasil", "-3","America")
let pais4 = new Pais("Chile", "-3","America")
let pais5 = new Pais("Colombia", "-5","America")
let pais6 = new Pais("Costa rica", "-6","America")
let pais7 = new Pais("Cuba", "-4","America")
let pais8 = new Pais("Ecuador", "-5","America")
let pais9 = new Pais("El salvador", "-6","America")
let pais10 = new Pais("Guatemala", "-6","America")
let pais11 = new Pais("Honduras", "-6","America")
let pais12 = new Pais("Mexico", "-5","America")
let pais13 = new Pais("Nicaragua", "-6","America")
let pais14 = new Pais("Panama", "-5","America")
let pais15 = new Pais("Paraguay", "-4","America")
let pais16 = new Pais("Peru", "-5","America")
let pais17 = new Pais("Puerto Rico","-4","America")
let pais18 = new Pais("Uruguay","-3","America")
let pais19 = new Pais("Venezuela","-4:30","America")

// Lista con todos los objetos creados
let listaPais = [pais1,pais2,pais3,pais4,pais5,pais6,pais7,pais8,pais9,pais10,pais11,pais12,pais13,pais14,pais15,pais16,pais17,pais18,pais19]


// Mostrar todos los objetos
function crearPais (pais){
    let addPais = document.createElement("div");
    addPais.innerHTML = `<p class="pais-container">${pais.nombre} / ${pais.Continente} / ${pais.zonaHoraria}</p>`;
    return addPais;
}

function mostrarPais(){
    const container = document.getElementById("paises");
    container.innerHTML = "";
    
    listaPais.forEach(pais => {
        const divPais = crearPais(pais);
        container.appendChild(divPais);
    }) 
}
btn1.addEventListener("click", mostrarPais)

//Buscar un pais en particular

function filtroNombre(){
    const container = document.getElementById("paises");
    container.innerHTML = "";

    let busqueda = prompt("Ingrese pais que quiere buscar").trim().toLowerCase()

    const usuarioBusqueda = listaPais.filter(pais => pais.nombre.toLowerCase().includes(busqueda))
    if (usuarioBusqueda.length > 0) {
        usuarioBusqueda.forEach(pais => {
            const divPais = crearPais(pais);
            container.appendChild(divPais);
    })}else{
        alert("No se encontro el pais")
    }
}


btn2.addEventListener("click",filtroNombre)
// buscar por zona horaria

const agregarPais = document.getElementById("paisForm")

btn3.addEventListener("click", (e)=>{

    let nombreForm = prompt("Nombre del pais")
    let zonaHorariaForm = prompt("Zona horaria del pais a agregar")
    let continenteForm = prompt("Continente del pais a agregar")

    let PaisAgregado = listaPais.some(pais => pais.nombre === nombreForm)


    if(PaisAgregado){
        alert("Ingrese un pais que no este en la lista")
    }else{
    let paisAgregado = new Pais (nombreForm, zonaHorariaForm, continenteForm)
    listaPais.push(paisAgregado)
    
    let listaAgregados = document.getElementById("agregados")

    let paisElement = document.createElement("div")
    paisElement.textContent = ` ${nombreForm} / ${continenteForm} / ${zonaHorariaForm}`
    listaAgregados.appendChild(paisElement)
    }
})