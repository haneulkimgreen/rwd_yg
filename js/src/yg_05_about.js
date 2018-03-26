// yg_05_about.js
(function($) {
    // 동영상 아래부터 컨텐츠들 나오게 하기
    var aboutWrap = $('#aboutWrap');
    var hei = $(window).height();
    // console.log(hei);
    aboutWrap.css({marginTop:hei});
})(this.jQuery);