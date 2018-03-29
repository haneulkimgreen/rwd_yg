// yg_07_artist_detail_profile.js
(function($) {
  // 작은 사진 클릭시 화면사진, 정보가 바뀐다
  var thumPic01 = $('.thum_01');
  var thumPic02 = $('.thum_02');
  var thumPic03 = $('.thum_03');
  var thumPic04 = $('.thum_04');
  var memPic01 = $('.mem_01');
  var memPic02 = $('.mem_02');
  var memPic03 = $('.mem_03');
  var memPic04 = $('.mem_04');
  var memInfo01 = $('.info_01');
  var memInfo02 = $('.info_02');
  var memInfo03 = $('.info_03');
  var memInfo04 = $('.info_04');

  thumPic01.on('click',function(e) {
    e.preventDefault();
    memPic01.fadeIn();
    memInfo01.fadeIn();
    memPic01.siblings('div').fadeOut();
    memInfo01.siblings('ul').hide();
  });
  thumPic02.on('click',function(e) {
    e.preventDefault();
    memPic02.fadeIn();
    memInfo02.fadeIn();
    memPic02.siblings('div').fadeOut();
    memInfo02.siblings('ul').hide();
  });
  thumPic03.on('click',function(e) {
    e.preventDefault();
    memPic03.fadeIn();
    memInfo03.fadeIn();
    memPic03.siblings('div').fadeOut();
    memInfo03.siblings('ul').hide();
  });
  thumPic04.on('click',function(e) {
    e.preventDefault();
    memPic04.fadeIn();
    memInfo04.fadeIn();
    memPic04.siblings('div').fadeOut();
    memInfo04.siblings('ul').hide();
  });

})(this.jQuery);