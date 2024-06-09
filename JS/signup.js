var userSignupName = document.getElementById('userSignupName');
var userSignupEmail = document.getElementById('userSignupEmail');
var userSignupPass = document.getElementById('userSignupPass');
var signUpBtn = document.getElementById('signUpBtn');
var usersList = [];

signUpBtn.onclick = addUsers;
if (localStorage.getItem('usersList') != null) {
    usersList = JSON.parse(localStorage.getItem('usersList'));

}

function addUsers() {
var inputIdEmail = 'userSignupEmail';
var inputIdPass = 'userSignupPass';
var isValidEmail = validInput(inputIdEmail, userSignupEmail.value);
var isValidPass = validInput(inputIdPass, userSignupPass.value);
if(isValidEmail && isValidPass){
    var users = {
        uSignupName: userSignupName.value,
        uSignupEmail: userSignupEmail.value,
        uSignupPass: userSignupPass.value
    }
    if (userSignupName.value === "" || userSignupEmail.value === "" || userSignupPass.value === "") {
        inputRequired();
        return;
    }
    else {
        for (var i = 0; i < usersList.length; i++) {

            if (usersList[i].uSignupEmail === userSignupEmail.value) {
                alreadyExists();
                return;
            }
        }

        usersList.push(users);
        localStorage.setItem('usersList', JSON.stringify(usersList));
        reset();
        signupSuccess();


}
    
    


    }

}

function reset() {
    userSignupName.value = '';
    userSignupEmail.value = '';
    userSignupPass.value = '';
    alrExist = ``;
    document.getElementById('alertMsg').innerHTML = alrExist;
    req = `` ;
    document.getElementById('alertMsg').innerHTML = req;
}
var req = `` ;
function inputRequired() {
    for (var i = 0; i < usersList.length; i++) {
        req = `
    <p  class=" pt-4 d-block text-danger">
    All inputs is required
    </p>
    `;
    }

    document.getElementById('alertMsg').innerHTML = req;
}
var alrExist = ``;

function alreadyExists() {

    for (var i = 0; i < usersList.length; i++) {
        alrExist = `
        <p  class=" pt-4 d-block text-danger">
        email already exists

        </p>
        `;
    }

    document.getElementById('alertMsg').innerHTML = alrExist;

}
function signupSuccess() {
    var success = ``;
    for (var i = 0; i < usersList.length; i++) {
        success = `
        <p  class=" fs-5 pt-4 d-block text-success">
        Success
        <br>
Now you can Sign in
        </p>
        `;
    }

    document.getElementById('alertMsg').innerHTML = success;
}


var inputValid = document.querySelectorAll('.inputValid');
for (var i = 0; i < inputValid.length; i++){
    inputValid[i].addEventListener('change', function(e){
        validInput(e.target.id , e.target.value);
    })
}

function validInput(id , value){
var regex = {
    userSignupEmail :/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/ ,
    userSignupPass : /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
}
var elm = document.getElementById(id);
var nextElm = elm.nextElementSibling;

if(regex[id].test(value)){
elm.classList.add('is-valid');
elm.classList.remove('is-invalid');
nextElm.classList.replace('d-flex','d-none');


return true;
}else{
    elm.classList.add('is-invalid');
elm.classList.remove('is-valid');
nextElm.classList.replace('d-none','d-flex');
return false;
}

}