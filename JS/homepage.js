function welcoming() {
                
    var userinfo = JSON.parse(localStorage.getItem('usersList'));
    var userlogininfo = JSON.parse(localStorage.getItem('loginList'));
    var userwelcoming = ``;
    for (var i = 0; i < userinfo.length; i++) {
        if (userinfo[i].uSignupEmail.toLowerCase() === userlogininfo[i].uLoginEmail.toLowerCase() && userinfo[i].uSignupPass ===  userlogininfo[i].uLoginPass) {

            userwelcoming = `
<h1> Welcome ${userinfo[i].uSignupName.toUpperCase()} </h1>
`;
        }

        }

        document.getElementById("welcoming").innerHTML = userwelcoming;
    }
welcoming();