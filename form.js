function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var zipCode = document.getElementById("zipCode").value;
    var mobileNumber = document.getElementById("mobileNumber").value;

    var emailPattern = /^(.+)\.([a-zA-Z]+)\d{4}@vitstudent\.ac\.in$/;
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^*_+=\-{}[\]|:;"'<>,.?/\\]).{10,100}$/;

    var errors = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        zipCode: "",
        mobileNumber: ""
    };

    if (!firstName) {
        errors.firstName = "First Name is required.";
    }

    if (!lastName) {
        errors.lastName = "Last Name is required.";
    }

    if (!email) {
        errors.email = "Email is required.";
    } else if (!email.match(emailPattern)) {
        errors.email = "Invalid email format. Please use VIT email address.";
    }

    if (!password) {
        errors.password = "Password is required.";
    } else if (!password.match(passwordPattern)) {
        errors.password = "Invalid password format. Please follow the password conditions.";
    }

    if (!zipCode) {
        errors.zipCode = "Zip Code is required.";
    } else if (zipCode.length !== 5) {
        errors.zipCode = "Zip code should be exactly five digits.";
    }

    if (!mobileNumber) {
        errors.mobileNumber = "Mobile Number is required.";
    } else if (mobileNumber.length !== 10) {
        errors.mobileNumber = "Mobile number should be 10 digits only.";
    }

    document.getElementById("firstNameError").textContent = errors.firstName;
    document.getElementById("lastNameError").textContent = errors.lastName;
    document.getElementById("emailError").textContent = errors.email;
    document.getElementById("passwordError").textContent = errors.password;
    document.getElementById("zipCodeError").textContent = errors.zipCode;
    document.getElementById("mobileNumberError").textContent = errors.mobileNumber;

    
    if (Object.values(errors).every(error => error === "")) {
        
        document.getElementById("registrationForm").submit();
    }
}