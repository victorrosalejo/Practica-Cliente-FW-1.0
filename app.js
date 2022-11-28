$(document).ready(function () {
    mostrar();
});



function nuevo_elemento(i) {
    if (i >= 0) {
    } else { i = elemento.length + 1 }

    let contar = $('#elementos').find('div').length;
    if (contar == 0) { $(sin_elementos).hide(); }


    $(general).toggle();
    $(elementos).toggle();
    $(master).append(` 

        <div class="col-md-12 formulario" id="formulario${i}">
            <h2 style="text-align: center;width: 400px; font: normal 40px Montserrat, sans-serif;color:wheat">Comparte
                tu opinión
            </h2>
            <form role="form">
                              
                <br>
                <div class="form-group">
                    <label for="url${i}" style="color:white;width:400px;">Enlace Imágen Acortado:</label>
                    <input style="width:400px" type=" text" id="url${i}" placeholder="Introduce la url de la imagen"
                        >
                </div>
                <br>
                <div class="form-group">
                    <label for="title${i}" style="color:white;width:400px;">Título:</label>
                    <input style="width:400px" type=" text" id="titulo${i}" placeholder="Introduce el titulo" maxlength="60"
                        required>
                </div>
                <br>
                <div class="form-group">
                    <label for="name${i}" style="color:white;width:400px;">Nombre:</label>
                    <input style="width:400px" type=" text" id="name${i}" placeholder="Introduce un nombre" maxlength="45"
                        xº required>
                </div>
                <br>
                <div class="form-group">
                    <label type="email" style="color:white; width: 400px;" ;>Email:</label>
                    <input style="width:400px" type=" email" class="form-control" id="email${i}"
                        placeholder="Introduce un email" maxlength="35" required>
                </div>
                <br>
                <div class="form-group">
                    <label for="opi${i}" style="color:white;">Opinión</label>
                    <input style="width:400px" type=" text" id="opi${i}" placeholder="Introduce tu opinión" maxlength="250">
                </div>
                <br>
                <div class="form-group">
                    <label for="descripcion${i}" style="color:white;width:400px;">Título:</label>
                    <input style="width:400px" type=" text" id="descripcion${i}" placeholder="Introduce el titulo" maxlength="160"
                        required>
                </div>
                <div style="text-align:center; width: 400px;">
                    <button style="margin-right:15px; width: 100px;" type="submit "
                        class="btn btn-success" onclick="guardar(${i})">Guardar</button> 
                    <button style="margin-left: 15px; width: 100px" class="btn btn-danger" onclick="borrar_formulario()">Cancelar</button>
                    
                </div>
            </form>
        </div>`
    );

}


function mostrar_elementos(numero) {

    //función que me oculta todo menos el elemento seleccionado


}




function guardar(i) {
    let numero_array = elemento.length;


    if (i > numero_array) {

        let juego = {
            url: $("#url" + i).val(),
            titulo: $("#titulo" + i).val(),
            name: $("#name" + i).val(),
            email: $("#email" + i).val(),
            opinion: $("#opi" + i).val(),
            descripcion: $("#descripcion" + i).val()

        }
        elemento.push(juego);
        borrar_formulario();
    }
    else {

        if ($("#url" + i).val() === '') { } else {
            elemento[i].url = $("#url" + i).val();
        }

        elemento[i].titulo = $("#titulo" + i).val();
        elemento[i].name = $("#name" + i).val();
        elemento[i].email = $("#email" + i).val();
        elemento[i].descripcion = $("#descripcion" + i).val();

        if ($("#opi" + i).val() === '') { } else {
            elemento[i].opinion = $("#opi" + i).val();

        }
        borrar_formulario();
    }

    let contar = $('#elementos').find('div').length;
    if (contar == 0) {
        $(sin_elementos).show();
    } else { $(sin_elementos).hide(); }
}


function borrar(m) {
    var resultador = window.confirm("¿Seguro que quieres eliminar este elemento de forma permanente?");
    if (resultador === true) {

        $("#elemento" + m).remove();
        elemento[m].titulo = 'undefined';
    }
    let contar = $('#elementos').find('div').length;   //Contador de divs del elemento id= "elementos" referencia: index.html
    if (contar == 0) {
        $(sin_elementos).show();
    } else { $(sin_elementos).hide(); }
}



var elemento = new Array({ url: "https://acortar.link/eBMTwB", titulo: "GTA V", name: "Victor Arroyo Madera", email: "victor@gmail.com", opinion: "Me ha gustado mucho jugarlo", descripcion: "Jose fecma" },
    { url: "asdf", titulo: "asdf", name: "asdf", email: "asdf", opinion: "asdf", descripcion: "asdf" },
    { url: "asd", titulo: "asdf", name: "asdf", email: "asdf", opinion: "adf", descripcion: "asdf" });



function borrar_formulario() {
    $(master).empty();
    $(general).toggle();
    $(elementos).toggle();
    mostrar();
    let contar = $('#elementos').find('div').length;   //Contador de divs del elemento id= "elementos" referencia: index.html
    if (contar == 0) {
        $(sin_elementos).show();
    } else { $(sin_elementos).hide(); }
}




function mostrar() {
    let a = elemento.length;
    $(elementos).empty();
    for (let i = 0; i < a; i++) {
        if (elemento[i].titulo === 'undefined') {
        } else {
            $(elementos).append(` 
           
           <div id="elemento${i}">
               
                    <div class="col-md-6 container" style="text-align:center;">
                    <img style=" height: 400px;margin-top: 50px;" alt="centered image" src="${elemento[i].url} ">
                </div >

            <div class="col-md-6 container">
            <h1 style="text-align:center;"><strong>${elemento[i].titulo}</strong></h1>
            <hr style="margin-right: 30px;">
                <h3 class="anime-grande"><strong>DESCIPCIÓN</strong></h3>
                <h5 class="anime">${elemento[i].descripcion}</h5>
                <h3><strong>AUTOR</strong></h3>
                <h5>${elemento[i].name}</h5>
                <h3><strong>EMAIL</strong></h3>
                <h5>${elemento[i].email}</h5>
                <h3><strong>OPINIÓN</strong></h3>
                <h5>${elemento[i].opinion}</h5>
                <br><br>
                    <div style="text-align: center;">
                        <button style="margin-right:10px;" class="btn btn-warning button" onclick="nuevo_elemento(${i})" ">Modificar</button>
                        <button class="btn btn-danger button" onclick="borrar(${i})">Borrar</button>
                        <button style="margin-left: 10px; width: 100px" class="btn btn-danger" onclick="mostrar_elemento(${i})">+Más info</button>
                    </div>
                </div>
        </div>
                `);
        }
    }
}




// $(".anime-grande").mouseenter(function () {
//     $(".anime").slideDown();
// });

// $(".anime-grande").mouseleave(function () {
//     $(".anime").slideUp();
// });





