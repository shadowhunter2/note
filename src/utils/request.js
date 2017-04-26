const Ajax = require("robe-ajax");

function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return unescape(arr[2]);
  else
    return null;
}

function csrfSafeMethod(method) { // these HTTP methods do not require CSRF protection
  return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

export default function request(url, options={}) {
  var csrftoken = getCookie('csrfToken');
  Ajax.ajaxSetup({
    beforeSend: function (xhr, settings) {
      if (!csrfSafeMethod(settings.type)
        && !this.crossDomain) { xhr.setRequestHeader('x-csrf-token', csrftoken); }
    },
  });
  
  var _data = options.data || {};
  return Ajax.ajax({
    url: url,
    method: options.method || 'get',
    data: _data,
    dataType: 'JSON'
  }).done((data) => {
    return data;
  })
}
