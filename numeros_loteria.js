function gerarAleatorios() {
    var vetor = [];

    while (vetor.length < 6) {
        var aleatorio = Math.floor(Math.random() * 60) + 1;

        if (!vetor.includes(aleatorio)) {
            vetor.push(aleatorio);
        } else {
            var index = vetor.indexOf(aleatorio);
            if (index !== -1) {
                vetor.splice(index, 1);
            }
        }
    }

    console.log("Finais:", vetor);
}
