//===========Remove error===========
function clearInputError(inputElement) {
    inputElement.classList.remove("input_error");
    inputElement.parentElement.querySelector(".msg_error").textContent = "";
    inputElement.classList.add("msg_ofset");
}
//===========Set error===========
function setInputError(inputElement, message) {
    inputElement.classList.add("input_error");
    inputElement.parentElement.querySelector(".msg_error").textContent = message;
    inputElement.classList.remove("msg_ofset");
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#create");

    //===========Switch forms===========
    document.querySelector("#create_account").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("hide");
        createAccountForm.classList.remove("hide");
    });
    //===========Switch forms===========
    document.querySelector("#sing_in").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("hide");
        createAccountForm.classList.add("hide");
    });

    //===========Check for errors===========
    document.querySelectorAll(".lf_input").forEach(inputElement => {
        //===========Check password in create===========
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "cr_password" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Password must be at least 10 characters in length");
            }
        });
        //===========Check conf password in create===========
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "cr_password_conf" && 
            document.getElementById('cr_password').value != document.getElementById('cr_password_conf').value) {
                setInputError(inputElement, "Passwords don't match");
            }
        });
        //===========Clear error===========
        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });

    //===========Check all requirenment for login===========
    document.getElementById("btn_log").onclick = function () {
        if(document.getElementById("log_mail").value != 0) {
            if(document.getElementById("log_password").value != 0) {
                location.href = "MainPage.html";
            }
            else {
                setInputError(document.getElementById("log_password"), "Enter a password");
            }
        }
        else {
            setInputError(document.getElementById("log_mail"), "Enter an email");
        }
    }

    //===========Check all requirenment for creating an account===========
    document.getElementById("btn_create").onclick = function () {
        if(document.getElementById("cr_name1").value != 0)
        {
            if(document.getElementById("cr_mail").value != 0)
            {
                if(document.getElementById("cr_password").value != 0)
                {
                    if(document.getElementById("cr_password_conf").value != 0)
                    {
                        if(!document.getElementById("cr_password").classList.contains('input_error') && 
                           !document.getElementById("cr_password_conf").classList.contains('input_error'))
                        {
                            location.href = "MainPage.html";
                        }
                    }
                    else {
                        setInputError(document.getElementById("cr_password_conf"), "Confirm your password");
                    }
                }
                else {
                    setInputError(document.getElementById("cr_password"), "Enter a password");
                }
            }
            else {
                setInputError(document.getElementById("cr_mail"), "Enter an email");
            }
        }
        else {
            setInputError(document.getElementById("cr_name1"), "Enter a name");
        }
    }
});