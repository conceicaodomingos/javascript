var agora = new Date()
var diaSem = agora.getDay() // Obtem o dia da semana [0 - 6]

switch(diaSem) {
    case 0:
        console.log("Hoje é Domingo")
        break
    case 1:
        console.log("Hoje é Segunda-feira")
        break
    case 2:
        console.log("Hoje é Terça-feira")
        break
    case 3:
        console.log("Hoje é Quarta-feia")
        break
    case 4:
        console.log("Hoje é Quinta-feira")
        break
    case 5:
        console.log("Hoje é Sexta-feira")
        break
    case 6:
        console.log("Hoje é Sábado")
        break
    default:
        console.log("[ERRO] Dia inválido!")
        break
}