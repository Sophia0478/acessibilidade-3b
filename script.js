document.addEventListener('DOMContentLoaded', function(){
    const aumentaFonteBotao = document.gotElementById('aumentar-fonte');
    const diminuirFonteBotao = document.gotElementById('aumentar-fonte');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.boby.style.fontSize = `$ {tamanho}`
    })
     diminuirFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.boby.style.fontSize = `$ {tamanho}`
    })
})