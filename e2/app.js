const timer = () => {
    const interval = setInterval(function() {
    const dataAtual = new Date()
        console.log(`A hora atual é ${dataAtual.toLocaleTimeString()}`);
    },2000)

setTimeout(()=> {
    clearInterval(interval)
}, 10000)
}

timer();