var MLBsection;
var UFCsection;
var ShowMoreButton;
var ShowLessButton;




function start()
{
     MLBsection=document.getElementById("MlbSection");
     UFCsection=document.getElementById("UFCSection");
     ShowMoreButton=document.getElementById("ShowMore");
     ShowLessButton=document.getElementById("ShowLess");
    
    ShowMoreButton.addEventListener("click",showMore,false);
    ShowLessButton.addEventListener("click",showLess,false);
    console.log("jesus");
    console.log(MLBsection.style["display"]);

}

window.addEventListener("load",start,false);


function showMore()
{console.log("jesusmore");
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
{console.log("jesusless");
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
