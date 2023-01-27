


//Creamos los inputs para ingresar texto 
const Reg713 = document.getElementById('Reg713')
const buttonPrep713Reg = document.getElementById('prepararCartel713Reg');

//Cambiamos display

let contador713 = 0;

Reg713.addEventListener('click', (e) => {
    e.preventDefault()
   
   if (contador713===0  && contarA4Reg === 0){/*

let inputCantReg = document.getElementById('cantidadreg');     
let crearInput = document.createElement('div');
    crearInput.innerHTML = `
    <div id="inputs7" style="display:flex; 
    flex-direction:column;">
    
    <label>¿Cuantos carteles queres crear?</label>
    <input id="numbersInp" type="number">
    <button onclick="console.log("HOla");" id="crearInputs713" class="btn btn-primary">Crear Entradas</button>
   
</div>


    `
    inputCantReg.appendChild(crearInput); */

    
    let nuevoDivProm = document.createElement('div');
    nuevoDivProm.innerHTML = `
    <div id="inputsImpresionReg713" style="margin-top:10px;">
    <button type="button" class="btn-close" id="cierre-impresion" ></button>
      <!--Primer Cartel-->
     <h6 class="text-center">Completar texto cartel 1</h6>
    <div class="input-group mb-3">

    <span class="input-group-text" id="Descripcion713Reg1gral">Descripción</span>
    <input id="Descripcion713Reg1" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
  </div>
  <div class="input-group mb-3">
  <span class="input-group-text" id="Precio713Reg1gral">Precio </span>
  <input id="Precio713Reg1" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>
<div class="input-group mb-3">
  <span class="input-group-text" id="Master713RegGral1">Master </span>
  <input id="Master713Reg1" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>

<!--Segundo Cartel-->
<h6 class="text-center">Completar texto cartel 2</h6>
<div class="input-group mb-3">

<span class="input-group-text" id="Descripcion713Reggral2">Descripción</span>
<input id="Descripcion713Reg2" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>
<div class="input-group mb-3">
<span class="input-group-text" id="Precio713RegGral2">Precio </span>
<input id="Precio713Reg2" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>
<div class="input-group mb-3">
<span class="input-group-text" id="Master713RegGral2">Master </span>
<input id="Master713Reg2" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>

<!--Tercer Cartel-->
<h6 class="text-center">Completar texto cartel 3</h6>
<div class="input-group mb-3">

<span class="input-group-text" id="Descripcion713Reggral3">Descripción</span>
<input id="Descripcion713Reg3" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>
<div class="input-group mb-3">
<span class="input-group-text" id="Precio713RegGral3">Precio </span>
<input id="Precio713Reg3" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>
<div class="input-group mb-3">
<span class="input-group-text" id="Master713RegGral3">Master </span>
<input id="Master713Reg3" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>

<!--Cuarto Cartel-->
<h6 class="text-center">Completar texto cartel 4</h6>
<div class="input-group mb-3">

<span class="input-group-text" id="Descripcion713RegGral4">Descripción</span>
<input id="Descripcion713Reg4" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>
<div class="input-group mb-3">
<span class="input-group-text" id="Precio713RegGral4">Precio </span>
<input id="Precio713Reg4" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>
<div class="input-group mb-3">
<span class="input-group-text" id="Master713RegGral4">Master </span>
<input id="Master713Reg4" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>

<script>

  function quitarDatos() {
    alert("Yo");

  }


</script>
</div>
   
    `
    visorinputsreg.appendChild(nuevoDivProm);
    buttonPrep713Reg.style.display = 'block';
   console.log("Hola");





    contador713 = contador713 + 1; }

    else{
        alert('Solo podemos crear una entrada.')
    }
    
})








  
   contador = contador + 1;




