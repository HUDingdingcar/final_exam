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


let data=document.querySelector('.article_data_detail').querySelectorAll('h1')


async function ask_for_article_data(){
    
    let res = await fetch('http://localhost:8080/creator/data/content/article',{
        method:'post',
        headers:{
            'Content-type':'application/json'
        },
       
    });
    let res2 = await res.json();
    let result=res2
    data[0].innerHTML=result.all_article
    data[1].innerHTML=result.article_view_number
   
    data[2].innerHTML=result.like_number
    data[3].innerHTML=result.comment_number
    data[4].innerHTML=result.collection_number


}
ask_for_article_data()