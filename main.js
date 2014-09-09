var moduuli = require('./moduuli.js');

var options = {
    weekday: "2-digit", year: "numeric", month: "2-digit",
    day: "numeric", hour: "2-digit", minute: "2-digit"
};

moduuli.func(process.argv[2], function(err, time) {
	if(err)
		console.log(err);
	console.log(time.toLocaleDateString("de-De"));	
	console.log(time.getDate()+"."+(time.getMonth()+1)+"."+(time.getYear()+1900)
	+" "+time.toTimeString().split(" ")[0]);
});
