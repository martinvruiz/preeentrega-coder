let userName = prompt('Ingresa tu nombre').toLowerCase()

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
