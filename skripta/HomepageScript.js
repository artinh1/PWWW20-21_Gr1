var LogInCloseButton;
var SignUpCloseButton
var SignUpButton;
var LogInButton;
var LogOutButton;
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
    LogOutButton=document.getElementById("logOutButton");
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
    LogOutButton.addEventListener("click",logOut,false);
    
}

window.addEventListener("load",start,false);




function logOut()
{
    sessionStorage.clear();
    //localStorage.clear();
}



function closeBgModal()
{ 
    if(event.target.id===("modalSignUpButton"))
        {
            event.preventDefault();
            if(validateForm(SignUpFormValues)){localStorage.setItem("SignedUp","t"); 
                                               formValuesLocalStorage(SignUpFormValues);}
            else{return false;}
        }
    
    if(event.target.id===("modalLogInButton"))
        {
            event.preventDefault();
            if(validateForm(LoginFormValues)){ 
                                                sessionStorage.setItem("LoggedIn","t");
                                                if((localStorage.getItem("Password")===LoginFormValues[1].value)&&(localStorage.getItem("E-mail")===LoginFormValues[0].value))
                                                { console.log("in if");formValuesSessionStorage(LoginFormValues);}
                                                else{console.log("in else");
                                                     clearForm(LoginFormValues);
                                                     window.alert("You typed in the wrong information.");
                                                     return false;}
                                             }
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
            {if(localStorage.getItem("SignedUp")===null){ SignUpModal.style["display"]='flex';
                                                          document.getElementsByTagName('body')[0].style.overflow='hidden';
                                                        }
             else{window.alert("You already have an account "+localStorage.getItem("Name")+".");}
            }
    
    else{  if(localStorage.getItem("SignedUp")===null){window.alert("You don't have an account to log in to.")}
         
           else{if(sessionStorage.getItem("LoggedIn")===null){LogInModal.style["display"]='flex';
                                                        document.getElementsByTagName('body')[0].style.overflow='hidden';}
                else{window.alert("You are already logged in "+localStorage.getItem("Name")+".");}
               }
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


function formValuesLocalStorage(formValues)
{
    for(var i=0; i<formValues.length; i++)
        {
            localStorage.setItem(formValues[i].getAttribute("placeholder"),formValues[i].value);
        }
}

function formValuesSessionStorage(formValues)
{
    for(var i=0; i<formValues.length; i++)
        {
            sessionStorage.setItem(formValues[i].getAttribute("placeholder"),formValues[i].value);
        }
}


