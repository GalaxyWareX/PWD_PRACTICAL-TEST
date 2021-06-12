$(window).scroll(function() {
    $('#logo-btn').html($(this).scrollTop() > 40 ? 'Back To Top':'E-Resume');
  }).scroll();

  $(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 40) {

            $('#logo-btn').css('color', '#cff7ff');
            $('#logo-btn').css('background-color', '#8ac1ff6e');
        } else {

            $('#logo-btn').css('color', '');
            $('#logo-btn').css('background-color', '');
        }
    });
});









/* window.onscroll = function() {myFunction()};

function myFunction() {
  var x = document.getElementById("#underline-navitem");
  if (document.body.scrollTop > 40 ) {
    document.getElementById("#underline-navitem").className = ".underline-nav-item";
    console.log("yes");
  } else {
    document.getElementById("#underline-navitem").className = "";
  }
} */