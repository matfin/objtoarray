'use strict';

var objToArray = function(item) {
	if(typeof item !== 'object' || item === null) {
		return item;
	}

	var keys = Object.keys(item),
			remapped = [], value, type;
			
	keys.forEach(function(key) {
		value = item[key];
		type = typeof value;

		switch(type) {
			case 'object': 
				remapped[key] = arrayMe(value);
				break;
			default: 
				remapped[key] = value
		}
	});

	return remapped;
};
