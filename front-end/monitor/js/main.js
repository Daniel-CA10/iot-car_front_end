let respuesta = document.getElementById("respuesta");

function callAPIRequest(estatus){


// Hacer una petición para un usuario con ID especifico
axios.get('https://3.140.245.37/iot-car-control/back-end/apis/getRegistro.php')
  .then(function (response) {
    // manejar respuesta exitosa
    console.log(response);

    let respuestaServidor = 
      response.data == "f" ? "Adelante": 
      response.data == "r" ? "Derecha" :
      response.data == "l" ? "Izquierda" :
      response.data == "b" ? "Atras" :
      "Detener" ;


    respuesta.innerHTML = "Respuesta: <strong>" + respuestaServidor + "</strong>";
  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });

}


setInterval(callAPIRequest,2000);
