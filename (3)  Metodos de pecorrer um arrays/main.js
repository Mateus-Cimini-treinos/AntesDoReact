// (1) Metodos de arrays

//definindo o array
const numeros = [-3, -1, 0, 1, 2, 3, 4, 5, "mateus"];



// AREA DE TESTE E APRENDIZADO SOBRE OBJETOS
//quaso queira testar topico por topico precisa apenas retirar os "//" do topico e dar um refresh na pagina


/*
//percorrendo array com for
for (const i of numeros) {
    document.body.innerText += i
}
*/



/*
//pecorrendo array com forEach
//Executa uma função fornecida uma vez para cada elemento do array.
numeros.forEach(i => {
    document.body.innerText += i
})
*/

/*
//pecorrendo um array com map()
//Cria um novo array com os valores multiplicados por 10.
const numeros2 = numeros.map(num => num * 10);
document.body.innerText += numeros2
*/


/*
//pecorrendo um array com map()
//Cria um novo array com os valores multiplicados por 10. usando o return
const numeros2 = numeros
.map(num => {
    return num * 10;
})
document.body.innerText += numeros2
*/

/*
//pecorrendo um array com map()
//Cria um novo array com os valores multiplicados por 10. usando o return
const parouimpar = numeros
.map(num => {
    if (num % 2 === 0) {
        return ` ${num} e par <br>`
    }
    return `${num} e impar <br> `;
})
document.body.innerHTML += parouimpar
*/


/*
//pecorrendo um arry com o filter()
//Cria um novo array com os valores filtrados.
const novoArray = numeros
.filter(num => num % 2 == 0)
document.body.innerHTML += novoArray
*/



/*
//pecorrendo um array com o filter() e map()
//Cria um novo array com os valores filtrados. e multiplicados por 100
const novoArray = numeros
.filter(num => num % 2 == 0)
.map(num => num * 100)
document.body.innerHTML += novoArray
*/


/*
//pecorrendo um array com o every()
// O método every() testa se todos os elementos de um array passam por um teste implementado por uma função fornecida. Ele retorna true se a função de teste retornar true para todos os elementos, e false caso contrário.

const todosItensSaoNumeros = numeros
.every(num => typeof num == 'number');

document.body.innerHTML += todosItensSaoNumeros
*/



/*
//pecorrendo um array com o some()
// O método some() testa se pelo menos um elemento no array passa no teste implementado pela função fornecida. Ele retorna true se a função de teste retornar true para qualquer um dos elementos, e false caso contrário.

const  temumItemDiferente = numeros
.some(num => typeof num != 'number');

document.body.innerHTML += temumItemDiferente
*/


/*
//pecorrendo um array com o find()
// Retorna o primeiro elemento no array que satisfaz a função de teste fornecida. Caso contrário, retorna undefined. no caso e para encontar um numero par e como o 0 e o primeiro numero par do array o resultado foi 0
const encontrepar = numeros
.find(num => num % 2 == 0);

document.body.innerHTML += encontrepar
*/



/*
//pecorrendo um array com o findIndex()
// Retorna o primeiro índice em que um determinado elemento pode ser encontrado no array, ou -1 se o elemento não estiver presente. no caso e para encontar um numero par e como o 0 e o primeiro numero par do array mas e o terceiro item do array o resultado foi 2.
const encontrepar = numeros
.findIndex(num => num % 2 == 0);

document.body.innerHTML += encontrepar
*/



//pecorrendo um array com o reduce()
//e comulmente usado para quando eu quero pegar um array e criar uma nova estrutura de dados apartir desse array (resumindo nao tem muita regra e e bem versatil podendo ser ussado para quase tudo)

// filtrando o array usando filter() para tirar a string "mateus"
const filtrado = numeros
.filter(num => num != "mateus")

// somando o array filtrado usando o reduce()
const soma = filtrado
.reduce((total, num) => total + num, 0);

document.body.innerHTML += soma