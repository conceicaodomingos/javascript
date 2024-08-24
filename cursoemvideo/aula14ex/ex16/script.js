function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let r = document.getElementById('r')

    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        window.alert("[ERRO] - Faltam dados!")
    } else {
        r.innerHTML = "Contando: <br>"
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert("Passo Inválido! Considerando Passo = 1")
            p = 1
        } 
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                r.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                r.innerHTML += ` ${c}`
            }
        }
        r.innerHTML += ` \u{1F3C1}`
    }
}