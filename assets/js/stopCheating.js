function checkForSignedIn() {
    if (localStorage.getItem("name") != undefined) {
        return true;
    }
    else {
        return false;
    }
}

console.log(checkForSignedIn());

function redirectToLogin() {
    if (checkForSignedIn() == false) {
        window.location.replace("https://toby-leeder.github.io/binarygames-frontend/escaperoom.html");
    }
    else {
        return "Logged in";
    }
}

window.addEventListener("load", () => {
    redirectToLogin();
})
