function validateForm()
{
    let name = document.getElementById("patientName");
    let address = document.getElementById("address");
    let mobile = document.getElementById("mobile");
    let email = document.getElementById("email");

    let dob = document.getElementById("dob");
    let bloodGroup = document.getElementById("bloodGroup");
    let appointmentType = document.getElementById("appointmentType");
    let registrationDate = document.getElementById("registrationDate");

    let nameError = document.getElementById("nameError");
    let addressError = document.getElementById("addressError");
    let mobileError = document.getElementById("mobileError");
    let emailError = document.getElementById("emailError");
    let dobError = document.getElementById("dobError");
    let genderError = document.getElementById("genderError");
    let bloodError = document.getElementById("bloodError");
    let departmentError = document.getElementById("departmentError");
    let registrationError = document.getElementById("registrationError");

    let valid = true;


    // Clear previous errors

    nameError.innerHTML = "";
    addressError.innerHTML = "";
    mobileError.innerHTML = "";
    emailError.innerHTML = "";
    dobError.innerHTML = "";
    genderError.innerHTML = "";
    bloodError.innerHTML = "";
    departmentError.innerHTML = "";
    registrationError.innerHTML = "";


    // Remove previous highlighting

    name.classList.remove("invalid");
    address.classList.remove("invalid");
    mobile.classList.remove("invalid");
    email.classList.remove("invalid");
    dob.classList.remove("invalid");
    bloodGroup.classList.remove("invalid");
    appointmentType.classList.remove("invalid");
    registrationDate.classList.remove("invalid");


    // Remove extra spaces

    name.value = name.value.trim();
    address.value = address.value.trim();
    mobile.value = mobile.value.trim();
    email.value = email.value.trim();


    // -------------------------
    // Patient Name
    // -------------------------

    if (name.value == "")
    {
        nameError.innerHTML = "Patient Name is required.";
        name.classList.add("invalid");
        valid = false;
    }

    else if (!/^[A-Za-z ]+$/.test(name.value))
    {
        nameError.innerHTML =
        "Name should contain only alphabets and spaces.";

        name.classList.add("invalid");
        valid = false;
    }


    // -------------------------
    // Address
    // -------------------------

    if (address.value == "")
    {
        addressError.innerHTML = "Address is required.";
        address.classList.add("invalid");
        valid = false;
    }


    // -------------------------
    // Mobile Number
    // -------------------------

    if (mobile.value == "")
    {
        mobileError.innerHTML = "Mobile Number is required.";
        mobile.classList.add("invalid");
        valid = false;
    }

    else if (!/^[6-9][0-9]{9}$/.test(mobile.value))
    {
        mobileError.innerHTML =
        "Enter a valid 10-digit Indian mobile number.";

        mobile.classList.add("invalid");
        valid = false;
    }


    // -------------------------
    // Email
    // -------------------------

    if (email.value == "")
    {
        emailError.innerHTML = "Email is required.";
        email.classList.add("invalid");
        valid = false;
    }

    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value))
    {
        emailError.innerHTML =
        "Enter a valid email address.";

        email.classList.add("invalid");
        valid = false;
    }


    // -------------------------
    // Date of Birth
    // -------------------------

    if (dob.value == "")
    {
        dobError.innerHTML = "Date of Birth is required.";
        dob.classList.add("invalid");
        valid = false;
    }

    else
    {
        let today = new Date();
        let dobDate = new Date(dob.value);

        if (dobDate > today)
        {
            dobError.innerHTML =
            "Date of Birth cannot be a future date.";

            dob.classList.add("invalid");
            valid = false;
        }
    }


    // -------------------------
    // Gender
    // -------------------------

    let genderSelected =
        document.querySelector('input[name="gender"]:checked');

    if (genderSelected == null)
    {
        genderError.innerHTML = "Please select Gender.";
        valid = false;
    }


    // -------------------------
    // Blood Group
    // -------------------------

    if (bloodGroup.value == "")
    {
        bloodError.innerHTML = "Please select Blood Group.";
        bloodGroup.classList.add("invalid");
        valid = false;
    }


    // -------------------------
    // Department
    // -------------------------

    if (appointmentType.value == "")
    {
        departmentError.innerHTML =
        "Please select Department / Appointment Type.";

        appointmentType.classList.add("invalid");
        valid = false;
    }


    // -------------------------
    // Registration Date
    // -------------------------

    if (registrationDate.value == "")
    {
        registrationError.innerHTML =
        "Registration Date is required.";

        registrationDate.classList.add("invalid");
        valid = false;
    }

    else
    {
        let today = new Date();
        let registration = new Date(registrationDate.value);

        if (registration > today)
        {
            registrationError.innerHTML =
            "Registration Date cannot be a future date.";

            registrationDate.classList.add("invalid");
            valid = false;
        }
    }


    return valid;
}