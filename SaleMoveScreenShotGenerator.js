$('document').ready(function(){
  $.getScript("https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/hmac-sha1.js", function(){
    $('#pushCookie').on('click', saveCookie);
    $body = $("body");
    $body.addClass("loading");
    requestUrlBox()
  });
});

function requestUrlBox(){

  var _0x1b89 = [ "\x39\x35\x61\x32\x39\x62\x31\x37\x2D\x30\x61\x65\x34\x2D\x34\x32\x63\x63\x2D\x39\x30\x38\x33\x2D\x64\x61\x30\x64\x66\x33\x39\x30\x30\x31\x63\x38",
                  "\x34\x63\x31\x62\x65\x61\x34\x34\x2D\x61\x39\x66\x38\x2D\x34\x38\x62\x64\x2D\x62\x36\x31\x63\x2D\x61\x35\x65\x35\x65\x62\x62\x32\x30\x31\x66\x66" ];
  getKeys(_0x1b89)

  var userWebsite = getCookie(cookieName) 
      options = {
          url: userWebsite,
          fullpage: true,
          delay: 2000,
          ttl: 604000
        }
      queryString = $.param(options)
                .toString();
      token = CryptoJS.HmacSHA1(queryString, api_secret)
      callUrl = 'https://api.urlbox.io/v1/' + api + '/' + token +'/png/?' + queryString

  $('#image').attr("src", callUrl )
               .css("display", "none")

  $('#image').on('load', function(success){
    $body.removeClass("loading");
    $('#image').css('display', 'inline-block');

  })

  api = "obscuredKey"
  api_secret = "obscuredKey"
} 

cookieName = "websiteUrl";

function getKeys(array){
  api_secret=array[0];api=array[1]
}

function saveCookie(){
  if (document.cookie != document.cookie) {
    index = document.cookie.indexOf(cookieName);
  } else {
    index = -1;
  }

  if (index == -1) {
    userWebsite = document
                    .getElementById('cookieValue')
                      .value;
    document.cookie = cookieName + "=" + userWebsite + "; expires=Monday, 04-Apr-2020 05:00:00 GMT";
  }
}

function getCookie(name) {
  match = document
            .cookie
              .match(new RegExp(name + '=([^;]+)'));
  if (match) return match[1];
}
