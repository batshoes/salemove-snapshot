$('document').ready(function(){
  $.getScript("https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/hmac-sha1.js", function(){
    
    $("#preview").submit(function( event ) {
      saveCookie()
      event.preventDefault();
    });

    $body = $("body");
    $body.addClass("loading");
    requestUrlBox()
  });
});

function requestUrlBox(){
  parameterCheck(cookieName)

  var _0xb01b=[ "\x34\x61\x61\x35\x62\x64\x65\x64\x2D\x62\x65\x66\x30\x2D\x34\x62\x65\x64\x2D\x61\x62\x66\x62\x2D\x30\x31\x38\x35\x37\x30\x62\x63\x61\x39\x61\x64",
                "\x64\x30\x61\x66\x32\x65\x33\x39\x2D\x35\x35\x34\x39\x2D\x34\x63\x34\x63\x2D\x38\x61\x34\x37\x2D\x63\x33\x61\x32\x37\x38\x65\x63\x64\x64\x35\x36" ];
  getKeys(_0xb01b)

      options = {
          url: userWebsite,
          full_page: true,
          delay: 2000,
          ttl: 604000
        }
      queryString = $.param(options)
                .toString();
      token = CryptoJS.HmacSHA1(queryString, J8ADq)
      callUrl = 'https://api.urlbox.io/v1/' + P1Fx + '/' + token + '/png/?' + queryString + "/"

  $('#imported-image').attr("src", callUrl )
               .css("display", "none")

  var loadingTimeout = setTimeout(function(){
    $body.removeClass("loading");
    $('#imported-image').attr("src", "https://api.urlbox.io/v1/4c1bea44-a9f8-48bd-b61c-a5e5ebb201ff/7635994e73aa6d7f6bb37434a4d1ffce3d6bf636/png/?url=salemove.com/404&full_page=true&delay=2000&ttl=604000/" )
               .css("display", "inline-block")
    $('#static-overlay-image').css('display', 'none');
  }, 30000)

  $('#imported-image').on('load', function(response){
    clearTimeout(loadingTimeout);
    updateZapier(userWebsite);

    $body.removeClass("loading");
    $('#imported-image').css('display', 'inline-block');
    $('#static-overlay-image').css('display', 'inline-block');

    // setTimeout(function(){
    //   $('#top').trigger("click");
    //   setInterval(function(){
    //     $('#top').trigger("click");
    //   }, 10000);
    // }, 1000);

    // setTimeout(function(){
    //   $('#bottom').trigger("click");
    //   setInterval(function(){
    //     $('#bottom').trigger("click");
    //   }, 10000);
    // }, 11000)
  })

  P1Fx = "obscuredKey"
  J8ADq = "obscuredKey"

  $('a[href^="#"]').on('click', function(event) {
      var target = $( $(this).attr('href') );

      if( target.length ) {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: target.offset().top
          }, 18000);
      }
    });
} 

cookieName = "websiteUrl";

function getKeys(array){
  J8ADq=array[0];P1Fx=array[1]
}

function updateZapier(website){
  $.ajax({
    url: "https://zapier.com/hooks/catch/67402/uteam0/",
    type: "POST",
    data: {
      requestedWebAddress: website
    }
  });
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
  $(location).attr('href', 'file:///Users/Jimmy/Documents/Projects/aws/node/salemove-snapshot-project/new.html')
}

function getCookie(name) {
  match = document
            .cookie
              .match(new RegExp(name + '=([^;]+)'));
  if (match) return match[1];
};

function parameterCheck(){
  inputParam = QueryString['sitemover']
  if (inputParam === undefined) {
    window.userWebsite = getCookie(cookieName);
  } else {
    window.userWebsite = inputParam
  };
};

var QueryString = function () {
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  } 
    return query_string;
}();