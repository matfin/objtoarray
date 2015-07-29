'use strict';

module.exports = {
	/**
	 *	Convert an object with nested properties into an array with named indexes
	 *
	 *	@param {mixed} item - the item being converted. If it is not an object, it is returned immediately
	 *	@return {mixed} - return an array with named key indexes, or return the item if it is not an object
	 */
	convert: function(item) {
		if(typeof item !== 'object' || item === null) {
			return item;
		}

		var keys = Object.keys(item),
				remapped = [], value, type;
				
		keys.forEach((function(key) {
			value = item[key];
			type = typeof value;

			switch(type) {
				case 'object': 
					remapped[key] = this.convert(value);
					break;
				default: 
					remapped[key] = value
			}
		}).bind(this));

		return remapped;
	}
};
