const botones = document.querySelector('.box_numbers');
const resultado = document.getElementById('resultado')
const igual = document.getElementById('igual')
const prev_result = document.querySelector('.input')

let valores=[]
let valor1=0
let valor2=0
let valor3=0
let operation;
let result=0

const staticValue = () =>{
    valores.length = 0
    resultado.innerHTML = '0'
    prev_result.innerHTML = ""
}
staticValue()

botones.addEventListener('click', (e) => {
    num = e.target.value;
    let rej = /[-+/x]/

    if(num === "c"){
        staticValue()
    }
    if(num !== '=' && num !== 'c'){
        
        if(resultado.innerHTML == '0' || prev_result.innerHTML.split(' ').includes('=')){ 
            if(rej.test(num.split())){
                valores.length = 0
                let valor1 = resultado.innerHTML
                operacion(num)
                operation = num
                prev_result.innerHTML = (result == 0)? valor1 +' '+ num : result +' '+ num 
            }else{
                valores.length = 0
                resultado.innerHTML = num
                prev_result.innerHTML = ""
            }
        }else{
            if(rej.test(num.split())){
                let valor1 = resultado.innerHTML
                operacion(num)
                operation = num
                prev_result.innerHTML = (result == 0)? valor1 +' '+ num : result +' '+ num 
            }else{
                if(valores[0] == resultado.innerHTML){
                    resultado.innerHTML = num
                }else{
                    resultado.innerHTML += num
                }
            }
        }
    }
})


const operacion = (o) =>{
    valores.push(resultado.innerHTML);

    valor2 = parseInt(valores[valores.length - 2])
    valor3 = parseInt(valores[valores.length - 1])
    
    if(valores.length-1 !== 0){
        if(o == '+'){
            result = valor2 + valor3
            valores.length=0
            resultado.innerHTML = result;
        }else if(o == '-'){
            result = valor2 - valor3
            valores.length=0
            resultado.innerHTML = result;
        }else if(o == 'x'){
            result = valor2 * valor3
            valores.length=0
            resultado.innerHTML = result;
        }else if(o == '/'){
            result = valor2 / valor3
            valores.length=0
            resultado.innerHTML = result;
        }
    }
}



const total = (e) =>{
    valores.push(resultado.innerHTML);

    valor2 = parseInt(valores[valores.length - 2])
    valor3 = parseInt(valores[valores.length - 1])
    
    if(operation == '+') {
        var suma = valor2 + valor3
        prev_result.innerHTML += ` ${valor3} =`
        resultado.innerHTML = suma;
    }else if(operation == '-') {
        var resta = valor2 - valor3
        prev_result.innerHTML += ` ${valor3} =`
        resultado.innerHTML = resta;
    }else if(operation == 'x') {
        var multi = valor2 * valor3
        prev_result.innerHTML += ` ${valor3} =`
        resultado.innerHTML = multi;
    }else if(operation == '/') {
        var division = valor2 / valor3
        prev_result.innerHTML += ` ${valor3} =`
        resultado.innerHTML = division;
        if(valor3 == 0){
            return resultado.innerHTML= "<spam style='font-size: 18px'>No se puede dividir por 0</spam>"
        }
    }
}


igual.addEventListener('click', () => total())
