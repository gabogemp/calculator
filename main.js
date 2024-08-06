// Para realizar este proyecto, podemos crear una única función que realice todas las operaciones de cálculo o bien crear funciones para cada una de las operaciones de suma, resta, multiplicación, etc.

// Es más interesante crear una función separada para cada cosa, llamémoslos pequeños módulos. Estos módulos, podrán ser empleados por separado sin depender de los otros módulos. Es decir, si en cualquier parte del código necesitas que se realice una suma, llamas a la función suma y no a todas las operaciones si estuvieran en la misma función.

const suma = (a,b) => a+b

const resta = (a,b) => a-b

const multiplica = (a,b) => a*b

const divide = (a, b) => {
    if (b === 0) {
        return 'Error: División por cero';
    } else {
        return a / b;
    }
};

let action = Number(prompt('Escoja: 1-suma 2-resta 3-multiplicación 4-division'))

let num1 = Number(prompt('Ingrese el 1er numero'))
let num2 = Number(prompt('Ingrese el 2do numero'))

let total

if (action === 1){
    total = suma(num1,num2)
}

if (action === 2){
    total = resta(num1,num2)    
}

if (action === 3){
    total = multiplica(num1,num2)    
}

if (action === 4){
    total = divide(num1,num2)    
}

document.write(total)