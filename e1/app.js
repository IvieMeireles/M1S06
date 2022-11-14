function sleep (param) {
    return new Promise ((resolve) => {
        setTimeout(()=> resolve(param), 3000 )
    });
}

const resultado = sleep ('teste').then(function (resultado){
    console.log(resultado);    
});
