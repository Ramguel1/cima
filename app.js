var spinner=document.querySelector("#spinner");

document.querySelector("#btnVer").onclick=()=>{

  spinner.innerHTML="<img src='ex.png' height=1000px width=1000px>";
  spinner.style.transform=" rotateY(-180deg)";
  spinner.style.transition="all 0.5s linear";
  spinner.style.transitionStyle="preserve-3d";
  spinner.style.backfaceVisibility

  setTimeout(()=>{
    spinner.style.transform=" rotateY(0deg)";
    spinner.style.transition="all 0.5s linear";
    spinner.src=spinner
  },200)
}

document.querySelector("#btnVer2").onclick=()=>{

    spinner.innerHTML="<img src='h.jpg' height=1000px width=1000px>";
    spinner.style.transform=" rotateY(-180deg)";
    spinner.style.transition="all 0.5s linear";
    spinner.style.transitionStyle="preserve-3d";
    spinner.style.backfaceVisibility
  
    setTimeout(()=>{
        spinner.style.transform=" rotateY(0deg)";
        spinner.style.transition="all 0.5s linear";
        spinner.src=spinner
    },200)
} 


document.querySelector("#btnVer3").onclick=()=>{

    spinner.innerHTML="<img src='pla.jpg' height=1000px width=1000px>";
    spinner.style.transform=" rotateY(-180deg)";
    spinner.style.transition="all 0.5s linear";
    spinner.style.transitionStyle="preserve-3d";
    spinner.style.backfaceVisibility
  
    setTimeout(()=>{
        spinner.style.transform=" rotateY(0deg)";
        spinner.style.transition="all 0.5s linear";
        spinner.src=ima
    },200)
} 


document.querySelector("#btnVer4").onclick=()=>{

    spinner.innerHTML="<img src='go.jpg' height=1000px width=1000px>";
    spinner.style.transform=" rotateY(-180deg)";
    spinner.style.transition="all 0.5s linear";
    spinner.style.transitionStyle="preserve-3d";
    spinner.style.backfaceVisibility
  
    setTimeout(()=>{
        spinner.style.transform=" rotateY(0deg)";
        spinner.style.transition="all 0.5s linear";
        spinner.src=spinner
    },200)
}