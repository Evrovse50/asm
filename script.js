function OGlava(e) {
    



}

function PriZagruzke() {
  
      
    
      

    // var t = e.parentElement.getElementsByClassName("contlk_lev21");
    // if (t.length > 0) {
    //     for (let i = 0; i < t.length; i++) {
    //         t[i].style.display = 'none';
    //     }
    // }

    
    
}

function oAdaptiv() {
if( document.getElementById("main-topSpisok2").style.display == "none") {
    document.getElementById("main-topSpisok2").style.display = "block";
     }
     else{
      
         document.getElementById("main-topSpisok2").style.display = "none";
     }


    if ( document.getElementById("sub-menu").style.display == "block") {
   document.getElementById("sub-menu").style.display = "none";
   document.getElementById("main-topSpisok2").style.display = "none";
    }
    else{
        document.getElementById("sub-menu").style.display = "block";
        document.getElementById("main-topSpisok2").style.display = "block";
    }
}
