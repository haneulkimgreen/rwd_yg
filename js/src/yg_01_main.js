// yg_01_main.js
(function($) {
    // 동영상 아래부터 컨텐츠들 나오게 하기
    var albumWrap = $('#albumWrap');
    var hei = $(window).height();
    // console.log(hei);
    albumWrap.css({marginTop:hei});
    
})(this.jQuery);