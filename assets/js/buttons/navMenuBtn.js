define(['utils'], (utils)=>{

  return {
    init: function (){
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
            if(utils.getWindowWidth() < moblieBreakPoint){
              navMenu.removeClass('active');
              navMenu.addClass('hide');
            }
          });

          //menu always visable conditional
          window.addEventListener('resize', ()=>{
            if(utils.getWindowWidth() > moblieBreakPoint &&
            (navMenu[0].classList.contains('hide') ||
            navMenu[0].classList.contains('active'))){

              console.log(utils.getWindowWidth() )
              navMenu.removeClass('hide');
              navMenu.removeClass('active');
            }
          });
    }
  }
});
