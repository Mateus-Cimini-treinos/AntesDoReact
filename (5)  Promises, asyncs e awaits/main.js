// (1) Promises
// Promises fornecem uma maneira robusta de lidar com operações assíncronas em JavaScript,
// substituindo padrões mais antigos de callbacks e tornando o código mais legível e fácil de manter.
// Elas são fundamentais para trabalhar com operações assíncronas modernas, como chamadas de API e outras operações baseadas em tempo.




// AREA DE TESTE E APRENDIZADO SOBRE OBJETOS
//quaso queira testar topico por topico precisa apenas retirar os "//" e os "/**/" do topico e dar um refresh na pagina




/*
// Função somaDoisNumeros que retorna uma Promise
const somaDoisNumeros = (a, b) => {
    // Retorna uma nova Promise
    return new Promise((resolve, reject) => {
        // Usa setTimeout para simular uma operação assíncrona com duração de 1 segundo
        setTimeout(() => {
            // Resolve a Promise com a soma dos dois números
            resolve(a + b);
        }, 1000);
    });
}

// Chama a função somaDoisNumeros com os argumentos 1 e 4
somaDoisNumeros(1, 4)
    // then() é chamado quando a Promise é resolvida com sucesso
    .then(soma => {
        // Define o texto do corpo do documento HTML com o resultado da soma
        document.body.innerText = soma;
    })
    // catch() é chamado quando a Promise é rejeitada (em caso de erro)
    .catch(erro => {
        // Define o texto do corpo do documento HTML com uma mensagem de erro
        document.body.innerText = "deu erroo";
    });
    */



    /*
    // Faz uma solicitação para a API do GitHub para obter informações do usuário Mateus-Cimini
fetch('https://api.github.com/users/Mateus-Cimini')
// O primeiro then() é chamado quando a resposta é recebida
.then(response => {
    // Converte a resposta em formato JSON para um objeto JavaScript
    return response.json();
})
// O segundo then() é chamado com o corpo da resposta (os dados do usuário)
.then(body => {
    // Loga o corpo da resposta no console
    console.log(body);
})
// O catch() é chamado se ocorrer qualquer erro durante o fetch ou os then()
.catch(erro => {
    // Define o conteúdo do corpo do documento HTML com uma mensagem de erro
    document.body.innerHTML = 'deu erroooo';
})
// O finally() é chamado independentemente de a Promise ter sido resolvida ou rejeitada
.finally(() => {
    // Define o conteúdo do corpo do documento HTML com uma mensagem indicando que a operação terminou
    document.body.innerHTML = "acabou";
});
*/



/*
// ASYNC E AWAIT
//O async e o await são recursos introduzidos no ECMAScript 2017 (ES8) que facilitam o trabalho com código assíncrono baseado em Promises, tornando-o mais legível e intuitivo. Usar async e await permite que você escreva código assíncrono de uma maneira que se assemelha ao código síncrono, eliminando a necessidade de encadeamento excessivo de then e catch.


// Função assíncrona para buscar dados do usuário Mateus-Cimini no GitHub
async function buscarDadosnoGithub() {
    try {
        // Faz uma solicitação para a API do GitHub para obter informações do usuário
        const response = await fetch('https://api.github.com/users/Mateus-Cimini');
        // Converte a resposta em formato JSON para um objeto JavaScript
        const body = await response.json();

        // Retorna o nome do usuário
        return body.name;
    } catch (erro) {
        // Captura e loga qualquer erro que ocorrer durante a solicitação ou conversão da resposta
        console.log(erro);
    } finally {
        // Este bloco é executado independentemente de a Promise ter sido resolvida ou rejeitada
        document.body.innerHTML = 'deuuuu';
    }
}

// Chama a função assíncrona e lida com a resolução da Promise retornada
buscarDadosnoGithub().then(name => {
    // Loga o nome do usuário no console
    console.log(name);
});
*/