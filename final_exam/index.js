let position = document.getElementById("position");
let temp = document.getElementsByClassName("temp")[0];
let states = document.getElementsByClassName("states")[0];
let desc = document.getElementsByClassName("desc")[0];
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
  qing: "/images/day/qing.png",
  yun: "/images/day/yun.png",
  yu: "/images/day/yu.png",
  yin: "/images/day/yin.png",
};

async function ask_this_day() {
  let res = await fetch(
    "https://v0.yiketianqi.com/free/day/?appid=45966466&appsecret=C3BCYCCK&city=重庆&unescape=1"
  );
  let res2 = await res.json();
  position.innerHTML = res2.city;
  temp.innerHTML = res2.tem + "°";
  states.innerHTML = res2.wea;
  desc.innerHTML = "湿度" + res2.humidity;
  today_tem.innerHTML = res2.tem_day + "/" + res2.tem_night;
}
ask_this_day();

async function ask_seven_day() {
  let res = await fetch(
    "https://v0.yiketianqi.com/free/week/?appid=45966466&appsecret=C3BCYCCK&city=重庆&unescape=1"
  );
  let res2 = await res.json();
  today_wea.innerHTML = res2.data[0].wea;
  today_img.src = images[res2.data[0].wea_img];
  tomorrow_tem.innerHTML = res2.data[1].tem_day + "/" + res2.data[1].tem_night;
  tomorrow_wea.innerHTML = res2.data[1].wea;
  tomorrow_img.src = images[res2.data[1].wea_img];

  for (let i = 0; i < res2.data.length; i++) {
    let li = document.createElement("li");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let img = document.createElement("img");

    document
      .getElementsByClassName("top")[0]
      .querySelector("ul")
      .appendChild(li);
    li.appendChild(div1);
    li.appendChild(div2);
    li.appendChild(div3);
    li.appendChild(img);

    
  }
}
ask_seven_day();

async function ask_for_hours() {
  let res = await fetch(
    "https://v0.yiketianqi.com/api/worldchina?appid=45966466&appsecret=C3BCYCCK&city=重庆"
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
ask_for_hours();
