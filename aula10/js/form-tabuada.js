
const inNumero = document.getElementById("num");
const pMsg = document.getElementById("msg");



/**
 * Função que é executada ao click do botão.
 */
function onCalculo() {
    pMsg.classList.remove("text-red-500", "text-stone-500", "font-medium", "text-center");
    
    const numero = Number(inNumero.value);
    if(inNumero.value.trim() === "" || isNaN(numero) || (numero > 10 || numero <= 0)) {
        pMsg.innerText = "Digite um número válido para calcular";
        pMsg.classList.add("text-red-500");
    } else {
        pMsg.innerText = calcularTabuada(inNumero.value);
        pMsg.classList.add("tabuada", "font-medium")
    }
}

/**
 * Função que calcula a tabuada de um número e retorna em formato de string.
 * 
 * @param numero Número de que será calculado a tabuada. 
 * @returns Texto com todas os resultados da operação.
 */
function calcularTabuada(numero) {
    let texto = `Tabuada do ${numero}\n`;
    for(let i = 0; i<=10; i++) {
        texto = texto+`${numero} x ${i} = ${numero * i}\n`;
    }

    return texto;
}