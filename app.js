$(document).ready(function () {
    $('')

});


function chtch() {
    var dato1 = document.getElementById(" ").value;
    var dato2 = document.getElementById(" ").value;

    if (dato1 == "") {
        alert("Es obligatorio introducir un nombre");
        document.getElementById("id dato1").focus();
    } else {
        alert("Es obligatorio introducir un nombre");
        document.getElementById("id dato2").focus();
    }


}