$(document).ready(function () {
    $("#btn").click(function () {
        $("#modal-parent").css("display", "block");
        $("#win , #btn-closed").click(function(e){
            $("#modal-parent").animate({
                "opacity": "0",
            },500,function(){
                $("#modal-parent").css({
                    "display": "none",
                    "opacity": "1"
                });
            });
        });
    });
});