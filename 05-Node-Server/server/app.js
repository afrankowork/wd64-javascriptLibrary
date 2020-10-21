require('dotenv').config();

let express = require('express');
let app = express();
let test = require('./controllers/testcontroller')//1
let authTest = require('./controllers/authtestcontroller')

let user = require('./controllers/usercontroller')


let sequelize = require('./db');


sequelize.sync();

app.use(express.json());
app.use(require('./middleware/headers'));

app.use('/test',test)

app.use('/api/user', user);

app.get('/api/test', function(req, res) {
    res.send('This is data from the /api/test endpoint. It is from the server.')
});


app.use(require('./middleware/validate-session'));
app.use('/authtest', authTest);


app.listen(4000, function() {
    console.log('how bout them bears')
});

