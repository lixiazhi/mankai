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
  // 点击时存储id
  $('.tab-content .qualification>ul>li').find('a').on('click', function () {
    $('.Honor').toggleClass('hidden')
    $(`.${$(this).data('url')}`).toggleClass('hidden')
  })
})