//Fin Funcion Inputss





               function quitarDatos713Reg() {
                let Descripcion713Reg1 = document.getElementById('Descripcion713Reg1').value;  
                let Precio713Reg1 = document.getElementById('Precio713Reg1').value;
                let Master713Reg1 = document.getElementById('Master713Reg1').value; 
                
                let Descripcion713Reg2 = document.getElementById('Descripcion713Reg2').value;  
                let Precio713Reg2 = document.getElementById('Precio713Reg2').value;
                let Master713Reg2 = document.getElementById('Master713Reg2').value; 

                let Descripcion713Reg3 = document.getElementById('Descripcion713Reg3').value;  
                let Precio713Reg3 = document.getElementById('Precio713Reg3').value;
                let Master713Reg3 = document.getElementById('Master713Reg3').value; 
                 

                let Descripcion713Reg4 = document.getElementById('Descripcion713Reg4').value;  
                let Precio713Reg4 = document.getElementById('Precio713Reg4').value;
                let Master713Reg4 = document.getElementById('Master713Reg4').value; 




                const contenido = document.getElementById('contenido'); 
                contenido.style.display = 'none';   
             const impresReg713 = document.getElementById('impresReg713');
             const crearDivReg713 = document.createElement('div');
              

            
             crearDivReg713.innerHTML = `
               
             <section style="display:flex;" id="">
   
    <!--Imprimibles 1 Columna-->
    <div id="primera-Columna">
    <!--Imprimible 1-->

    <div id="areaimprimible713">
     <style>#impresReg{
        display:none;

       
    }
    
    #areaimprimible713{
        margin-left:25px;
        width:130mm;
        height:75mm;
        border:0.01mm rgb(204, 204, 204) solid;
        display:flex;
       flex-direction:row;
       margin-top:40px;
        
    }
    
    .encabezado{
        height:75mm;
        width:50mm;
        background-color:rgb(73, 73, 255);
        display:flex;
        flex-direction:column;
        flex-direction:column;
        justify-content:center;
        align-items:center;

    
    }
    
    h2{
       
        color:rgb(255, 255, 255);
        font-family: 'Open Sans', sans-serif;
        font-weight:700;
        font-size:2rem;
        justify-self:center;
        margin-left:10px;
        margin-top:-10px;
        z-index:3;
        position:absolute;
    
    }
    
    
    .triangulo-equilatero-bottom {
       
        width: 0;
        height: 0;
        margin-top:-100px;
        transform: rotate(0.75turn);
        border-right: 50px solid transparent;
        border-top: 50px solid transparent;
        border-left: 50px solid transparent;
        border-bottom: 50px solid #ffffff;
        margin-left:130px;
        z-index:2;
        position:relative;
    }
    
    #funcional{
        width:80mm;
        height: 75mm;
    }

    
    #descripcion{
        display:flex;
        flex-direction:column;
        color:rgb(73, 73, 255);
        font-family: 'Open Sans', sans-serif;
        font-weight:700; 
        font-size:1rem;
        width:60mm;
        height:40mm;
        align-items: center;
        justify-content: center;
        margin-top:30px;
        z-index:3;
        

    }
    
    #descripcion h3{
        align-self:center;
        font-size:0,5rem;
    }
    
    #precio{ 
        display:flex;
        flex-direction:column;
        color:rgb(73, 73, 255);
        font-family: 'Open Sans', sans-serif;
        font-weight:700; 
        font-size:1.5rem;
        align-items: center;
        justify-content: center;
    }
    
    
    #master{
        display:flex;
        flex-direction:column;
        align-items: flex-end;
        padding-right:20px;
        padding-bottom:20px;
         margin-top: 20px;

    padding-right: 40px;


    }
    
    #master h5{
        font-size:0.6rem;
        font-family: 'Open Sans', sans-serif;
        font-weight:700; 
    }
    
    </style>
    
        <div class="encabezado"> <h2>PRECIO<br> REGULAR</h2>
         
                     <div class="triangulo-equilatero-bottom"></div></div>

         <div id="funcional">
         <div id="descripcion" ><h3>${Descripcion713Reg1}</h3></div>
         <div id="precio"><h4>$ ${Precio713Reg1}</h4></div>       
         <div id="master"><h5>Master ${Master713Reg1}</h5></div>
    </div>
 </div>
    <!--Fin Imprimible 1-->

    <!--Imprimible 2-->

    <div id="areaimprimible713">
        <style>#impresReg{
           width:297mm;
           height:210mm;
          margin:0;
          padding:0;
          border:0.01mm rgb(204, 204, 204) solid;
   
          
       }
       
       #areaimprimible713{
           margin-left:25px;
           width:130mm;
           height:75mm;
           border:0.01mm rgb(204, 204, 204) solid;
           display:flex;
          flex-direction:row;
          margin-top:40px;
           
       }
       
       .encabezado{
           height:75mm;
           width:50mm;
           background-color:rgb(73, 73, 255);
           display:flex;
           flex-direction:column;
           flex-direction:column;
           justify-content:center;
           align-items:center;
   
       
       }
       
       h2{
          
           color:rgb(255, 255, 255);
           font-family: 'Open Sans', sans-serif;
           font-weight:700;
           font-size:2rem;
           justify-self:center;
           margin-left:10px;
           margin-top:-10px;
           z-index:3;
           position:absolute;
       
       }
       
       
       .triangulo-equilatero-bottom {
          
           width: 0;
           height: 0;
           margin-top:-100px;
           transform: rotate(0.75turn);
           border-right: 50px solid transparent;
           border-top: 50px solid transparent;
           border-left: 50px solid transparent;
           border-bottom: 50px solid #ffffff;
           margin-left:130px;
           z-index:2;
           position:relative;
       }
       
       #funcional{
           width:80mm;
           height: 75mm;
       }
   
       
       #descripcion{
           display:flex;
           flex-direction:column;
           color:rgb(73, 73, 255);
           font-family: 'Open Sans', sans-serif;
           font-weight:700; 
           font-size:1rem;
           width:60mm;
           height:40mm;
           align-items: center;
           justify-content: center;
           z-index:3;
       }
       
       #descripcion h3{
           align-self:center;
           font-size:0,5rem;
       }
       
       #precio{  
           display:flex;
           flex-direction:column;
           color:rgb(73, 73, 255);
           font-family: 'Open Sans', sans-serif;
           font-weight:700; 
           font-size:1.5rem;
           align-items: center;
           justify-content: center;
       }
       
       
       
       
       #master h5{
           font-size:0.6rem;
           font-family: 'Open Sans', sans-serif;
           font-weight:700; 
       }
       
       </style>
       
           <div class="encabezado"> <h2>PRECIO<br> REGULAR</h2>
            
                        <div class="triangulo-equilatero-bottom"></div></div>
   
            <div id="funcional">
            <div id="descripcion"><h3> ${Descripcion713Reg2} </h3></div>
            <div id="precio"><h4>$ ${Precio713Reg2}</h4></div>       
            <div id="master"><h5> Master ${Master713Reg2}</h5></div>
       </div>
    </div>
       <!--Fin Imprimible 2-->
      
      
      
     </div>

       <!--Fin Imprimible 1 Columna-->
    </div>
   



    <!--Imprimibles 1 Columna-->
    <div id="primera-Columna">
        <!--Imprimible 3-->
    
        <div id="areaimprimible713">
         <style>#impresReg{
            width:297mm;
            height:210mm;
           margin:0;
           padding:0;
           border:0.01mm rgb(204, 204, 204) solid;
    
           
        }
        
        #areaimprimible713{
            margin-left:25px;
            width:130mm;
            height:75mm;
            border:0.01mm rgb(204, 204, 204) solid;
            display:flex;
           flex-direction:row;
           margin-top:40px;
            
        }
        
        .encabezado{
            height:75mm;
            width:50mm;
            background-color:rgb(73, 73, 255);
            display:flex;
            flex-direction:column;
            flex-direction:column;
            justify-content:center;
            align-items:center;
    
        
        }
        
        h2{
           
            color:rgb(255, 255, 255);
            font-family: 'Open Sans', sans-serif;
            font-weight:700;
            font-size:2rem;
            justify-self:center;
            margin-left:10px;
            margin-top:-10px;
            z-index:3;
            position:absolute;
        
        }
        
        
        .triangulo-equilatero-bottom {
           
            width: 0;
            height: 0;
            margin-top:-100px;
            transform: rotate(0.75turn);
            border-right: 50px solid transparent;
            border-top: 50px solid transparent;
            border-left: 50px solid transparent;
            border-bottom: 50px solid #ffffff;
            margin-left:130px;
            z-index:2;
            position:relative;
        }
        
        #funcional{
            width:80mm;
            height: 75mm;
        }
    
        
        #descripcion{
            display:flex;
            flex-direction:column;
            color:rgb(73, 73, 255);
            font-family: 'Open Sans', sans-serif;
            font-weight:700; 
            font-size:1rem;
            width:60mm;
            height:40mm;
            align-items: center;
            justify-content: center;
            z-index:3;
        }
        
        #descripcion h3{
            align-self:center;
            font-size:0,5rem;
        }
        
        #precio{
            display:flex;
            flex-direction:column;
            color:rgb(73, 73, 255);
            font-family: 'Open Sans', sans-serif;
            font-weight:700; 
            font-size:1.5rem;
            align-items: center;
            justify-content: center;
        }
        
        
        
        #master h5{
            font-size:0.6rem;
            font-family: 'Open Sans', sans-serif;
            font-weight:700; 
        }
        
        </style>
        
            <div class="encabezado"> <h2>PRECIO<br> REGULAR</h2>
             
                         <div class="triangulo-equilatero-bottom"></div></div>
    
             <div id="funcional">
             <div id="descripcion" ><h3>${Descripcion713Reg3}</h3></div>
             <div id="precio"><h4>$ ${Precio713Reg3}</h4></div>       
             <div id="master"><h5>Master ${Master713Reg3}</h5></div>
        </div>
     </div>
        <!--Fin Imprimible 3-->
    
        <!--Imprimible 4-->
    
        <div id="areaimprimible713">
            <style>#impresReg{
               width:297mm;
               height:210mm;
              margin:0;
              padding:0;
              border:0.01mm rgb(204, 204, 204) solid;
       
              
           }
           
           #areaimprimible713{
               margin-left:25px;
               width:130mm;
               height:75mm;
               border:0.01mm rgb(204, 204, 204) solid;
               display:flex;
              flex-direction:row;
              margin-top:40px;
               
           }
           
           .encabezado{
               height:75mm;
               width:50mm;
               background-color:rgb(73, 73, 255);
               display:flex;
               flex-direction:column;
               flex-direction:column;
               justify-content:center;
               align-items:center;
       
           
           }
           
           h2{
              
               color:rgb(255, 255, 255);
               font-family: 'Open Sans', sans-serif;
               font-weight:700;
               font-size:2rem;
               justify-self:center;
               margin-left:10px;
               margin-top:-10px;
               z-index:3;
               position:absolute;
           
           }
           
           
           .triangulo-equilatero-bottom {
              
               width: 0;
               height: 0;
               margin-top:-100px;
               transform: rotate(0.75turn);
               border-right: 50px solid transparent;
               border-top: 50px solid transparent;
               border-left: 50px solid transparent;
               border-bottom: 50px solid #ffffff;
               margin-left:130px;
               z-index:2;
               position:relative;
           }
           
           #funcional{
               width:80mm;
               height: 75mm;
           }
       
           
           #descripcion{
               display:flex;
               flex-direction:column;
               color:rgb(73, 73, 255);
               font-family: 'Open Sans', sans-serif;
               font-weight:700; 
               font-size:1rem;
               width:60mm;
               height:40mm;
               align-items: center;
               justify-content: center;
               z-index:3;
               margin-left: 80px;

           }
           
           #descripcion h3{
               align-self:center;
               font-size:0,5rem;
           }
           
           #precio{   
               display:flex;
               flex-direction:column;
               color:rgb(73, 73, 255);
               font-family: 'Open Sans', sans-serif;
               font-weight:700; 
               font-size:1.5rem;
               align-items: center;
               justify-content: center;
           }
           
            
           
           #master h5{
               font-size:0.6rem;
               font-family: 'Open Sans', sans-serif;
               font-weight:700; 
           }
           
           </style>
           
               <div class="encabezado"> <h2>PRECIO<br> REGULAR</h2>
                
                            <div class="triangulo-equilatero-bottom"></div></div>
       
                <div id="funcional">
                <div id="descripcion" ><h3>${Descripcion713Reg4}</h3></div>
                <div id="precio"><h4>$ ${Precio713Reg4}</h4></div>       
                <div id="master"><h5>Master ${Master713Reg4}</h5></div>
           </div>
        </div>
           <!--Fin Imprimible 4-->
      
         </div>
    
           <!--Fin Imprimible 1 Columna-->
        </div>
       
   
        


</section>
            

               `
               impresReg713.appendChild(crearDivReg713);
                  
                }
                 
             
buttonPrep713Reg.addEventListener('click', quitarDatos713Reg);



