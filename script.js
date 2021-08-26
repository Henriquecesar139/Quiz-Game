//Funções que contam os erros e mudam as cores dos botões

var erros = 0

elementos1 = [0, 1, 2, 0]
elementos2 = [3, 4, 5, 1]
elementos3 = [6, 7, 8, 2]
elementos4 = [9, 10, 11, 3]
ultima = "ultima"


function avaliar(resposta, elemento, pergunta = 0) {   
    if(!resposta) {
        erros = erros + 1
    }

    document.getElementsByClassName('errada')[elemento[0]].style = 'background-color: red;'
    document.getElementsByClassName('errada')[elemento[1]].style = 'background-color: red;'
    document.getElementsByClassName('errada')[elemento[2]].style = 'background-color: red;'
    document.getElementsByClassName('certa')[elemento[3]].style = 'background-color: green;'

    if(pergunta === "ultima") {
        document.write('Você errou ' + erros+ ' de 4 perguntas <br>')

        if (erros <= 1) {
            document.write('Você foi muito bem!!!')
        }
        else if(erros == 2) {
            document.write('Nada Mal')
        }
        else {
            document.write('Mais sorte na próxima')
        }
    }
}

