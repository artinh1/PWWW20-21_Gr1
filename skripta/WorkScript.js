var SignUpCloseButton
var SignUpButton;
var ModalSignUpButton;
var SignUpModal;




function start()
{
     

    SignUpCloseButton=document.getElementById("SignUpCloseButton");
    SignUpButton=document.getElementById("signUpButton");
    ModalSignUpButton=document.getElementById("modalSignUpButton");
    SignUpModal=document.getElementById("SignUpModal");
    SignUpCloseButton.addEventListener("click",closeBgModal,false);
    ModalSignUpButton.addEventListener("click",closeBgModal,false);
    SignUpButton.addEventListener("click",openBgModal,false);
      
}

window.addEventListener("load",start,false);






function closeBgModal()
{
    SignUpModal.style["display"]="none";	
	event.preventDefault();
    document.getElementsByTagName('body')[0].style.overflow='auto';
     
}




function openBgModal()
{
    SignUpModal.style["display"]='flex';
    document.getElementsByTagName('body')[0].style.overflow='hidden';
}
function allowDrop(ev){
    ev.preventDefault();
} 
function drag(ev){
    ev.dataTransfer.setData("Text",ev.target.id);
}
function drop(ev){
    ev.preventDefault();
    var data=event.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
}
    
    


