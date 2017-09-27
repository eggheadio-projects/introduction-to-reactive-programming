var button = document.querySelector('.button');
var label = document.querySelector('h4');

var clickStream = Rx.Observable.fromEvent(button, 'click');

var doubleClickStream = clickStream
  .bufferWhen(() => clickStream.debounceTime(250))
  .map(arr => arr.length)
  .filter(len => len === 2);

doubleClickStream.subscribe(event => {
  label.textContent = 'double click';
});

doubleClickStream
  .delay(1000)
  .subscribe(suggestion => {
    label.textContent = '-';
  });
