const obterPrecoBitcoin = async () => {
    const resultado = await fetch ('https://api.coincap.io/v2/assets/bitcoin')
    const { data } = await resultado.json(); //os valores retornam dentro de um objeto com o nome data, por isso chamamos com data.algumaCoisa
    console.log(`O preço do Bitcoin - ${data.symbol} em dólares hoje é ${data.priceUsd}`)
    document.getElementById('valorBitcoin').innerHTML = `O preço do Bitcoin - ${data.symbol} em dólares hoje é ${data.priceUsd}. Confira também no console.`
}


obterPrecoBitcoin();