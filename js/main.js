document.addEventListener("DOMContentLoaded", function(){
  
  if( navigator.geolocation ){ 
    //code goes here to find position
    var params = {enableHighAccuracy: true, timeout:3600, maximumAge:60000};
    //enableHighAccuracy means try to use GPS and drain the battery
    //for improved accuracy within a few meters.
    //maximum age is how long to cache the location info
    //timeout is how long to wait for the network to respond after the user says ok
      
//    var canvas = document.createElement("canvas");
//      output.appendChild(canvas);
      
    navigator.geolocation.getCurrentPosition( reportPosition, gpsError, params ); 
    // ^ to continually check the position (in case it changes) use
    // navigator.geolocation.watchPosition( reportPosition, gpsError, params)
  }
    
    else{
    //browser does not support geolocation api
    alert("Sorry, but your browser does not support location based awesomeness.")
  }
});


function reportPosition( position ){ 
  var output = document.querySelector("#output");
  output.innerHTML += "Latitude: " + position.coords.latitude + "&deg;<br/>"
  + "Longitude: " + position.coords.longitude + "&deg;<br/>"
  + "Accuracy: " + position.coords.accuracy + "m<br/>"
  + "Timestamp: " + position.timestamp;


var canvs = document.createElement("canvas");
document.body.appendChild(canvs);
canvs.id='myCanvas';
 var canvas = document.querySelector('#myCanvas');
//console.log(canvas);
  var context = canvas.getContext('2d');
  var img = document.createElement("img");

canvas.width = 400;
 canvas.height = 400;
   img.onload = function() {
    context.drawImage(img, 0, 0);
  };
img.src = "https://maps.googleapis.com/maps/api/staticmap?center="+position.coords.latitude+","+position.coords.longitude+"&zoom=14&size=400x400&maptype=hybrid&markers=color:red|label:A|" + position.coords.latitude + ',' + position.coords.longitude ;

}

function gpsError( error ){   
  var errors = {
    1: 'Permission denied',
    2: 'Position unavailable',
    3: 'Request timeout'
  };
  alert("Error: " + errors[error.code]);
}