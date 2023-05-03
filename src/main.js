
//
function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "alopezosorio04@gmail.com",
        Password : "Puringg5",
        To : 'alopezosorio04@gmail.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : "And this is the body"
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Phone Number: " + docuement.getElementById("phone").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message Sent Successfully")
    );
}


//navbar script
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}