var input = require('readline-sync');

function checkpassword() {
    var user = document.getElementsById('username');
    var pswd = document.getElementById(password);

    if(user === 'admin' && pswd === 'adminuser') {
        alert("You have successfully logged in.");
        location.reload(index.html);
    } else {
        alert("Password or Username is incorrect.")
    }
}