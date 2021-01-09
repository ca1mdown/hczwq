window.addEventListener('load', function () {
    var video1 = document.querySelector('#video1')
    var video_box1 = document.querySelector('.video-box')
    var btn_x = document.querySelector('.btn-x')
    // var header = document.querySelector('.header')
    // var body = document.querySelector('body')

    video1.addEventListener('click', function () {
        video_box1.style.display = 'block'
        // btn_x.style.display = 'block'
    })

    btn_x.addEventListener('click', function () {
        if (video_box1.style.display != 'none') {
            video_box1.style.display = 'none'
        }
    })

    // video_box1.addEventListener('click', function () {
    //     video_box1.style.display = 'none'
    // })
})