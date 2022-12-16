const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('buttonin')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }
    
    console.log(data)

    window.location = "pantalla1.html";
})