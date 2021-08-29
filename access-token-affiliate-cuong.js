var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
 
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
 
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

  var access = getUrlParameter('access');
  var password = 'hoptacphattrien';
  var passwordfinal = window.btoa(password);
if(access == passwordfinal){delete object["inputaccess"];}else{document.body.innerHTML = '<h3 style="font-size: 45px;">' + 'Sai mật khẩu hoặc đã xảy ra lỗi, liên hệ mình để check lỗi!'+ '<br/>' +' Hoặc Bấm vào ' + '<a href="/" target="_self"><strong>Đây</strong></a>' + ' để nhập lại Mật Khẩu' + '</h3>'}
  var inputaccess = prompt('Nhập Mật Khẩu: ');
if(inputaccess && inputaccess == password){window.location.replace('https://affiliate-cuong.blogspot.com/?access=' + passwordfinal)}

