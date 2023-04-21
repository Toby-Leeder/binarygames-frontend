    // const url = "https://tngc.nighthawkcodescrums.gq/api/names/";
    const url = "http://172.27.229.177:8086/api/login/"

document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const body = {
        name: document.getElementById("loginName").value,
        password: document.getElementById("loginPassword").value,
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
    fetch(url, requestOptions)
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
            if (data.message == "name is missing") {
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
            document.getElementById("message").innerHTML = message;
            if (data.message != undefined)
            return document.getElementById("message").innerHTML = "Error: " +  data.message;
            localStorage.setItem("name", data.name);
        })
        .catch(response => {
            const message = response.message;
            
            document.getElementById("message").innerHTML = "Error: " + message;
            localStorage.removeItem("name");
        });
});