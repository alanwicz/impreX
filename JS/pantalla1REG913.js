//Creamos los inputs para ingresar texto 
const Reg913 = document.getElementById('Reg913')
const buttonPrep913Reg = document.getElementById('prepararCartel913Reg');





               function quitarDatos913Reg() {
                let Descripcion913Reg1 = document.getElementById('Descripcion913Reg1').value;  
                let Precio913Reg1 = document.getElementById('Precio913Reg1').value;
                let Master913Reg1 = document.getElementById('Master913Reg1').value; 
                
                let Descripcion913Reg2 = document.getElementById('Descripcion913Reg2').value;  
                let Precio913Reg2 = document.getElementById('Precio913Reg2').value;
                let Master913Reg2 = document.getElementById('Master913Reg2').value; 

                let Descripcion913Reg3 = document.getElementById('Descripcion913Reg3').value;  
                let Precio913Reg3 = document.getElementById('Precio913Reg3').value;
                let Master913Reg3 = document.getElementById('Master913Reg3').value; 
                 

                let Descripcion913Reg4 = document.getElementById('Descripcion913Reg4').value;  
                let Precio913Reg4 = document.getElementById('Precio913Reg4').value;
                let Master913Reg4 = document.getElementById('Master913Reg4').value; 
9


                const contenido = document.getElementById('contenido'); 
                contenido.style.display = 'none';   
             const impresReg913 = document.getElementById('impresReg913');
             const crearDivReg913 = document.createElement('div');
              

            
             crearDivReg913.innerHTML = `
               
             <section style="display:flex;" id="">
   
    <!--Imprimibles 1 Columna-->
    <div id="primera-Columna">
    <!--Imprimible 1-->

    <div id="areaimprimible913">
     <style>#impresReg{
        display:none;

       
    }
    
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
        font-size:2rem;
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
         <div id="descripcion" ><h3>${Descripcion913Reg1}</h3></div>
         <div id="precio"><h4>$ ${Precio913Reg1}</h4></div>       
         <div id="master"><h5>Master ${Master913Reg1}</h5></div>
    </div>
 </div>
    <!--Fin Imprimible 1-->

    <!--Imprimible 2-->

    <div id="areaimprimible913">
        <style>#impresReg{
           width:297mm;
           height:210mm;
          margin:0;
          padding:0;
          border:0.01mm rgb(204, 204, 204) solid;
   
          
       }
       
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
           font-size:2rem;
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
            <div id="descripcion"><h3> ${Descripcion913Reg2} </h3></div>
            <div id="precio"><h4>$ ${Precio913Reg2}</h4></div>       
            <div id="master"><h5> Master ${Master913Reg2}</h5></div>
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
         <style>#impresReg{
            width:297mm;
            height:210mm;
           margin:0;
           padding:0;
           border:0.01mm rgb(204, 204, 204) solid;
    
           
        }
        
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
            font-size:2rem;
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
             <div id="descripcion" ><h3>${Descripcion913Reg3}</h3></div>
             <div id="precio"><h4>$ ${Precio913Reg3}</h4></div>       
             <div id="master"><h5>Master ${Master913Reg3}</h5></div>
        </div>
     </div>
        <!--Fin Imprimible 3-->
    
        <!--Imprimible 4-->
    
        <div id="areaimprimible913">
            <style>#impresReg{
               width:297mm;
               height:210mm;
              margin:0;
              padding:0;
              border:0.01mm rgb(204, 204, 204) solid;
       
              
           }
           
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
               margin-top: 60px;
               margin-left: 20px;
           }
           
           #precio{   
               display:flex;
               flex-direction:column;
               color:rgb(73, 73, 255);
               font-family: 'Open Sans', sans-serif;
               font-weight:700; 
               font-size:2rem;
               align-items: center;
               justify-content: center;
           }
           
           #precio h4{
            font-size:2.5rem;
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
                <div id="descripcion" ><h3>${Descripcion913Reg4}</h3></div>
                <div id="precio"><h4>$ ${Precio913Reg4}</h4></div>       
                <div id="master"><h5>Master ${Master913Reg4}</h5></div>
           </div>
        </div>
           <!--Fin Imprimible 4-->
      
         </div>
    
           <!--Fin Imprimible 1 Columna-->
        </div>
       
   
        


</section>
            

               `
               impresReg913.appendChild(crearDivReg913);
                  
                }
                 
             
buttonPrep913Reg.addEventListener('click', quitarDatos913Reg);



