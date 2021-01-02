var LogInCloseButton;
var SignUpCloseButton
var SignUpButton;
var LogInButton;
var ModalSignUpButton;
var ModalLogInButton;
var SignUpModal;
var LogInModal;
var SignUpFormValues=[];
var LoginFormValues=[];



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
    
    SignUpFormValues.push(document.getElementById("SignUpName"));
    SignUpFormValues.push(document.getElementById("SignUpSurname"));
    SignUpFormValues.push(document.getElementById("SignUpEmail"));
    SignUpFormValues.push(document.getElementById("SignUpPassword"));
    
    LoginFormValues.push(document.getElementById("LogInEmail"));
    LoginFormValues.push(document.getElementById("LogInPassword"));
    
    
    
    
    
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
    if(event.target.id===("modalSignUpButton"))
        {
            event.preventDefault();
         if(validateForm(SignUpFormValues)){}
            else{return false;}
        }
    if(event.target.id===("modalLogInButton"))
        {
            event.preventDefault();
         if(validateForm(LoginFormValues)){}
            else{return false;}
        }
    LogInModal.style["display"]="none";
    SignUpModal.style["display"]="none";	
	event.preventDefault();
    document.getElementsByTagName('body')[0].style.overflow='auto';
    clearForm(SignUpFormValues);
    clearForm(LoginFormValues);
     
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




function validateForm(formValues)
{
    for(var i=0; i<formValues.length; i++)
        {
            if(formValues[i].value===""){window.alert("The input for "+formValues[i].getAttribute("placeholder")+" field is missing");
                                          return false;}
        }
   return true;
}

function clearForm(formValues)
{
    for(var i=0; i<formValues.length; i++)
        {
            formValues[i].value="";
        }
}





