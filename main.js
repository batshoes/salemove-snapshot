$('document').ready(function(){

  $('#button').on('click', requestUrl2Png("PBB2128AF2E314E", "SecretToken"));

});

function requestUrl2Png(api, api_secret){

  var userWebsite = getCookie('websiteUrl') 
  var options = {
    url: userWebsite,
    fullpage: true,
    protocol: 'http',
    ttl: 4000000
  }
  var queryString = $.param(options)
  var token = CryptoJS.MD5(queryString + api_secret).toString();
  var callUrl = 'https://api.url2png.com/v6/' + api + '/' + token +'/png/?' + queryString

  $.ajax({url: callUrl,
          success: function(result){
                      console.log("success")
                    },
          xhrFields: {
            withCredentials: true,
            'Allow-Control-Access-Origin': true
          }
  });
}

cookie_name = "websiteUrl";

function saveCookie(){
  if(document.cookie != document.cookie){
    index = document.cookie.indexOf(cookie_name);
  } else { 
    index = -1;
  }

  if (index == -1){
    userWebsite = document.getElementById('cookieValue').value;
    document.cookie = cookie_name + "=" + userWebsite + "; expires=Monday, 04-Apr-2020 05:00:00 GMT";
    var x = document.cookie;
    
  }
}

function getCookie(name) {
  match = document.cookie.match(new RegExp(name + '=([^;]+)'));
  if (match) return match[1];
}
