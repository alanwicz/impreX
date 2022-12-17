//Promociones

//Div para visor de inputs al presionar boton A4



//Creamos los inputs para ingresar texto 
const Reg713 = document.getElementById('713Reg')


//Cambiamos display





Reg713.addEventListener('click', (e) => {
    e.preventDefault()
     
    let nuevoDivProm = document.createElement('div');
    nuevoDivProm.innerHTML = `
    <div id="inputsimpresion${contador}" style="margin-top:10px;">
    <button type="button" class="btn-close" id="cierre-impresion" ></button>

     <h6 class="text-center">Completar texto</h6>
    <div class="input-group mb-3">

    <span class="input-group-text" id="inputGroup-sizing-default">Descripción</span>
    <input id="inputDescripcion" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
  </div>
  <div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Precio </span>
  <input id="inputPrecio" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>
<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Master </span>
  <input id="inputMaster" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>

<script>
 const buttonPrep = document.getElementById('prepararCartel');
  function quitarDatos() {
    alert("Yo");

  }

buttonPrep.addEventListener('click', quitarDatos);

</script>
</div>
   
    `
    visorinputsprom.appendChild(nuevoDivProm);
    buttonPrep.style.display = 'block';
   console.log("Hola");
   contador = contador + 1;
})





