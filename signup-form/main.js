function verifyEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function verifyPass(){
    return $("#passwd").val().length >= 8? true : false;
}

$("button").on("click", function(){
    let emailValidation = verifyEmail($("#email").val());
    let passwdValidation = verifyPass();

    //validate email
    if(!emailValidation){
        $("input#email").css("border", "1px solid rgb(249 0 0)");
        $(".errorMessage.email").css({"display": "block", "text-align": "left"});
        
    }
    else{
        $("input#email").css({"border": "1px solid hsl(249, 10%, 26%)"});
        $(".errorMessage.email").css("display", "none");
    }

    //validate passwd
    if(!passwdValidation){
        $("input#passwd").css("border", "1px solid rgb(249 0 0)");
        $(".errorMessage.pass").css({"display": "block", "text-align": "left"});
    }
    else{
        $("input#passwd").css({"border": "1px solid hsl(249, 10%, 26%)"});
        $(".errorMessage.pass").css("display", "none");
    }
});
