function parImpar(n) {
    if (n%2 == 0) {
        return "PAR"
    } else {
        return "ÍMPAR"
    }
}
console.log(`${3} é ${parImpar(3)}`)