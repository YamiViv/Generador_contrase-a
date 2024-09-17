let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById ('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; //Tipo de caracteres que se "permiten en la contraseña".

function generar() {

    let numeroDigitado = parseInt (cantidad.value); //el parceInt pasa de texto a numero la variable
    

    if (numeroDigitado < 8){
        alert("La cabtidad de caracteres tiene que ser mayor que 8");
    }

    let password = '';

    for ( let i=0; i<numeroDigitado; i++){

        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password+=caracterAleatorio; //concatenar y asignar el valor.
    }

    contrasena.value = password;

};

function limpiar() {
    let limpiar = '';
    contrasena.value= limpiar;
    
};

/*let texto = "texto";
console.log(typeof cantidad)//tipo de dato que va a guardar*/



