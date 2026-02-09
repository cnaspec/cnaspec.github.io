$(document).ready(function() {
    $("#facts").click( function(){
        $.ajax({
        url: " https://uselessfacts.jsph.pl/random.json",
        success: function(results) {
            $('#info').text(results["text"]);
        },
        error: function(xhr,status,error) {
            console.log(error);
        }
        });
    });

    $("#dog").click( function(){
        $.ajax({
            url: "https://random.dog/woof.json",
            success: function(results) {
            if (results["url"].endsWith(".mp4")) {
            $('#change').attr("src", "dog.jpg");
            } else {
            $('#change').attr("src", results["url"]);
            }
            }
        })
        $("#warning").text("The dogs have smelled the meat.")
        $("#message").text("I think you need to run.")

    })

});