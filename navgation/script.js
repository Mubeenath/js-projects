'use strict';

const phoneMenu = document.querySelector('.phone-menu');
const btnCloseMenu = document.querySelector('.close-menu');
const openMobileMenu = document.querySelector('.mobile-menu');

const openPhoneMenu = function () {
  phoneMenu.classList.remove('hidden');
};

const closePhoneMenu = function () {
  phoneMenu.classList.add('hidden');
};

openMobileMenu.addEventListener('click', openPhoneMenu);
btnCloseMenu.addEventListener('click', closePhoneMenu);

const mobileMenuitem = document.querySelectorAll('.mobile-a');
mobileMenuitem.forEach(function(link) {
    link.onclick = function() {
       
        phoneMenu.classList.add('hidden');
        
    };
});

const mobileMenuSubitem = document.querySelectorAll('.phone__link');
mobileMenuitem.forEach(function(link) {
    link.onclick = function() {
        phoneMenu.classList.add('hidden');
        
         };
});