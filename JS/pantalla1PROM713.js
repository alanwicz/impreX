


//Creamos los inputs para ingresar texto 

const buttonPrep713Prom = document.getElementById('prepararCartel713Prom');





               function quitarDatos713Prom() {
                let Descripcion713Prom1 = document.getElementById('Descripcion713Prom1').value;  
                let Precio713Prom1 = document.getElementById('Precio713Prom1').value;
                let Desuento713Prom1 = document.getElementById('Descuento713Prom1').value;
                let Master713Prom1 = document.getElementById('Master713Prom1').value; 
                
                let Descripcion713Prom2 = document.getElementById('Descripcion713Prom2').value;  
                let Precio713Prom2 = document.getElementById('Precio713Prom2').value;
                let Desuento713Prom2 = document.getElementById('Descuento713Prom2').value;
                let Master713Prom2 = document.getElementById('Master713Prom2').value; 

                let Descripcion713Prom3 = document.getElementById('Descripcion713Prom3').value;  
                let Precio713Prom3 = document.getElementById('Precio713Prom3').value;
                let Desuento713Prom3 = document.getElementById('Descuento713Prom3').value;
                let Master713Prom3 = document.getElementById('Master713Prom3').value; 
                 

                let Descripcion713Prom4 = document.getElementById('Descripcion713Prom4').value;  
                let Precio713Prom4 = document.getElementById('Precio713Prom4').value;
                let Desuento713Prom4 = document.getElementById('Descuento713Prom4').value;
                let Master713Prom4 = document.getElementById('Master713Prom4').value; 




                const contenido = document.getElementById('contenido'); 
                contenido.style.display = 'none';   
             const impresProm713 = document.getElementById('impresProm713');
             const crearDivProm713 = document.createElement('div');
              

            
             crearDivProm713.innerHTML = `
               
             <section style="display:flex;" id="impresReg">
   
    <!--Imprimibles 1 Columna-->
    <div id="primera-Columna">
    <!--Imprimible 1-->
    <div id="areaimprimible713">
        <div class="encabezado"> <div class="porcentaje713Prom"><h2 style="
            margin-top: 5px;
        ">20</h2><div class="porcentajeOFF713"><h3 style="font-size:3rem;margin-bottom: 35px;">%</h3><h3>OFF</h3></div></div>
         
                     <div class="triangulo-equilatero-bottom"></div></div>

         <div id="funcional">
         <div id="descripcion"><h3>DESCRIPCION DESCRIPCION DESCRIPCION 
         </h3></div>
         <div id="precio" style="
         margin-top: 10px;
     "><div><p >Precio Anterior</p><h4 class="precioAnterior713" style="
            margin-bottom: 0px;
        " >$1111.55</h4></div>
            <div><p style="color:rgb(73, 73, 255);">Precio Promoción</p><h4 class="precioPromocion713" style="
                margin-bottom: 0px;
            ">$1111.55</h4></div></div>       
         <div id="master"><h5>Master 123456</h5></div>
    </div>
 </div>
        <!--Fin Imprimible 1-->

        <!--Imprimible 2-->
        <div id="areaimprimible713">
            <div class="encabezado"> <div class="porcentaje713Prom"><h2 style="
                margin-top: 5px;
            ">20</h2><div class="porcentajeOFF713"><h3 style="font-size:3rem;margin-bottom: 35px;">%</h3><h3>OFF</h3></div></div>
             
                         <div class="triangulo-equilatero-bottom"></div></div>
    
             <div id="funcional">
             <div id="descripcion"><h3>DESCRIPCION DESCRIPCION DESCRIPCION 
             </h3></div>
             <div id="precio" style="
             margin-top: 10px;
         "><div><p >Precio Anterior</p><h4 class="precioAnterior713" style="
                margin-bottom: 0px;
            " >$1111.55</h4></div>
                <div><p style="color:rgb(73, 73, 255);">Precio Promoción</p><h4 class="precioPromocion713" style="
                    margin-bottom: 0px;
                ">$1111.55</h4></div></div>       
             <div id="master"><h5>Master 123456</h5></div>
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
            <div class="encabezado"> <div class="porcentaje713Prom" style="z-index:3;"><h2 style="
                margin-top: 5px;
            ">20</h2><div class="porcentajeOFF713" ><h3 style="font-size:3rem;margin-bottom: 35px;">%</h3><h3>OFF</h3></div></div>
             
                         <div class="triangulo-equilatero-bottom"></div></div>
    
             <div id="funcional">
             <div id="descripcion"><h3>DESCRIPCION DESCRIPCION DESCRIPCION 
             </h3></div>
             <div id="precio" style="
             margin-top: 10px;
         "><div><p >Precio Anterior</p><h4 class="precioAnterior713" style="
                margin-bottom: 0px;
            " >$1111.55</h4></div>
                <div><p style="color:rgb(73, 73, 255);">Precio Promoción</p><h4 class="precioPromocion713" style="
                    margin-bottom: 0px;
                ">$1111.55</h4></div></div>       
             <div id="master"><h5>Master 123456</h5></div>
        </div>
     </div>
        <!--Fin Imprimible 3-->
    
        <!--Imprimible 4-->
    
      
            <style>
            
            


            #impresReg{
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
               background-color:rgb(255, 15, 15);
               display:flex;
               flex-direction:column;
               flex-direction:column;
               justify-content:center;
               align-items:center;
             
           
           }
           
           .encabezado h2{
              
               color:rgb(255, 255, 255);
               font-family: 'Open Sans', sans-serif;
               font-weight:700;
               font-size:5rem;
               justify-self:center;
               margin-left:10px;
               margin-top:-10px;
               z-index:3;
               position:absolute;
           }

           .porcentaje713Prom{
            display:flex;
            z-index:2;
            width:50mm;
            flex-direction: row;
  
           }

           .porcentaje713Prom h2{
              
    margin-right: 80px!important;
    position:fixed!important;
    margin-left: 20px;


           }
           

           .porcentajeOFF713{
            margin-left: 110px;
            line-height: 0.00em;
            color:white;
            font-weight: 700;
            font-size:1.5rem;
            font-family: 'Open Sans', sans-serif;
           }

           .precioAnterior713{
            color:black;
            text-decoration: line-through;
            
    margin-top: 10px;
    

           }

           .precioPromocion713{
            color:rgb(73, 73, 255);
            text-decoration: line-through;
            
    margin-top: 10px;

           }

           #precio div{
            display:flex;
            flex-direction:column;
            line-height: 0.00em;
           }

           #precio div p{
            font-size:0.8rem;
            color:black;
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
               margin-left:20px;
               width:60mm;
               height:40mm;
               align-items: center;
               justify-content: center;
               margin-top:30px;
               margin-left:60px;
               margin-right:30mm;
               z-index:3;
               box-sizing: border-box;
           }
           
           #descripcion h3{
               align-self:center;
               font-size:0,5rem;
           }
           
           #precio{
               margin-top:-30px;   
               display:flex;
               flex-direction: row;
               color:rgb(73, 73, 255);
               font-family: 'Open Sans', sans-serif;
               font-weight:700; 
               font-size:1.5rem;
               align-items: center;
               justify-content: space-around;
           }
           
           
           #master{
               display:flex;
               flex-direction:column;
               align-items: flex-end;
               padding-right:20px;
               padding-bottom:20px;
       
           }
           
           #master h5{
               font-size:0.6rem;
               font-family: 'Open Sans', sans-serif;
               font-weight:700; 
           }
           
           </style>
           
           <div id="areaimprimible713">
            <div class="encabezado"> <div class="porcentaje713Prom"><h2 style="
                margin-top: 5px;
            ">20</h2><div class="porcentajeOFF713"><h3 style="font-size:3rem;margin-bottom: 35px;">%</h3><h3>OFF</h3></div></div>
             
                         <div class="triangulo-equilatero-bottom"></div></div>
    
             <div id="funcional">
             <div id="descripcion"><h3>DESCRIPCION DESCRIPCION DESCRIPCION 
             </h3></div>
             <div id="precio" style="
             margin-top: 10px;
         "><div><p >Precio Anterior</p><h4 class="precioAnterior713" style="
                margin-bottom: 0px;
            " >$1111.55</h4></div>
                <div><p style="color:rgb(73, 73, 255);">Precio Promoción</p><h4 class="precioPromocion713" style="
                    margin-bottom: 0px;
                ">$1111.55</h4></div></div>       
             <div id="master"><h5>Master 123456</h5></div>
        </div>
     </div>
           <!--Fin Imprimible 4-->
      
         </div>
    
           <!--Fin Imprimible 1 Columna-->
        </div>
       
   
        


</section>

               `
               impresProm713.appendChild(crearDivProm713);
               console.log("Hola");
                  
                }
                 
             
                buttonPrep713Prom.addEventListener('click', quitarDatos713Prom);



