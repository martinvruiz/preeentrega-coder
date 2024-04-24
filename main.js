let userName = prompt('Ingresa tu nombre').toLowerCase()

if(userName !== undefined && userName !== " "){
    alert('Bienvenido ' + userName)
    let userNumber = parseFloat(prompt(userName + ` ingresa un numero para saber si es un numero par o impar`))
    do{
        if(userNumber % 2 == 0){
            alert("Es par")
            userNumber = parseFloat(prompt(userName + ` ingresa otro numero para saber si es un numero par o impar`))
        }else{
            alert("Es impar")
            userNumber = parseFloat(prompt(userName + ` ingresa otro numero para saber si es un numero par o impar`))
        }
        
        if(userNumber == NaN){
            break
        }
    }while(userNumber)
}