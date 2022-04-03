//Code Quality with Node.js
/**
 * A eager but inexperienced CSE 154 student wrote the code below as a start to their cool
 * web service. However, there are many code quality issues, see if you can spot them all
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
