var moduuli = require('./moduuli.js');
var dateFormat = require('dateformat');

moduuli.func(process.argv[2], function(err, time) {
	if(err)
		console.log(err);
	
	console.log(dateFormat(time, "dd.mm.yyyy hh:MM:ss"));
	
});
