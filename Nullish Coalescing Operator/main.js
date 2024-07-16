//Nullish Coalescing Operator

//O operador de coalescência nula (Nullish Coalescing Operator) em JavaScript é representado por ?? e foi introduzido no ECMAScript 2020 (ES11). Ele é usado para fornecer um valor padrão quando a expressão à sua esquerda é null ou undefined. Diferente do operador || (ou lógico), o ?? não considera valores falsy como 0, false, ou "" (string vazia) como motivos para retornar o valor padrão.

const years = 0

// para o JS quando se usa os operadores "||" os valores : 0, '', [], false, undefined e null  sao valores considerados => falsy

// ja o Nullish Coalescing Operator que e quando se usa os operadores "??"  ele apenas altera quando o valor e: null e undefined

// pvamos textar nessa variavel abaixo se usar os operadores "??" vai mostrar 0 e se usar "||" vai mostar 'nao informado'

document.body.innerText = 'Sua idade e: ' + (years ?? 'Nao informado') ;
