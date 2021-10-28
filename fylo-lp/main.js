function emailIsValid(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


$("button").on("click", function(){
    let resp = emailIsValid($("input#email").val());

    if(!resp){
        $("input#email").css("border", "1px solid hsl(1, 82%, 54%)");

        $(".formulario #resp")
        .text("Please provide a valid email")
        .css({"display": "block" ,"color": "hsl(1, 82%, 54%)", "font-size": "10px"});
    }
    else{
        $("input#email")
        .val('')
        .css("border", "1px solid #070439");

        $(".formulario #resp").css("display", "none");
    }
});