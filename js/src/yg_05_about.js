// yg_05_about.js
(function($) {
    // 동영상 아래부터 컨텐츠들 나오게 하기
    var aboutWrap = $('#aboutWrap');
    var hei = $(window).height();
    // console.log(hei);
    aboutWrap.css({marginTop:hei});

    // top버튼에 기능 넣기
    var topBtn = $('.indi_top').children('button');
    var body = $("html, body");
    topBtn.on('click', function(e){
      e.preventDefault();
      body.stop().animate({scrollTop:0});
    });
})(this.jQuery);