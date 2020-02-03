
$("#nav-Home").click(function () {
    window.scrollTo(0, 0);
});

$("#nav-About").click(function () {
    var offset = $(".about-us-label").offset();
    $('html, body').animate({
        scrollTop: offset.top - 200,
        scrollLeft: offset.left
    }, 600, "linear");
});

$("#nav-Contact").click(function () {
    var offset = $(".main-contact-form-container").offset();
    $('html, body').animate({
        scrollTop: offset.top,
        scrollLeft: offset.left
    }, 600, "linear");
});