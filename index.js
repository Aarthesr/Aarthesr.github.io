
// $(".cal-ali").click(function(){
//     report();
// })
var flag = 1;
var randomnumber;
function report(){
    if(flag === 1){
        var x = document.forms["myForm"]["uname"].value;
        if (x == "" || x == null) {
            swal("OOPS!!","Fill out the name to find out your love percentage 😉");
            return false;
        }
        else{
            var uname = $("#uname").val();
            var lname = $("#lname").val();
            if((uname === "Radhakrishnan" && lname === "Sujatha") || (uname === "Sujatha" && lname === "Radhakrishnan"))
            {
                randomnumber = 100;
            }
            else{
                randomnumber = Math.floor(Math.random() * 100) + 1;
            }
        
        $("div.cal-ali").prepend("<h2 class='text loading'>Calculating</h2>");
        setTimeout(function(){
            $("h2").removeClass("loading");
            $("h2").text(randomnumber+"%");
        },5000);
        flag = 0;
        // $(".shape").addClass("btn btn-lg cal");
        // $(".shape").text("Calculate Again")
    }
    // $(".shape").addClass("heart");
    }
    else{
            $("h2").hide();
            $("#uname").val("");
            $("#lname").val("");
            flag=1;
    }
}
// $(".shape").click(function(){
//     $("#uname").val("");
//     $("#lname").val("");
//     // $(".btn").attr("value","Calculate");
//     // report();
//     $("h2").remove();
//     $(".shape").replaceWith("<div class='text-center cal-ali'><button type='button' class='btn btn-lg cal' onclick='report();'><em>Calculate</em></button></div>")
// });