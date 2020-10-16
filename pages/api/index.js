const request = require('request');

export default (req, res) => {
  res.statusCode = 200;

  if (req.method === 'POST') {
    request({
      url: 'http://jsonplaceholder.typicode.com/posts',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-token-access': 'random'
      },
      body: JSON.stringify(req.body)
    }, (err, response, body) => {
      console.log(body);
      res.json(body);
    });
  } else {
    res.json({});
  }
}
