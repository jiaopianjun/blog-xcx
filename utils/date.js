const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const getNowTime = (type) => {
  var sign2 = ":";
  var now = new Date(),
      year = now.getFullYear(),
      month = now.getMonth() + 1,
      day = now.getDate(),
      week = now.getDay(),
      weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
      today = '',
      todayweek = '',
      years = 0;
  var hour = now.getHours(); // 时
  var minutes = now.getMinutes(); // 分
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (day >= 0 && day <= 9) {
    day = "0" + day;
  }
  if (hour >= 0 && hour <= 9) {
    hour = "0" + hour;
  }
  if (minutes >= 0 && minutes <= 9) {
    minutes = "0" + minutes;
  }
  // if (month < 10) month = '0' + month
  if (day < 10) day = day
  if (type === 'years') {
    return year
  } else if (type === 'week') {
    return weekday[week]
  } else if (type === 'notime') {
    return year + '年' + month + '月' + day + '日'
  } else if (type === 'all') {
    return year + '年' + month + '月' + day + '日' + " " + hour + sign2 + minutes
  } else if (type == 'hm') {
    return hour + ':' + minutes
  }
}



const headimgHD = (imageUrl) => {
  imageUrl = imageUrl.split('/');
  if (imageUrl[imageUrl.length - 1] && (imageUrl[imageUrl.length - 1] == 46 || imageUrl[imageUrl.length - 1] == 64 || imageUrl[imageUrl.length - 1] == 96 || imageUrl[imageUrl.length - 1] == 132)) {
    imageUrl[imageUrl.length - 1] = 0;
  }

  imageUrl = imageUrl.join('/');   //重新拼接为字符串
  return imageUrl;
}

const getTempFilePath = (imgUrl) => {
  const picPath = ''
  wx.cloud.downloadFile({
    url: imgUrl,
    success: function (sres) {
      console.log(sres.tempFilePath);
      if (sres.tempFilePath) {
        picPath = sres.tempFilePath
        return picPath
      }
    }, fail: function (fres) {
    }
  })
}

module.exports = {
  formatTime: formatTime,
  getNowTime: getNowTime,
  headimgHD: headimgHD,
  getTempFilePath: getTempFilePath
}
