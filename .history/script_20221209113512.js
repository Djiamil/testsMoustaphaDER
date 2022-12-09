const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const eyes = document.getElementById('eyes');
const eyes1 = document.getElementById('eyes1');
e=true;
e1=true;
eyes.addEventListener("click", function(){
    if(e){
        password.setAttribute("type", "text")
        e=false;
    }else{
        password.setAttribute("type", "password")
        e=true;
    }
    });
    eyes1.addEventListener("click", function(){
        if(e1){
            password2.setAttribute("type", "text")
            e1=false;
        }else{
            password2.setAttribute("type", "password")
            e1=true;
        }
    });
password.addEventListener("input",checkPass);
function checkPass(){//Cette fonction verifie le mot de passe
    let mdp = this.value;
    if(/[a-z]/.test(mdp)){
        showSuccess(password)
    }else{}
    showError(password2,)
}


function showError(input, message) {//Afficher les messages d'erreur
    const formControl = input.parentElement;
    formControl.className = 'form-floating error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-floating success'; 
}

function checkEmail(input) {//Tester si l'email est valide :  javascript : valid email
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(input.value.trim().toLowerCase())) {
        showSuccess(input);
    } else {
        showError(input,`Email is not valid!`);
    }
}

function checkRequired(inputArray) {// Tester si les champs ne sont pas vides
    inputArray.forEach(input => {
        if (input.value.trim() === '') {
            showError(input,`${getFieldName(input)} is required`);
        }else{
            showSuccess(input);
        }
    });
}

//
function getFieldName(input) {//Retour le nom de chaque input en se basant sur son id
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//

//
function checkLength(input, min, max) {//Tester la longueur de la valeur  d'un input
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters!`)
    }else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters !`);
    }else{
        showSuccess(input);
    }
}
//
function checkPasswordMatch(input1, input2) {//Verifie la conformité des password
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match!');
    }
}

form.addEventListener('submit',function(e){
    e.preventDefault();//Bloquer la soumission du formulaire
    
    checkpassword(password)
    checkRequired([username, email, password, password2]);
    //
    checkLength(username, 3, 15);
    checkLength(password, 10, 25);
    checkEmail(email);
    checkPasswordMatch(password,password2);


    /*
    function isValidEmail(email) {//Tester si l'email est valide
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
*/
});
