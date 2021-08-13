    
    ///menubar navigation
    function openNav() {
      document.getElementById("mySidenav").style.width = "280px";
    }
    
    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }

///count up numbers
    
    var $counter = $('.counter');
    $counter.waypoint(function (){
      console.log('waypointhere');
 
    })
     
    console.log('waypoint here');
    $(document).ready(function(){
        $('.counter').counterUp({
            delay: 2,
            time: 1000
        });
     
      });

      //////////////swiper
 