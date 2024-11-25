# Comparação entre as duas versões da função `gerarAleatorios`

Este README compara duas implementações da função `gerarAleatorios` que têm o objetivo de gerar 6 números aleatórios únicos no intervalo de 1 a 60. As diferenças entre as duas versões estão principalmente na lógica de manipulação e no uso (ou não) de ferramentas como o `splice`.

---

## Código 1: Com registro de tentativas (`geracoes`)

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

## Código 2: Com uso de `splice`

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
   - O array `vetor` contém 6 números únicos ao final. O uso de `splice` aqui é opcional e não influencia diretamente a lógica principal.

---

## Comparação detalhada

| Aspecto                   | Código 1                                          | Código 2                                          |
|---------------------------|---------------------------------------------------|--------------------------------------------------|
| **Registro de tentativas** | Armazena todos os números gerados no array `geracoes`, incluindo repetidos. | Não registra tentativas ou números duplicados.   |
| **Controle de duplicados** | Evita duplicados verificando com `includes`.      | Usa `includes` e remove duplicados com `splice`. |
| **Uso do `splice`**        | Não utiliza `splice`.                             | Remove duplicados com `splice`.                 |
| **Eficiência**             | Simples e direta, mas pode gerar números repetidos várias vezes antes de completar o array. | Similar, mas o uso de `splice` adiciona uma etapa extra. |
| **Resultados finais**      | Sempre gera 6 números únicos, com histórico completo das tentativas. | Sempre gera 6 números únicos, sem histórico de tentativas. |

---

## Vantagens e Desvantagens

### Código 1: Com `geracoes`
- **Desvantagens:**
  - Pode gerar números repetidos muitas vezes, aumentando as iterações no loop.
  - Usa mais memória para armazenar as tentativas no array `geracoes`.

### Código 2: Com `splice`
- **Vantagens:**
  - O uso de `splice` demonstra manipulação ativa do array e reforça o controle sobre duplicados.
  - Similar ao primeiro código em termos de funcionalidade, mas permite remover itens quando necessário.

---

## Conclusão

O Código 2 se destaca em relação ao Código 1 devido ao seu controle direto e explícito sobre números duplicados. O uso do método `splice` no Código 2 permite manipular o array `vetor` de forma ativa, garantindo que duplicatas sejam tratadas imediatamente. Isso resulta em um código mais robusto e eficiente para cenários em que o controle sobre duplicados é uma prioridade.

Embora o Código 1 registre todas as tentativas de geração no array `geracoes`, o que pode ser útil para fins de depuração, ele não possui um mecanismo tão eficaz para gerenciar duplicatas. Ele depende de verificações com `includes`, mas ainda permite que números duplicados sejam gerados repetidamente antes de serem descartados, o que pode levar a mais iterações do loop e maior consumo de recursos.
