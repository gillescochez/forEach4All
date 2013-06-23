// NodeList.forEach
NodeList.prototype.forEach = Array.prototype.forEach;

// Object.forEach
Object.prototype.forEach = function(callback, context) {
	var ctx = context || null;
    Object.keys(this).forEach(function (key) {
        callback.apply(ctx, [key, this[key]]);
    }, this);
};

// String.forEach
String.prototype.forEach = Array.prototype.forEach;