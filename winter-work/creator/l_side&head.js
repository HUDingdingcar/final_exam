let creator_home = document.querySelector('.creator_home')
let ids=localStorage.getItem('myself_id')
creator_home.onclick = function () {
    location.href = '/web/winter-work/creator/creator-home/creator-home.html'
}
let l_side_write = document.querySelector('.l_side_write')
l_side_write.onclick = function () {
    location.href = '/web/winter-work/creator/write/write.html'
}
let article_charge = document.querySelector('.article_charge')
article_charge.onclick = function () {
    location.href = '/web/winter-work/creator/article_charge/article_charge.html'
}
let column_charge = document.querySelector('.column_charge')
column_charge.onclick = function () {
    location.href = '/web/winter-work/creator/column_charge/column_charge.html'
}
let boil_charge = document.querySelector('.boil_charge')
boil_charge.onclick = function () {
    location.href = '/web/winter-work/creator/boil_charge/boil_charge.html'
}
let content_data = document.querySelector('.content_data')
content_data.onclick = function () {
    location.href = '/web/winter-work/creator/content_data/article_data/article_data.html'
}
let follow_data = document.querySelector('.follow_data')
follow_data.onclick = function () {
    location.href = '/web/winter-work/creator/follow_data/follower_data/follower_data.html'
}
let charge_content = document.querySelector('.charge_content')
let charge_data = document.querySelector('.charge_data')
charge_content.onclick = function () {
    if (charge_content.offsetHeight == 60) {
        charge_content.style.height = '230px'
    } else {
        charge_content.style.height = '60px'
    }
}
charge_data.onclick = function () {
    if (charge_data.offsetHeight == 60) {
        charge_data.style.height = '180px';
    } else {
        charge_data.style.height = '60px';
    }
}
let xitu = document.querySelector('.create-center').querySelector('img')
xitu.onclick = function () {
    location.href = '/web/winter-work/home/home.html'
}
let touxiang = document.querySelector('.touxiang');
let l_side_photo = document.querySelector('.l_side_photo')
let l_side_name = document.querySelector('.l_side_name')
async function ask_for_photo() {
    let obj = {
        user_id: localStorage.getItem('myself_id')
    }
    let res = await fetch('http://localhost:8080/getuserinfo', {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(obj)
    });
    let res2 = await res.json();
    touxiang.src = res2.msg.cover
    l_side_photo.src = res2.msg.cover
    l_side_name.innerHTML = res2.msg.name
}
ask_for_photo()


touxiang.onclick = function () {
    location.href = '/web/winter-work/personal information/person-home/person.html?id='+ids
}
l_side_photo.onclick = function () {
    location.href = '/web/winter-work/personal information/person-home/person.html?id='+ids
}
l_side_name.onclick = function () {
    location.href = '/web/winter-work/personal information/person-home/person.html?id='+ids
}

