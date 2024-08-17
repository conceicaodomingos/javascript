function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date ()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.\n`

    if (hora >= 0 && hora < 5) {
        msg.innerHTML += `<strong>Boa Madrugada</strong>`
        img.src = './imagens/foto-madrugada.jpg'
        document.body.style.background = '#000000'
    }
    else if (hora <= 12) {
        msg.innerHTML += `<strong>Bom dia!</strong>`
        img.src = './imagens/foto-manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora <= 17) {
        msg.innerHTML += `<strong>Boa tarde!</strong>`
        img.src = './imagens/foto-tarde.jpg' 
        document.body.style.background = '#b9846f'
    } else {
        msg.innerHTML += `<strong>Boa noite!</strong>`
        img.src = './imagens/foto-noite.jpg'
        document.body.style.background = '#515154'
    }
}
