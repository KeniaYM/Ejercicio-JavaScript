//Ejercio_1
function contrasenaValidad() {
    var mPassword = document.getElementById("txtPass").value;
    if (mPassword == "2Fj(jjbFsuj") {
        alert('Contraseña valida');
        return true;
    } else if (mPassword == "eoZiugBf&g9") {
        alert('Contraseña valida');
        return true;
    } else {
        alert('Contraseña incorrecta');
        return false;
    }
}
//Ejercio_2
function calcularImpuestos() {
    var edad = document.getElementById("txtedad").value;
    var ingresos = document.getElementById("txtingresos").value;
    var total = 0;

    if (edad >= 18 && ingresos >= 1000) {
        total = ingresos * 0.40;
        alert("El Total es: $" + total);
        console.log(total);
    } else {
        alert("0");
        console.log("0");
    }
}

//Ejercio_3
function calcularIMC() {
    var peso = document.getElementById("txpeso").value;
    var altura = document.getElementById("txtaltura").value;
    
    var imc = peso / (altura * altura);

    if (imc < 18.5) {
        alert("Bajo de Peso");
    } else if (imc >= 18.5 && imc <= 24.9) {
        alert("Normal");
    } else if (imc >= 25 && imc <= 29.9) {
        alert("Sobrepeso");
    } else {
        alert("Obeso");
    }
    
}

//Ejercio_4
imprimir = [];
function imprimirArreglo(imprimir)
{
    let texto = document.getElementById("txtArreglo").value.split(" ");
    imprimir = imprimir.concat(texto);
    document.getElementById("txtMostrar").innerHTML = imprimir.join("<br>");
}

//Ejercio_5
function calcularLikes(){
    var numero  = document.getElementById("txtlikes").value
    if (numero < 1000) {
        alert (numero.toString())
    } else if (numero >= 1000 && numero < 1000000) {
        alert(Math.floor(numero / 1000) + "K")
    } else {
        alert(Math.floor(numero / 1000000) + "M")
    }
}
//Ejercio_6
function fizzBuzz(){
    {
        var num = document.getElementById("txtNumero").value;
    
        if(num % 3 == 0 && num % 5 == 0)
            {
                document.getElementById("txtMostrar").innerHTML = "FIZZBIZZ";
            }
        else if(num % 5 == 0)
            {
                document.getElementById("txtMostrar").innerHTML = "BIZZ";
            }
        else if(num % 3 == 0)
            {
                document.getElementById("txtMostrar").innerHTML = "BIZZ";
            }
        else
        {
            document.getElementById("txtMostrar").innerHTML = num;
        }
    }
}    
//Ejercio_7
function contarRango() {
    var num1 = parseInt(document.getElementById("txtnum1").value);
    var num2 = parseInt(document.getElementById("txtnum2").value);
    var contador = 0;

    if (num1 < num2) {
        for (var i = num1 + 1; i < num2; i++) {
            contador++;
        }
        document.getElementById("resultado").innerText = "Cantidad de números en el rango: " + contador;
    } else {
        document.getElementById("resultado").innerText = "El primer número debe ser menor que el segundo.";
    }
}
//Ejercio_8
function sumarRango() {
    var numInicial = parseInt(document.getElementById("numInicial").value);
    var numFinal = parseInt(document.getElementById("numFinal").value);
    var suma = 0;
    for (var i = numInicial; i <= numFinal; i++) {
        suma += i;
    }
    document.getElementById("resultado").innerText = "La suma del rango es: " + suma;
}
//Ejercio_9
function contarLetraA() {
    var texto = document.getElementById("texto").value;
    var contador = 0;
    for (var i = 0; i < texto.length; i++) {
        if (texto[i].toLowerCase() === 'a') {
            contador++;
        }
    }
    document.getElementById("resultado").innerText = "El número de letras 'a' es: " + contador;
}

//Ejercio_10
function contarDeCaracter(){
    var texto = document.getElementById("txtPalabra").value;
    var letra = document.getElementById("txtLetra").value;

    let contador = 0;

    for(var i = 0;i <texto.length; i++)
        {
            if(texto[i] == letra.toLowerCase() || texto[i] == letra.toUpperCase())
                {
                    contador++
                }
        }
        document.getElementById("txtMostrar").innerHTML = "El número de letras '" + letra + "' es: " + contador;
}
//ejercico11

//Ejercicio 14
document.getElementById('formSumaR').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los números ingresados y eliminar espacios adicionales
    const numeros = document.getElementById('nsumaRArreglo').value
        .split(',')
        .map(num => num.trim())
        .map(Number);

    const inicio = parseInt(document.getElementById('inicioP').value);
    const fin = parseInt(document.getElementById('finP').value);

    // Verificar que todos los elementos son números válidos
    if (numeros.some(isNaN)) {
        document.getElementById('lblMostrar').textContent = 'Por favor, ingresa un arreglo de números válido.';
    } else if (isNaN(inicio) || isNaN(fin) || inicio < 0 || fin < 0 || inicio >= numeros.length || fin >= numeros.length) {
        document.getElementById('lblMostrar').textContent = 'Por favor, ingresa posiciones válidas.';
    } else {
        const suma = sumarArreglo(numeros, inicio, fin);
        document.getElementById('lblMostrar').textContent = `La suma de los números en el rango es: ${suma}`;
    }
});

function sumarArreglo(arr, inicio, fin) {
    let suma = 0;

    if (inicio <= fin) {
        for (let i = inicio; i <= fin; i++) {
            suma += arr[i];
        }
    } else {
        for (let i = inicio; i >= fin; i--) {
            suma += arr[i];
        }
    }

    return suma;
}
//Fin de la Funcion del Ejercicio 14