const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index', { score: null });
});

app.post('/submit', (req, res) => {
  // Server-side scoring logic
  const correctAnswers = {
    question1: 'option2',
    question2: 'option1',
    question3: 'option4'
  };

  let score = 0;
  for (const question in correctAnswers) {
    if (req.body[question] === correctAnswers[question]) {
      score++;
    }
  }

  res.render('index',{score})
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
