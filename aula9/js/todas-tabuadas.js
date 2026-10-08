const divTabuadaLista = document.getElementById("tabuada-lista")

/**
 * Função que calcula a tabuada de um número e retorna em formato de string.
 * 
 * @param numero Número de que será calculado a tabuada. 
 * @returns Texto com todas os resultados da operação.
 */
function calcularTabuada(numero, html) {
    let texto = `Tabuada do ${numero}${html ? "<br>" : "\n"}`;
    for(let i = 0; i<=10; i++) {
        texto = texto+`${numero} x ${i} = ${numero * i}${html ? "<br>" : "\n"}`;
    }

    return texto;
}


function gerarTabuada() {
    for(let i = 0; i<=10; i++) {

        const tabuada = `<p class='tabuada font-medium'>${calcularTabuada(i, true)}</p>`
        
        divTabuadaLista.innerHTML = divTabuadaLista.innerHTML+tabuada
    }
}

gerarTabuada();