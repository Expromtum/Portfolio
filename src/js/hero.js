console.log('hero.js');

var parallax = (function () {
    var bg = $('.hero__bg');                       // Задний фон
    var portfolio = $('.hero__transparent-title'); // Полупрозрачная надпись
    var user = $('.hero__user');                   // Блок с фото пользователя

    return {
        move: function (block, windowScroll, strafeAmount) {

            var strafe = windowScroll / -strafeAmount + '%';
            var transformString = 'translate3d(0, '+ strafe +', 0)';
            var style = block.prop('style');

            style.transform = transformString;
            style.webkitTransform = transformString;
        },

        init: function (wScroll) {
            this.move(bg, wScroll, 50);
            this.move(portfolio, wScroll, 20);
            this.move(user, wScroll, 10);
        }
    }
}());

$(window).scroll(function(){
    var wScroll = window.pageYOffset; //Текущая прокрутка сверху
    parallax.init(wScroll);

    // console.log(wScroll);
});

