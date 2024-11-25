# Comparação entre as duas versões da função `gerarAleatorios`

Este README compara as duas funções `gerarAleatorios`, uma feita em sala e outra como uma solução mais eficiente, que têm o objetivo de gerar 6 números aleatórios únicos no intervalo de 1 a 60. As diferenças entre as duas versões estão principalmente na lógica de manipulação e no uso de ferramentas como o `splice`.

---

## Código Feito em Sala

### Estrutura:
```javascript
function gerarAleatorios() {
    var vetor = [];
    var geracoes = [];

    while (vetor.length < 6) {
        var aleatorio = Math.floor(Math.random() * 60) + 1;
        geracoes.push(aleatorio);

        if (vetor.includes(aleatorio)) {
            continue;
        }

        vetor.push(aleatorio);
    }

    console.log("Gerações:", geracoes);
    console.log("Finais:", vetor);
}
```

### Funcionamento:
1. **Registro de tentativas:** 
   - O array `geracoes` guarda **todos os números gerados**, independentemente de serem duplicados.
   
2. **Controle de duplicados:** 
   - Antes de adicionar o número gerado ao array `vetor`, a função verifica se o número já está presente usando `vetor.includes(aleatorio)`. 
   - Se o número já existir, o `continue` interrompe a iteração atual do loop.

3. **Resultado final:**
   - O array `vetor` contém exatamente 6 números únicos, enquanto o array `geracoes` pode ter mais de 6 números, dependendo do número de tentativas necessárias.

---

## Código Eficiente

### Estrutura:
```javascript
function gerarAleatorios() {
    var vetor = [];

    while (vetor.length < 6) {
        var aleatorio = Math.floor(Math.random() * 60) + 1;

        // Adiciona o número ao vetor se ele não existir
        if (!vetor.includes(aleatorio)) {
            vetor.push(aleatorio);
        } else {
            // Remove o número duplicado (opcional) para demonstrar o uso de splice
            var index = vetor.indexOf(aleatorio);
            if (index !== -1) {
                vetor.splice(index, 1);
            }
        }
    }

    console.log("Finais:", vetor);
}
```

### Funcionamento:
1. **Controle de duplicados com `splice`:** 
   - Verifica se o número gerado já existe em `vetor` usando `vetor.includes(aleatorio)`.
   - Se o número for duplicado, a função localiza sua posição com `vetor.indexOf(aleatorio)` e o remove usando `vetor.splice(index, 1)`.

2. **Adição ao array:** 
   - Se o número não for duplicado, ele é adicionado diretamente ao array `vetor`.

3. **Resultado final:**
   - O array `vetor` passa a conter 6 números únicos no final.

---

## Comparação detalhada

| Aspecto                   | Código Feito em Sala                                          | Código Eficiente                                          |
|---------------------------|---------------------------------------------------|--------------------------------------------------|
| **Controle de duplicados** | Evita duplicados verificando com `includes`.      | Usa `includes` e remove duplicados com `splice`. |
| **Uso do `splice`**        | Não utiliza `splice`.                             | Remove duplicados com `splice`.                 |
| **Eficiência**             | Simples e direta, mas pode gerar números repetidos várias vezes antes de completar o array. | Similar, mas o uso de `splice` diminui a quantidade de números gerados, contribuindo para uma maior eficiência. |

---

## Vantagens e Desvantagens

### Código Feito em Sala
- **Desvantagens:**
  - Pode gerar números repetidos muitas vezes, aumentando as iterações no loop.
  - Usa mais memória para armazenar as tentativas no array `geracoes`.

### Código Eficiente
- **Vantagens:**
  - O uso de `splice` demonstra manipulação ativa do array e reforça o controle sobre duplicados.
  - Similar ao primeiro código em termos de funcionalidade, mas a eficiência e a velocidade de execução são melhoradas.

---

## Conclusão

O Código Eficiente se destaca em relação ao Código Feito em Sala devido ao seu controle direto e explícito sobre números duplicados. O uso do método `splice` permite manipular o array `vetor` de forma ativa, garantindo que duplicatas sejam tratadas imediatamente. Isso resulta em um código mais robusto e eficiente para a geração dos 6 números da Mega Sena.

O Código Feito em Sala não possui um mecanismo tão eficaz para gerenciar duplicatas. Ele depende de verificações com `includes`, mas ainda permite que números duplicados sejam gerados repetidamente antes de serem descartados, o que pode levar a mais iterações do loop e maior consumo de recursos.
