var newText = $( "p" ).text().split( " " ).join( "</span> <span>" );
newText = "<span>" + newText + "</span>";
 
$( "p" )
  .html( newText )
  .find( "span" )
    .hover(function() {
      $( this ).addClass( "marker" );
    }, function() {
      $( this ).removeClass( "marker" );
    })
  .end()
  .find( ":contains('th')" )
    .css({
        "font-style": "italic",
        "text-shadow": "2px 2px pink",
        "font-weight": "bolder"
    });

    function start(){
        var keywords = $("#search").val().trim().split(",");
        var input = $("#content").val().trim().split(".");
        var result = "";
        $.each( keywords, function(j) {
            console.log('Keyword: '+keywords[j]);
            $.each(input,function(i){
                console.log("Input Sentence: "+input[i].trim());

                let words = input[i].split(" ");
                let searched = $.inArray(keywords[j], words);
                if(searched > -1){
                  console.log('Mil gaya  -' + words);
                  words[searched] = '<b>'+words[searched]+'</b>';
                  result = result + words.join(" ");
                }
                

            });
        });

        $("#result").val(result);
    }