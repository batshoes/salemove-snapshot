$('document').ready(function(){

  $('#leButton').on('click', saveCookie);
  $('#button').on('click', requestUrl2Png());

});

function requestUrl2Png(){
  var api = "PBB2128AF2E314E"
      api_secret = "secretKey"

      userWebsite = getCookie(cookieName) 
      options = {
          url: userWebsite,
          fullpage: true,
          protocol: 'http',
          ttl: 4000000
        }
      queryString = $.param(options)
      token = CryptoJS.MD5(queryString + api_secret).toString();
      callUrl = 'https://api.url2png.com/v6/' + api + '/' + token +'/png/?' + queryString

  $('#image').prepend('<img style="display: inline-block; width: 90%; margin: 0 auto" src="' + callUrl + '" />')
}

cookieName = "websiteUrl";

function saveCookie(){
  if(document.cookie != document.cookie){
    index = document.cookie.indexOf(cookieName);
  } else {
    index = -1;
  }

  if (index == -1){
    userWebsite = document.getElementById('cookieValue').value;
    document.cookie = cookieName + "=" + userWebsite + "; expires=Monday, 04-Apr-2020 05:00:00 GMT";
  }
}

function getCookie(name) {
  match = document.cookie.match(new RegExp(name + '=([^;]+)'));
  if (match) return match[1];
}
