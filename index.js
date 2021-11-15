document.getElementById("intro__subscription__form").addEventListener('submit', function(e) {
    
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var pattern =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    e.preventDefault();

    if (!fname.value) {
        errorFunc(fname, 'First Name cannot be empty');
    } else {
        successFunc(fname);
    }

    if (!lname.value) {
        errorFunc(lname, 'Last Name cannot be empty');
    } else {
        successFunc(lname);
    }

    if (!email.value) {
        errorFunc(email, 'Email cannot be empty');
    } else {
        successFunc(email);
    }

    if (!password.value) {
        errorFunc(password, 'Password cannot be empty');
    } else {
        successFunc(password);
    }


});

function errorFunc(input, message){
    const span = input.nextElementSibling;
    input.className += 'error';
    span.innerHTML = message;
}

function successFunc(input) {
    const span = input.nextElementSibling;
    input.className -= 'error';
    span.innerHTML = '';
}
