$(document).ready(function() {
    $(window).scroll(function(event) {
       var pos_body = $('html,body').scrollTop();
       // console.log(pos_body);
       if(pos_body>10){
          $('.navbar, .navbar-expand-lg, .navbar-light, .bg-light').addClass('co-dinh-menu2');
       }
       else {
          $('.navbar, .navbar-expand-lg, .navbar-light, .bg-light').removeClass('co-dinh-menu2');
       }
       if(pos_body>12){
          $('.back-to-top').addClass('hien-ra');
       }
       else{
          $('.back-to-top').removeClass('hien-ra');
       }
    });
    $('.back-to-top').click(function(event) {
       $('html,body').animate({scrollTop: 0},1400);
    });
 });