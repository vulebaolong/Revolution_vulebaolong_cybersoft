Click_header__nav()
food_fade(5000)
function Click_header__nav(params) {
    var header = document.querySelector('header')

    var header__nav = document.querySelector('.header__nav')
    header__nav.onclick = (e) => {
        show(header, 'logo__hide', 'logo__show')
    }

    var navTopup__control = document.querySelector('.navTopup__control')
    navTopup__control.onclick = () => {
        hide(header, 'logo__hide', 'logo__show')
        
    }
}
function show(header, logo__hide, logo__show) {
    if (header.classList.contains(logo__hide)) {
        header.classList.remove(logo__hide)
        header.classList.add(logo__show)

    }
}
function hide(header, logo__hide, logo__show) {
    if (header.classList.contains(logo__show)) {
        header.classList.remove(logo__show)
        header.classList.add(logo__hide)
    }
}

// text type
const run = async (element, arr_text, time_char = 1000, time_text = 1000) => {
    for (; true;) {
        await new Promise((resolve, reject) => {
            delayArr(element, arr_text, time_char, time_text)
                .then((i) => {
                    resolve(console.log('======> xong 1 chu kỳ'))
                })

        })

    }
}
const delayArr = async (element, arr_text, time_char = 1000, time_text = 1000) => {
    let el = document.querySelector(element)
    // let time = get_time(arr_text, time_char, time_text)
    // console.log(time);
    let i = 1
    for (const item of arr_text) {
        await new Promise(async (resolve, reject) => {

            addArr(el, item.split(''), time_char)
                .then((result) => {
                    // console.log(result);
                    // console.log('trả lại result: ', result)
                    // console.log(`bắt đầu đợi ${time_text}s`)
                    setTimeout(() => {

                        resolve(i++)
                        // console.log(`đã đợi xong ${time_text}s`)
                    }, time_text);
                }
                )
            // console.log('length', arr_text.length);
            // console.log('=======>',i++, item);
        })

    }

}
const addArr = async (el, arrChar, time_char) => {
    return new Promise((resolve, reject) => {

        addChar(el, arrChar, time_char).then((e) => {
            resolve(e)
        })

    })
}
const addChar = async (el, arrChar, time_char) => {
    // console.log(arrChar);
    let addChar = []
    await new Promise((resolve, reject) => {
        // let time = time_char


        arrChar.forEach((char, index) => {

            if (index === 0) {
                setTimeout(() => {
                    addChar.push(char)
                    // console.log(`${index}=>thêm vào span: `, char, addChar, el,);
                    el.innerText = [...addChar]
                }, time_char * (index + 1));
            } else {
                setTimeout(() => {
                    addChar.push(char)
                    el.innerText = addChar.reduce((totalChar, currenChar) => totalChar + currenChar)
                    // console.log(`${index}=>thêm vào span:2 `, char, addChar, el, addChar);
                }, time_char * (index + 1));
            }


        });



        time_char = time_char * (arrChar.length + 1)
        // console.log(time_char);
        setTimeout(() => {
            // console.log('done: ', arrChar);
            resolve(arrChar)
        }, time_char);
    })
}
function get_time(ar_char_text, time_char, time_text) {
    let time = []
    // console.log(ar_char_text);
    let el_total = ar_char_text.reduce((element1, element2, index) => {
        if (index === 1) {
            return element1.length + element2.length
        } else {
            return element1 + element2.length
        }

    });
    time.push((time_char * (el_total + (ar_char_text.length - 1))) + (time_text * (ar_char_text.length - 1)))
   
    return time
}

// FOOT FADE
async function food_fade(time) {
    const footer__text = document.querySelectorAll(".footer__text")
    for (;true;) {
        for (const element of footer__text) {
            element.classList.add('footer__show')
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    
                    resolve()
                    element.classList.remove('footer__show')
    
                }, time);
            })
        }
        
    }
    
}

console.log(document.querySelector('body'));
const body = document.querySelector('body')
const header = document.querySelector('header')
body.onscroll = (e) => {
    console.log(window.scrollY);
    if (window.scrollY === 0) {
        header.classList.add('header__background')
    }else {
        header.classList.remove('header__background')
    }
}