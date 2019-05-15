/* 
  动态设置轮播图的图片
  1. 判断当前屏幕是否是移动端
    如果是移动端，加载小图片
    如果是pc端，加载大图片
*/
$(function () {
  // 轮播图初始化
  $('.carousel').carousel({
    interval: 1000
  })

  var $imgs = $('.carousel-inner img')
  var isMobile, startX, isnotPC
  $(window).on('resize', function () {
    // 获取屏幕的宽度
    var width = $(this).width()
    isMobile = width <= 640 ? true : false
    // 给所有的图片设置src属性

    $imgs.each(function () {
      $(this).attr('src', $(this).data(isMobile ? 'msrc' : 'psrc'))
    })
    var $ul = $('.mk_content .nav-wrapper .nav-tabs')
    var $li = $ul.children()
    const liCount = $li.length
    isnotPC = width < 750 ? true : false
    // true移动端
    if (isnotPC) {
      $ul.removeClass('nav-stacked')
      //   // 1. 动态计算ul的宽度
      var total = 0
      $li.each(function (item, arr) {
        console.log(item, arr);
        total += $(this).width()

      })
      // 每个li 有左右10px的padding
      total += liCount * 20
      console.log($ul.width());
      $ul.width(total)
      // 2. 初始化iscroll
      new IScroll('.mk_content .nav-wrapper', {
        scrollX: true,
        scrollY: false
      })
    } else {
      // 给ul添加一个li的宽度
      $ul.width(158)
      $ul.addClass('nav-stacked')
    }
  })
  // 页面一加载先触发一次resize
  $(window).trigger('resize')

  // 让轮播图有手指滑动功能
  // if(isMobile) {
  // 注册滑动事件
  // }
  // 在使用jquery的时候，jquery的事件对象不是原来的js的事件对象，jq对原来的事件对象做了兼容性处理。
  // 所有的jquery的事件对象中，都有一个属性， originalEvent: 原始的事件对象
  $('#carousel').on('touchstart', function (e) {
    startX = e.originalEvent.touches[0].clientX
  })
  $('#carousel').on('touchend', function (e) {
    var distance = e.originalEvent.changedTouches[0].clientX - startX
    console.log(distance)
    // 判断左滑还是右滑
    if (distance >= 50) {
      // 去上一张
      $(this).carousel('prev')
    }
    if (distance <= -50) {
      $(this).carousel('next')
    }
  })

})



/* 
 资质荣誉点击修改active样式
*/
$(function () {
  // 点击时存储id
  $('.tab-content .qualification>ul>li').find('a').on('click', function () {
    // $('.tab-content .qualification>ul>li').removeClass('active')
    // $(this).addClass('active')
    // 点击荣誉证书切换证书页
    // .show  .hidden切换类即可
    // $('.Honor_certificate').toggleClass('hidden')
    // $('.Honor').toggleClass('hidden')
    $('.Honor').toggleClass('hidden')
    $(`.${$(this).data('url')}`).toggleClass('hidden')
    // $activeLi = $('.tab-content .qualification>ul>li')
    // $activeLi.each(item => {
    //   console.log(item);
    //   if (item == 1) {
    //     $('.Honor_certificate').toggleClass('hidden')
    //     $('.Honor').toggleClass('show')

    //   } else if (item == 2) {
    //     $('.aptitude_certificate').toggleClass('hidden')
    //     $('.Honor').toggleClass('show')
    //   }
    // });
  })



})