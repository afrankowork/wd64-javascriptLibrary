let express = require('express'); //1
let router = express.Router(); //2
let sequelize = require('../db');
let TestModel = sequelize.import('../models/test');



router.post('/one', function(req,res) {
    res.send("Test 1 went through!")
});


router.post('/two', (req, res) => {
        let testData = "Test data for endpoint two"; //2
        
        TestModel
        .create({
            testdata: testData
        }).then(dataFromDatabase => {
            res.send("Test two went through!");
        });
    });

router.post('/three', function(req, res) {
    let testData = req.body.testdata.item;

    TestModel
    .create({
        testdata: testData
    })
    res.send("Test three went through!");
    console.log("test three went through!");
})


router.post('/four', function(req, res) {
    let testData = req.body.testdata.item;
    TestModel
    .create({
        testdata: testData
    })
    .then(
        function message() {
            res.send("Test 4 went through!");
        }
    )
})

router.post('/five', function(req, res) {
    let testData = req.body.testdata.item;
    TestModel
    .create({
        testdata: testData
    })
    .then(
        function message(data) {
            res.send(data)
        }
    )
})

router.post('/six', function(req, res) {
    let testData = req.body.testdata.item;
    TestModel
    .create({
        testdata: testData
    })
    .then(
        function message(testdata) {
            res.json({
                testdata: testdata
            })
        }
    )
})

router.post('/seven', function(req, res) {
    let testData = req.body.testdata.item;

    TestModel
    .create({
        testdata: testData
    })
    .then(
        function createSuccess(testdata) {
            res.json({
                testdata: testdata
            });
        },
        function createError(err) {
            res.send(500, err.message);
        }

    )
})

/**GET: Get a simple message from the server */
router.get('/helloclient', function (req, res) {
    res.send('This is a message from the server to the client.')
})

/**GET: /one */

router.get('/one', function(req, res) {
    TestModel 
      .findAll ({
          attributes : ['id', 'testdata']
      })
      .then( function findAllSuccess(data) {
          console.log('Controller data', data);
          res.json(data);
      },
      function findAllError(err) {
          res.send(500, err.message);
      }
      );
});

module.exports = router;