const botones = document.querySelector('.box_numbers');
const resultado = document.getElementById('resultado')
const igual = document.getElementById('igual')
const prev_result = document.querySelector('.input')


let valor1=0
let valor2=0
let result=0

const staticValue = () =>{
    resultado.innerHTML = '0'
    prev_result.innerHTML = ""
}
staticValue()

botones.addEventListener('click', (e) => {
    num = e.target.value;
    if(num !== '='){

        if(num === "c"){
            staticValue()
        }
        
        if(resultado.innerHTML == '0'){
            resultado.innerHTML = num
        }else{
            resultado.innerHTML += num
        } 
    }

})


const operacion = (v) =>{
    console.log(resultado.innerHTML.length);
    let valor1 = resultado.innerHTML
    prev_result.innerHTML = valor1 + v


    if(v == '/'){
        
    } 
}



const total = (e) =>{
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
}


igual.addEventListener('click', () => total)
