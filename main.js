$('document').ready(function(){
  $('#leButton').on('click', saveCookie);
  $('#button').on('click', pushToNode);
});

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

function pushToNode(){
  body = {
    url: getCookie(cookieName)
  }
  $.ajax({
      type: "GET",
      data: body,
      url: "http://localhost:5000/",
      contentType: "text/plain"
    })
}