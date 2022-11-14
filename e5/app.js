const buscaIdade = async (nome) => {
    try {
        const resultado = await fetch(`https://api.agify.io/?country_id=BR&name=${nome}`)
        const data = await resultado.json();
        console.log(`${nome} - ${data.age}`);
    } catch (error) {
        console.error(error);
    }
}


buscaIdade('João') //irá buscar quantas pessoas chamadas João existem naquela URL, nesse caso no momento que testei retornaram 52