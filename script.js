$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
        $('#preloader').delay(4500).fadeOut('slow'); // will fade out the white DIV that covers the website. 
        $('body').delay(3500).css({'overflow':'visible'});
})

$('#1').waypoint(function() {
    increment(1, 800);
  }, {offset: '75%'});
  
  $('#2').waypoint(function() {
    increment(2, 900);
  }, {offset: '40%'});
  
  $('#3').waypoint(function() {
    increment(3, 2);
  }, {offset: '75%'});
  
  $('#4').waypoint(function() {
    increment(4, 68);
  }, {offset: '75%'});
  
  $('#5').waypoint(function() {
    increment(5, 46);
  }, {offset: '75%'});
  
  $('#6').waypoint(function() {
    increment(6, 14);
  }, {offset: '75%'});
  
  function increment(elem, finalVal) {
    var currVal = parseInt(document.getElementById(elem).innerHTML,10);
    if (currVal < finalVal) {
      currVal++;
      document.getElementById(elem).innerHTML = currVal + "K+";
  
      setTimeout(function() {
        increment(elem, finalVal);
      }, 1)
    }
  };


  const el = document.getElementById('blocked');

  setTimeout(() => {
    el.style.display = 'none';
  }, 2000);

