// import {getWindowWidth} from '/utils.js';
// import {initBtns} from '/buttons.js';

$(document).ready(function(){
  initBtns();
});

function  initBtns(){
  initReadMoreOrLessBtn();
  initMobileMenu();
}

//cross browser support find screen width;
function getWindowWidth(){
let viewportwidth;

// the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight

if (typeof window.innerWidth != 'undefined')
{
     viewportwidth = window.innerWidth;
}

// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)

else if (typeof document.documentElement != 'undefined'
    && typeof document.documentElement.clientWidth !=
    'undefined' && document.documentElement.clientWidth != 0)
{
      viewportwidth = document.documentElement.clientWidth;
}
return viewportwidth;
}

//init moblie menu
function initMobileMenu(){
      const mobileMenuBtn = $('.mobile-icon');
      const navMenu = $('.nav-menu');
      const navLinks = $('.navlink');

      //size the menu will always be visable;
      const moblieBreakPoint = 991;

      //menu show hide on click;
      mobileMenuBtn.click(function(){
        if(navMenu[0].classList.contains('active')){
          navMenu.removeClass('active');
          navMenu.addClass('hide');
        }
        else{
          navMenu.removeClass('hide');
          navMenu.addClass('active');
        }
      });

      navLinks.click(function(){
        if(getWindowWidth() < moblieBreakPoint){
          navMenu.addClass('hide');
        }
      });
      //menu always visable conditional
      window.addEventListener('resize', ()=>{
        if(getWindowWidth() > moblieBreakPoint &&
        (navMenu[0].classList.contains('hide') ||
        navMenu[0].classList.contains('active'))){

          console.log(getWindowWidth() )
          navMenu.removeClass('hide');
          navMenu.removeClass('active');
        }
      });
}



function  initReadMoreOrLessBtn(){
  const readMoreBtn = $('.read-more-btn');
  const readLessBtn = $('.read-less-btn');

  readMoreBtn.click(function(){
    $(this).toggle();
    $(this).siblings('.more').toggle();
  });

  readLessBtn.click(function(){
    $(this).parent().toggle();
    $(this).parent().siblings('.read-more-btn').toggle();
  });

}
