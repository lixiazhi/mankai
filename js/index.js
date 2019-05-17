$(function () {
  var isnotPC
  $(window).on('resize', function () {
    // 获取屏幕的宽度
    var width = $(this).width()
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
        // console.log(item, arr);
        total += $(this).width()
      })
      // 每个li 有左右10px的padding
      total += liCount * 20
      // console.log($ul.width());
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
})
/* 
 资质荣誉点击修改active样式
*/
$(function () {
  // 荣誉证书
  if (window.location.hash == '#Honor_certificate') {
    $('.Honor').removeClass('show')
    $('.Honor').addClass('hidden')
    $('#aptitude_certificate').removeClass('show')
    $('#aptitude_certificate').addClass('hidden')
    $('#Honor_certificate').removeClass('hidden')
    $('#Honor_certificate').addClass('show')
    // 资质证书
  } else if (window.location.hash == '#aptitude_certificate') {
    $('.Honor').removeClass('show')
    $('.Honor').addClass('hidden')
    $('#Honor_certificate').removeClass('show')
    $('#Honor_certificate').addClass('hidden')
    $('#aptitude_certificate').removeClass('hidden')
    $('#aptitude_certificate').addClass('show')
  }
  // 路由标识
  // 页面获取存储在sessionStorage中
  // 刷新页面时先从sessionStorage中获取
  const contentTabUrl = sessionStorage.getItem('contentTabUrl')
  if (contentTabUrl) {
    $('.mk_content .nav-wrapper>ul>li').each(function (index, item) {
      $(this).removeClass('active')
      if ($(this).data('contenttaburl') == contentTabUrl) {
        $(this).addClass('active')
        // 对应右侧tab添加active
        const activeA = $(this).find('a').attr('href')
        $('.tab-content>.tab-pane').removeClass('active')
        $(activeA).addClass('active')
      }
    })
  }
  // 点击tan栏时存储sessionStorage
  $('.mk_content .nav-wrapper>ul>li').on('click', function () {
    sessionStorage.setItem('contentTabUrl', $(this).data('contenttaburl'))
  })
  // 点击时存储id
  $('.tab-content .qualification>ul>li')
    .find('a')
    .on('click', function () {
      console.log($(this).attr('href'));

      $('.Honor').toggleClass('hidden')
      $(`.${$(this).data('url')}`).toggleClass('hidden')
    })
})