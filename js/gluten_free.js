var buttonLogin = document.getElementById("buttonLogin");
var buttonSignup = document.getElementById("buttonSignup");



function notificationLogin () {
    var notification;
notification = "Invalid password!";
window.alert(notification);
}

function notificationSignup () {
    var notification;
notification = "Check your internet connection!";
window.alert(notification);
}

buttonLogin.addEventListener("click", notificationLogin);
buttonSignup.addEventListener("click", notificationSignup);
