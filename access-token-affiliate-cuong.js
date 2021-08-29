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

var url = document.URL;
var admin = getUrlParameter('admin');
  var access = getUrlParameter('access');
  var password = 'hoptac';
  var passwordfinal = window.btoa(password);

if(admin){document.body.innerHTML =  '<h3 style="font-size: 45px;">' + 'Đang log với tư cách Quản Trị Viên' + '</h3>';window.location.replace('https://affiliate-cuong.blogspot.com/?access=' + passwordfinal)};
if(access == passwordfinal){delete object["inputaccess"];}else{document.body.innerHTML = '<h3 style="font-size: 45px;">' + 'Sai mật khẩu hoặc đã xảy ra lỗi, liên hệ mình để check lỗi!'+ '<br/>' +' Hoặc Bấm vào ' + '<a href="/" target="_self"><strong>Đây</strong></a>' + ' để nhập lại Mật Khẩu' + '</h3>'};
  var inputaccess = prompt('Nhập Mật Khẩu: ');
if(inputaccess && inputaccess == password){document.body.innerHTML =  '<h3 style="font-size: 45px;">' + 'Thành công! bạn sẽ được chuyển hướng đến trang! Chúc bạn trải nghiệm vui vẻ' + '</h3>';window.location.replace('https://affiliate-cuong.blogspot.com/?access=' + passwordfinal); delete object.["inputaccess"];};

