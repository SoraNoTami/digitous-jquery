$("input").keyup(function (){
    $("input").removeClass("is-valid");
    $("input").removeClass("is-invalid");
    console.log($("input").val().length);
    if($("input").val().length > 5){
        $("input").addClass("is-valid");
    }else{
        $("input").addClass("is-invalid");
    }
    console.log("plop")
})