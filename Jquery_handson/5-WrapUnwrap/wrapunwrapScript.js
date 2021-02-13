function wrapMethod(){
    if($("#d1").css("display") === 'none'){
        $("#d1").show();
        $("#p1").appendTo($("#d1"));
        //$("#p1").wrap($("#d1"));
    }
    else{
        $("#d1").contents().unwrap();
    }
    /*if($("#p1").parent().is($("#d1"))){
        $("#p1").unwrap();
    }
    else{
        $("#p1").wrap($("#d1"));
    }*/
}