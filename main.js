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

let usuario = parseInt(prompt("Ingrese opcion: \n1. Mostrar todos los paises \n2. Buscar por nombre de pais \n3. Buscar por zona horaria(GMT)"))

//funcion constructora de objetos
function Pais(nombre, zonaHoraria,continente){
    this.nombre = nombre
    this.zonaHoraria = zonaHoraria
    this.Continente = continente
}

let pais1 = new Pais("argentina", "-3", "America")
let pais2 = new Pais("bolivia", "-4","America")
let pais3 = new Pais("brasil", "-3","America")
let pais4 = new Pais("chile", "-3","America")
let pais5 = new Pais("colombia", "-5","America")
let pais6 = new Pais("costa rica", "-6","America")
let pais7 = new Pais("cuba", "-4","America")
let pais8 = new Pais("ecuador", "-5","America")
let pais9 = new Pais("el salvador", "-6","America")
let pais10 = new Pais("guatemala", "-6","America")
let pais11 = new Pais("honduras", "-6","America")
let pais12 = new Pais("mexico", "-5","America")
let pais13 = new Pais("nicaragua", "-6","America")
let pais14 = new Pais("panama", "-5","America")
let pais15 = new Pais("paraguay", "-4","America")
let pais16 = new Pais("peru", "-5","America")
let pais17 = new Pais("puertoRico","-4","America")
let pais18 = new Pais("uruguay","-3","America")
let pais19 = new Pais("venezuela","-4:30","America")

// Lista con todos los objetos creados
let listaPais = [pais1,pais2,pais3,pais4,pais5,pais6,pais7,pais8,pais9,pais10,pais11,pais12,pais13,pais14,pais15,pais16,pais17,pais18,pais19]


// Mostrar todos los objetos
if(usuario == 1){
listaPais.forEach(function(x){
    console.log(x)
})}

//Buscar un pais en particular

function filtroNombre(){
    let busqueda = prompt("Ingrese pais que quiere buscar").trim().toLowerCase()
    let resultado = listaPais.filter((Pais)=> Pais.nombre.includes(busqueda))

    if(busqueda.length > 0){
        console.log(resultado)
    }
}

// buscar por zona horaria

function filtroHorario(){
    let busqueda = prompt("Ingrese zona horaria que quiere buscar")
    let resultado = listaPais.filter((Pais)=> Pais.zonaHoraria.includes(busqueda))

    if(busqueda.length > 0){
        console.log(resultado)
    }
}


if(usuario == 2){
    filtroNombre()
}

if(usuario == 3){
    filtroHorario()
}