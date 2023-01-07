// переменная  

// список зарезервированных слов (нельзя использовать для названия переменных)
// await, break, case, catch, class, const, continue, debugger, 
// default, delete, do, else, enum, export, extends, false, finally, 
// for, function, if, import, in, instanceof, new, null, return, super, 
// switch, this, throw, true, try, typeof, var, void, while, with, yield


let a = 5;
a = 15; // перезапись переменной а !!!!!!
console.log('результат let a');
console.log(a);


/* переменная var имеет локальную-глобальную область видимости, игнорирует блоки, старая. Лучше не применять. */
var b = 100;
var b = 101; // Переопределение переменной b !!!!!!
console.log(b);



let variable_1; // пустая переменная 
let variable_2 = undefined; // переменная инициализированна с помощью оператора "="

console.log(variable_1); // в консоль автоматически выйдет undefined
console.log(variable_2); // в консоль выйдет undefined

variable_1 = 'test learning one' // перезаписали переменную variable_1
variable_2 = 'test learning two' // перезаписали переменную variable_2


console.log(variable_1); // в консоль выйдет test learning one
console.log(variable_2); // в консоль выйдет test learning two 



/* глобальная область видимости (scope) т.е. мы "просто объявили переменную" */
const glo = 'global scope';
console.log(glo) // в консоль выйдет global scope 

/* локальная область видимости (scope) может быть блочной и функциональной */

// функциональная область видимости в пределах области функции function
function getDate() {
    const date = new Date()
    return date
    console.log(date) // Ошибки нету
}

console.log(date) // ОШИБКА!!!! 



/*пример ОБЛАСТИ ВИДИМОСТИ */
const scope = 'Global Scope';

function localScope() {
    console.log('this is a local scope')
    function child() {
        console.log('this is a child of the local scope');
    }
}

if (scope) {
    console.log('this is a block scope');
} else {
    console.log('this is also block scope');
}

for (let i = 0; i > 10; i++) {
    console.log('this is also block scope')
}


let varschool = 'HSchool';
let varcompany = 'company';
console.log (varschool); // выйдет в консоль 'HSchool'
console.log (varcompany); // выйдет в консоль 'company'

let sum_var = varschool + varcompany;
console.log (varschool); // выйдет в консоль 'HSchoolcompany'












