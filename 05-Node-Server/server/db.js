const Sequelize = require('sequelize');

const sequelize = new Sequelize('workoutlog', 'postgres', 'coby983112!', {
    host: 'localhost',
    dialect: 'postgres',
    
})



sequelize.authenticate().then(    
    function success() {
        console.log('connected to database');
        },
        function error(err) {
            console.log(err)});
    

module.exports = sequelize;