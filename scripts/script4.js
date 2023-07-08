

function limpar(){
var cor = window.document.getElementById('button')
var nickname = window.document.getElementById('nickname')
var email = window.document.getElementById('email')
var password = window.document.getElementById('password')
var emailR = window.document.getElementById('emailR')
nickname.value = ``
email.value = ``
password.value = ``
emailR.value = ``
}

function create(){    
    var nickname = window.document.getElementById('nickname')
    var email = window.document.getElementById('email')
    var password = window.document.getElementById('password')
    var emailR = window.document.getElementById('emailR')
    
    if(nickname.value && email.value && password.value && emailR.value){
        alert('Conta criada!')
        console.log(nickname.value)
        console.log(email.value)
        console.log(password.value)
        console.log(emailR.value)
        location.href= 'page0.html'
        
    }else{
        alert('Preencha todos campos!')
    }
    }