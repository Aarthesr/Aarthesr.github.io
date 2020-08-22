
// $(".cal-ali").click(function(){
//     report();
// })
var flag = 1;
var perc,sumu,suml;
function calperc(num){
    var sum=0;
    while(num>0)
    {
        sum+=(num%10);
        num/=10;
    }
    return sum;
}
function report(){
    if(flag === 1){
        var x = document.forms["myForm"]["uname"].value;
        if (x == "" || x == null) {
            swal({
                title : 'OOPS!!',
                text : 'Fill out the name to find out your love percentage 😉',
                confirmButtonColor: '#efbbcf'
            })
            return false;
        }
        else{
            sumu=0;
            suml=0;
            var uname = $("#uname").val().toLowerCase();
            var lname = $("#lname").val().toLowerCase();
            if((uname === "Radhakrishnan" && lname === "Sujatha") || (uname === "Sujatha" && lname === "Radhakrishnan"))
            {
                perc = 100;
            }
            else{
                for(var i=0 ; i<uname.length; i++){
                    sumu += uname.charCodeAt(i);
                }
                for(var j=0; j<lname.length; j++){
                    suml += lname.charCodeAt(j);
                }
                perc=(calperc(sumu)+calperc(suml))+40;
                if(perc >100){
                    perc = 100;
                }
            }
        
        $("div.cal-ali").prepend("<h2 class='text loading'>Calculating</h2>");
        setTimeout(function(){
            $("h2").removeClass("loading");
            $("h2").text(perc.toFixed(2)+"%");
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