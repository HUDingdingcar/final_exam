export const getTempDay = async (e) => {
  const res = await fetch(
    "https://v0.yiketianqi.com/api?unescape=1&version=v9&appid=39911761&appsecret=Ue6i5mHe&city=" +
      e
  );
  const { data } = await res.json();
  return [data.map((v) => v.tem1),data.map((v) => v.tem2)];
};
