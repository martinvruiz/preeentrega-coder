let btn1 = document.getElementById("show")
let btn2 = document.getElementById("search")
let btn3 = document.getElementById("add")

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
let pais9 = new Pais("El Salvador", "-6","America")
let pais10 = new Pais("Guatemala", "-6","America")
let pais11 = new Pais("Honduras", "-6","America")
let pais12 = new Pais("Mexico", "-6","America")
let pais13 = new Pais("Nicaragua", "-6","America")
let pais14 = new Pais("Panama", "-5","America")
let pais15 = new Pais("Paraguay", "-4","America")
let pais16 = new Pais("Peru", "-5","America")
let pais17 = new Pais("Puerto Rico","-4","America")
let pais18 = new Pais("Uruguay","-3","America")
let pais19 = new Pais("Venezuela","-4","America")

// Lista con todos los objetos creados
let listaPais = [pais1,pais2,pais3,pais4,pais5,pais6,pais7,pais8,pais9,pais10,pais11,pais12,pais13,pais14,pais15,pais16,pais17,pais18,pais19]


window.onload = () => {
    const storedData = localStorage.getItem("paises");
    if(storedData){
        try {
            const parsedData = JSON.parse(storedData);
            if (Array.isArray(parsedData)) {
                listaPais = parsedData.map(item => new Pais(item.nombre, item.zonaHoraria, item.Continente));
            } else {
                throw new Error("Los datos almacenados no son un array");
            }
        } catch (error) {
            console.error("Error al analizar los datos del localStorage:", error);
        }
    }
}

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

            mostrarHora(pais.nombre,pais.zonaHoraria)
    })}else{
        Swal.fire({
            icon: "error",
            text: "No se encontro el pais",
        });
    }
}


function mostrarHora(nombre, zona) {
    let url = `https://api.timezonedb.com/v2.1/get-time-zone?key=4ARNU0YE6R30&format=json&by=zone&zone=${zona}`;


    fetch(url)
        .then(resp => {
            if (!resp.ok) {
                throw new Error('No se pudo obtener la hora de la API');
            }
            return resp.json();
        })
        .then(data => {
                const horaLocal = new Date(data.formatted);
                document.getElementById("horaLocal").innerText = `Hora local de ${nombre}: ${horaLocal.toLocaleString()}`;})
        .catch(error => {
            console.error(`error`, error);
            document.getElementById("horaLocal").innerText = `Error al mostrar el horario: ${error.message}`;
        });
}


btn2.addEventListener("click",filtroNombre)
// buscar por zona horaria

const agregarPais = document.getElementById("paisForm")

btn3.addEventListener("click", ()=>{

    let nombreForm = prompt("Nombre del pais")
    let zonaHorariaForm = prompt("Zona horaria del pais a agregar")
    let continenteForm = prompt("Continente del pais a agregar")

    if(!nombreForm || !zonaHorariaForm || !continenteForm){
        Swal.fire({
            icon: "error",
            text: "Ingrese datos por favor",
        });
        return
    }

    let PaisAgregado = listaPais.some(pais => pais.nombre === nombreForm)


    if(PaisAgregado){
        Swal.fire({
            icon: "error",
            text: "Ingrese un pais que no este en la lista!",
        });
    }else{
    let paisAgregado = new Pais (nombreForm, zonaHorariaForm, continenteForm)
    listaPais.push(paisAgregado)

    mostrarPais()
    
    let listaAgregados = document.getElementById("agregados")

    let paisElement = document.createElement("div")
    paisElement.textContent = ` ${nombreForm} / ${continenteForm} / ${zonaHorariaForm}`
    listaAgregados.appendChild(paisElement)

    localStorage.setItem("paises", JSON.stringify(listaPais));
    }


})