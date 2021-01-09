window.addEventListener('load', function () {
    var menus = document.querySelector('.tabs-menus')
    var lichengbei = document.querySelector('.lichengbei')
    var jianjie = document.querySelector('.jianjie')
    var chuangbanren = document.querySelector('.chuangbanren')

    // lichengbei.style.display = 'block'
    console.log(menus.children[0])

    menus.children[0].addEventListener('click', function () {
        lichengbei.style.display = 'block'
        jianjie.style.display = 'none'
        chuangbanren.style.display = 'none'

    })
    menus.children[1].addEventListener('click', function () {
        lichengbei.style.display = 'none'
        jianjie.style.display = 'block'
        chuangbanren.style.display = 'none'
    })
    menus.children[2].addEventListener('click', function () {
        lichengbei.style.display = 'none'
        jianjie.style.display = 'none'
        chuangbanren.style.display = 'block'
    })
})