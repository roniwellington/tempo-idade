function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'img/amanhecer.jpg'
        document.body.style.backgroundImage = 'url(img/fundo-manha.jpg)'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'img/entardecer.jpg'
        document.body.style.backgroundImage = 'url(img/fundo-tarde.jpg)'
    } else {
        //BOA NOITE
        img.src = 'img/anoitecer.jpg'
        document.body.style.backgroundImage = 'url(img/fundo-noite.jpg)'
    }
}


function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var gênero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        //MASCULINO
        if (fsex[0].checked) {
            gênero = 'Homem'

            if (idade >=0 && idade < 13){
                //Criança
                img.setAttribute('src','img/foto-bebe-m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','img/foto-jovem-m.png')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src','img/foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src','img/foto-idoso-m.png')
            }
            //FEMININO
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 13){
                //Criança
                img.setAttribute('src','img/foto-bebe-f.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','img/foto-jovem-f.png')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src','img/foto-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src','img/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}


