let article_data=document.querySelector('.r-side').querySelectorAll('div')[0].querySelectorAll('span')[0]
let column_data=document.querySelector('.r-side').querySelectorAll('div')[0].querySelectorAll('span')[1]
let boil_data=document.querySelector('.r-side').querySelectorAll('div')[0].querySelectorAll('span')[2]

article_data.onclick=function(){
    location.href='/web/winter-work/creator/content_data/article_data/article_data.html'
}
column_data.onclick=function(){
    location.href='/web/winter-work/creator/content_data/column_data/column_data.html'
}
boil_data.onclick=function(){
    location.href='/web/winter-work/creator/content_data/boil_data/boil_data.html'
}

let data=document.querySelector('.column_data_detail').querySelector('h1')


async function ask_for_column_data(){
    
    let res = await fetch('http://localhost:8080/creator/data/content/colum',{
        method:'post',
        headers:{
            'Content-type':'application/json'
        },
       
    });
    let res2 = await res.json();
    let result=res2.msg
    data.innerHTML=result.column_number

}
ask_for_column_data()