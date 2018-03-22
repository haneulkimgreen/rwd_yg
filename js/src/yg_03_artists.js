// yg_03_artists.js
(function($) {
    // 동영상 아래부터 컨텐츠들 나오게 하기
    var artistsWrap = $('#artistsWrap');
    var hei = $(window).height();
    // console.log(hei);
    artistsWrap.css({marginTop:hei});
})(this.jQuery);