const express = require('express');
const router = express.Router();

//Data
const team = [
    { name: "Dieter", role: "Team Lead" },
    { name: "Dieter", role: "Frontend Developer" },
    { name: "Keitumetse", role: "Backend Developer" },
    { name: "Magotso", role: "Data Manager" },
    { name: "Mogau", role: "Documentation Manager" }
];

const events = [{
        title: "Spring Semester Welcome Brunch",
        date: "2025-05-15",
        location: "Main Courtyard, LeGastronome Campus",
        image: "/images/vaughn1.jpg"
    },
    {
        title: "Pastry Arts Final Showcase",
        date: "2025-06-03",
        location: "Pastry Studio, Building B",
        image: "/images/vaughn2.png"
    },
    {
        title: "Farm-to-Table Market Visit",
        date: "2025-06-12",
        location: "Local Organic Market, Foodville",
        image: "/images/vaughn3.jpg"
    },
    {
        title: "Global Cuisine Night",
        date: "2025-06-24",
        location: "Culinary Theater, South Wing",
        image: "/images/vaughn4.jpg"
    },
    {
        title: "Graduation Gala Dinner",
        date: "2025-07-05",
        location: "Grand Ballroom, LeGastronome",
        image: "/images/vaughn5.jpg"
    }
];

//Array that holds data for the course information that will be used to dynamically create the events in the events tab

const courses = [{
        title: "Croissant Baking Workshop",
        image: "/images/cross.jpg",
        description: [
            "The croissant is one of the most iconic symbols of French baking — a golden, flaky pastry with a delicate crunch and buttery layers. Originally inspired by the Austrian kipferl, the croissant became a staple of Parisian cafés in the 19th century and has since evolved into a worldwide breakfast favorite.",
            "In this immersive baking course, you’ll learn the intricate techniques behind crafting perfect croissants — from lamination and rolling to shaping and proofing. You’ll explore how temperature, butter quality, and dough folding all affect the final result, and walk away with professional skills to recreate them at home.",
            "This course is perfect for aspiring pastry chefs, home bakers, or anyone curious about the science and art of French viennoiserie. There’s nothing quite like biting into a warm croissant you made yourself."
        ],
        details: {
            date: "May 12, 2025 – 09:00 AM to 1:00 PM",
            location: "Le Petit Atelier de Boulangerie, Paris",
            price: "US$180"
        }
    },
    {
        title: "Sushi Masterclass",
        image: "/images/sushi.avif",
        description: [
            "This course dives into the foundations of traditional Japanese sushi with a modern favorite: salmon nigiri. Though salmon wasn't part of sushi until the late 20th century, it has become a symbol of freshness and elegance in global sushi culture.",
            "You'll learn the key steps to preparing perfect sushi rice, how to slice salmon fillets correctly, and how to hand-shape nigiri like a pro. This hands-on experience will help you understand the precision and mindfulness behind true sushi craftsmanship.",
            "Whether you're new to sushi or refining your knife work and presentation, this course is designed to build your confidence and technique with every roll (and press!)."
        ],
        details: {
            date: "May 14, 2025 – 11:00 AM to 3:00 PM",
            location: "Tokyo Taste Lab Kitchen Studio, Kyoto",
            price: "US$200"
        }
    },
    {
        title: "Italian Lasagna Workshop",
        image: "/images/lasagna.jpg",
        description: [
            "Learn to master one of Italy’s most beloved comfort foods — lasagna. Layered with hand-rolled pasta, rich meat sauce, creamy béchamel, and bubbling cheese, lasagna is a celebration of patience, tradition, and taste.",
            "In this course, you'll dive into authentic regional techniques from Bologna to Naples, understanding the key elements that make a perfect lasagna: dough consistency, slow-simmered ragu, and balanced layering. You'll also discover vegetarian and modern variations using seasonal vegetables and alternative sauces.",
            "This workshop is ideal for anyone looking to bring depth and authenticity to their Italian cooking, whether for family feasts or elegant dinner parties."
        ],
        details: {
            date: "May 16, 2025 – 2:00 PM to 6:00 PM",
            location: "Cucina di Famiglia Culinary Studio, Florence",
            price: "US$150"
        }
    }
];

//Routes

// Home
router.get('/', (req, res) => {
    res.render('pages/home', { page: 'home' });
});

// About
router.get('/about', (req, res) => {
    res.render('pages/about', { team, page: 'about' });
});

// Events
router.get('/events', (req, res) => {
    res.render('pages/events', { events, courses, page: 'events' });
});

// Contact (GET)
const messages = [];

router.get('/contact', (req, res) => {
    res.render('pages/contact', { page: 'contact' });
});

router.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    if (name && email && message) {
        const entry = { name, email, message, submittedAt: new Date() };
        messages.push(entry);

        // Pass the latest message to the thank you page
        res.render('pages/thankyou', { userMessage: entry, page: 'thankyou' });
    } else {
        res.redirect('/contact');
    }
});


module.exports = router;