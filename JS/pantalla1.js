//Promociones

//Div para visor de inputs al presionar boton A4
const visorinputsprom = document.getElementById('visorinputsprom');


//Creamos los inputs para ingresar texto 
const A4Prom = document.getElementById('A4Prom')

A4Prom.addEventListener('click', (e) => {
    e.preventDefault()

    let nuevoDivProm = document.createElement('div');
    nuevoDivProm.innerHTML = `
     <h6 style="margin-top:10px;">Completar texto</h6>
    <div class="input-group mb-3">
    <span class="input-group-text" id="inputGroup-sizing-default">Descripción</span>
    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
  </div>
  <div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Precio </span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>
<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Master </span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>
<button  type="button" class="btn btn-primary">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer-fill" viewBox="0 0 16 16">
<path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"></path>
<path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"></path>
</svg>
<a href="/Impresores/impresionA4.html" >Preparar Impresión </a>
Preparar Impresión
</button>

    `
    visorinputsprom.appendChild(nuevoDivProm);

   console.log("Hola");
})