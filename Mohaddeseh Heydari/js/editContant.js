const modal = document.querySelector(".modall");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

// close modal function
const closeModal = function () {
    modal.style.animation = "diappear 250ms ease-in 1";
    setTimeout(
        function () {
            modal.style.display = "none";
        }, 250);
};
// close the modal when the close button is clicked
closeModalBtn.addEventListener("click", closeModal);

// open modal function
const openModal = function () {
    modal.style.animation = "appear 250ms ease-in 1";
    modal.style.display = "block";
};
// open modal event
openModalBtn.addEventListener("click", openModal);







let usersList = [
    { mobileNumber: "09152076110", userName: "محی" },
    { mobileNumber: "09111111111", userName: "ممد" },
    { mobileNumber: "09222222222", userName: "مملی" },
    { mobileNumber: "09333333333", userName: "ماهی" },
    { mobileNumber: "09444444444", userName: "مهلا" },
    { mobileNumber: "09555555555", userName: "مهیا" },
];

var button = document.getElementById("btn");
var rsult = true;
var number = document.getElementById('call').value;

let phoneNumberForm;
let userNameForm;
document.getElementById("btn").addEventListener("click", function (event) {
    event.preventDefault();
    rsult = verifyform();

    if (rsult) {
        button.classList.remove("btn");
        document.querySelector(".error-signup").style.display = 'none';

        var counter = 1
        for (let i = 0; i < usersList.length; i++) {
            if (phoneNumberForm == usersList[i].mobileNumber && userNameForm != usersList[i].userName) {
                var newUser = {
                    mobileNumber: phoneNumberForm,
                    userName: userNameForm
                };
                counter = 0;
                break;
            } else {
                counter++
            }
        }
        if (counter == 0) {
            usersList.push(newUser)
            console.log(usersList)
        } else {
            button.classList.add("btn");
            document.querySelector(".error-signup").style.display = 'block';
            alert("نام جدید تکراری بود");
        }


    } else {
        button.classList.add("btn");
        document.querySelector(".error-signup").style.display = 'block';
    }
});

function verifyform() {
    var n, nu = false;
    //شماره موبایل
    var number = document.getElementById('call').value;//دوباره تعریف کردم که هر بار چک کنه
    function validateNumber(input) {
        var re = /^(09)[0-9]{9}$/;
        return re.test(input);
    };
    if (!validateNumber(number)) {
        document.getElementById("text-error-call").innerHTML = "شماره موبایل باید 11 رقمی بوده و با 09 آغاز شود";
        document.querySelector(".error-call").style.display = 'block';
        return false;
    } else {
        document.querySelector(".error-call").style.display = 'none';
        n = true;
        phoneNumberForm = number;
    }

    //نام کاربر
    var nameUser = document.getElementById("nameUser").value;//دوباره تعریف کردم که هر بار چک کنه
    //check empty field  
    if (nameUser == "") {
        document.getElementById("text-error-nameUser").innerHTML = "مقدار دهی به این فیلد اجباری است";
        document.querySelector(".error-nameUser").style.display = 'block';
        return false;
    } else {
        document.querySelector(".error-nameUser").style.display = 'none';
        nu = true;
        userNameForm = nameUser;
    }

    if (n && nu) {
        return true;
    }
};

const call = document.getElementById("call");
call.addEventListener("input", function (e) {
    rsult = verifyform();
    if (rsult) {
        button.classList.remove("btn");
        document.querySelector(".error-signup").style.display = 'none';
    }
    else {
        button.classList.add("btn");
    }
});

const nameUserInput = document.getElementById("nameUser");
nameUserInput.addEventListener("input", function (e) {
    rsult = verifyform();
    if (rsult) {
        button.classList.remove("btn");
        document.querySelector(".error-signup").style.display = 'none';
    }
    else {
        button.classList.add("btn");
    }
});









