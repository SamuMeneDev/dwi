const abaLinhaTempo = document.querySelector("#linha-tempo");

function toggleLinhaTempo() {
    const lista = abaLinhaTempo.getElementsByTagName("ul");

    if(lista[0].style.visibility == "hidden") {
        lista[0].style.visibility = "visible";
    } else {
        lista[0].style.visibility = "hidden";
    }
}