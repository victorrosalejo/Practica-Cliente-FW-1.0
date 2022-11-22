/*
*/
"use script"
const ul = document.querySelector("ul");

//buena forma 

function frames() {
    const animacion = ul.animate([
        //keyframes
        { transform: "TranslateY(0px)" },
        { transform: "TranslateY(-100px)" }


    ], {    //options
        easing: "linear",
        iterations: 1,
        duration: 300 //milisegundos 
    });
    return animacion.finished;

}

function displace() {
    frames()
        .then((res) => {
            console.log(res);
            ul.appendChild(document.querySelectorAll("ul > li")[0])
        })
}

setInterval(() => {
    displace();
}, 1000);
