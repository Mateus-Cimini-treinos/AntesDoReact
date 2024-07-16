//Objects

//definindo o objeto user
const user = {
    name: "Mateus",
    age: 18,
    height: 1.66,
    weight: 54.5,
    nickname: "mateusao",
    address: {
        street: 'Rua Joao Pinheiro',
        Number: 140,
    },

    engordar(p=0){

    }
}


// AREA DE TESTE E APRENDIZADO SOBRE OBJETOS
//quaso queira testar topico por topico precisa apenas retirar os "//" do topico e dar um refresh na pagina



/*
// (1) Fazendo objetos aparecerem na tela

document.body.innerText = Object.keys(user) //retorna um vetor com todas as chaves

document.body.innerText = JSON.stringify(Object.values(user)) //retorna um vetor com todos os valores

document.body.innerText = JSON.stringify(Object.entries(user)) //retorna um vetor com todos as chaves e os valores
*/



/*
// (2) Desetruturaçao
// e quando vc remove parte do objeto para uma variavel especifica... A desestruturação de objetos (e arrays) em JavaScript é uma funcionalidade poderosa que simplifica a extração de dados e melhora a legibilidade do código. Ela permite extrair valores de objetos de forma clara e concisa, definir valores padrão e até mesmo renomear variáveis no processo.

const { address, age, nickname = "mateusin"} = user
document.body.innerText = JSON.stringify({address, age,nickname})
*/

/*
//funçao junto a desentruturaçao
function mostranome({ name, nickname, age }) {
    return name;
} 

document.body.innerText = mostranome(user)
*/




/*
// (3) Rest Operator
//O operador de rest (...) em JavaScript é uma ferramenta poderosa que facilita a manipulação de funções, arrays e objetos. Ele permite capturar um número variável de argumentos, coletar elementos restantes em arrays e objetos, e simplificar a desestruturação e clonagem de dados.

// usando o operador rest no objeto user para nao mostrar o nome 
const { name, ...rest } = user;
document.body.innerText =  JSON.stringify(rest)



//criando um array
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//colocando chaves no item 0,1,2 e o rest vai ser a chave do resto do array
const [first, second, third, ...rest] = numeros

//mostrando na tela
document.body.innerText =  JSON.stringify({first,third , rest})
*/




/*
// (4) Short Syntax
//O uso da sintaxe curta em JavaScript permite escrever código de maneira mais eficiente e legível, facilitando a manutenção e compreensão do código. Ao adotar essas práticas, você pode melhorar a clareza e a concisão do seu código.


// adicionando valor a variavel name como julia e a variavel age a 22
const name = "Julia";
const age = 22;

// criando objeto usuario e atribuindo name e age a ele
const usuario = {
    name,
    age
};

// mostrando na tela
document.body.innerText = JSON.stringify(usuario)

*/ 



/*
// (5) Optional Chaining 
// O operador de encadeamento opcional (?.) é uma ferramenta útil para acessar propriedades de objetos, chamar métodos e acessar elementos de arrays de maneira segura, evitando a necessidade de verificações adicionais para null ou undefined. Isso torna o código mais limpo e fácil de ler. Este conceito está relacionado aos tópicos que estudamos hoje sobre manipulação de objetos, desestruturação e o operador de rest, pois todos esses recursos ajudam a escrever código JavaScript mais robusto e conciso.



const user1 = {
    name: "Mateus",
    age: 18,
    height: 1.66,
    weight: 54.5,
    nickname: "mateusao",
    address: {
        street: 'Rua Joao Pinheiro',
       number: 140,
    zip: {
        code: '1234567',
        cep: '35300-125'
    },
    //engordar(){
     //  return 'ok';
     // }  
   },
};

//usando o Optinal Chaining na funçao engordar para mostar a mensagem 'nao encontrado' caso nao encontre
//document.body.innerText = user1.address?.engordar?.() ?? 'nao encontrado'


//buscando o valor da variavel  key pela chave 
//const key = "age";
//document.body.innerText = user1[key] ?? 'nao encontrado'


//buscando o valor da variavel que nao existe pela chave  ese nao encontar aparecer a mensagem 'nao encontrado'
//const key = "state";
//document.body.innerText = user1.address?.[key] ?? 'nao encontrado'

*/