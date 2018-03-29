// yg_08_artist_detail_album.js
(function($) {
  // more 버튼과 fold 버튼 클릭시 text 바뀜 설정
  var viewOn  = $('.view_on');
  var viewOff = $('.view_off');
  var moreBtn = $('.more_btn');
  var foldBtn = $('.fold_btn');
  // 앨범 리스트 클릭시 컨텐츠 내용이 바뀌게 설정
  var albumWrap01 = $('#albumWrap');
  var albumWrap02 = $('#albumWrap_02');
  var albumWrap03 = $('#albumWrap_03');
  var albumList   = $('.album_list').children('ul').children('li');

  // more 버튼과 fold 버튼 클릭시 text 바뀜 설정
  moreBtn.on('click',function(e) {
    e.preventDefault();
    moreBtn.hide();
    foldBtn.show();
    viewOff.hide();
    viewOn.show();
  });
  foldBtn.on('click',function(e) {
    e.preventDefault();
    moreBtn.show();
    foldBtn.hide();
    viewOff.show();
    viewOn.hide();
  });
  // 앨범 리스트 클릭시 컨텐츠 내용이 바뀌게 설정
  albumList.eq(0).children('button').on('click',function(e) {
    e.preventDefault();
    albumWrap01.show();
    albumWrap02.hide();
    albumWrap03.hide();
    moreBtn.show();
    foldBtn.hide();
    viewOff.show();
    viewOn.hide();
  });
  albumList.eq(1).children('button').on('click',function(e) {
    e.preventDefault();
    albumWrap01.hide();
    albumWrap02.show();
    albumWrap03.hide();
    moreBtn.show();
    foldBtn.hide();
    viewOff.show();
    viewOn.hide();
  });
  albumList.eq(2).children('button').on('click',function(e) {
    e.preventDefault();
    albumWrap01.hide();
    albumWrap02.hide();
    albumWrap03.show();
    moreBtn.show();
    foldBtn.hide();
    viewOff.show();
    viewOn.hide();
  });

})(this.jQuery);