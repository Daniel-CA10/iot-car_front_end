let adelante = document.getElementById("adelante");
let atras = document.getElementById("atras");
let derecha = document.getElementById("derecha");
let izquierda = document.getElementById("izquierda");
let detener = document.getElementById("detener"); 
let mensaje = document.getElementById("mensaje");

function callAPI(estatus){


// Hacer una petición para un usuario con ID especifico
axios.get('https://3.140.245.37/iot-car-control/back-end/apis/setRegistro.php?valorEstatus='+estatus)
  .then(function (response) {
    // manejar respuesta exitosa
    console.log(response);
    mensaje.innerHTML = "Respuesta: <strong>" + response.data + "</strong>";
  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });

}

adelante.addEventListener("click",function()
{
    callAPI("f");
    setTimeout(() => {callAPI("s")}, 1000);
})

atras.addEventListener("click",function()
{
    callAPI("b");
})

derecha.addEventListener("click",function()
{
  callAPI("r");
})

izquierda.addEventListener("click",function()
{
  callAPI("l");
})

detener.addEventListener("click",function()
{
  callAPI("s");
})

