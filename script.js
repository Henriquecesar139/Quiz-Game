//Funções que contam os erros e mudam as cores dos botões

var erros = 0


function avaliar(resposta) {   
    if(!resposta) {
        erros = erros + 1
    }
    document.getElementsByClassName('errada')[0].style = 'background-color: red;'
    document.getElementsByClassName('errada')[1].style = 'background-color: red;'
    document.getElementsByClassName('errada')[2].style = 'background-color: red;'
    document.getElementsByClassName('certa')[0].style = 'background-color: green;'
}

function avaliar2(resposta) {   
    if(!resposta) {
        erros = erros + 1
    }
    document.getElementsByClassName('errada2')[0].style = 'background-color: red;'
    document.getElementsByClassName('errada2')[1].style = 'background-color: red;'
    document.getElementsByClassName('errada2')[2].style = 'background-color: red;'
    document.getElementsByClassName('certa2')[0].style = 'background-color: green;'
}

function avaliar3(resposta) {   
    if(!resposta) {
        erros = erros + 1
    }
    document.getElementsByClassName('errada3')[0].style = 'background-color: red;'
    document.getElementsByClassName('errada3')[1].style = 'background-color: red;'
    document.getElementsByClassName('errada3')[2].style = 'background-color: red;'
    document.getElementsByClassName('certa3')[0].style = 'background-color: green;'
}

function avaliar4(resposta) {   
    if(!resposta) {
        erros = erros + 1
    }
    document.getElementsByClassName('errada4')[0].style = 'background-color: red;'
    document.getElementsByClassName('errada4')[1].style = 'background-color: red;'
    document.getElementsByClassName('errada4')[2].style = 'background-color: red;'
    document.getElementsByClassName('certa4')[0].style = 'background-color: green;'
    document.write('Você errou ' + erros+ ' Vezes')
}

