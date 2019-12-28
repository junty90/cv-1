let demo = document.querySelector('#demo')
let style = document.querySelector('style')
let string = `
/*
你好，我是一名前端新人，
接下来我演示一下学习成果，
首先准备一张画布，
*/
#canvas {
    border: 1px solid red;
    width: 50vw;
    height: 50vw;
    background-color: #fff;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
}
/*
接下来我把画布变成一张八卦图
注意看好了
首先，把画布变成一个圆
*/
#canvas {
    border-radius: 50%;
    border: none;
}
/*
八卦一黑一白
*/
#canvas {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
加上黑白两仪
*/
#canvas::before {
    content: '';
    display: block;
    width: 25vw;
    height: 25vw;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);
}

#canvas::after {
    content: '';
    display: block;
    width: 25vw;
    height: 25vw;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%);
}
/*
代码结束，欢迎观看。
*/
`
let string2 = ''

let n = 0
let step = () => {
    setTimeout(() => {
        if (string[n] === '\n') {
            string2 += '<br>'
        } else if (string[n] === ' ') {
            string2 += '&nbsp;'
        } else {
            string2 += string[n]
        }
        demo.innerHTML = string2
        style.innerHTML = string.substring(0, n)
        window.scrollTo(0,9999)
        n += 1
        if (n < string.length) {
            step()
        }
    }, 35)
}

step()

