var now=new Date;function createtime(){var t=new Date("08/03/2023 00:00:00");now.setTime(now.getTime()+250);var e=(now-t)/1e3/60/60/24,a=Math.floor(e),n=(now-t)/1e3/60/60-24*a,r=Math.floor(n);1==String(r).length&&(r="0"+r);var s=(now-t)/1e3/60-1440*a-60*r,i=Math.floor(s);1==String(i).length&&(i="0"+i);var o=(now-t)/1e3-86400*a-3600*r-60*i,l=Math.round(o);1==String(l).length&&(l="0"+l);let g="";g=r<18&&r>=9?`<img class='boardsign' src='https://cdnjson.com/images/2023/08/05/930a995545c77dea.gif' title='~'><span class='textTip'> <br> 本站居然运行了 ${a} 天</span><span id='runtime'> ${r} 小时 ${i} 分 ${l} 秒 </span> <i class='fas fa-heartbeat' style='color:red'></i>`:`<img class='boardsign' src='https://cdnjson.com/images/2023/08/05/930a995545c77dea.gif' title='~'><span class='textTip'> <br> 本站居然运行了 ${a} 天</span><span id='runtime'> ${r} 小时 ${i} 分 ${l} 秒 </span> <i class='fas fa-heartbeat' style='color:red'></i>`,document.getElementById("workboard")&&(document.getElementById("workboard").innerHTML=g)}setInterval((()=>{createtime()}),250);

var now = new Date();
function createtime() {
  var grt = new Date("08/03/2023 00:00:00");
  now.setTime(now.getTime() + 250);
  var days = (now - grt) / 1e3 / 60 / 60 / 24,
    dnum = Math.floor(days),
    hours = (now - grt) / 1e3 / 60 / 60 - 24 * dnum,
    hnum = Math.floor(hours);
  1 == String(hnum).length && (hnum = "0" + hnum);
  var minutes = (now - grt) / 1e3 / 60 - 1440 * dnum - 60 * hnum,
    mnum = Math.floor(minutes);
  1 == String(mnum).length && (mnum = "0" + mnum);
  var seconds = (now - grt) / 1e3 - 86400 * dnum - 3600 * hnum - 60 * mnum,
    snum = Math.round(seconds);
  1 == String(snum).length && (snum = "0" + snum);
  let currentTimeHtml = "";
  (currentTimeHtml =
    hnum < 18 && hnum >= 9
      ? `<img class='boardsign' src='https://cdnjson.com/images/2023/08/05/930a995545c77dea.gif' title='~'><span class='textTip'> <br> 本站居然运行了 ${dnum} 天</span><span id='runtime'> ${hnum} 小时 ${mnum} 分 ${snum} 秒 </span> <i class='fas fa-heartbeat' style='color:red'></i>`
      : `<img class='boardsign' src='https://cdnjson.com/images/2023/08/05/930a995545c77dea.gif' title='下~'><span class='textTip'> <br> 本站居然运行了 ${dnum} 天</span><span id='runtime'> ${hnum} 小时 ${mnum} 分 ${snum} 秒 </span> <i class='fas fa-heartbeat' style='color:red'></i>`),
    document.getElementById("workboard") && (document.getElementById("workboard").innerHTML = currentTimeHtml);
}
setInterval(() => {
  createtime();
}, 250);