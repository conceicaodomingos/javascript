let num = [5, 8, 2, 9, 3]
num.sort() // Organiza o vetor em ordem crescente
num.push(1) // Acrescenta o valor 1 ao vetor na última posição
console.log(num) // Apresenta o vetor
console.log(`O vetor tem ${num.length} posições`) // Calcula o número de elementos do vetor
console.log(`O primeiro valor do vetor é ${num[0]}`) // Apresenta o 1o valor do vetor

let posicao = num.indexOf(8) // Mostra a posição do número desejado
if (posicao == -1) {
    console.log("O valor não foi encontrado!")
} else {
  console.log(`O valor 8 está na posição ${posicao}`)   
}
