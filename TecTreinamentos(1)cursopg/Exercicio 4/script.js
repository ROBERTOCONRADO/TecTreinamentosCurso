function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('fotodia')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'https://i.pinimg.com/originals/fc/c9/f8/fcc9f8327b4e65597fb91d9cebf77296.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <18) {
        img.src = 'https://pngimage.net/wp-content/uploads/2018/05/boa-tarde-png-6.png'
        document.body.style.background = '#e25d9f'
    } else {
        img.src = 'https://stickerly.pstatic.net/sticker_pack/z2c1kdklYbwZtRntRRg/53E8HF/2/e4ea1aad-8b3a-4036-9a7c-3c6585e8c666.png'
        document.body.style.background = 'black'
    }
}
