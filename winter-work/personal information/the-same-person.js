let header = document.querySelector('.header');
let span1 = document.querySelector('.span1');
let span2 = document.querySelector('.span2');
let edit = document.querySelector('.edit');
let quit = document.querySelector('.quit');
let myids = new URL(location.href).searchParams.get("id")
let fo = document.querySelector('.fo')
if (myids !== localStorage.getItem('myself_id')) {
    edit.style.display = 'none'
    quit.style.display = 'none'
    span1.style.display = 'none'
    span2.style.display = 'none'
    fo.style.display = 'block'
} else {
    edit.style.display = 'block'
    quit.style.display = 'block'
    span1.style.display = 'block'
    span2.style.display = 'block'
    fo.style.display = 'none'
}
async function notice() {
    let obj = {
        user_id: myids
    }
    let res = await fetch('http://localhost:8080/getnotice', {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(obj)
    });
    let res2 = await res.json();
    if (res2.noticeornot == 0) {
        fo.innerHTML = '关注'
    } else {
        fo.innerHTML = '已关注'
    }
}
notice()
span1.onclick = function () {
    location.href = '/web/winter-work/personal information/edit/profile/edit-person.html'
}
span2.onclick = function () {
    location.href = '/web/winter-work/personal information/edit/profile/edit-person.html'
}
edit.onclick = function () {
    location.href = '/web/winter-work/personal information/edit/profile/edit-person.html'
}
quit.onclick = async function () {
    let res = await fetch('http://localhost:8080/sign_out')
    let result = res.json();
    if (result.msg == '退出成功') {
        localStorage.removeItem('phoneoremail')
        localStorage.removeItem('myself_id')
        location.href = '../../login&register/login.html'
    } else {
        alert('退出失败')
    }
}
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let dates = date.getDate();
let hour = date.getHours();
let minite = date.getMinutes();
let second = date.getSeconds();
let time = year + '-' + month + '-' + dates + ' ' + hour + ':' + minite + ':' + second;
fo.onclick = async function () {
    let obj = {
        date: time,
        followed_id: myids
    }
    let res = await fetch('http://localhost:8080/notice', {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(obj)
    });
    let res2 = await res.json();
    let result = res2.msg
    if (result == '关注成功') {
        fo.innerHTML = '已关注'
    } else if (result == '取消关注') {
        fo.innerHTML = '关注'
    }
}

var li = document.querySelector('.nav-hd').getElementsByTagName('li')
li[0].onclick = function () {
    location.href = '/web/winter-work/personal information/person-home/person.html?id=' + myids
}
li[1].onclick = function () {
    location.href = '/web/winter-work/personal information/person-home-article/person-home-article.html?id=' + myids
}
li[2].onclick = function () {
    location.href = '/web/winter-work/personal information/person-home-column/person-home-column.html?id=' + myids
}
li[3].onclick = function () {
    location.href = '/web/winter-work/personal information/person-home-boil/person-home-boil.html?id=' + myids
}
li[4].onclick = function () {
    location.href = '/web/winter-work/personal information/person-home-collect/person-home-collect.html?id=' + myids
}
li[5].onclick = function () {
    location.href = '/web/winter-work/personal information/person-home-follow/person-home-follow.html?id=' + myids
}
li[6].onclick = function () {
    location.href = '/web/winter-work/personal information/person-home-like/person-home-like-article.html?id=' + myids
}



let fol1 = document.querySelector('.fol1')
let fol2 = document.querySelector('.fol2')
let fol1_number = fol1.querySelector('h2')
let fol2_number = fol2.querySelector('h2')

fol1.onclick = function () {
    location.href = '/web/winter-work/personal information/person-home-follow/person-home-follow.html?id=' + myids
}
fol2.onclick = function () {
    location.href = '/web/winter-work/personal information/person-home-follow/person-home-befollowed.html?id=' + myids
}

let photo = document.querySelector('.photo')
let my_name = document.querySelector('.main').querySelector('h1')


async function ask_for_following() {
    let obj = {
        user_id: myids
    }
    let res = await fetch('http://localhost:8080/user/following', {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(obj)
    });
    let res2 = await res.json();
    let result = res2.msg
    fol1_number.innerHTML = result.length
}
ask_for_following()


async function ask_for_follower() {
    let obj = {
        user_id: myids
    }
    let res = await fetch('http://localhost:8080/user/followers', {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(obj)
    });
    let res2 = await res.json();
    let result = res2.msg
    fol2_number.innerHTML = result.length
}
ask_for_follower()


async function ask() {
    let obj = {
        user_id: myids
    }
    let res = await fetch('http://localhost:8080/getuserinfo', {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(obj)
    });
    let res2 = await res.json();
    let result = res2.msg
    photo.src = result.cover
    my_name.innerHTML = result.name
}
ask()