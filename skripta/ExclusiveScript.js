var MLBsection;
var UFCsection;
var ShowMoreButton;
var ShowLessButton;
var BgModal;
var CloseButton;
var subscribeButton;
var SubscribeFormValues=[];

function start()
{
     MLBsection=document.getElementById("MLBSection");
     UFCsection=document.getElementById("UFCSection");
     ShowMoreButton=document.getElementById("ShowMore");
     ShowLessButton=document.getElementById("ShowLess");
     BgModal=document.getElementById("BgModal");
     CloseButton=document.getElementById("CloseButton");
     subscribeButton=document.getElementById("subscribeButton");
    
    SubscribeFormValues.push(document.getElementById("SubscribeBankInformation"));
    SubscribeFormValues.push(document.getElementById("SubscribeId"));
    
    
    CloseButton.addEventListener("click",closeBgModal,false);
    subscribeButton.addEventListener("click",closeBgModal,false);
    ShowMoreButton.addEventListener("click",showMore,false);
    ShowLessButton.addEventListener("click",showLess,false);
        
}

window.addEventListener("load",start,false);






function closeBgModal()
{
    if(event.target.id===("subscribeButton"))
        { event.preventDefault();
           if(validateForm(SubscribeFormValues)){}
            else{return false;}
        }
    BgModal.style["display"]="none";
    document.getElementsByTagName('body')[0].style.overflow='auto';
     event.preventDefault();
    clearForm(SubscribeFormValues);
   
}




function showMore()
{
    if(MLBsection.style["display"]==="")
        {
            MLBsection.style["display"]="block";
            ShowLessButton.style["display"]="block";
        }
    else{
           if(UFCsection.style["display"]==="")
           {UFCsection.style["display"]="block";
            ShowMoreButton.style["display"]="none"; 
           }
        }

}



function showLess()
{
    if(UFCsection.style["display"]==="block")
        {console.log("got it");
            UFCsection.style["display"]="";
            ShowMoreButton.style["display"]="block";
        }
    else{
           if(MLBsection.style["display"]==="block")
           {MLBsection.style["display"]="";
            ShowLessButton.style["display"]="none";}
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

