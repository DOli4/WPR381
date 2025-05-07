const express = require('express');
const router = express.Router();

const team = [
  { name: "FOR NOW KNOW", role: "THIS IS AN EXAMPLE" },
  { name: "Dieter", role: "Team Lead" },
  { name: "Keitumetse", role: "Backend Dev" },
  { name: "Magotso", role: "Data Manager" },
  { name: "Mogau", role: "Docs" }
];

const events = [
  { title: "Park Cleanup", date: "2025-05-10", location: "Greenfield Park", image: "/images/cleanup.jpg" },
  { title: "Community Braai", date: "2025-05-20", location: "Eastlynn Hall", image: "/images/braai.jpg" }
];

const messages = [];

// Home
router.get('/', (req, res) => {
  res.render('pages/home', { page: 'home' });
});

// About
router.get('/about', (req, res) => {
  res.render('pages/about', { team, page: 'about' });
});

//Events
router.get('/events', (req, res) => {
  const events = [
    {
      title: "Art Show: Bloom & Form",
      date: "June 10, 2025",
      location: "Gallery 21, Cape Town",
      image: "/images/art1.png"
    },
    {
      title: "Modern Expressions",
      date: "June 18, 2025",
      location: "Sandton Art Hall",
      image: "/images/art2.png"
    },
    {
      title: "Pastel Dreams Exhibition",
      date: "July 1, 2025",
      location: "Online / Virtual",
      image: "/images/art3.png"
    }
  ];

  res.render('pages/events', { events, page: 'events' });
});

// Contact (GET)
router.get('/contact', (req, res) => {
  res.render('pages/contact', { page: 'contact' });
});

// Contact (POST)
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (name && email && message) {
    messages.push({ name, email, message });
  }
  res.redirect('/thankyou');
});

// Thank You
router.get('/thankyou', (req, res) => {
  res.render('pages/thankyou', { page: '' });
});

module.exports = router;

