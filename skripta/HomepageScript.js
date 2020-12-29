var LogInCloseButton;
var SignUpCloseButton
var SignUpButton;
var LogInButton;
var ModalSignUpButton;
var ModalLogInButton;
var SignUpModal;
var LogInModal;



function start()
{
     
    LogInCloseButton=document.getElementById("LogInCloseButton");
    SignUpCloseButton=document.getElementById("SignUpCloseButton");
    SignUpButton=document.getElementById("signUpButton");
    LogInButton=document.getElementById("logInButton");
    ModalSignUpButton=document.getElementById("modalSignUpButton");
    ModalLogInButton=document.getElementById("modalLogInButton");
    SignUpModal=document.getElementById("SignUpModal");
    LogInModal=document.getElementById("LogInModal");
    
    LogInCloseButton.addEventListener("click",closeBgModal,false);
    SignUpCloseButton.addEventListener("click",closeBgModal,false);
    ModalSignUpButton.addEventListener("click",closeBgModal,false);
    ModalLogInButton.addEventListener("click",closeBgModal,false);    
    SignUpButton.addEventListener("click",openBgModal,false);
    LogInButton.addEventListener("click",openBgModal,false);    
}

window.addEventListener("load",start,false);






function closeBgModal()
{
    LogInModal.style["display"]="none";
    SignUpModal.style["display"]="none";
    document.getElementsByTagName('body')[0].style.overflow='auto';
     
}




function openBgModal()
{
    if(this.id=="signUpButton")
    {SignUpModal.style["display"]='flex';
    document.getElementsByTagName('body')[0].style.overflow='hidden';
    }
    else{
        LogInModal.style["display"]='flex';
    document.getElementsByTagName('body')[0].style.overflow='hidden';
    }
}


