var requestStream = Rx.Observable.of('https://api.github.com/users');

// flatMap is now an alias for mergeMap 
// but will work just the same.
var responseStream = requestStream
  .flatMap(requestUrl =>
    Rx.Observable.fromPromise(jQuery.getJSON(requestUrl))
  );

responseStream.subscribe(response => {
  console.log(response) || displayInPreview(response[0].login) || displayInPreview(response[1].login) || displayInPreview(response[2].login);  
});




// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}