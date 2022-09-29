Click_header__nav()

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

function type_step(class_text_step, text_step, time_step = 500,delay_step = 0) {
    console.log(class_text_step, text_step, time_step,delay_step);

    let el_text_step = document.querySelector(class_text_step)
    let ar_char_text = get_char_text(text_step)
    console.log(ar_char_text);

    let time = get_time(ar_char_text, time_step)
    console.log('total_time',time[0]);
    console.log('char_time',time[1]);


    
    ar_char_text.forEach((text,index) => {
        console.log(index);
        if (index === 0) {
            setTimeout(() => {
                step(text, el_text_step, time_step)            
            }, index);            
        }else{
            let time_step_total = 0
            for (let i = 0; i < index; i++) {
                time_step_total += time[1][i]
            }
            setTimeout(() => {
                step(text, el_text_step, time_step)            
            }, time_step_total * time_step); 
        }
    });
    setInterval(() => {
        ar_char_text.forEach((text,index) => {
            console.log(index);
            if (index === 0) {
                setTimeout(() => {
                    step(text, el_text_step, time_step)            
                }, index );            
            }else{
                let time_step_total = 0
                for (let i = 0; i < index; i++) {
                    time_step_total += time[1][i]
                }
                setTimeout(() => {
                    step(text, el_text_step, time_step)            
                }, time_step_total * time_step ); 
            }
        });
    }, time[0] + delay_step);
    
    




    // run(ar_char_text[0], el_text_step, time_step)
    //     .then(() => {
    //         console.log('kết thúc 1');
    //         return run (ar_char_text[1], el_text_step, time_step)
    //     })
    //     .then(() => {
    //         console.log('kết thúc 2');
    //     })


    // setInterval(() => {
    //     char_text[0].reduce((char_total,char,index) => {        
    //         let result
    //         if (index === 1) {
    //             setTimeout(() => {
    //                 el_text_step.innerText = char_total

    //             }, 1000 * index);
    //             console.log(char_total,char,index);
    //             result = char_total + char
    //             setTimeout(() => {
    //                 el_text_step.innerText = result

    //             }, 1000 * (index+1));

    //         }else {
    //             result = char_total + char
    //             setTimeout(() => {
    //                 el_text_step.innerText = result

    //             }, 1000 * (index+1));
    //             console.log(result, char,index);

    //         }

    //         return (
    //             result

    //         )
    //     });
    // }, 4000);
}

function get_time(ar_char_text, time_step) {
    let time = []
    // console.log(ar_char_text);
    let time_total = ar_char_text.reduce((element1,element2,index) => {
        if (index === 1) {
            return element1.length + element2.length
        }else{
            return element1 + element2.length
        }
         
    });
    time.push(time_step * time_total)
    ar_char_text.forEach((text,index) => {
        if (index === 0) {
            time.push([text.length])            
        }else {
            time[1].push(text.length)  
        }
    })
    return time
}
function step(char_text, el_text_step, time_step) {
    char_text.reduce((char_total, char, index) => {
        let result
        if (index === 1) {
            setTimeout(() => {
                el_text_step.innerText = char_total
                console.group(index)
                console.log(char_total);
                console.groupEnd()
            }, time_step * index);

            result = char_total + char

            setTimeout(() => {
                el_text_step.innerText = result
                console.group(index)
                console.log(result);
                console.groupEnd()
            }, time_step * (index + 1));

        } else {
            result = char_total + char
            setTimeout(() => {
                el_text_step.innerText = result
                console.group(index)
                console.log(result);
                console.groupEnd()
            }, time_step * (index + 1));

        }

        return (
            result

        )
    });
    return char_text.length * time_step
}
function get_char_text(text_step) {
    let char_text = []
    if (Array.isArray(text_step)) {
        text_step.forEach(text => {
            char_text.push(text.split(''))
            // console.log(char_text);
        });
    }
    return char_text
}

function run(char_text, el_text_step, time_step) {
    return new Promise((resolve, reject) => {
        let time = step(char_text, el_text_step, time_step)
        setTimeout(() => {
            resolve()
        }, time);
    })
}