function scrollIntoView () {
  window.scrollTo(0, 0)
}

// 阻止微信拖动
document.body.addEventListener('touchmove', function (e) {
  e.preventDefault() // 阻止默认的处理方式(阻止下拉滑动的效果)
}, {passive: false})


function initScale () {
  if (window.autoScale) {
    autoScale({
      deviseW: 750,
      deviseH: 1508,
      center: 'middle',
      scroll: false,
      type: 'scale',
      box: '.scale-box'
    })
  } else {
    setTimeout(initScale, 60);
  }
}

initScale()