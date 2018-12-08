;$(function(){
    var swiper = new Swiper('.swiper1', {
        slidesPerView: 5,
        // spaceBetween: 20,
        slidesPerGroup: 5,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay:true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });
    $(".tab-content").on("mouseenter",function(){
      $(".pointer").show()
    });
    $(".tab-content").on("mouseleave",function(){
      $(".pointer").hide()
    })
})
;$(function(){
  var swiper = new Swiper('.swiper2', {
    loop: true,
    autoplay:true,
    navigation: {
      nextEl: '.right-botton',
      prevEl: '.left-botton',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});
// $(".tab-content").on("mouseenter",function(){
//   $(".pointer").show()
// });
// $(".tab-content").on("mouseleave",function(){
//   $(".pointer").hide()
// })
})