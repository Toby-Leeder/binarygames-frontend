function checkForSignedIn() {
    if (localStorage.get("name")) {
        return true;
    }
    else {
        return false;
    }
}

console.log(checkForSignedIn());

function redirectToLogin() {
    if (checkForSignedIn() == false) {
        window.location.replace("http://binarygames.tech");
    }
    else {
        return "Logged in";
    }
}