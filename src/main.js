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


setTimeout(() => {
  owo.state.name = '我'
  owo.state.place = "安徽"
  owo.state.text1 = "到村民家走访，了解每一户的生活生产现状，挖掘村民需求，找到致贫根源。"
  owo.state.text2 = "搭建优质农产品推广平台，助力农业生产转型升级。"
  owo.state.text3 = "与大城市的农产品龙头企业建立合作，培养人才，形成产销一条龙，为村集体实现创收。"
  owo.state.text4 = "为村里的农产品注册了品牌，成立了推广协会，进一步为村里打造“明星产品”"
  owo.state.text5 = "与大城市的农产品龙头企业建立合作，培养人才，形成产销一条龙，为村集体实现创收。"
}, 1000);