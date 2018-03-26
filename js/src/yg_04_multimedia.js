// yg_04_multimedia.js
(function($) {
    // 동영상 아래부터 컨텐츠들 나오게 하기
    var mediaWrap = $('#mediaWrap');
    var hei = $(window).height();
    // console.log(hei);
    mediaWrap.css({marginTop:hei});

    // 동영상 hover, focus 시 설명 나오게 하기
    var mediaB = $('.media_list').children('ul').children('li').children('button');
    var btnPlay = $('.btn_play');
    var textWrap = $('.text_wrap');
    var showText = function(e){
      e.preventDefault();
      var _this = $(this);
      _this.children('span').stop().fadeIn();
      _this.addClass('hover');
      _this.siblings().css({backgroundImage: 'url("'+'../img/ikon/play_r.png'+'")'});
      }
      var hideText = function(e){
      e.preventDefault();
      var _this = $(this);
      _this.children('span').stop().fadeOut();
      _this.removeClass('hover');
      _this.siblings().css({backgroundImage: 'url("'+'../img/ikon/play_w.png'+'")'});
    }
    
    mediaB.on('focus',showText);
    mediaB.on('blur',hideText);
    mediaB.on('mouseenter',showText);
    mediaB.on('mouseleave',hideText);

})(this.jQuery);