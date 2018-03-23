// headBox_common.js
(function($) {
    var logo = $('#headBox').children('h1').children('button');
    var gnb = $('#gnb').children('ul');
    var backBlack = $('.back_black');

    // 로고 클릭시 gnb와 검은바탕 생기고 없어지기.
    logo.on('click',function(e) {
        var none = gnb.css('display') == 'none';
        // gnb.fadeToggle();
        // backBlack.fadeToggle();
        // console.log(none);
        if( none ){
            gnb.fadeIn();
            backBlack.fadeIn();
            logo.addClass('logo_close');
        }else{
            gnb.fadeOut();
            backBlack.fadeOut();
            logo.removeClass('logo_close');
        }
    }); //logo.on('click')

    // 네비게이션에 해당 페이지 이름 넣기 
    var navigation = $('.navigation').find('p');
    var nowHref = $(location).attr('href');  
    var hrefP = nowHref.split("_")[2];
    var hrefN = hrefP.split(".")[0];
    // console.log(hrefN);
    navigation.text(hrefN);
    navigation.css({textTransform: 'capitalize'});
})(this.jQuery);