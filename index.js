/*
  solution code
  NOTE: this solution lacks documentation which is an essential part of code quality

  List of issues in provided code:
  - missing 'use strict'
  - using `app` but it's undefined. Need to require express and create an instance of the express object
  - all helper functions should be defined below endpoint definitions
  - endpoint /trial1/:mystery
    - should be ===
    - should be res.type not req.type
    - if the param has a value of spooky, no response is ever sent (left hanging)
    - overwrites type by initially setting type to text and then setting to json
  - endpoint /trial2
    - no type is ever set
    - in the case of an error, status code is never set
    - passes `res` to helper function
    - structure of endpoint is faulty because `.send` is called more than once
  - endpoint /trial1/:mystery2
    - response never sent because path is the same as first endpoint definition in file
  - missing app.use(express.static('public'));
  - does not listen at a designated port
  - missing documentation
    - header comment should include documentation for each endpoint in addition to a file description
    - brief comment above each endpoint
    - all functions documented using JSDoc convention
*/

'use strict';
const express = require('express');
const app = express();

https://node5.tomkrok1.repl.co/trial1/saa
//https://node5.tomkrok1.repl.co/trial1/spooky
app.get('/trial1/:mystery', function(req, res) {
  if (req.params['mystery'] === 'spooky') {
    res.json(revealMystery(req.params['mystery']));
  } else {
    res.type('text');
    res.status(400).send('uh oh invalid request, this mystery is too mysterious for us!');
  }
});


//https://node5.tomkrok1.repl.co/trial2
app.get('/trial2', function(req, res) {
  let num = Math.random();
  res.type('text');
  if (num < 0.5) {
    res.send('YEET');
  } else {
    res.status(400).send('EEEEEK');
  }
});

//https://node5.tomkrok1.repl.co/trial3/sbb
app.get('/trial3/:mysery2', function(req, res) {
  res.type('text').send('hehe');
});

function revealMystery(mystery) {
  // details of function are mYsTeRiOuSlY omitted
}

app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);
