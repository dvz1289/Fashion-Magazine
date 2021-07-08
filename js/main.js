$(function(){
  var win_w = $(window).width();
  var video = $('#video').get(0);
  var swiper = new Swiper('#visual .swiper-container', {
    autoplay: {
      delay: 5000,
    },
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    navigation: {
      nextEl: '#visual .swiper-button-next',
      prevEl: '#visual .swiper-button-prev',
    },
  });

  var swiper = new Swiper('#testimonial .swiper-container', {
    autoplay: {
      delay: 7000,
    },
    loop: true,
    navigation: {
      nextEl: '#testimonial .swiper-button-next',
      prevEl: '#testimonial .swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 50,

    breakpoints: {
      1024: {
        slidesPerView: 3, 
        spaceBetween: 50,
        slidesPerGroup: 1,
        centeredSlides: true
      }
    }
  });

  $(window).on('resize', function(){
    win_w = $(this).width();
    if(win_w>1180){
      $('.sub_wrap').removeAttr('style'); 
    }
  });

  $('.toggle').on('click', function(){
    $('.gnb_wrap').toggleClass('on');
  });

  $('#gnb>li').on('mouseenter', function(){
    if(win_w>1180){
      $(this).addClass('on');
    }else{
      $('#gnb>li>span').off('click');
      $('#gnb>li>span').on('click', function(){
        $('.sub_wrap').stop().slideUp();
        $(this).next('.sub_wrap').stop().slideToggle();
      });
    }
  });

  $('#gnb>li').on('mouseleave', function(){
    if(win_w>1180){
      $(this).removeClass('on');
    }
  });

  $('#gnb_clone>li').on('mouseenter', function(){
    if(win_w>1180){
      $(this).addClass('on');
    }
  });
  $('#gnb_clone>li').on('mouseleave', function(){
    if(win_w>1180){
      $(this).removeClass('on');
    }
  });

  $('.clear.btn').on('click', function(){
    $('label').removeClass('focus');
  });

  $('#name').focus(function(e){
    $('#contact .name_label').addClass('focus');
  });
  $('#mail').focus(function(e){
    $('#contact .mail_label').addClass('focus');
  });
  $('#message').focus('click', function(e){
    $('#contact .msg_label').addClass('focus');
  });
  $('#name').blur(function(e){
    if($(this).val() == ''){
      $('#contact .name_label').removeClass('focus');
    }
  });
  $('#mail').blur(function(e){
    if($(this).val() == ''){
      $('#contact .mail_label').removeClass('focus');
    }
  });
  $('#message').blur('click', function(e){
    if($(this).val() == ''){
      $('#contact .msg_label').removeClass('focus');
    }
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 300){
      $('.btn_gotop').fadeIn(); 
    } else{
      $('.btn_gotop').fadeOut();
    }
  });
  $('.btn_gotop').click(function(){
    $('html, body').animate({scrollTop:0},400);
    return false;
  });

  $(window).scroll(function(){
    if($(this).scrollTop() > 200){
      $('#header_clone').addClass('fixed');
    }else{
      $('#header_clone').removeClass('fixed');
    }
  });
  
  if(video.paused){
    $('#welcome .vod').addClass('pause');
  } else {
    $('#welcome .vod').addClass('play');
  }

  $('#welcome .vod .btn').on('click', function(e){
    e.preventDefault();
    var is_play = $(this).parent('.vod').hasClass('play');
    if( is_play ){
      $('#welcome .vod').removeClass('play').addClass('pause');
      video.play();
    } else {
      $('#welcome .vod').removeClass('pause').addClass('play');
      video.pause();
    }
  });
});