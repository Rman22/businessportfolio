//////menu bar

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
            time: 1500
        });
     
      });
/**
var waypoint = new Waypoint({
  element: document.getElementById('counter'),
  handler: function(direction) {
    
$(document).ready(function(){
  $('.counter').counterUp({
      delay: 10,
      time: 2000
  });

});
  }
})
 */
