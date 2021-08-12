

console.log('hello');
  (function() {
      // Smooth Scrolling
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1500);
            return false;
          }
        }
      });
    });


    function openNav() {
      document.getElementById("mySidenav").style.width = "280px";
    }
    
    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }

    ///count up numbers
    /** 
    $(document).ready(function(){
   const counter = document.querySelectorAll('.num');

   counter.forEach((num) =>{
     num.innerText = '0';

     const updateCounter = () => {
       const target = +num.getAttribute
       ('data-target');

       const c = +num.innerText
       const increment = target / 50;

       if (c < target) {
         num.innerText = `${Math.ceil(c + increment)}`;
         setTimeout(updateCounter, 10);
       }

     };
     updateCounter();
   })
  }
  )
*/

//counterup
$(document).ready(function(){
  $('.counter').counterUp({
      delay: 10,
      time: 1200
  });

});