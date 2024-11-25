function gerarAleatorios() {
    var vetor = [];

    while (vetor.length < 6) {
        var aleatorio = Math.floor(Math.random() * 60) + 1;
        var numero = vetor.splice(aleatorio, 1);

        vetor.push(aleatorio);
    }
    console.log("Finais:", vetor);
}
