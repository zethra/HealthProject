function scroll(id) {
    $('html, body').stop().animate({
        scrollTop: $($('a[href=' + id + ']').attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
}

$(document).ready(function () {

    $('#toTop').click(function () {
        scroll("#page-top");
    });

    $(".fancybox").fancybox({
        openEffect : 'fade',
        closeEffect	: 'fade',
        helpers : {
            title : {
                type : 'inside'
            }
        },
        beforeShow : function() {
            var alt = this.element.find('img').attr('alt');

            this.inner.find('img').attr('alt', alt);

            this.title = alt;
        }
    });
});