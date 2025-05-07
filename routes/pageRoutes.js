const express = require('express');
const router = express.Router();

const team = [{ name: "FOR NOW KNOW", role: "THIS IS AN EXAMPLE" },
  { name: "Dieter", role: "Team Lead" },
  { name: "Dieter", role: "Frontend Dev" },
  { name: "Keitumetse", role: "Backend Dev" },
  { name: "Magotso", role: "Data Manager" },
  { name: "Mogau", role: "Docs" }
];

const events = [
  { title: "Park Cleanup", date: "2025-05-10", location: "Greenfield Park", image: "/images/cleanup.jpg" },
  { title: "Community Braai", date: "2025-05-20", location: "Eastlynn Hall", image: "/images/braai.jpg" }
];

const messages = [];

router.get('/', (req, res) => {
  res.render('pages/home');
});

router.get('/about', (req, res) => {
  res.render('pages/about', { team });
});

router.get('/events', (req, res) => {
  res.render('pages/events', { events });
});

router.get('/contact', (req, res) => {
  res.render('pages/contact');
});

router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  messages.push({ name, email, message });
  res.redirect('/thankyou');
});

router.get('/thankyou', (req, res) => {
  res.render('pages/thankyou');
});

module.exports = router;
