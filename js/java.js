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



const delayArr = async (element,arr_text, time_char = 1000, time_text = 1000, ) => {  
    let el = document.querySelector(element)
    for (const item of arr_text) {
        await new Promise(async(resolve, reject) => {            
            // console.log(11111, item);
            addArr(el,item.split(''), time_char)
                .then((result) => {
                    console.log(result);
                    console.log('trả lại result: ', result)
                    console.log(`bắt đầu đợi ${time_text}s`)
                    setTimeout(() => {
                        
                        resolve()
                        console.log(`đã đợi xong ${time_text}s`)
                    }, time_text);
                    }
                )    
        })
    }
}

let arr = ['abcaf','xyzabcfafa','tcgsdhg','kkk']

const addArr = async (el,arrChar, time_char) => {   
    return new Promise((resolve, reject) => {
        
        addChar(el ,arrChar, time_char).then((e) => {
            resolve(e)
        })
        
    })
}

const addChar = async(el,arrChar, time_char) => {
    console.log(arrChar);
    let addChar = [ ]
    await new Promise((resolve, reject) => {
        // let time = time_char
        

        arrChar.forEach((char,index) => {
            
            if (index === 0) {
                setTimeout(() => {
                    addChar.push(char)
                    console.log(`${index}=>thêm vào span: `, char, addChar, el,);
                    el.innerText = [...addChar]
                }, time_char * (index + 1));
            }else{
                setTimeout(() => {
                    addChar.push(char)
                    el.innerText = addChar.reduce((totalChar,currenChar) => totalChar + currenChar)
                    console.log(`${index}=>thêm vào span:2 `, char, addChar, el, addChar);
                }, time_char * (index + 1));
            }
            
            
        });

        
        
        time_char = time_char * (arrChar.length + 1)
        console.log(time_char);
        setTimeout(() => {        
            console.log('done: ',arrChar);    
            resolve(arrChar)
        }, time_char);
    })       
}




// setInterval(() => {
//     console.log('=>');
// }, 1000);












// function type_step(class_text_step, text_step, time_step = 500,delay_step = 0) {
//     console.log(class_text_step, text_step, time_step,delay_step);

//     let el_text_step = document.querySelector(class_text_step)
//     let ar_char_text = get_char_text(text_step)
//     console.log(ar_char_text);

//     let time = get_time(ar_char_text, time_step)
//     console.log('total_time',time[0]);
//     console.log('char_time',time[1]);


    
//     ar_char_text.forEach((text,index) => {
//         console.log(index);
//         if (index === 0) {
//             setTimeout(() => {
//                 step(text, el_text_step, time_step)            
//             }, index);            
//         }else{
//             let time_step_total = 0
//             for (let i = 0; i < index; i++) {
//                 time_step_total += time[1][i]
//             }
//             setTimeout(() => {
//                 step(text, el_text_step, time_step)            
//             }, time_step_total * time_step); 
//         }
//     });
//     setInterval(() => {
//         ar_char_text.forEach((text,index) => {
//             console.log(index);
//             if (index === 0) {
//                 setTimeout(() => {
//                     step(text, el_text_step, time_step)            
//                 }, index );            
//             }else{
//                 let time_step_total = 0
//                 for (let i = 0; i < index; i++) {
//                     time_step_total += time[1][i]
//                 }
//                 setTimeout(() => {
//                     step(text, el_text_step, time_step)            
//                 }, time_step_total * time_step ); 
//             }
//         });
//     }, time[0] + delay_step);
    
    




//     // run(ar_char_text[0], el_text_step, time_step)
//     //     .then(() => {
//     //         console.log('kết thúc 1');
//     //         return run (ar_char_text[1], el_text_step, time_step)
//     //     })
//     //     .then(() => {
//     //         console.log('kết thúc 2');
//     //     })


//     // setInterval(() => {
//     //     char_text[0].reduce((char_total,char,index) => {        
//     //         let result
//     //         if (index === 1) {
//     //             setTimeout(() => {
//     //                 el_text_step.innerText = char_total

//     //             }, 1000 * index);
//     //             console.log(char_total,char,index);
//     //             result = char_total + char
//     //             setTimeout(() => {
//     //                 el_text_step.innerText = result

//     //             }, 1000 * (index+1));

//     //         }else {
//     //             result = char_total + char
//     //             setTimeout(() => {
//     //                 el_text_step.innerText = result

//     //             }, 1000 * (index+1));
//     //             console.log(result, char,index);

//     //         }

//     //         return (
//     //             result

//     //         )
//     //     });
//     // }, 4000);
// }
// function get_time(ar_char_text, time_step) {
//     let time = []
//     // console.log(ar_char_text);
//     let time_total = ar_char_text.reduce((element1,element2,index) => {
//         if (index === 1) {
//             return element1.length + element2.length
//         }else{
//             return element1 + element2.length
//         }
         
//     });
//     time.push(time_step * time_total)
//     ar_char_text.forEach((text,index) => {
//         if (index === 0) {
//             time.push([text.length])            
//         }else {
//             time[1].push(text.length)  
//         }
//     })
//     return time
// }
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
// function get_char_text(text_step) {
//     let char_text = []
//     if (Array.isArray(text_step)) {
//         text_step.forEach(text => {
//             char_text.push(text.split(''))
//             // console.log(char_text);
//         });
//     }
//     return char_text
// }
// function run(char_text, el_text_step, time_step) {
//     return new Promise((resolve, reject) => {
//         let time = step(char_text, el_text_step, time_step)
//         setTimeout(() => {
//             resolve()
//         }, time);
//     })
// }