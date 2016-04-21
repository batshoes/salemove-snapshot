$('document').ready(function(){

  $('#leButton').on('click', saveCookie);
  $('#button').on('click', requestUrlBox());

});

function requestUrlBox(){
  var api = "4c1bea44-a9f8-48bd-b61c-a5e5ebb201ff"
      api_secret = "Secret"

      userWebsite = getCookie(cookieName) 
      options = {
          url: userWebsite,
          fullpage: true,
          delay: 100,
          ttl: 40000
        }
      queryString = $.param(options)
      token = CryptoJS.HmacSHA1(queryString, api_secret).toString();
      callUrl = 'https://api.urlbox.io/v1/' + api + '/' + token +'/png/?' + queryString
      console.log(callUrl)
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
