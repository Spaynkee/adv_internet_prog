$(document).ready(function () {
    //Not sure if anything needs to be here.
});


function validate() {
    //add regex validations for each field that we care about.
    // we can get elements by id and pull their data that way.
    fname = document.getElementById('fname').value;
    lname = document.getElementById('lname').value;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

    errors = 0
    errors += validate_fname(fname);
    errors += validate_lname(lname);
    errors += validate_email(email);
    errors += validate_password(password);

    if (errors > 0) {
        alert("ERRORS, FIX IT");
        return;
    }

    // do the php call here?
    $.post("validation.php", {
        fname: fname,
        lname: lname,
        email: email,
        password: password
    },
    function(data) {
        alert(data);
        if (data === 'error') {
            alert("Php threw an error!");
        }
    });

}

function validate_fname(fname){
    const re = /^[a-zA-Z'.\-\s]{1,30}$/;
    passes_validation = RegExp(re).test(fname);
    fnameValidated = document.getElementById('fnameValidated');

    if (passes_validation) {
        fnameValidated.className = 'correct';
        fnameValidated.innerHTML = "Correct";
        return 0;
    }
    else {
        fnameValidated.className = 'error';
        fnameValidated.innerHTML = "Error";
        return 1;
    }

}

function validate_lname(lname){
    const re = /^[a-zA-Z'.\-\s]{1,30}$/;
    passes_validation = RegExp(re).test(lname);
    lnameValidated = document.getElementById('lnameValidated');

    if (passes_validation) {
        lnameValidated.className = 'correct';
        lnameValidated.innerHTML = "Correct";
        return 0;
    }
    else {
        lnameValidated.className = 'error';
        lnameValidated.innerHTML = "Error";
        return 1;
    }

}
function validate_email(email){
    //fix this regex
    const re = /^[a-zA-Z'.\-\s]{1,30}$/;
    passes_validation = RegExp(re).test(email);
    emailValidated = document.getElementById('emailValidated');

    if (passes_validation) {
        emailValidated.className = 'correct';
        emailValidated.innerHTML = "Correct";
        return 0;
    }
    else {
        emailValidated.className = 'error';
        emailValidated.innerHTML = "Error";
        return 1;
    }

}

function validate_password(password){
    //fix this regex.
    const re = /^[a-zA-Z'.\-\s]{1,30}$/;
    passes_validation = RegExp(re).test(password);
    passwordValidated = document.getElementById('passwordValidated');

    if (passes_validation) {
        passwordValidated.className = 'correct';
        passwordValidated.innerHTML = "Correct";
        return 0;
    }
    else {
        passwordValidated.className = 'error';
        passwordValidated.innerHTML = "Error";
        return 1;
    }

}