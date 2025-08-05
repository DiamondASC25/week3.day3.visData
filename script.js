console.log(data);

let introHeader = document.getElementById("introduction");
let button = document.getElementById("generateNextPersonButton");
let buttonImage = document.getElementById("button_image");

button.style.width = "80px";
button.style.height = "80px";
buttonImage.style.width = "70px";
buttonImage.style.height = "80px";
button.style.borderRadius = "10px";

let randomPersonImage;
let randomIndex;
let randomPerson;
let randomPersonName;

let phoneNumber = "";
let email = "";
let address = "";
let password = "";

function setUpRandomPerson() {
    phoneNumber = "";
    info.innerHTML = "";
    randomPersonImage = document.getElementById("person_image"); 
    randomIndex = Math.floor(Math.random() * data.length);
    randomPerson = data[randomIndex];
    randomPersonName = document.getElementById("name");
    
    randomPersonName.innerHTML = randomPerson.name.first + " " + randomPerson.name.last;
    randomPersonImage.src = randomPerson.picture.thumbnail;
    randomPersonImage.style.borderStyle = "solid";
    randomPersonImage.style.borderColor = "black";
    randomPersonImage.style.borderWidth = "5px";
    randomPersonImage.style.borderRadius = "10px";

    phoneNumber = randomPerson.phone;
    email = randomPerson.email;
    address = randomPerson.location.street.number + " " + randomPerson.location.street.name;
    password = randomPerson.login.password;
    
    
}

let callMeNav = document.getElementById("phoneNumber");
let emailMeNav = document.getElementById("email");
let findMeNav = document.getElementById("address");
let passwordNav = document.getElementById("password");

let info = document.getElementById("info");
info.style.fontSize = "40px";





button.addEventListener("click", setUpRandomPerson);

callMeNav.addEventListener('mouseover', function() {
    info.innerHTML = "Phone Number: " + phoneNumber;
});

emailMeNav.addEventListener('mouseover', function() {
    info.innerHTML = "Email: " + email;
});

findMeNav.addEventListener('mouseover', function() {
    info.innerHTML = "Address: " + address;
});

passwordNav.addEventListener('mouseover', function() {
    info.innerHTML = "Password: " + password;
});







