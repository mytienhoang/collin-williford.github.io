$(document).ready(function() {
    
    $('.slideshow img:not(:first)').hide();

    $('.thumbnail').click(function() {
        var imgSelector = $(this).data('image');
        $('.slideshow img').hide();
        $(imgSelector).show();
    });

}); 