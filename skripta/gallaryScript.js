var MLBsection;
var UFCsection;
var ShowMoreButton;
var ShowLessButton;
var BgModal;
var CloseButton;
var subscribeButton;


function start()
{
     MLBsection=document.getElementById("MlbSection");
     UFCsection=document.getElementById("UFCSection");
     ShowMoreButton=document.getElementById("ShowMore");
     ShowLessButton=document.getElementById("ShowLess");
     BgModal=document.getElementById("BgModal");
     CloseButton=document.getElementById("CloseButton");
     subscribeButton=document.getElementById("subscribeButton");
    
    
    CloseButton.addEventListener("click",closeBgModal,false);
    subscribeButton.addEventListener("click",closeBgModal,false);
    ShowMoreButton.addEventListener("click",showMore,false);
    ShowLessButton.addEventListener("click",showLess,false);
        
}

window.addEventListener("load",start,false);






function closeBgModal()
{
    BgModal.style["display"]="none";
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
