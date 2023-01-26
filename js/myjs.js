$( function() {
  $('.card1').click( function() {
    $(this).css('background', '#21D0B3')
    $('.card-title').css('color', '#fff')
    $('.fa-stethoscope').css('color', '#fff')
  } );
} );


$( function() {
  $('.im').mouseover( function() {
    $(this).css('background', 'rgba(255, 255, 255, 0.7)')
    $('h4').css('color', '#2C2C2C')
    
  } );
} );
$( function() {
  $('.im').mouseout( function() {
    $(this).css('background', 'rgba(0, 0, 0, 0.78)')
    $('h4').css('color', '#fff')
    
  } );
} );



function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);


var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}











