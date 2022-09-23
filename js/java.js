Click_header__nav()

function Click_header__nav(params) {
    var header__nav = document.querySelector('.header__nav')
    var logo = document.querySelector('.logo')
    // var logo_img2 = document.querySelector('.logo_img2')
    var header__navTopup = document.querySelector('.header__navTopup')
    header__nav.onclick = (e) => {
        showhide(logo,header__navTopup)
    }

    var navTopup__control = document.querySelector('.navTopup__control')
    navTopup__control.onclick = () => {
        showhide(logo,header__navTopup)
    }
}


function showhide(logo,header__navTopup) {
    if ( logo.classList.contains('logo__hide') ) {
        logo.classList.remove('logo__hide')
        logo.classList.add('logo__show')

    }else {
        logo.classList.remove('logo__show')
        logo.classList.add('logo__hide')       
    }

    if (header__navTopup.classList.contains('header__navTopupShow')) {
        header__navTopup.classList.remove('header__navTopupShow')
        header__navTopup.classList.add('header__navTopupHide')
    }else {
        header__navTopup.classList.remove('header__navTopupHide')
        header__navTopup.classList.add('header__navTopupShow')
    }
}