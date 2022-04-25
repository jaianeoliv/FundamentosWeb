/*
por tag: getElementeByTagName()
por id: getElementById()
por nome: getElementsByName()
por classe: getElementsByClassName()
por seletor: querySelector()
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOK = false
let assuntoOk = false
let mapa = document.querySelector("mapa")

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido.'
        txtNome.style.color = 'red'
    } else{
        txtNome.innerHTML = 'Nome Válido.'
        txtNome.style.color = 'green'
        nomeOK = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color = 'red'
    } else{
        txtEmail.innerHTML = 'Email Válido'
        txtEmail.style.color = 'green'
        emailOK = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 carcteres.'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOK == true && assuntoOk == true) {
        alert("Formulário enviado com sucesso!")
    } else{
        alert("Preencha os campos corretamente antes de enviar")
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '300px'
}