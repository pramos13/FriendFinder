//html-routes

app.get('/', function(req, res){
	
	res.sendFile(path.join(__dirname + '/home.html'));
})

app.get('/surveyPage', function(req, res){
	
	res.sendFile(path.join(__dirname + '/surveyPage.html'));
})