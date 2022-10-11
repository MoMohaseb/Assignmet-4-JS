var signinEmail = document.getElementById('signinEmail')
var signinPassword = document.getElementById('signinPassword')
var signupName = document.querySelector('#signupName')
var signupEmail = document.querySelector('#signupEmail')
var signupPassword = document.querySelector('#signupPassword')


function ValidateEmail() {
    var mailformat =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(signupEmail.value.match(mailformat)){
    document.getElementById('incorrectmessage').classList.add('d-none')
    return (true)
  }else
    document.getElementById('incorrectmessage').innerHTML = '<span class="text-danger m-3">You have entered an invalid email address!</span>'
    return (false)
}

function ValidatePassword() {
    var passwordformat =/^[0-9]\w{5,30}$/
    if(signupPassword.value.match(passwordformat)){
    document.getElementById('incorrectpass').classList.add('d-none')
    return (true)
  }else
    document.getElementById('incorrectpass').innerHTML = '<span class="text-danger m-3">You have entered an invalid Password!</span>'
    return (false)
}



function isEmpty() {
    if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        return false
    } else {
        return true
    }
}

function isEmailExist() {
    for (var i = 0; i < signUpData.length; i++) {
        if (signUpData[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
            return false
        }
    }
}

function signUp() {
   if (ValidateEmail() == false) {
    document.getElementById('signUpBtn').classList.add('disabled')
   }
   if (ValidatePassword () == false) {
    document.getElementById('signUpBtn').classList.add('disabled')
   }
    if (isEmpty() == false) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    var signUp = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value,
    }
    if (signUpData.length == 0) {
        signUpData.push(signUp)
        localStorage.setItem('users', JSON.stringify(signUpData))
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
        return true
    }
    if (isEmailExist() == false) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">email already exists</span>'

    } else {
        signUpData.push(signUp)
        localStorage.setItem('users', JSON.stringify(signUpData))
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'

    }

}
var signUpData = []
if (localStorage.getItem('users') != null) {
    signUpData = JSON.parse(localStorage.getItem('users'))
}


function isLoginEmpty() {

    if (signinPassword.value == "" || signinEmail.value == "") {
        return false
    } else {
        return true
    }
}

function login() {
    if (isLoginEmpty() == false) {
        document.getElementById('incorrectmessage').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    for (var i = 0; i < signUpData.length; i++) {
        if (signUpData[i].email.toLowerCase() == signinEmail.value.toLowerCase() && signUpData[i].password.toLowerCase() == signinPassword.value.toLowerCase()) {
            localStorage.setItem('username', signUpData[i].name)
            window.location.href = "Welcome.html";
        } else {
            document.getElementById('incorrectmessage').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
        }
    }
}


var username = localStorage.getItem('username')
if (username) {
    document.getElementById('username').innerHTML = "Welcome " + username
}
function logout() {
    localStorage.removeItem('username')
}






