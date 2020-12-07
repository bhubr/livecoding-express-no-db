const express = require('express');

const port = 5000;

const app = express();

// more to come

app.listen(port, (err) => {
  if (err) {
    console.error('Something bad happened', err.message);
  } else {
    console.log(`Server listening on port ${port}`);
  }
});
