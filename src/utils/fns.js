import qs from 'qs';
import { message } from  'antd';

module.exports = {
  getUserPower(){
    const url = location.href;
    const oldUserPower = localStorage.getItem('userPower');
    let query, userPower;

    if(url.indexOf('#/') > -1 && url.indexOf('userPower') > -1){
      query = url.match( /(userPower=.+)#/ )[1];
      userPower = query.split('=')[1];
    }
    else if(url.indexOf('#/') == -1 && url.indexOf('?') > -1 ){
      query = url.split('?')[1];
      userPower = query.split('=')[1];
    }
    else if(oldUserPower){
      userPower = oldUserPower;
    }
    else{
      message.error('登录状态失效,请重新登录');
      setTimeout(function(){
        location.href = '/login';
      },2000);
    }

    if(userPower !== global_user.power){
      return location.href = '/login'
    }

    localStorage.setItem('userPower', userPower);
    return userPower;
  },

  redirect(url, query){
    var qs = '';
    if(query){
      var arr = []
      for(var key in query){
        arr.push( `${key}=${query[key]||''}` );
      }
      qs = '?' + arr.join('&')
    }
    location.href = `/#/${url}${qs}`;
  },

  formatDateItem(item, startTime, endTime, isSort){
    const dataType = isSort ? 'YYYY-MM-DD' : 'YYYY-MM-DD HH:mm:ss';
    item[startTime] = item.startValue ? item.startValue.format(dataType) : null;
    delete item.startValue;
    item[endTime] = item.endValue ? item.endValue.format(dataType) : null;
    delete item.endValue;
    return item;
  },

  getDate(offset=0){
    var date = new Date();
    var _time = date.getTime() + offset * 24 * 60 * 60 * 1000;
    date.setTime(_time);

    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();

    return `${y}-${m}-${d}`;
  }
}
