import qing_png from "/images/day/qing.png"
import yu_png from "/images/day/yu.png"
import yin_png from "/images/day/yin.png"
import yun_png from "/images/day/yun.png"
import xue_png from "/images/day/yu.png"
import lei_png from "/images/day/yu.png"
import shachen_png from "/images/day/yu.png"
import wu_png from "/images/day/yu.png"
import bingbao_png from "/images/day/yu.png"

import kongtiao_png from  "/images/bus.png"
import lukuang_png from  "/images/car.png"
import fenghan_png from  "/images/cold.png"
import chuanyi_png from  "/images/cloth.png"
import liangshai_png from  "/images/liangshai.png"
import fengzheng_png from  "/images/air.png"
import chenlian_png from  "/images/chenlian.png"
import huazhuang_png from   "/images/kouhong.png"
import diaoyu_png from  "/images/diaoyu.png"
import yuehui_png from  "/images/icon_05.png"
import yundong_png from  "/images/sports.png"
import ganmao_png from  "/images/pill.png"
import lvyou_png from "/images/lvyou.png"
import xiche_png from  "/images/washcar.png"
import yusan_png from "/images/umbrella.png"
import zhongshu_png from   "/images/sun.png"

let position = document.getElementById("position");
let temp = document.getElementsByClassName("temp")[0];
let states = document.getElementsByClassName("states")[0];
let desc = document.getElementsByClassName("desc")[0];
let suggest = document.getElementById("suggest");
let suggest_details = document.getElementById("suggest_details");
let search = document.getElementById("search").querySelector("input");
let today_tem = document
  .getElementsByClassName("today")[0]
  .querySelectorAll("span")[1];
let today_wea = document
  .getElementsByClassName("today")[0]
  .querySelectorAll("span")[2];
let today_img = document
  .getElementsByClassName("today")[0]
  .querySelector("img");
let tomorrow_tem = document
  .getElementsByClassName("tomorrow")[0]
  .querySelectorAll("span")[1];
let tomorrow_wea = document
  .getElementsByClassName("tomorrow")[0]
  .querySelectorAll("span")[2];
let tomorrow_img = document
  .getElementsByClassName("tomorrow")[0]
  .querySelector("img");
let weather_hour = document.getElementById("weather_hour");

const images = {
  qing: qing_png,
  yun: yun_png,
  yu:yu_png,
  yin: yin_png,
  xue: xue_png,
  lei: lei_png,
  shachen:shachen_png,
  wu: wu_png,
  bingbao: bingbao_png,
};

suggest_details.addEventListener("wheel", (e) => e.preventDefault());

async function ask_this_day(e) {
  let res = await fetch(
    "https://v0.yiketianqi.com/free/day/?appid=39911761&appsecret=Ue6i5mHe&unescape=1&city=" +
      e
  );
  let res2 = await res.json();
  position.innerHTML = res2.city;
  temp.innerHTML = res2.tem + "°";
  states.innerHTML = res2.wea;
  desc.innerHTML = "湿度" + res2.humidity;
  today_tem.innerHTML = res2.tem_day + "/" + res2.tem_night;
}
ask_this_day("重庆");

async function ask_seven_day(e) {
  let res = await fetch(
    "https://v0.yiketianqi.com/free/week/?appid=39911761&appsecret=Ue6i5mHe&unescape=1&city=" +
      e
  );
  let res2 = await res.json();
  today_wea.innerHTML = res2.data[0].wea;
  today_img.src = images[res2.data[0].wea_img];
  tomorrow_tem.innerHTML = res2.data[1].tem_day + "/" + res2.data[1].tem_night;
  tomorrow_wea.innerHTML = res2.data[1].wea;
  tomorrow_img.src = images[res2.data[1].wea_img];
}
ask_seven_day("重庆");

async function ask_for_hours(e) {
  let res = await fetch(
    "https://v0.yiketianqi.com/api/worldchina?appid=39911761&appsecret=Ue6i5mHe&city=" +
      e
  );
  let res2 = await res.json();
  for (let i = 0; i < res2.hours.length; i++) {
    let div = document.createElement("div");
    let span1 = document.createElement("span");
    let span2 = document.createElement("span");
    let img = document.createElement("img");
    weather_hour.appendChild(div);
    div.appendChild(span1);
    div.appendChild(img);
    div.appendChild(span2);
    span1.innerHTML = res2.hours[i].time;
    img.src = images[res2.hours[i].wea_img];
    span2.innerHTML = res2.hours[i].tem + "°";
  }
}
ask_for_hours("重庆");

