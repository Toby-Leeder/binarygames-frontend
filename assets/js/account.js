function convertToHHMMSS(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
  
    const hh = String(hours).padStart(2, '0');
    const mm = String(minutes).padStart(2, '0');
    const ss = String(remainingSeconds).padStart(2, '0');
  
    return hh + ':' + mm + ':' + ss;
}

// view/hide passwords

const inputpwd = document.getElementById("inpPswd1");
const visIcon = document.getElementById("iconVis");
const vis = document.getElementById("visIcon1");
const closeEye = 'M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z';
const openEye = 'M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z';

visIcon.addEventListener("click", function() {
    if (vis.getAttribute('d') == closeEye) {
        vis.setAttribute('d', openEye);
        inputpwd.setAttribute('type', 'username');
        visIcon.classList.add("adjusted");
    }
    else if (vis.getAttribute('d') == openEye) {
        vis.setAttribute('d', closeEye);        
        inputpwd.setAttribute('type', 'password')
        visIcon.classList.remove("adjusted");
    }
    else {
        console.log("done");
    }
});

const inputpwd2 = document.getElementById("inpPswd2");
const visIcon2 = document.getElementById("iconVis2");
const vis2 = document.getElementById("visIcon2");

visIcon2.addEventListener("click", function() {
    if (vis2.getAttribute('d') == closeEye) {
        vis2.setAttribute('d', openEye);
        inputpwd2.setAttribute('type', 'username');
        visIcon2.classList.add("adjusted");
    }
    else if (vis2.getAttribute('d') == openEye) {
        vis2.setAttribute('d', closeEye);        
        inputpwd2.setAttribute('type', 'password')
        visIcon2.classList.remove("adjusted");
    }
    else {
        console.log("done");
    }
});

const inputpwd3 = document.getElementById("inpPswd3");
const visIcon3 = document.getElementById("iconVis3");
const vis3 = document.getElementById("visIcon3");

visIcon3.addEventListener("click", function() {
    if (vis3.getAttribute('d') == closeEye) {
        vis3.setAttribute('d', openEye);
        inputpwd3.setAttribute('type', 'username');
        visIcon3.classList.add("adjusted");
    }
    else if (vis3.getAttribute('d') == openEye) {
        vis3.setAttribute('d', closeEye);        
        inputpwd3.setAttribute('type', 'password')
        visIcon3.classList.remove("adjusted");
    }
    else {
        console.log("done");
    }
});

const inputpwd4 = document.getElementById("inpPswd4");
const visIcon4 = document.getElementById("iconVis4");
const vis4 = document.getElementById("visIcon4");

visIcon4.addEventListener("click", function() {
    if (vis4.getAttribute('d') == closeEye) {
        vis4.setAttribute('d', openEye);
        inputpwd4.setAttribute('type', 'username');
        visIcon4.classList.add("adjusted");
    }
    else if (vis4.getAttribute('d') == openEye) {
        vis4.setAttribute('d', closeEye);        
        inputpwd4.setAttribute('type', 'password')
        visIcon4.classList.remove("adjusted");
    }
    else {
        console.log("done");
    }
});

const inputpwd5 = document.getElementById("inpPswd5");
const visIcon5 = document.getElementById("iconVis5");
const vis5 = document.getElementById("visIcon5");

visIcon5.addEventListener("click", function() {
    if (vis5.getAttribute('d') == closeEye) {
        vis5.setAttribute('d', openEye);
        inputpwd5.setAttribute('type', 'username');
        visIcon5.classList.add("adjusted");
    }
    else if (vis5.getAttribute('d') == openEye) {
        vis5.setAttribute('d', closeEye);        
        inputpwd5.setAttribute('type', 'password')
        visIcon5.classList.remove("adjusted");
    }
    else {
        console.log("done");
    }
});


// Load user info

const displayName = document.getElementById('displayName');
const displayTime = document.getElementById('displayTime');

const currentUser = localStorage.getItem('name');

const url = 'http://http://backend.binarygames.tech//api/gamers/';

async function displayInfo() {
    const thingy = await fetch(url)
    .then(response => {
        // trap error response from Web API
        if (response.status !== 200) {
            const message = response.status + " " + response.statusText;
            alert(message);
            return;
        }
        // Valid response will contain json data
        response.json().then(data => {
            // iterate through the whole database and find a record that matches the uid
            for (i in data) {
                if (data[i].name == currentUser) {
                    const nameDisp = data[i].name;
                    displayName.innerHTML = nameDisp;
                    const timeDisp = convertToHHMMSS(data[i].bomb);
                    displayTime.innerHTML = timeDisp;
                    break;
                }
            }
        })
    })
}


// Popups

const changeNamePopup = document.getElementById("changeNameCont");
const changePwdPopup = document.getElementById("changePwdCont");
const deleteAccPopup = document.getElementById("deleteAccCont");
const blurDiv = document.getElementById("blurryBoi");

