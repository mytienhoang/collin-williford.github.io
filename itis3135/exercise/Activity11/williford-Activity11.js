//<!-- jQuery call to the accordion() method. -->
// $(document).ready(function() {
//     $("#tabs").tabs();
// });

$(document).ready(function() {
    $('.accordion').click(function() {
        $(this).toggleClass("active");
        let panel = $(this).next();
        if (panel.css("display") === "block") {
            panel.slideUp();
        } else {
            panel.slideDown();
        }
    });
});
