function cambiar() {
    if (document.getElementById("body").style.background == "white") {
        document.getElementById("body").style.background = "black";
    } else {
        document.getElementById("body").style.background = "white";
    }
    return;
}

function ocultar() {
    let element = document.getElementById('prubasjs');
    element.style.display = 'none';
}

function mostrar() {
    let element = document.getElementById('prubasjs');
    element.style.display = 'block';
}

function hoja() {
    let element = document.getElementById('estilosxºsheet');
    element.style.href = 'estilos2.css';

}