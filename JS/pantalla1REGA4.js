//Promociones

//Div para visor de inputs al presionar boton A4
const visorinputsprom = document.getElementById('visorinputsprom');


//Creamos los inputs para ingresar texto 
const A4Reg = document.getElementById('A4Reg')


//Cambiamos display


let contador = 1;


A4Reg.addEventListener('click', (e) => {
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





const buttonPrep = document.getElementById('prepararCartel');
               function quitarDatos() {
                const descripcion = document.getElementById('inputDescripcion').value;  
                const precio = document.getElementById('inputPrecio').value;
                const master = document.getElementById('inputMaster').value; 
                const contenido = document.getElementById('contenido'); 
                contenido.style.display = 'none'; 
             const impresReg = document.getElementById('impresReg');
             const crearDiv = document.createElement('div');
            

            
               crearDiv.innerHTML = `
               
               <div id="areaimprimible">
               <style>body{
                  display:block;
                  width:210mm;
                  height:290mm;
                 margin:0;
                 padding:0;
              }
              
              #areaimprimible{
                  width:210mm;
                  height:290mm;
                  border:0.01mm rgb(204, 204, 204) solid;
                  display:flex;
                  flex-direction:column;
              }
              
              .encabezado{
                  height:80mm;
                  background-color:rgb(73, 73, 255);
                  position:relative;
                  display:flex;
                  flex-direction:column;
                  justify-content:center;
                  align-items:center;
              
              }
              
              h2{
                  position:absolute;
                  color:white;
                  font-family: 'Open Sans', sans-serif;
                  font-weight:600;
                  font-size:4.5rem;
                  justify-self:center;
              
              }
              
              
              .triangulo-equilatero-bottom {
                  width: 0;
                  height: 0;
                  border-right: 100px solid transparent;
                  border-top: 100px solid transparent;
                  border-left: 100px solid transparent;
                  border-bottom: 100px solid #ffffff;
                  margin-top:50mm;
                  margin-left:95mm;
              }
              
              
              #descripcion{
                  display:flex!important;
                  flex-direction:column!important;
                  color:rgb(73, 73, 255)!important;
                  font-family: 'Open Sans', sans-serif!important;
                  font-weight:700!important; 
                  margin-top:10px!important;
                  width:150mm!important;
                  height:100mm!important;
                  align-items: center!important;
                  justify-content: center!important;
                  margin-top:100px!important;
                  margin-left:30mm!important;
                  margin-right:30mm!important;
              }
              
              #descripcion h3{
                  align-self:center;
                  font-size:4rem!important;
              }
              
              #precio{
                  display:flex!important;
                  flex-direction:column!important;
                  color:rgb(73, 73, 255)!important;
                  font-family: 'Open Sans', sans-serif!important;
                  font-weight:800!important; 
                  font-size:6rem!important;
                  margin-top:-100px!important;
                  width:150mm!important;
                  height:100mm!important;
                  align-items: center!important;
                  justify-content: center!important;
                  margin-left:30mm!important;
                  margin-right:30mm!important;
              }

              #precio h4{
                font-size:4rem!important;
              }
              
              
              #master{
                  display:flex;
                  flex-direction:column;
                  margin-top:-100px;
                  align-items: flex-end;
                  padding-right:120px;
              }
              
              #master h5{
                  font-size:2rem;
                  font-family: 'Open Sans', sans-serif;
                  font-weight:700; 
              }
              
              </style>
                  <div class="encabezado"> <h2>PRECIO REGULAR</h2>
                      <div class="triangulo-equilatero-bottom"></div>
                   </div>
                   <div id="funcional">
                   <div id="descripcion" ><h3>${descripcion}</h3></div>
                   <div id="precio"><h4>$${precio}</h4></div>       
                   <div id="master"><h5>Master ${master}</h5></div>
              </div>
               `
             impresReg.appendChild(crearDiv);
                  
                }
                 
             
buttonPrep.addEventListener('click', quitarDatos);




