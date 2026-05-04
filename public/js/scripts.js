// $('.collapse').collapse()


$(function() {
  // $('a[href*="#"].scroll:not([href="#"])').click(function() {
    $('a.scroll').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top-180
        }, 1000);
        return false;
      }
    }
  });
});

//  .. 

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("header-sec");

// Get the offset position of the navbar
var sticky = header ? header.offsetTop : 0;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position

var myBody = document.getElementById("my-body");

function myFunction() {
  if (!myBody) return;
  if (window.pageYOffset > sticky) {
    myBody.classList.add("sticky");
  } else {
    myBody.classList.remove("sticky");
  }
}

// Initialize carousels after document is ready
$(document).ready(function() {
  // Image gallery slider
  if ($('.image-gallery-slider').length) {
    $('.image-gallery-slider').owlCarousel({
      margin: 15,
      loop: true,
      dots: true,
      nav: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      items: 2,
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        1024: { items: 2 }
      }
    });
  }

  // Testimonial slider
  if ($('.testimonial-slider').length) {
    $('.testimonial-slider').owlCarousel({
      margin: 0,
      loop: true,
      dots: true,
      nav: true,
      autoplay: false,
      items: 1,
      center: true,
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        1000: { items: 1 }
      }
    });
  }
});

// ..

function checkEmail(email) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email)) {
        return false
    }
    return true;
}

function validateForm(formName) {
    var obj = document.getElementById(formName);

    if (obj.Name.value == "") {
        alert("Name can not be blank.");
        obj.Name.focus();
        return false;
    }
    if (obj.Email.value == "") {
        alert("Email can not be blank.");
        obj.Email.focus();
        return false;
    }
    if (checkEmail(obj.Email.value) == false) {
        alert("Email must be valid.");
        obj.Email.focus();
        return false;
    }
    // if(obj.Contact_No.value == ""){ alert("Contact No can not be blank."); obj.Contact_No.focus(); return false; } 
    if (obj.Message.value == "") {
        alert("Message can not be blank.");
        obj.Message.focus();
        return false;
    }

    $("#loading_img").show();

    $.ajax({
        type: "POST",
        url: "../enquiry_form_code.php",
        data: $("#myForm").serialize()
    }).done(function(msg) {

        $("#loading_img").hide();
        alert(msg);

    if (msg == "Form submitted successfully. You are being redirected to your consultation appointment.") {
        var form = document.getElementById("myForm");
        form.reset();
        window.location.href = "https://calendly.com/bookcornerstore-2087/30-minute-consultation";
    }

    });
    return false;


}