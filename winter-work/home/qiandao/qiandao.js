let span = document.querySelector('span')
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let dates = date.getDate();
let hour = date.getHours();
let minite = date.getMinutes();
let second = date.getSeconds();
let time = year + '-' + month + '-' + dates + ' ' + hour + ':' + minite + ':' + second;
async function ask_for_days() {
    let obj = {
        phoneoremail: localStorage.getItem('phoneoremail'),
        date:time
    }
    let res = await fetch('http://localhost:8080/signin', {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    let result =await res.json();
    let days = result.days;
    span.innerHTML = '您已累积签到' + days + '天'
}
ask_for_days()
let button=document.querySelector('button')
button.onclick=function(){
    location.href='/web/winter-work/home/home.html'
}