// The main validation function. This validates all fields and makes the ajax request if there are no errors.
function validate() {
    let mobilenum = 0;
    let gender = null;

    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    mobilenum = document.getElementById('mobilenum').value
 
    // Convert mobilenum to string so we can validate string length easily.
    if (mobilenum){
        mobilenum = mobilenum.toString();
    }

    let gender_input = document.querySelector('input[name="gender"]:checked')

    // if a gender is selected, get that genders value.
    if (gender_input) {
        gender = gender_input.value
    }

    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;
    let qualification = document.getElementById('qualification').value;
    let password = document.getElementById('password').value;

    // If any validation is not met, errors will be > 0.
    let errors = 0
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

    // Ajax call to send the form information to the validation.php file.
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
    //Callback function for determining success of validation.php.
    function(data) {
        // Our php file always returns a message of the form "error x", so if we get this message back something went wrong.
        if (data.substring(0,5) === 'error') {
            alert("Php threw an error: " + data);
        }
        else {
            alert('Row stored successfully!');
        }
    });

}

// show_validation takes a fields validation div, and a bool denoting if the field passed validation
function show_validation(validation_element, passes_validation) {
    if (passes_validation) {
        validation_element.className = 'correct';
        validation_element.innerHTML = "Correct";
        return 0;
    }
    else {
        validation_element.className = 'error';
        validation_element.innerHTML = "Error";
        return 1;
    }
}

// validates the fname field
function validate_fname(fname){
    const re = /^[a-zA-Z'.\-\s]{1,30}$/;
    const passes_validation = RegExp(re).test(fname);
    let fnameValidated = document.getElementById('fnameValidated');

    return show_validation(fnameValidated, passes_validation);
}

// validates the lname field
function validate_lname(lname){
    const re = /^[a-zA-Z'.\-\s]{1,30}$/;
    const passes_validation = RegExp(re).test(lname);
    let lnameValidated = document.getElementById('lnameValidated');

    return show_validation(lnameValidated, passes_validation);
}

// validates the email field.
function validate_email(email){
    const re = /^[a-z0-9'\-_.]+@[a-z0-9]+(\.[a-z]+)*$/;
    const passes_validation = RegExp(re).test(email);
    let emailValidated = document.getElementById('emailValidated');

    return show_validation(emailValidated, passes_validation);
}

// validates the mobilenum field
function validate_mobilenum(mobilenum){
    let mobilenumValidated = document.getElementById('mobilenumValidated');
    const passes_validation = (mobilenum !== "" && mobilenum.length >= 9 && mobilenum.length <= 10 );

    return show_validation(mobilenumValidated, passes_validation);
}

// validates the gender field
function validate_gender(gender){
    let genderValidated = document.getElementById('genderValidated');
    const passes_validation = (gender !== "" && gender !== null)

    return show_validation(genderValidated, passes_validation);
}

// validates the city field.
function validate_city(city){
    let cityValidated = document.getElementById('cityValidated');
    const passes_validation = (city !== "")

    return show_validation(cityValidated, passes_validation);
}

// validates the state field
function validate_state(state){
    let stateValidated = document.getElementById('stateValidated');
    const passes_validation = (state !== "")

    return show_validation(stateValidated, passes_validation);
}

// validates the qualification field
function validate_qualification(qualification){
    let qualificationValidated = document.getElementById('qualificationValidated');
    const passes_validation = (qualification !== "none" && qualification !== "") 

    return show_validation(qualificationValidated, passes_validation);
}

// validates the password field
function validate_password(password){
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{3,10}$/;
    const passes_validation = RegExp(re).test(password);
    let passwordValidated = document.getElementById('passwordValidated');

    return show_validation(passwordValidated, passes_validation);
}