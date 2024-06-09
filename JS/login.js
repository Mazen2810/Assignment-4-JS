var userLoginEmail = document.getElementById('userLoginEmail');
var userLoginPass = document.getElementById('userLoginPass');
var loginBtn = document.getElementById('loginBtn');
var loginlist=[];

loginBtn.onclick = loginCheck;
var userInfo = JSON.parse(localStorage.getItem('usersList'));
   
    

function loginCheck() {
var loginuser = {
    uLoginEmail: userLoginEmail.value,
    uLoginPass: userLoginPass.value,
}

loginlist.push(loginuser);
localStorage.setItem('loginList', JSON.stringify(loginlist));

    if (userLoginEmail.value === "" || userLoginPass.value === "") {
        inputRequired();

        return;
    }
    else {
        var correct = false;
        for (var i = 0; i < userInfo.length; i++) {
            if (userInfo[i].uSignupEmail.toLowerCase() === userLoginEmail.value.toLowerCase() && userInfo[i].uSignupPass === userLoginPass.value) {
                 username = userInfo[i].uSignupName;

                window.location.replace("homepage.html");
                correct = true;
                

            
            }


        }
        if (correct === false) {
            incorrectInput();
        }

    }
}

function reset() {
    userSignupName.value = '';
    userSignupEmail.value = '';
    userSignupPass.value = '';
    req = ``;
    document.getElementById('alertMsg').innerHTML = req;
}
function inputRequired() {
    var req = ``;

    for (var i = 0; i < 1; i++) {
        req = `
    <p  class=" pt-4 d-block text-danger">
    All inputs is required
    </p>
    `;
    }

    document.getElementById('alertMsg').innerHTML = req;
}


function incorrectInput() {

    var incInp = ``;

    for (var i = 0; i < 1; i++) {
        incInp = `
    <p  class=" pt-4 d-block text-danger">
    incorrect email or password    </p>
    `;
    }

    document.getElementById('alertMsg').innerHTML = incInp;
}