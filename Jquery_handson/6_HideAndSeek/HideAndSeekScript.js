$(document).ready(function(){
    $(".button1").on("click", function() {
        $(this).css("background", "yellow");
    })
    $(".button2").on("click", function() {
        $(this).css("background", "green");
    })
    $(".button3").on("click", function() {
        $(this).css("background", "red");
    })
    $(".button4").on("click", function() {
        $(this).css("background", "pink");
    })
    $("table" ).click(function() {
        $( this ).toggleClass( "off" );
      });
      var p;
    $("button").on("click", function() {
        if (p) {
            p.appendTo("body");
            p = null;
          } else {
            p = $("table" ).detach();
          }
    })
})