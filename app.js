
const username = document.getElementById('first-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const error = document.getElementById('error');
const submit = document.getElementById('submit');
const form = document.getElementById('form-submit');
const captcha = document.querySelector(".captcha")
const reloadBtn = document.querySelector(".reload-btn")
const captchainput = document.querySelector(".captchainput")
const checkBtn = document.querySelector(".check-btn")
const statusTxt = document.querySelector(".status-text");
const dark = document.querySelector(".darkbtn");
const main = document.querySelector(".main");
const formarea = document.querySelector(".form-area");
const formcontent = document.querySelector(".form-content");



//form submit=================================
submit.addEventListener("click", (e) => {
    e.preventDefault();
    formValidation();
 
  });


// form validation ============================
function formValidation(){
    inputChecks();
    
    
}



//Inputfields value checks====================
  function inputChecks(){
    if (
        username.value == "" ||
        email.value == "" ||
        password.value == ""
       
      ) {
        error.innerText = "Please fill all Inputfields";
        setTimeout(() => {
          error.innerText = "";
        }, 1000);
  }else{
    handleCaptcha()
  }
}

// function to handle captcha======================
function handleCaptcha(){
    let captchaVal = captchainput.value.split('').join(' ');
    if(captchaVal == captcha.innerText){

       acceptata()
       resetForm();
       
}else{
    error.innerText = "Captcha Invalid";
    setTimeout(() => {
      error.innerText = "";
      removeContent();
      getCaptcha();
    }, 2000);
}
}


function acceptata(){
   alert('Form Submitted Successfully')
}


function resetForm() {
    username.value = "";
    email.value = "";
    password.value = "";
  }

//  for captcha code================================
let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// get a random code ==================================
function getCaptcha(){
for (let i = 0; i < 6; i++) { 
let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
captcha.innerText += ` ${randomCharacter}`; 
}
}



getCaptcha();

// Captcha code chnge on every reload=====================
reloadBtn.addEventListener("click", ()=>{
removeContent();
getCaptcha();
});


function removeContent(){
captcha.innerText = "";
captchainput.value = ""

}





// for Dark mode ==============================

    dark.addEventListener("click",()=>{
       document.body.classList.toggle('DarkTheme')
    })