const changeNameBTN = document.getElementById("changeNameBTN");
const changePwdBTN = document.getElementById("changePwdBTN");
const deleteAccBTN = document.getElementById("deleteAccBTN");

const cancel1 = document.getElementById("cancel1");
const cancel2 = document.getElementById("cancel2");
const cancel3 = document.getElementById("cancel3");

changeNameBTN.addEventListener("click", () => {
    changeNamePopup.classList.remove("hidden");
    blurDiv.classList.remove("hidden");
})
changePwdBTN.addEventListener("click", () => {
    changePwdPopup.classList.remove("hidden");
    blurDiv.classList.remove("hidden");
})
deleteAccBTN.addEventListener("click", () => {
    deleteAccPopup.classList.remove("hidden");
    blurDiv.classList.remove("hidden");
})

cancel1.addEventListener("click", () => {
    changeNamePopup.classList.add("hidden");
    blurDiv.classList.add("hidden");
})
cancel2.addEventListener("click", () => {
    changePwdPopup.classList.add("hidden");
    blurDiv.classList.add("hidden");
})
cancel3.addEventListener("click", () => {
    deleteAccPopup.classList.add("hidden");
    blurDiv.classList.add("hidden");
})



// Update name

async function updateName() {
    const oldname = document.getElementById("inpUsrnmOld");
    const newname = document.getElementById("inpUsrnmNew");
    const password = document.getElementById("inpPswd1");
    const messageP = document.getElementById("message1");

    if (oldname.value == "" || newname.value == "" || password.value == "") {
        messageP.innerHTML = "Please fill in all fields.";
    }
    else {
        const thingy2 = await fetch(url + "update", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": oldname.value,
                "pass": password.value,
                "data": {"name": newname.value}
            })
        })
        .then(response => {
            // trap error response from Web API
            if (response.status !== 200) {
                const message = "No record found for " + oldname.value +". Please enter the correct name and password.";
                messageP.innerHTML = message;
                oldname.value = "";
                password.value = "";
                return;
            }
            // Valid response will contain json data
            response.json().then(data => {
                messageP.style.color = "#09ff00"
                messageP.innerHTML = "Success! " + oldname.value + " updated to " + newname.value + ".";
                console.log(data);
                localStorage.setItem("name", newname.value);
                location.reload();
            })
        })
    }
}


// Update password

async function updatePwd() {
    const name = document.getElementById("inpUsrnm-pswd");
    const passwordOld = document.getElementById("inpPswd4");
    const passwordNew = document.getElementById("inpPswd2");
    const passwordConf = document.getElementById("inpPswd3");
    const messageP = document.getElementById("message2");

    if (name.value == "" || passwordOld.value == "" || passwordNew.value == "" || passwordConf.value == "") {
        messageP.innerHTML = "Please fill in all fields.";
    }
    else if (passwordNew.value.length < 3) {
        messageP.innerHTML = "Password must be at least 3 characters.";
    }
    else if (passwordNew.value == passwordOld.value) {
        messageP.innerHTML = "New password cannot match old password.";
    }
    else if (passwordNew.value != passwordConf.value) {
        messageP.innerHTML = "Passwords do not match.";
        passwordConf.value = "";
    }
    else {
        const thingy3 = await fetch(url + "update", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": name.value,
                "pass": passwordOld.value,
                "data": {"pass": passwordNew.value}
            })
        })
        .then(response => {
            // trap error response from Web API
            if (response.status !== 200) {
                const message = "No record found for " + oldname.value +". Please enter the correct name and password.";
                messageP.innerHTML = message;
                oldname.value = "";
                password.value = "";
                return;
            }
            // Valid response will contain json data
            response.json().then(data => {
                messageP.style.color = "#09ff00"
                messageP.innerHTML = "Success! " + name.value + "'s password has been updated.";
                console.log(data);
                location.reload();
            })
        })
    }
}

// Delete account

async function delAcc() {
    const name = document.getElementById("inpUsrnm-del");
    const password = document.getElementById("inpPswd5");
    const messageP = document.getElementById("message3");

    if (name.value == "" || password.value == "") {
        messageP.innerHTML = "Please fill in all fields.";
    }
    else {
        const thingy4 = await fetch(url + "delete", {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": name.value,
                "pass": password.value
            })
        })
        .then(response => {
            // trap error response from Web API
            if (response.status !== 200) {
                const message = "No record found for " + name.value +". Please enter the correct name and password.";
                messageP.innerHTML = message;
                password.value = "";
                return;
            }
            // Valid response will contain json data
            response.json().then(data => {
                messageP.style.color = "#09ff00"
                messageP.innerHTML = "Success! " + name.value + "'s account has been deleted.";
                console.log(data);
                localStorage.removeItem("name");
                window.location.replace("http://binarygames.tech/");
            })
        })
    }
}