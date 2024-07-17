// (1) Importaçoes e Exportaçoes
//A importação e exportação em JavaScript fornecem uma maneira poderosa e flexível de organizar e reutilizar seu código. Elas permitem que você divida seu código em módulos menores e mais gerenciáveis, facilitando a manutenção e a colaboração em projetos maiores. A compreensão desses conceitos é essencial para trabalhar eficazmente com bibliotecas e frameworks modernos em JavaScript.



// AREA DE TESTE E APRENDIZADO SOBRE OBJETOS
//quaso queira testar topico por topico precisa apenas retirar os "//" e os "/**/" do topico e dar um refresh na pagina


/*
// (1) Named export
// e quando o nome que se utiliza na importaçao e o mesmo que na exportaçao 
import { soma, subtraçao, Pi, divisao } from '../pastacalculadora/math.js';


console.log(soma(3, 2));
console.log(subtraçao( 10, 2))
console.log(Pi)
console.log(divisao(20, 2));
*/

//(2) Importando tudo apenas com uma variavel
// faz o mesmo que o de cima mas importando tudo usando o "import *" e atribuindo a variavel "math" por isso que quando eu vou chamar as funçoes importadas dessa vez eu precico add "math." antes


import * as math from'../pastacalculadora/math.js';

console.log(math.soma(3, 2));
console.log(math.subtraçao( 10, 2))
console.log(math.Pi)
console.log(math.divisao(20, 2));