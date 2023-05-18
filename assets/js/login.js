
// Makes enter key trigger the login button when password field is in focus
const inputpwd = document.getElementById("inpPswd");
inputpwd.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("loginBtn").click();
    }
});


const url = "http://backend.binarygames.tech/api/gamers/"

document.getElementById("loginBtn").addEventListener("click", (event) => {
    event.preventDefault();
    const body = {
        "name": document.getElementById("inpUsrnm").value,
        "password": document.getElementById("inpPswd").value,
    };
    const requestOptions = {
        method: 'POST',
        // mode: 'cors',
        // cache: 'no-cache',
        // credentials: 'same-origin',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
        },
    };
    fetch(url + "authenticate", requestOptions)
        .then(response => {
            console.log(response)
            if (response.status === 200){
                return response.json()
            }
            else if (response.status === 210) {
                document.getElementById("message").innerHTML = "Username must be more than 2 characters";
                return
            }
            else if (response.status === 211) {
                document.getElementById("message").innerHTML = "Username not found";
                return
            }
            else if (response.status === 212) {
                document.getElementById("message").innerHTML = "Password incorrect";
                return
            }
            else {
                document.getElementById("message").innerHTML = "Error " + response.status;
                return
            }
        })
        .then(data => {
            if (document.getElementById("inpUsrnm").value.length < 3) {
                document.getElementById("message").innerHTML = "Username must be more than 2 characters";
                return
            }
            else if (data.message == "invalid username") {
                document.getElementById("message").innerHTML = "Username not found";
                return
            }
            else if (data.message == "wrong password") {
                document.getElementById("message").innerHTML = "Password incorrect";
                return
            }
            const message = 'Login success: ' + data.name;
            document.getElementById("message").style.color = "#09ff00";
            document.getElementById("message").innerHTML = message;
            if (data.message != undefined) {
                return document.getElementById("message").innerHTML = "Error: " +  data.message;
            }
            localStorage.setItem("name", data.name);
            window.location.replace("http://binarygames.tech/escaperoom.html");
        })
        .catch(response => {
            const message = response.message;
            document.getElementById("message").innerHTML = "Error: " + message;
            localStorage.removeItem("name");
        });
});