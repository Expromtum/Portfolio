function isVisible(tag) {
    var t = $(tag);
    var w = $(window);
    var wt = w.scrollTop();
    var tt = t.offset().top;
    var tb = tt + t.height();

    return ((tb <= wt + w.height()) && (tt >= wt));
}

function initSkills() {

    $('.circles').each(function(){
        var $this = $(this);

        if (!$this.hasClass('active') && isVisible($this)) {
            $this.addClass('active');
        }
    });
}

$(function () {
    initSkills();
    $(window).scroll(initSkills);
});