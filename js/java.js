Click_header__nav()

function Click_header__nav(params) {
    var header = document.querySelector('header')

    var header__nav = document.querySelector('.header__nav')
    header__nav.onclick = (e) => {
        show(header,'logo__hide','logo__show')
    }

    var navTopup__control = document.querySelector('.navTopup__control')
    navTopup__control.onclick = () => {
        hide(header,'logo__hide','logo__show')
    }
}


function show(header,logo__hide,logo__show) {
    if ( header.classList.contains(logo__hide) ) {
        header.classList.remove(logo__hide)
        header.classList.add(logo__show)

    }
}

function hide(header,logo__hide,logo__show) {
    if (header.classList.contains(logo__show) ){
        header.classList.remove(logo__show)
        header.classList.add(logo__hide)       
    }
}