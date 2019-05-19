var events = require('events');
var util = require('util');

var Cars = function(model) {
	this.model = model;
};

	util.inherits(Cars, events.EventEmitter);

	var bmw = new Cars('BMW');
	var vw = new Cars('VW');
	var volvo = new Cars('Volvo');
	var audi = new Cars('Audi');

	var cars = [bmw, audi, vw, volvo];
	cars.forEach(function(car) {
		car.on('speed', function(text) {
			console.log (car.model + "speed is - " + text);
		});
	});

	bmw.emit('speed', '254,4 km');
	vw.emit('speed', '354,4 km');






// var myEmit = new events.EventEmitter();
//
// myEmit.on('some_event', function(text) {
// 	console.log(text);
// });
//
// myEmit.emit('some_event', 'Обработчик событий сработал!');
