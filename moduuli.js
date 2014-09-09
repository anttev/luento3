var fs = require('fs');

exports.func = function(filu, done) {
	fs.stat(filu, function(err, stats) {
		if(err)
			return done(err, null);
			
		done(null, stats.mtime);
	});
}