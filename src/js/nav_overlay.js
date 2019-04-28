function initNavOverlay() {
    let overlayElement = $('.element-overlay');
    let overlayClass = 'hamburger__nav-overlay';

    let buttonOpenNav = $('.hamburger__btn_open');
    let buttonCloseNav = $('.hamburger__btn_close');

    let path = window.location.pathname;
    let page = path.split("/").pop();

    // Пункты меню, ссылающиеся на текущую страницу
    let buttonCurrentPageNav = $(".hamburger .nav__link[href^='" + page + "']");
    console.log(buttonCurrentPageNav);

    let overlayFunc = function(){
        overlayElement.addClass(overlayClass);
        buttonCloseNav.addClass('active');
        buttonOpenNav.removeClass('active');

        $('html').css('overflow', 'hidden');
        $('body').bind('touchmove', function(e) {
            e.preventDefault()
        });
    };

    let unOverlayFunc = function(){
        overlayElement.removeClass(overlayClass);
        buttonCloseNav.removeClass('active');
        buttonOpenNav.addClass('active');

        $('html').css('overflow', 'scroll');
        $('body').unbind('touchmove');
    };

    buttonOpenNav.click(function(e) {
        e.preventDefault();
        overlayFunc();
    });

    buttonCloseNav.click(function(e) {
        e.preventDefault();
        unOverlayFunc();
    });

    buttonCurrentPageNav.click(function(e) {
        unOverlayFunc();
        alert('trrrr');
    });
}

$(function () {
    initNavOverlay();
});