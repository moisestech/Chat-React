var RootController = require('./controllers/index').RootController;

module.exports = function (app) {
	app.get('/', RootController.index);
};
