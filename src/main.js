
const ZohoCreator = require('./zohoCreator');
const models = require('./model');

export const bookingCreator = new ZohoCreator({
	space_name: 'booking',
	models
	roleWiseContextMenuMaps: {
		SALES: {
			MYTASKS: [1,3],
			FEEDBACK: [2,],
			OPS: [4]
		}
		CUSTOMER: {
			MYTASKS: [2]
		},
		OPS: {
			MYTASKS: [4],
			ALL: []
		}
	}
});

