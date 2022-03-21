$(".popclose").click(function() {
    $('.blacklayer').fadeOut(200);
});
$(".blacklayer2").click(function() {
    $('.blacklayer').fadeOut(200);
});
$(".reward_Btn").click(function() {
    $("div[id=" + $(this).attr("data-pop") + "]").fadeIn(200);
});
//pop1 select
$("#select1").change(
    function() {
        var V = $("#select1").val();
        if (V > 0) { $(".pop_Btn1").addClass("pop_Btn_get"); }
    }
);
//pop1 add class
$(".topop1").click(function() {
    $(".topop1").addClass("alreadysign");
    $(".topop1").text("已簽到");
    $(".topop1").css('color', "#9aabbc");
    $(".getpop1").addClass("can_click");
    $(".topop1").prop('disabled', 'disabled');
});
$(".pop_Btn1").click(function() {
    $(this).removeClass("pop_Btn_get");
    $(this).text("已領取");
    $("#select1").prop('disabled', 'disabled');
    $(".getpop1").removeClass("can_click");
    $(".getpop1").text("已領取");
    $(".getpop1").prop('disabled', 'disabled');
});
// pop2 select
$("#pop2_bg").change(
    function() {
        var X = $("#select2-1").val();
        var Y = $("#select2-2").val();
        if (X > 0 && Y > 0) { $(".pop_Btn2").addClass("pop_Btn_get"); }
    }
);
// pop2 add class
$(".topop2").click(function() {
    $(".topop2").addClass("alreadysign");
    $(".topop2").text("已簽到");
    $(".topop2").css('color', "#9aabbc");
    $(".getpop2").addClass("can_click");
    $(".topop2").prop('disabled', 'disabled');
});
$(".pop_Btn2").click(function() {
    $(this).removeClass("pop_Btn_get");
    $(this).text("已領取");
    $("#select2-1").prop('disabled', 'disabled');
    $("#select2-2").prop('disabled', 'disabled');
    $(".getpop2").removeClass("can_click");
    $(".getpop2").text("已領取");
    $(".getpop2").prop('disabled', 'disabled');
});