cookie_name = "websiteUrl";
var userWebsite;

function saveCookie(){
  if(document.cookie != document.cookie){
    index = document.cookie.indexOf(cookie_name);
  } else { 
    index = -1;
  }

  if (index == -1){
    userWebsite = document.getElementById('cookieValue').value;
    document.cookie = cookie_name + "=" + userWebsite + "; expires=Monday, 04-Apr-2020 05:00:00 GMT";
    debugger;
    var x = document.cookie;
    
  }
}

function getCookie(name) {
  match = document.cookie.match(new RegExp(name + '=([^;]+)'));
  if (match) return match[1];
}

function requestUrl2Png(api, api_secret){
  var token = api
  var secret = api_secret
  var userWebsite = getCookie('websiteUrl')


  var request = new XMLHttpRequest();
  request.open('POST', 'https://api.url2png.com/v6/' + token + '/' + secret +'/png/?url=' + userWebsite);

  request.withCredentials = true
  request.setRequestHeader('fullpage',
                            true);
  request.setRequestHeader('protocol',
                            'http');
  request.setRequestHeader('thumbnail_max_width',
                            400);

  request.onreadystatechange = function(){
    if (this.readyState === 4){

      var parsedResponse = JSON.parse(this.responseText);

      if(parsedResponse === null || "" || undefined){
        console.log(this)  
      } else {
        parsedResponse
        console.log(parsedResponse)
      }
    }

  };
  request.send();
}