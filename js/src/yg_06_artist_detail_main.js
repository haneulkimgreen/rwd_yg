// yg_06_artist_detail_main.js
(function($) {
  // max480
  // max767
  // max1366
  // min1367~
  var rwd = function(){
    var rwdW = parseInt($(window).width());
    var mob  = 480;
    var tab  = 960;
    var pc   = 1366;
    // tab,mobile gnb 버튼클릭시 메뉴 생성, 숨김
    var mainMenu = $('.main_menu');
    var closeMenu = $('.close_menu');
    // tab,mobile gnb>ul>li,>a에 효과주기
    var gnb     = $('#gnb');
    var menuUl  = gnb.children('ul');
    var menuLi  = gnb.children('ul').children('li');
    var menuBtn = gnb.children('ul').children('li').children('a');
    var menuBar = $('.menu_bar');
    // tab,mobile gnb 버튼클릭시 메뉴 생성, 숨김
    var showMenu = function(e){
        e.preventDefault();
        mainMenu.hide();
        closeMenu.show();
        menuUl.show();
      };
    var hideMenu = function(e){
        e.preventDefault();
        mainMenu.show();
        closeMenu.hide();
        menuUl.hide();
      }
    // tab,mobile gnb>ul>li,>a에 효과주기
    var mtBar = function(e){
      e.preventDefault();
      $(this).parent().addClass('menu');
      $(this).siblings().addClass('bar');
    };
    var removeBar = function(e){
      e.preventDefault();
      $(this).parent().removeClass('menu');
      $(this).siblings().removeClass('bar');
    };  
    // pc,pcFull gnb>ul>li,>a에 효과주기
    var pcMenu = function(e){
        e.preventDefault();
        $(this).parent().addClass('menu');
      }
    var pcRemove = function(e){
        e.preventDefault();
        $(this).parent().removeClass('menu');
      }

/*      var removeBar = function(t){
        $(this).parent().removeClass('menu');
        if(!t){
          $(this).siblings().removeClass('bar');
        }
      };
      menuBtn.on('focus',function(e){
        e.preventDefault(true);
         menuBar();
      }); 이렇게 함수처리 하여 사용하는 방법도 있습니다.*/
    if(rwdW <= mob){
      // mobile
      // tab,mobile gnb 버튼클릭시 메뉴 생성, 숨김
      mainMenu.on('click',showMenu);
      closeMenu.on('click',hideMenu);
      // tab,mobile gnb>ul>li,>a에 효과주기
      menuBtn.on('focus',mtBar);
      menuBtn.on('blur',removeBar);
      menuBtn.on('mouseenter',mtBar);
      menuBtn.on('mouseleave',removeBar);
    }else if(mob < rwdW && rwdW < tab){
      // tab
      // tab,mobile gnb 버튼클릭시 메뉴 생성, 숨김
      mainMenu.on('click',showMenu);
      closeMenu.on('click',hideMenu);
      // tab,mobile gnb>ul>li,>a에 효과주기
      menuBtn.on('focus',mtBar);
      menuBtn.on('blur',removeBar);
      menuBtn.on('mouseenter',mtBar);
      menuBtn.on('mouseleave',removeBar);
    }else if(tab <= rwdW && rwdW < pc){
      // pc
      menuBar.remove();
      // pc,pcFull gnb>ul>li,>a에 효과주기
      menuBtn.on('focus',pcMenu);
      menuBtn.on('blur',pcRemove);
      menuBtn.on('mouseenter',pcMenu);
      menuBtn.on('mouseleave',pcRemove);
    }else{
      // pcFull
      menuBar.remove();
      // pc,pcFull gnb>ul>li,>a에 효과주기
      menuBtn.on('focus',pcMenu);
      menuBtn.on('blur',pcRemove);
      menuBtn.on('mouseenter',pcMenu);
      menuBtn.on('mouseleave',pcRemove);
    }

  }; // //rwd()
rwd();

// parseInt() 주어진값을 정수형 숫자로 변환처리
// 예: 40px  -> parseInt(40px)  -> 40
// 예2: 43.3 ->  parseInt(43.3) -> 43
  var $w = parseInt($(window).width());
  $(window).on('resize',function(){
    var nowW = $(window).width();
    if($w !== nowW){
      location.reload();
      rwd();
// 리로드-사이즈 바뀔떄마다 새로고침으로 적용
// 아래꺼-비동기처럼 변화를 주겠다
    }
  });
})(this.jQuery);