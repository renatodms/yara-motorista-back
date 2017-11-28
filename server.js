//imports
var app = require('express')(),
    http = require('http').Server(app),
    bodyParser = require('body-parser');

//config
app.use(bodyParser.json({ type: 'application/json' }));
require('./router.js')(app);

//listen
var port = process.env.PORT || 8881;
http.listen(port, () => {
    console.log('BACK');
    console.log('port: %d', port);
});