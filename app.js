const express = require('express');
const app = express();

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Create an array to store messages
const messages = [];

// Index Route - Display all messages
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Mini Messageboard',
    messages: messages
  });
});

// New Message Form Route
app.get('/new', (req, res) => {
  res.render('form', {
    title: 'New Message'
  });
});

// Post Route - Add a new message
app.post('/new', (req, res) => {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;

  // Push new message to messages array
  messages.unshift({
    text: messageText,
    user: messageUser,
    added: new Date()
  });

  // Redirect to index
  res.redirect('/');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
