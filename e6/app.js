const buscaMediaIdade = async (nome) => {
    try {
      const resultado = await fetch(`https://api.agify.io/?country_id=BR&name=${nome}`);
      const data = await resultado.json();
      console.log(`A média da pessoa com o nome ${nome} é de ${data.age}`);
    } catch (error) {
      console.error(error);
    }
  };
  
  buscaMediaIdade('Ivie'); // infelizmente, não tem meu nome na API kkk
  buscaMediaIdade('Ana');
  buscaMediaIdade('Maria');
  buscaMediaIdade('João');
  buscaMediaIdade('José');