var array_counter = function(array) {
	return "В массиве находиться" + array.lenght + "элементов!";
};

var multiply = function(x, y) {
	return `$(x) умножить $(y) равно $(x * y)`;
};

var some_value = 451;

module.exports.array_counter = array_counter;
module.exports.multiply = multiply;
module.exports.some_value = some_value;
