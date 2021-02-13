$(document).ready(function(){
    $("input").keyup(function(){
        //alert("aaa");
        let m1=$("#m1").val();
        let m2=$("#m2").val();
        let sc=$("#sci").val();
        let en=$("#eng").val();
        let sa=$("#san").val();
        let ss=$("#ssc").val();

        let  tt = (+m1+ +m2+ +sc+ +en+ +sa+ +ss).toFixed(2);
        $("#sum1").text(tt);
    });
});


/*$(document).ready(function(){
    var sum1=0.00;
    var sum2=0.00;
    $("#resultVar").val(0.00);
    $("input").focusout(function(){
        sum1=parseFloat($("#resultVar").val());
        sum2=$("#resultVar").val(parseFloat(sum1)+parseFloat($("input").val()));
        $("#resultVar").reset().append(sum2);
    });
});*/