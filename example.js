'use strict';

var objtoarray = require('./objtoarray');

var map = {
	messing: null,
	uhoh: undefined,
	objectOne: {
		attributeOne: 1,
		attributeTwo: 2,
		collectionThree: {
			item: 1,
			others: {
				seen: true,
				old: 'yes',
				deep: {
					indeed: 'it',
					what: [
						'sort',
						'of',
						'nonsense',
						'is',
						{
							this_meant: {
								to: 'be?'
							}
						}
					],
					can: {
						get: 'quite',
						deeply: {
							nested: 'and',
							complicated: {
								so: {
									it: 'can'
								}
							}
						}
					}
				}
			}
		}
	},
	objectTwo: {
		attributeOne: 3,
		attributeTwo: 4
	},
	objectThree: {
		attributeOne: 5,
		attributeTwo: 6
	}
},

converted = objtoarray.convert(map);

console.log('==== Original ====');
console.log(map);

console.log('==== Converted ====');
console.log(converted);
