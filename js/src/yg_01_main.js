// yg_01_main.js
(function($) {
    // 동영상 아래부터 컨텐츠들 나오게 하기
    var albumWrap = $('#albumWrap');
    var hei = $(window).height();
    // console.log(hei);
    albumWrap.css({marginTop:hei});

    // top버튼에 기능 넣기
    var topBtn = $('.indi_top').children('button');
    var body = $("html, body");
    topBtn.on('click', function(e){
      e.preventDefault();
      body.stop().animate({scrollTop:0});
    });
    
    //musicVideoWrap 리스트 클릭 시 이미지 큰 이미지로 바뀌고 글씨 변화, 리스트 이미지 푸른배경으로 교체,글씨 추가
    var mvThumb_01 = $('.slide_thumb').children('div').eq(0).children('button');
    var mvThumb_02 = $('.slide_thumb').children('div').eq(1).children('button');
    var mvThumb_03 = $('.slide_thumb').children('div').eq(2).children('button');
    var mvThumb_04 = $('.slide_thumb').children('div').eq(3).children('button');
    var mvThumb_05 = $('.slide_thumb').children('div').eq(4).children('button');
    var mv01 = $('.mv_01');
    var mv02 = $('.mv_02');
    var mv03 = $('.mv_03');
    var mv04 = $('.mv_04');
    var mv05 = $('.mv_05');
    var mvBoxImg = $('.mv_box').children('button');

    $('.over').hide();
    mvThumb_01.children('.over').show();
    mvThumb_01.addClass('click_thumb');
    mvBoxImg.addClass('mv_box_01');

    var mvThumb = function(e){
      e.preventDefault();
      $(this).addClass('click_thumb'); //리스트 이미지 푸른 이미지로 .click_thumb은 css로 만들었음
      $(this).children('.over').show(); //이미지 위에 글씨 .over는 html로 만들고 js로 첫번째 제외 나머지 none
      $(this).parent('div').siblings('div').children('button').removeClass('click_thumb'); //다른 리스트 푸른 이미지 제거.원래 이미지로
      $(this).parent('div').siblings('div').find('.over').hide(); // 다른 리스트 이미지 위의 글씨 제거
      mvBoxImg.removeClass(); //리스트 클릭 시 위의 큰 이미지 교체를 위해
    };

    mvThumb_01.on('click', mvThumb);
    mvThumb_01.on('click', function(e){
      mv01.show(); //.mv_0*은 큰 이미지 글씨
      mv01.siblings('button').hide();
      mvBoxImg.addClass('mv_box_01'); //.mv_box_0*은 큰 이미지 바꾸기
    });

    mvThumb_02.on('click', mvThumb);
    mvThumb_02.on('click', function(e){
      mv02.show();
      mv02.siblings('button').hide();
      mvBoxImg.addClass('mv_box_02');
    });

    mvThumb_03.on('click', mvThumb);
    mvThumb_03.on('click', function(e){
      mv03.show();
      mv03.siblings('button').hide();
      mvBoxImg.addClass('mv_box_03');
    });

    mvThumb_04.on('click', mvThumb);
    mvThumb_04.on('click', function(e){
      mv04.show();
      mv04.siblings('button').hide();
      mvBoxImg.addClass('mv_box_04');
    });

    mvThumb_05.on('click', mvThumb);
    mvThumb_05.on('click', function(e){
      mv05.show();
      mv05.siblings('button').hide();
      mvBoxImg.addClass('mv_box_05');
    });

    //musicVideoWrap 큰 이미지인 var mvBoxImg = $('.mv_box').children('button'); 클릭 시 모달윈도우
    var modalMv = $('.modal_mv');
    mvBoxImg.on('click', function(e){
      e.preventDefault();
      var mvBoxImgClass = mvBoxImg.attr('class'); //큰 이미지의 클래스를 통해 현재 이미지가 어떤 리스트를 클릭하여 얻은 이미지인지 파악
      var modalMvClose = $('.modal_mv_close'); //모달 윈도우 닫기버튼
      if(mvBoxImgClass == 'mv_box_01' || mvBoxImgClass == 'mv_01 mv_box_01'){ 
        //큰 이미지의 클래스에 따라 나오는 뮤비가 달라야 하므로 속성의 클래스 별로 iframe의 src를 다르게 만든다.
        //첫번째만 조건이 다른 이유는 처음 화면에서 바로 큰 이미지 클릭 시에도 모달이 나오게 하기 위해서 
        modalMv.show(); //미리 html을 통해 만들고  css로 none상태인 모달 윈도우 불러오기
        modalMv.prepend('<iframe width="840" height="472" src="https://www.youtube.com/embed/vecSVX1QYbQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
        modalMv.find('iframe').css({marginTop: '-236px', marginLeft: '-420px'});
      }else if(mvBoxImgClass == 'mv_box_02'){
        modalMv.show();
        modalMv.prepend('<iframe width="840" height="472" src="https://www.youtube.com/embed/Amq-qlqbjYA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
        modalMv.find('iframe').css({marginTop: '-236px', marginLeft: '-420px'});
      }else if(mvBoxImgClass == 'mv_box_03'){
        modalMv.show();
        modalMv.prepend('<iframe width="840" height="472" src="https://www.youtube.com/embed/pTD9Jysi3_g" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
        modalMv.find('iframe').css({marginTop: '-236px', marginLeft: '-420px'});
      }else if(mvBoxImgClass == 'mv_box_04'){
        modalMv.show();
        modalMv.prepend('<iframe width="840" height="472" src="https://www.youtube.com/embed/iTt9rS2RH-o" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
        modalMv.find('iframe').css({marginTop: '-236px', marginLeft: '-420px'});
      }else if(mvBoxImgClass == 'mv_box_05'){
        modalMv.show();
        modalMv.prepend('<iframe width="840" height="472" src="https://www.youtube.com/embed/k24UEMaLwEk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
        modalMv.find('iframe').css({marginTop: '-236px', marginLeft: '-420px'});
      }
    modalMvClose.on('click', function(e){
      e.preventDefault();
      modalMv.hide(); //닫기버튼 클릭 시 모달 none
      modalMv.find('iframe').remove(); //iframe을 없애지 않으면 iframe이 쌓여 계속 첫번째 뮤비만 나오게 된다
    });

    });
})(this.jQuery);