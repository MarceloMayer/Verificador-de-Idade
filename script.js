

function verificar(params) {
    //nascimento calculo
    let anoNascimento = document.getElementById('anoNascimento')
    let anoAtual = new Date()
    let anoAtual2 = anoAtual.getFullYear()
    let ano = anoAtual2 - (Number(anoNascimento.value))
    //imagem
    let imagem = document.getElementById('img')
    imagem.style.backgroundImage = "";
    //aviso
    let aviso = document.getElementById('aviso')
    //sexo marcado
    let marcado = document.querySelector('input[name="sexo"]:checked').value;
    //resposta
    let resp = document.getElementById('res')
    if (ano >= 24 && 60 > ano && marcado == 'feminino') {
        imagem.style.backgroundImage = "url(/ex02/img/adultomulher.jpg)"
        aviso.innerHTML = ""
        resp.innerHTML = `Detectamos uma mulher com ${ano} anos`

    } else if (ano >= 24 && 60 > ano && marcado == 'masculino') {
        imagem.style.backgroundImage = "url(/ex02/img/adultohomem.jpg)"
        aviso.innerHTML = ""
        resp.innerHTML = `Detectamos um homem com ${ano} anos`
    } else if (ano >= 0 && 8 > ano && marcado == 'feminino') {
        imagem.style.backgroundImage = "url(/ex02/img/menina.jpg)"
        
        aviso.innerHTML = ""
        resp.innerHTML = `Detectamos uma menina com ${ano} anos`

    } else if (ano >= 0 && 8 > ano && marcado == 'masculino') {
        imagem.style.backgroundImage = "url(/ex02/img/menino.jpg)"
        aviso.innerHTML = ""
        resp.innerHTML = `Detectamos um menino com ${ano} anos`

    } else if (ano >= 8 && 24 > ano && marcado == 'feminino') {
        imagem.style.backgroundImage = "url(/ex02/img/jovemmulher.jpg)"
        aviso.innerHTML = ""
        resp.innerHTML = `Detectamos uma jovem com ${ano} anos`

    } else if (ano >= 8 && 24 > ano && marcado == 'masculino') {
        imagem.style.backgroundImage = "url(/ex02/img/jovemhomem.jpg)"
        aviso.innerHTML = ""
        resp.innerHTML = `Detectamos um jovem com ${ano} anos`
    } else if (ano >= 60 && ano < 110 && marcado == 'masculino') {
        imagem.style.backgroundImage = "url(/ex02/img/idoso.jpg)"
        aviso.innerHTML = ""
        resp.innerHTML = `Detectamos um idoso com ${ano} anos`
    } else if (ano >= 60 && ano < 110 && marcado == 'feminino') {
        imagem.style.backgroundImage = "url(/ex02/img/idosa.jpg)"
        aviso.innerHTML = ""
        resp.innerHTML = `Detectamos uma idosa com ${ano} anos`
    } else {
        aviso.innerHTML = "Preencha os dados corretamente!"
        resp.innerHTML = ``
    }
    imagem.style.width = "200px"
    imagem.style.height = "200px"
}
