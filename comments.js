// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

// Create express app
const app = express();

// Body parser
app.use(bodyParser.json());

// Event handler
app.post('/events', async (req, res) => {
  const { type, data } = req.body;
  console.log('Event received:', type);

  if (type === 'CommentCreated') {
    const status = data.content.includes('orange') ? 'rejected' : 'approved';
    console.log('Status:', status);

    await axios.post('http://event-bus-srv:4005/events', {
      type: 'CommentModerated',
      data: {
        ...data,
        status,
      },
    });
  }

  res.send({});
});

// Listen
app.listen(4003, () => {
  console.log('Listening on 4003');
});