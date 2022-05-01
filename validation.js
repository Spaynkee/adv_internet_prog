function validate() {
    mobilenum = 0;
    gender = null;

    fname = document.getElementById('fname').value;
    lname = document.getElementById('lname').value;
    email = document.getElementById('email').value;
    mobilenum = document.getElementById('mobilenum').value

    if (mobilenum ){
        mobilenum = mobilenum.toString();
    }

    gender_input = document.querySelector('input[name="gender"]:checked')

    if (gender_input) {
        gender = gender_input.value
    }
    city = document.getElementById('city').value;
    state = document.getElementById('state').value;
    qualification = document.getElementById('qualification').value;
    password = document.getElementById('password').value;

    errors = 0
    errors += validate_fname(fname);
    errors += validate_lname(lname);
    errors += validate_email(email);
    errors += validate_mobilenum(mobilenum)
    errors += validate_gender(gender);
    errors += validate_city(city);
    errors += validate_state(state);
    errors += validate_qualification(qualification);
    errors += validate_password(password);

    if (errors > 0) {
        alert("Please check your inputs for errors and try again.")
        return;
    }

    $.post("validation.php", {
        fname: fname,
        lname: lname,
        email: email,
        mobilenum: mobilenum,
        gender: gender,
        city: city,
        state: state,
        qualification: qualification,
        password: password
    },
    function(data) {
        if (data.substring(0,5) === 'error') {
            alert("Php threw an error: " + data);
        }
        else {
            alert('Row stored successfully!');
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
    const re = /^[a-z0-9'\-_.]+@[a-z0-9]+(\.[a-z]+)+$/;
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

function validate_mobilenum(mobilenum){
    mobilenumValidated = document.getElementById('mobilenumValidated');

    if (mobilenum !== "" && mobilenum.length >= 9 && mobilenum.length <= 10 ) {
        mobilenumValidated.className = 'correct';
        mobilenumValidated.innerHTML = "Correct";
        return 0;
    }
    else {
        mobilenumValidated.className = 'error';
        mobilenumValidated.innerHTML = "Error";
        return 1;
    }

}

function validate_gender(gender){
    genderValidated = document.getElementById('genderValidated');

    if (gender !== "" && gender !== null) {
        genderValidated.className = 'correct';
        genderValidated.innerHTML = "Correct";
        return 0;
    }
    else {
        genderValidated.className = 'error';
        genderValidated.innerHTML = "Error";
        return 1;
    }
}

function validate_city(city){
    cityValidated = document.getElementById('cityValidated');

    if (city !== "") {
        cityValidated.className = 'correct';
        cityValidated.innerHTML = "Correct";
        return 0;
    }
    else {
        cityValidated.className = 'error';
        cityValidated.innerHTML = "Error";
        return 1;
    }
}

function validate_state(state){
    stateValidated = document.getElementById('stateValidated');

    if (state !== "") {
        stateValidated.className = 'correct';
        stateValidated.innerHTML = "Correct";
        return 0;
    }
    else {
        stateValidated.className = 'error';
        stateValidated.innerHTML = "Error";
        return 1;
    }
}

function validate_qualification(qualification){
    qualificationValidated = document.getElementById('qualificationValidated');

    if (qualification !== "none" && qualification !== "") {
        qualificationValidated.className = 'correct';
        qualificationValidated.innerHTML = "Correct";
        return 0;
    }
    else {
        qualificationValidated.className = 'error';
        qualificationValidated.innerHTML = "Error";
        return 1;
    }
}

function validate_password(password){
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{3,10}$/;
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