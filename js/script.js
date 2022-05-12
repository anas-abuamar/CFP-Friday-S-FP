// Modal items
const modal = document.getElementById('main-modal');
const openBtn = document.querySelector('.main-btn');
const closeBtn = document.querySelector('.close-btn');

//Click events
openBtn.addEventListener('click',()=> {      // () = function()
    modal.style.display = ('block');
});

closeBtn.addEventListener('click',() => {
    modal.style.display = +('none');
});

window.addEventListener('click' , (event) => { 
    if (event.target == modal){
        modal.style.display = 'none';
    }
});
const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".cnv"),
      signUp = document.querySelector(".signup-link"),
      login_form = document.querySelector(".login-link");

    //  show/hide password and change icon
pwShowHide.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click", ()=>{
        pwFields.forEach(pwField =>{
            if(pwField.type ==="password"){
                pwField.type = "text";
                pwShowHide.forEach(icon =>{
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                })
            }else{
                pwField.type = "password";
                pwShowHide.forEach(icon =>{
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                })
            }
         }) 
     })
 })
const form = document.getElementById('form-loging');
const take_exam = document.getElementById('take-exam');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
    validateInputs();
});

take_exam.addEventListener('submit',e => {
    e.preventDefault();
    window.location = "quiz.html";
});
const setError = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

// regular expression javascript not uses
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    //const password2Value = password2.value.trim();
    var flag = true;
    if(usernameValue !== 'anas') {
        setError(username, "Username is Not valid");
        flag = false;
    } else {
        setSuccess(username);
    }
    
    if(emailValue === 'anasabuamar3@gmail.com') {
        setSuccess(email);
    }else {
        setError(email, 'Email is required');
        flag = false;
    }
    /*if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    }*/
    if(passwordValue === '123456789') {
        setSuccess(password);
    }else {
        flag = false;
        if (passwordValue.length < 8 ) {
            setError(password)
            //setError(password, 'Remember Password must be at least 8 character.')
        } else if (passwordValue=='123456789'){
            setSuccess(password)
        }
    }
    if (flag == true){
        window.location = "gallery.html";
    }
    /*
        // ~Confirm password in Take exam
        if(password2Value === '') {
            setError(password2, 'Please confirm your password');
        } else if (password2Value !== passwordValue) {
            setError(password2, "Passwords doesn't match");
        } else {
            setSuccess(password2);
        }
    */
};
    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login_form.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });

