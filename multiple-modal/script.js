'use strict';


const btnsOpenModal = document.querySelectorAll('.show-modal');

btnsOpenModal.forEach(function(btn) {
    btn.onclick = function() {
        const modal = btn.getAttribute("data-modal");
        document.getElementById(modal).style.display="block";
        
        
        
    };
});

const btnclose = document.querySelectorAll('.close-modal');
btnclose.forEach(function(btn) {
    btn.onclick = function() {
        const modal = (btn.closest(".modal").style.display="none" );
       
        
    };
});

window.onclick = function(e){
   if(e.target.className === "modal"){
    e.target.style.display="none";
   }
}
