export const images = {
  hero:
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2400&q=85',
  aboutChef:
    'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=85',
  aboutPasta:
    'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=85',
  truffle:
    'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=85',
  risotto:
    'https://images.unsplash.com/photo-1633436375153-d7045cb93e38?auto=format&fit=crop&w=1200&q=85',
  branzino:
    'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=85',
  story:
    'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=2200&q=85',
  chef:
    'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1300&q=85',
  reservation:
    'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=2200&q=85',
  wine:
    'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=85',
  interior:
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85',
  tiramisu:
    'https://images.unsplash.com/photo-1568625365131-079e026a927d?auto=format&fit=crop&w=1000&q=85',
  romantic:
    'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=85',
};

export const signatureDishes = [
  {
    name: 'Tagliatelle al Tartufo',
    description: 'Fresh handmade pasta, parmesan and black truffle.',
    price: 'EUR 28',
    image: images.truffle,
    alt: 'Handmade tagliatelle with parmesan and black truffle',
  },
  {
    name: 'Risotto ai Funghi',
    description: 'Carnaroli rice, porcini mushrooms and aged parmesan.',
    price: 'EUR 24',
    image: images.risotto,
    alt: 'Creamy mushroom risotto finished with parmesan',
  },
  {
    name: 'Branzino Mediterraneo',
    description: 'Sea bass, roasted tomatoes, olives and fresh herbs.',
    price: 'EUR 32',
    image: images.branzino,
    alt: 'Mediterranean sea bass with herbs and roasted vegetables',
  },
];

export const menuCategories = [
  {
    name: 'Antipasti',
    dishes: [
      ['Burrata Pugliese', 'Heirloom tomatoes, basil oil and sea salt.', 'EUR 16'],
      ['Carciofi alla Romana', 'Braised artichokes, mint and lemon zest.', 'EUR 14'],
      ['Vitello Tonnato', 'Slow-cooked veal, tuna sauce and capers.', 'EUR 18'],
      ['Fiori di Zucca', 'Zucchini blossoms, ricotta and anchovy.', 'EUR 15'],
      ['Crudo di Branzino', 'Sea bass, citrus, olive oil and fennel.', 'EUR 19'],
      ['Olive Ascolane', 'Stuffed olives with rosemary aioli.', 'EUR 12'],
    ],
  },
  {
    name: 'Pasta',
    dishes: [
      ['Tagliatelle al Tartufo', 'Handmade pasta, parmesan and black truffle.', 'EUR 28'],
      ['Tortelli di Zucca', 'Pumpkin tortelli, sage butter and amaretti.', 'EUR 24'],
      ['Pappardelle al Ragu', 'Slow-braised beef ragu and pecorino.', 'EUR 26'],
      ['Spaghetti alle Vongole', 'Clams, white wine, garlic and parsley.', 'EUR 25'],
      ['Gnocchi Sorrentina', 'Tomato, basil and smoked mozzarella.', 'EUR 21'],
      ['Cacio e Pepe', 'Tonnarelli, pecorino romano and black pepper.', 'EUR 20'],
    ],
  },
  {
    name: 'Secondi',
    dishes: [
      ['Branzino Mediterraneo', 'Sea bass, tomatoes, olives and fresh herbs.', 'EUR 32'],
      ['Bistecca Fiorentina', 'Charcoal-grilled T-bone, rosemary and sea salt.', 'EUR 58'],
      ['Pollo al Limone', 'Organic chicken, lemon, thyme and white wine.', 'EUR 29'],
      ['Osso Buco Milanese', 'Veal shank, saffron risotto and gremolata.', 'EUR 38'],
      ['Melanzane Ripiene', 'Roasted eggplant, herbs and smoked provola.', 'EUR 24'],
      ['Costolette d Agnello', 'Lamb chops, olives and seasonal greens.', 'EUR 36'],
    ],
  },
  {
    name: 'Dolci',
    dishes: [
      ['Tiramisu Classico', 'Mascarpone, espresso and cocoa.', 'EUR 12'],
      ['Panna Cotta', 'Vanilla cream, berries and aged balsamic.', 'EUR 11'],
      ['Cannoli Siciliani', 'Ricotta, pistachio and candied orange.', 'EUR 12'],
      ['Torta Caprese', 'Chocolate, almond and whipped cream.', 'EUR 13'],
      ['Affogato Bellini', 'Fior di latte gelato and espresso.', 'EUR 9'],
      ['Gelati Artigianali', 'Three seasonal house-made gelati.', 'EUR 10'],
    ],
  },
  {
    name: 'Vini',
    dishes: [
      ['Barolo, Piemonte', 'Structured nebbiolo with rose and spice.', 'EUR 18'],
      ['Chianti Classico', 'Sangiovese, cherry, herbs and cedar.', 'EUR 14'],
      ['Vermentino di Sardegna', 'Mineral white with citrus and salinity.', 'EUR 13'],
      ['Franciacorta Brut', 'Elegant metodo classico bubbles.', 'EUR 16'],
      ['Etna Rosso', 'Nerello mascalese from volcanic soils.', 'EUR 15'],
      ['Vin Santo', 'Tuscan dessert wine with almond notes.', 'EUR 12'],
    ],
  },
];

export const galleryItems = [
  { title: 'Pasta fatta a mano', image: images.aboutPasta, alt: 'Fresh handmade pasta dusted with flour' },
  { title: 'Calice di vino', image: images.wine, alt: 'Red wine poured into a crystal glass' },
  { title: 'Sala Bellini', image: images.interior, alt: 'Sophisticated restaurant interior with warm lighting' },
  { title: 'Chef al lavoro', image: images.chef, alt: 'Chef plating a refined dish in the kitchen' },
  { title: 'Tiramisu', image: images.tiramisu, alt: 'Classic tiramisu dessert served elegantly' },
  { title: 'Cena romantica', image: images.romantic, alt: 'Romantic candlelit dinner table' },
];

export const testimonials = [
  {
    quote: 'One of those places where every detail feels authentically Italian.',
    author: 'Sofia Romano',
    role: 'Food writer',
  },
  {
    quote: 'The handmade pasta has the quiet confidence of a family recipe perfected over decades.',
    author: 'Luca Ferri',
    role: 'Sommelier',
  },
  {
    quote: 'Warm, cinematic and deeply memorable. Casa Bellini turns dinner into a ritual.',
    author: 'Elena Conti',
    role: 'Guest',
  },
];
