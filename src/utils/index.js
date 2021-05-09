export function getSizeImage(imgUrl, size) {
  return `${imgUrl}?param=${size}x${size}`;
}

export function getSizeImageX(imgUrl, width, height) {
  return `${imgUrl}?param=${width}y${height}`;
}

export function getPlayUrl(id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}

export function formatDate(time, fmt) {
  let date = new Date(time);

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
};


export function formatMonthDay(time) {
  return formatDate(time, "MM月dd日");
}

export function formatMinuteSecond(time) {
  return formatDate(time, "mm:ss");
}


const Exp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;

export function parseLyric(lyric) {
    const lyricArray = lyric.split("\n");
    const lyrics = [];
    for(let line of lyricArray) {
        if(line){
            const res = Exp.exec(line);
            if(!res) continue;
            const mm = res[1] * 60 * 1000;
            const ms = res[2] * 1000;
            const ss = res[3].length === 3? res[3]*1 : res[3]*10;

            const time = mm + ms + ss;
            
            const content = line.replace(Exp,"")
            const lineObj = {time, content};

            lyrics.push(lineObj);

        }else{

        }
    }
    return lyrics;
}