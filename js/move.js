$(document).ready(function() {
    document.getElementById('iframe').src = "fireworksbox.html";
    $(".top").click(function() {
        $('html, body').animate({
            scrollTop: $(".part0").offset().top
        }, 500);
    });
});
$(document).ready(function() {
    $(".mainBtn1").click(function() {
        $('html, body').animate({
            scrollTop: $(".part1").offset().top
        }, 500);
    });
});
$(document).ready(function() {
    $(".mainBtn2").click(function() {
        $('html, body').animate({
            scrollTop: $(".part2").offset().top
        }, 500);
    });
});