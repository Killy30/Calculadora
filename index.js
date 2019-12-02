const botones = document.getElementById('botones');
const resultado = document.getElementById('resultado')
const igual = document.getElementById('igual')



botones.addEventListener('click', (e) => {
    var valor = e.target.value;
    resultado.innerHTML += valor;
    
    if(valor === "c"){
        resultado.innerHTML = ""
    }
})

igual.addEventListener('click', () => {
    
    var resul = resultado.innerHTML;
    
    var arr = resul.split('+',2)
    var res = resul.split('-',2)
    var mul = resul.split('x',2)
    var div = resul.split('/',2)
    
    
    if(resul.indexOf("+") !== -1) {
        var suma = parseInt(arr[0]) + parseInt(arr[1])
        resultado.innerHTML = suma;
    }else if(resul.indexOf("-") !== -1) {
        var resta = parseInt(res[0]) - parseInt(res[1])
        resultado.innerHTML = resta;
    }else if(resul.indexOf("x") !== -1) {
        var multi = parseInt(mul[0]) * parseInt(mul[1])
        resultado.innerHTML = multi;
    }else if(resul.indexOf("/") !== -1) {
        var division = parseInt(div[0]) / parseInt(div[1])
        resultado.innerHTML = division;
        if(parseInt(div[1]) == 0){
            return resultado.innerHTML= "No se puede"
        }
    }
    
})

