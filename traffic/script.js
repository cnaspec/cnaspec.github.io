    $(document).ready(function(){
    
    var next = green;

    var lightchange = function() {
 
        if (next==green) {
            $("#red").css("background-color","rgb(123, 60, 60)");
            $("#green").css("background-color","green");
            next=yellow;
        } else if (next==yellow) {
            $("#green").css("background-color"," rgb(19, 76, 19)"); 
            $("#yellow").css("background-color","yellow");
            next = red;
        } else {
            $("#yellow").css("background-color"," rgb(107, 107, 53)");
            $("#red").css("background-color","red");
            next=green;
        }
    }

    var clickButton = $("#clicker");
    clickButton.click(lightchange);

    });