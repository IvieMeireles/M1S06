function aprovarDadosCadastrais( cliente ) {
    return new Promise( (resolve, reject) => {
        if (cliente.cpf === 10970162693) {
            resolve(true);
        } else {
            reject(false)
        }});
}

function aprovarValorSolicitado( cliente, valor ) {
    return new Promise( (resolve, reject) => {
        if (cliente.margem >= valor)
            resolve(true);
        else 
            reject(false);
    });
}

const cliente = { cpf: 10970162693, nome: 'Ivie', margem: 1500.0 }; //dados que serão lidos, se o CPF for diferente, retornará erro
const aprovacaoCadastro = aprovarDadosCadastrais(cliente);
const aprovacaoValor = aprovarValorSolicitado(cliente, 300.0); 

Promise.all([aprovacaoCadastro, aprovacaoValor]).then((resultado) => {
    console.log("Seu crédito foi aprovado");
}).catch(() => {
    console.log("Seu crédito foi reprovado");
}).finally (() =>{
    console.log("Fim do processamento");
})