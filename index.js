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

app.get('/trial1/:mystery', function(req, res) {
  req.type('text');
  if (req.params['mystery'] == 'spooky') {
    res.type('json');
    revealMystery(req.params['mystery']);
  } else {
    res.status(400).send('uh oh invalid request, this mystery is too mysterious for us!');
  }
});

function revealMystery(mystery) {
  // details of function are mYsTeRiOuSlY omitted
}

app.get('/trial2', function(req, res) {
  let num = Math.random();
  if (num < 0.5) {
    res.send('YEEET');
  }
    errorHandler(res);
});

function errorHandler(res) {
  res.send('EEEEEK');
}

app.get('/trial1/:mystery2', function(req, res) {
  res.type('text').send('hehe');
});
