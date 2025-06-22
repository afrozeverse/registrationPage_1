i = 0;
j = 0;
function validate(event) {
    event.preventDefault();
    let username = document.getElementById("u_name");
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if (username.value == "") {
        username.style.border = "1px solid red";
        j = 1;
    }
    if (fname.value == "") {
        fname.style.border = "0.5px solid red";
        j = 1;
    }
    if (lname.value == "") {
        lname.style.border = "1px solid red";
        j = 1;
    }
    if (email.value == "") {
        email.style.border = "1px solid red";
        j = 1;
    }
    else
    {
        let em=email.value;
        if(!(em.includes("@")) || !(em.includes(".")))
            window.alert("Invalid Email");

    }
    if (password.value == "") {
        password.style.border = "1px solid red";
        j = 1;
    }
    else {
        let pass = String(password.value);
        if (pass.length < 8)
            window.alert("Password is too short.Minimum 8 characters.")
        else if (pass.length > 12)
            window.alert("Password is too long. Maximum 12 characters.")
        else {
            let num = 0, ch = 0, spl_char = 0;
            for (x of pass) {
                if ("0123456789".includes(x))
                    num += 1;
                else if (x.match(/[a-z]/i))
                    ch += 1;
                else
                    spl_char += 1;
            }
            if (num == 0 || ch == 0 || spl_char == 0)
                window.alert("Weak Password");
        }
    }
    if (j) {
        window.alert("Empty field.");
        j = 0;
    }

}
function hidePass() {
    let password = document.getElementById("password");
    if (i == 0) {
        password.setAttribute("type", "password");
        i = 1 - i;
    }
    else {
        password.setAttribute("type", "text");

        i = 1 - i;
    }
}