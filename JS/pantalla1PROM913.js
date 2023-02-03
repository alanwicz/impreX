


//Creamos los inputs para ingresar texto 

const buttonPrep913Prom = document.getElementById('prepararCartel913Prom');





               function quitarDatos913Prom() {
                let Descripcion913Prom1 = document.getElementById('Descripcion913Prom1').value;  
                let Precio913Prom1 = document.getElementById('Precio913Prom1').value;
                let Descuento913Prom1 = document.getElementById('Descuento913Prom1').value;
                let Master913Prom1 = document.getElementById('Master913Prom1').value; 
                
                let Descripcion913Prom2 = document.getElementById('Descripcion913Prom2').value;  
                let Precio913Prom2 = document.getElementById('Precio913Prom2').value;
                let Descuento913Prom2 = document.getElementById('Descuento913Prom2').value;
                let Master913Prom2 = document.getElementById('Master913Prom2').value; 

                let Descripcion913Prom3 = document.getElementById('Descripcion913Prom3').value;  
                let Precio913Prom3 = document.getElementById('Precio913Prom3').value;
                let Descuento913Prom3 = document.getElementById('Descuento913Prom3').value;
                let Master913Prom3 = document.getElementById('Master913Prom3').value; 
                 

                let Descripcion913Prom4 = document.getElementById('Descripcion913Prom4').value;  
                let Precio913Prom4 = document.getElementById('Precio913Prom4').value;
                let Descuento913Prom4 = document.getElementById('Descuento913Prom4').value;
                let Master913Prom4 = document.getElementById('Master913Prom4').value; 


                 let  precioProm913 = (Precio913Prom1 - ((Precio913Prom1*Descuento913Prom1)/100));
                 let  precioProm9132 = (Precio913Prom2 - ((Precio913Prom2*Descuento913Prom2)/100));
                 let  precioProm9133 = (Precio913Prom3 - ((Precio913Prom3*Descuento913Prom3)/100));
                 let  precioProm9134  = (Precio913Prom4 - ((Precio913Prom4*Descuento913Prom4)/100));

                const contenido = document.getElementById('contenido'); 
                contenido.style.display = 'none';   
             const impresProm913 = document.getElementById('impresProm913');
             const crearDivProm913 = document.createElement('div');
              

            
             crearDivProm913.innerHTML = `
               
             <section style="display:flex;" id="impresProm">
   
    <!--Imprimibles 1 Columna-->
    <div id="primera-Columna">
    <!--Imprimible 1-->
    <div id="areaimprimible913">
        <div class="encabezado"> <div class="porcentaje913Prom"><h2 style="
            margin-top: 5px;
        ">${Descuento913Prom1}</h2><div class="porcentajeOFF913"><h3 style="font-size:3rem;margin:0;">%</h3><h3>OFF</h3></div></div>
         
                     <div class="triangulo-equilatero-bottom"></div></div>

         <div id="funcional">
         <div id="descripcion"><h3>${Descripcion913Prom1}
         </h3></div>
         <div id="precio" style="
         margin-top: 10px;
     "><div><p >Precio Anterior</p><h4 class="precioAnterior913" style="
            margin-bottom: 0px;
        " >$${Precio913Prom1}</h4></div>
            <div><p style="color:rgb(73, 73, 255);">Precio Promoción</p><h4 class="precioPromocion913" style="
                margin-bottom: 0px;
            ">$${precioProm913}</h4></div></div>       
         <div id="master"><h5>Master ${Master913Prom1}</h5></div>
    </div>
 </div>
        <!--Fin Imprimible 1-->

        <!--Imprimible 2-->
        <div id="areaimprimible913">
            <div class="encabezado"> <div class="porcentaje913Prom"><h2 style="
                margin-top: 5px;
            ">${Descuento913Prom2}</h2><div class="porcentajeOFF913"><h3 style="font-size:3rem;margin:0;">%</h3><h3>OFF</h3></div></div>
             
                         <div class="triangulo-equilatero-bottom"></div></div>
    
             <div id="funcional">
             <div id="descripcion"><h3>${Descripcion913Prom2} 
             </h3></div>
             <div id="precio" style="
             margin-top: 10px;
         "><div><p>Precio Anterior</p><h4 class="precioAnterior913" style="
                margin-bottom: 0px;
            " >$${Precio913Prom2}</h4></div>
                <div><p style="color:rgb(73, 73, 255);">Precio Promoción</p><h4 class="precioPromocion913" style="
                    margin-bottom: 0px;
                ">$${precioProm9132}</h4></div></div>       
             <div id="master"><h5>Master ${Master913Prom2}</h5></div>
        </div>
     </div>
       <!--Fin Imprimible 2-->
  
     </div>

       <!--Fin Imprimible 1 Columna-->
    </div>
   



    <!--Imprimibles 1 Columna-->
    <div id="primera-Columna">
        <!--Imprimible 3-->
    
        <div id="areaimprimible913">
            <div class="encabezado"> <div class="porcentaje913Prom" style="z-index:3;"><h2 style="
                margin-top: 5px;
            ">${Descuento913Prom3}</h2><div class="porcentajeOFF913" ><h3 style="font-size:3rem;margin:0;">%</h3><h3>OFF</h3></div></div>
             
                         <div class="triangulo-equilatero-bottom"></div></div>
    
             <div id="funcional">
             <div id="descripcion"><h3>${Descripcion913Prom3}
             </h3></div>
             <div id="precio" style="
             margin-top: 10px;
         "><div><p>Precio Anterior</p><h4 class="precioAnterior913" style="
                margin-bottom: 0px;
            " >$${Precio913Prom3}</h4></div>
                <div><p style="color:rgb(73, 73, 255);">Precio Promoción</p><h4 class="precioPromocion913" style="
                    margin-bottom: 0px;
                ">$${precioProm9133}</h4></div></div>       
             <div id="master"><h5>Master ${Master913Prom3}</h5></div>
        </div>
     </div>
        <!--Fin Imprimible 3-->
    
        <!--Imprimible 4-->
    
      
            <style>
            
            


          
           
           #areaimprimible913{
               margin-left:25px;
               width:130mm;
               height:90mm;
               border:0.01mm rgb(204, 204, 204) solid;
               display:flex;
              flex-direction:row;
              margin-top:40px;
               
           }
           
           .encabezado{
               height:90mm;
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

           .porcentaje913Prom{
            display:flex;
            z-index:2;
            width:50mm;
            flex-direction: row;
  
           }

           .porcentaje913Prom h2{
              
    margin-right: 80px!important;
    position:fixed!important;
    margin-left: 20px;


           }
           

           .porcentajeOFF913{
            margin-left: 110px;
            line-height: 0.00em;
            color:white;
            font-weight: 700;
            font-size:1.5rem;
            font-family: 'Open Sans', sans-serif;
           }

           .precioAnterior913{
            color:black;
            
            
    margin-top: 10px;
    

           }

           .precioPromocion913{
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
           
           <div id="areaimprimible913">
            <div class="encabezado"> <div class="porcentaje913Prom"><h2 style="
                margin-top: 5px;
            ">${Descuento913Prom4}</h2><div class="porcentajeOFF913"><h3 style="font-size:3rem;margin:0;">%</h3><h3>OFF</h3></div></div>
             
                         <div class="triangulo-equilatero-bottom"></div></div>
    
             <div id="funcional">
             <div id="descripcion"><h3>${Descripcion913Prom4}
             </h3></div>
             <div id="precio" style="
             margin-top: 10px;
         "><div><p >Precio Anterior</p><h4 class="precioAnterior913" style="
                margin-bottom: 0px;
            " >$${Precio913Prom4}</h4></div>
                <div><p style="color:rgb(73, 73, 255);">Precio Promoción</p><h4 class="precioPromocion913" style="
                    margin-bottom: 0px;
                ">$${precioProm9134}</h4></div></div>       
             <div id="master"><h5>Master ${Master913Prom4}</h5></div>
        </div>
     </div>

               `
               impresProm913.appendChild(crearDivProm913);
            
                  
                }
                 
                function Prueba(){
                    alert('Hola');
                }
             
                buttonPrep913Prom.addEventListener('click', quitarDatos913Prom );

