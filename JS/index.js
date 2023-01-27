const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('buttonin')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }
       /*console.log((data.username));*/
   
       if (((data.username) === "supervision") && ((data.password) === "supervision")) {
        window.location = "pantalla1.html";
        
       }
       else {
        alert("Contraseña o password incorrecto/a")
    }
   /* */
})