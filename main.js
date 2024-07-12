const ZohoCreator = require('./zohoCreator');
const models = require('./model');

const bookingCreator = new ZohoCreator({ space_name: 'booking', models });
