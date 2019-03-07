var requestStrings =  "https://www.omdbapi.com/?apikey=aa82249a&t=";
var response;

function requestStringConstructor(input) {
   return requestStrings+ input + "&type=movie";
 }

function submitRequest(mediaType){
  var input = document.getElementById("query").value.trim();
  if(input != ""){
    if(document.getElementById("search-container").classList.contains("expanded")){
      hideDisplay();
      setTimeout(function(){
        var requestString = requestStringConstructor(input);
        reponse = APIRequest(requestString);
        setInfo(response.Title, response.Year, response.Plot);
        revealDisplay();
      },1100)
    } else {
      var requestString = requestStringConstructor(input);
      reponse = APIRequest(requestString);
      setInfo(response.Title, response.Year, response.Plot);
      revealDisplay();
    }
  }
}

function APIRequest(requestString){
  var xhr = new XMLHttpRequest();
  xhr.open("GET",requestString, false);
  xhr.send();
  response = JSON.parse(xhr.response);
  console.log(response);
  return response;
}



function setInfo(title, year, plot){
  var info = document.getElementById("info");
  info.innerHTML = "<header><div id='title'>" + title + "</div>" +
                   "<div id='year'>" + year + "</div></header>" + 
                   "<div id='summary'>" + plot + "</div>";
}



function revealDisplay(){
  document.getElementById("search-container").classList.add("expanded");
}

function hideDisplay(){
  document.getElementById("search-container").classList.remove("expanded");
}