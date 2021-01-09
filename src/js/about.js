window.addEventListener('load', function () {
    var menus = document.querySelector('.tabs-menus')
    var lichengbei = document.querySelector('.lichengbei')
    var jianjie = document.querySelector('.jianjie')
    var chuangbanren = document.querySelector('.chuangbanren')

    var lichengbei_tab = document.querySelector('#lichengbei')
    var jianjie_tab = document.querySelector('#jianjie')
    var chuangbanren_tab = document.querySelector('#chuangbanren')

    // lichengbei.style.display = 'block'
    console.log(menus.children[0])

    menus.children[0].addEventListener('click', function () {
        lichengbei.style.display = 'block'
        jianjie.style.display = 'none'
        chuangbanren.style.display = 'none'
        lichengbei_tab.classList.add('active')
        jianjie_tab.classList.remove('active')
        chuangbanren_tab.classList.remove('active')
    })
    menus.children[1].addEventListener('click', function () {
        lichengbei.style.display = 'none'
        jianjie.style.display = 'block'
        chuangbanren.style.display = 'none'
        lichengbei_tab.classList.remove('active')
        jianjie_tab.classList.add('active')
        chuangbanren_tab.classList.remove('active')
    })
    menus.children[2].addEventListener('click', function () {
        lichengbei.style.display = 'none'
        jianjie.style.display = 'none'
        chuangbanren.style.display = 'block'
        lichengbei_tab.classList.remove('active')
        jianjie_tab.classList.remove('active')
        chuangbanren_tab.classList.add('active')
    })
})