async function ask_for_seven(e) {
  let res = await fetch(
    "https://v0.yiketianqi.com/api?unescape=1&version=v9&appid=39911761&appsecret=Ue6i5mHe&city=" +
      e
  );
  let res2 = await res.json();
  for (let i = 0; i < res2.data.length; i++) {
    let li1 = document.createElement("li");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let img = document.createElement("img");
    document
      .getElementsByClassName("top")[0]
      .querySelector("ul")
      .appendChild(li1);
    li1.appendChild(div1);
    li1.appendChild(div2);
    li1.appendChild(div3);
    li1.appendChild(img);
    if (i == 0) {
      div1.innerHTML = "今天";
    } else if (i == 1) {
      div1.innerHTML = "明天";
    } else {
      div1.innerHTML = res2.data[i].week;
    }
    let date = res2.data[i].date.split("-");
    let month = date[1];
    let day = date[2];
    let time = month + "/" + day;
    div2.innerHTML = time;
    div3.innerHTML = res2.data[i].wea_day;
    img.src = images[res2.data[i].wea_day_img];
   
  }
  for (let i = 0; i < res2.data.length; i++) {
    let li2 = document.createElement("li");
    let img = document.createElement("img");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    document
      .getElementsByClassName("bottom")[0]
      .querySelector("ul")
      .appendChild(li2);
    li2.appendChild(img);
    li2.appendChild(div1);
    li2.appendChild(div2);
    li2.appendChild(div3);
    img.src = images[res2.data[i].wea_night_img];
    div1.innerHTML = res2.data[i].wea_night;
    div2.innerHTML = res2.data[i].win[0];
    div3.innerHTML = res2.data[i].win_speed.split("<")[1];
    
  }
}
ask_for_seven("重庆");

const suggest_name = {
  kongtiao: kongtiao_png,
  lukuang: lukuang_png,
  fenghan: fenghan_png,
  chuanyi:chuanyi_png,
  liangshai: liangshai_png,
  fengzheng: fengzheng_png,
  chenlian:chenlian_png,
  huazhuang: huazhuang_png,
  diaoyu: diaoyu_png,
  yuehui: yuehui_png,
  yundong: yundong_png,
  ganmao: ganmao_png,
  lvyou: lvyou_png,
  xiche: xiche_png,
  yusan: yusan_png,
  zhongshu: zhongshu_png,
};

async function ask_for_daily(e) {
  let res = await fetch(
    "https://www.tianqiapi.com/life/lifepro?appid=39911761&appsecret=Ue6i5mHe&city=" +
      e
  );
  let res2 = await res.json();
  function my_function(e) {
    let div = document.createElement("div");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let img = document.createElement("img");
    suggest.appendChild(div);
    div.appendChild(img);
    div.appendChild(div1);
    div.appendChild(div2);
    img.src = suggest_name[e];
    div1.innerHTML = res2.data[e]["name"];
    div2.innerHTML = res2.data[e]["level"];

    div.onclick = function () {
      suggest_details.style.display = "block";
      suggest_details.querySelector("div").style.display = "block";
      suggest_details.querySelector("span").innerHTML = res2.data[e]["desc"];
    };
    suggest_details.querySelector("button").onclick = function () {
      suggest_details.style.display = "none";
    };
  }
  my_function("kongtiao");
  my_function("lukuang");
  my_function("fenghan");
  my_function("chuanyi");
  my_function("liangshai");
  my_function("fengzheng");
  my_function("chenlian");
  my_function("huazhuang");
  my_function("diaoyu");
  my_function("yuehui");
  my_function("yundong");
  my_function("ganmao");
  my_function("lvyou");
  my_function("xiche");
  my_function("yusan");
  my_function("zhongshu");
}
ask_for_daily("重庆");

position.onclick = function () {
  document.getElementById("search").style.display = "block";
  search.style.display = "block";
};
search.addEventListener("keydown", async function (e) {
  if (e.keyCode == 13) {
    if (e.target.tagName === "INPUT" && e.target.type === "text") {
      e.preventDefault();
      weather_hour.innerHTML=''
      document
      .getElementsByClassName("top")[0]
      .querySelector("ul").innerHTML=''
      document
      .getElementsByClassName("bottom")[0]
      .querySelector("ul").innerHTML=''
      suggest.innerHTML=''
      ask_seven_day(search.value);
      ask_for_hours(search.value);
      ask_for_daily(search.value);
      ask_this_day(search.value);
      ask_for_seven(search.value);
      document.getElementById("search").style.display = "none";
      search.style.display = "none";
    }
  }
});
