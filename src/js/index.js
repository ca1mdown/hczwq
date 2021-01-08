window.addEventListener('load', function () {
    //1 获取元素
    var btn_l = document.querySelector('.btn-l')
    var btn_r = document.querySelector('.btn-r')
    var lunbo = document.querySelector('.lunbo')

    var lunboWidth = lunbo.offsetWidth
 
    var num = 0
    var circle = 0

    //2 鼠标经过隐藏左右按钮
    lunbo.addEventListener('mouseenter', function() {
        btn_l.style.display = 'block'
        btn_r.style.display = 'block'
        clearInterval(timer);
        timer = null; // 清除定时器变量
    })
    lunbo.addEventListener('mouseleave', function() {
        btn_l.style.display = 'none'
        btn_r.style.display = 'none'
        timer = setInterval(function() {
          //手动调用点击事件
          btn_r.click();
      }, 3000)
    })
    var ul = lunbo.querySelector('ul')
    var ol = lunbo.querySelector('.circle')

    for (var i = 0; i < ul.children.length; i++) {
      var li = document.createElement('li');

      li.setAttribute('index', i)

      ol.appendChild(li)
      li.addEventListener('click', function () {
        for (var i = 0; i < ol.children.length; i++) {
          ol.children[i].className = ''
        }
        this.className = 'current'

        var index = this.getAttribute('index')
        // console.log(lunboWidth)
        // console.log(index)

        num = index
        circle = index

        animate(ul, -index * lunboWidth)
      })

      
    }

    ol.children[0].className = 'current'

    var first = ul.children[0].cloneNode(true)

    ul.appendChild(first);

    btn_r.addEventListener('click', function() {
      if (num == ul.children.length-1) {
        ul.style.left = 0
        num = 0
      }
      num++
      animate(ul, -num * lunboWidth)
      circle++
      if (circle == ol.children.length) {
        circle = 0
      }

      for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].className = ''
      }
      ol.children[circle].className = 'current'
      
    })

    btn_l.addEventListener('click', function() {
      if (num == 0) {
        num = ul.children.length-1
        ul.style.left = - num * lunboWidth + 'px'
      }
      num--
      animate(ul, -num * lunboWidth)
      circle--
      if (circle < 0) {
        circle = ol.children.length - 1
      }

      for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].className = ''
      }
      ol.children[circle].className = 'current'
      
    })

    var timer = setInterval(function () {
      btn_r.click()
    }, 3000)
})