// Makes enter key trigger the login button when password field is in focus
const inputpwd = document.getElementById("pswdConfirm");
inputpwd.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("createBtn").click();
    }
});

const url = 'http://backend.binarygames.tech/api/gamers/'
const options = {
    method: 'POST',
    cache: 'default',
    credentials: 'omit',
    headers: {
        'Content-Type': 'application/json',
    }
}

document.getElementById("createBtn").onclick = function(){
    const allowedChars = "1234567890!@#$%^&*()qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM`~"
    function checkChars(string) {
        var regex = new RegExp('[^' + allowedChars + ']', 'g');
        var newstr = string.replace(regex, '');
        if (newstr === string){
            return true
        } else return false
    }

    var nameRaw = document.getElementById("inpUsrnm").value.toString()
    var name;

    if (checkChars(nameRaw)){
        name = nameRaw
    } else {
        document.getElementById("message").innerHTML = "Username contains invalid characters";
        return
    }

    var passwordRaw = document.getElementById("inpPswd").value.toString()
    var password;

    if (checkChars(passwordRaw)){
        password = passwordRaw
    } else {
        document.getElementById("message").innerHTML = "Password contains invalid characters";
        return
    }

    if (password.length < 3 || name.length < 3){
        document.getElementById("message").innerHTML = "Username and password must be greater than 3 characters";
        return
    }

    var passwordConfirm = document.getElementById("pswdConfirm").value.toString()
    var values = [name, password]

    // only run if passwords match
    if (password === passwordConfirm) {
        var data = `{ "name": "${name}", "password": "${password}"}`
        var data2 = JSON.parse(data)
        fetch(url + "create", {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data2)
        })
        .then(response => response.json().then(data => {
            console.log(data)
            localStorage.setItem("name", data.name);
            document.getElementById("message").style.color = "#09ff00";
            document.getElementById("message").innerHTML = "Signed up!"
            window.location.replace("http://binarygames.tech/escaperoom.html");
        })
        )
        .then(response => console.log(response))
        .catch(err => console.error(err))
    } else {
        document.getElementById("message").innerHTML = "Passwords don't match!";
        document.getElementById("pswdConfirm").value = "";
    }
}