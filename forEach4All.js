// NodeList.forEach
NodeList.prototype.forEach = Array.prototype.forEach;

// Object.forEach
Object.prototype.forEach = function(callback, context) {

    var keys = [],
        prop;
    
    for (prop in this) {
        if (this.hasOwnProperty(prop)) {
            keys.push(prop);
        }
    }
    
    keys.forEach(function (key) {
        callback.apply(context || null, [key, this[key]]);
    }, this);
};

// String.forEach
String.prototype.forEach = Array.prototype.forEach;