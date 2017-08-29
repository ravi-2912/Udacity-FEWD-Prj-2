$(window).on('resize', function() {
    if($(window).width() < 992) {
        $('#navbar-brand-div').removeClass('col-lg-12');
    } else {
        $('#navbar-brand-div').addClass('col-lg-12');
    }
})