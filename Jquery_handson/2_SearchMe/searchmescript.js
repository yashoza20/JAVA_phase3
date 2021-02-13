$(document).ready(function(){
  $("span").hover(function(){
    $(this).css("background-color", "bisque");
    }, 
    function(){
    $(this).css("background-color", "white");
  });
});

$(document).ready(function(){
  $("span:contains('th')").css({"color": "green","text-shadow": "2px 2px pink","font-style":"italic","font-weight":"bolder"})
});