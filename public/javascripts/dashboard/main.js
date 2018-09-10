function openNav() {
    $("#sideNav").css("width", "250px");
    $("main").css("marginLeft", "250px");
    $(".text").each(function (index) {
        $(this).css("display", "inline")
    });
}

function closeNav() {
    $("#sideNav").css("width", "50px");
    $("main").css("marginLeft", "50px");
    $(".text").each(function (index) {
        $(this).css("display", "none")
    });
}