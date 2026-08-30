export const images = {
  hero: '/hero-casa-bellini-clean.png',
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
  table:
    'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=85',
};

export const signatureDishes = [
  {
    name: 'Tagliatelle al Tartufo',
    description: 'Massa fresca artesanal, parmesão e trufa negra.',
    price: 'EUR 28',
    image: images.truffle,
    alt: 'Tagliatelle artesanal com parmesão e trufa negra',
  },
  {
    name: 'Risotto ai Funghi',
    description: 'Arroz carnaroli, cogumelos porcini e parmesão maturado.',
    price: 'EUR 24',
    image: images.risotto,
    alt: 'Risoto cremoso de cogumelos finalizado com parmesão',
  },
  {
    name: 'Branzino Mediterraneo',
    description: 'Robalo, tomates assados, azeitonas e ervas frescas.',
    price: 'EUR 32',
    image: images.branzino,
    alt: 'Robalo mediterrâneo com ervas e legumes assados',
  },
];

export const menuCategories = [
  {
    name: 'Entradas',
    dishes: [
      ['Burrata Pugliese', 'Tomates heirloom, azeite de manjericão e sal marinho.', 'EUR 16'],
      ['Carciofi alla Romana', 'Alcachofras braseadas, hortelã e raspas de limão.', 'EUR 14'],
      ['Vitello Tonnato', 'Vitela cozida lentamente, molho de atum e alcaparras.', 'EUR 18'],
      ['Fiori di Zucca', 'Flores de abobrinha, ricota e anchova.', 'EUR 15'],
      ['Crudo di Branzino', 'Robalo, cítricos, azeite de oliva e funcho.', 'EUR 19'],
      ['Olive Ascolane', 'Azeitonas recheadas com aioli de alecrim.', 'EUR 12'],
    ],
  },
  {
    name: 'Massas',
    dishes: [
      ['Tagliatelle al Tartufo', 'Massa artesanal, parmesão e trufa negra.', 'EUR 28'],
      ['Tortelli di Zucca', 'Tortelli de abóbora, manteiga de sálvia e amaretti.', 'EUR 24'],
      ['Pappardelle al Ragu', 'Ragu bovino braseado lentamente e pecorino.', 'EUR 26'],
      ['Spaghetti alle Vongole', 'Vongoles, vinho branco, alho e salsa.', 'EUR 25'],
      ['Gnocchi Sorrentina', 'Tomate, manjericão e mozzarella defumada.', 'EUR 21'],
      ['Cacio e Pepe', 'Tonnarelli, pecorino romano e pimenta-do-reino.', 'EUR 20'],
    ],
  },
  {
    name: 'Principais',
    dishes: [
      ['Branzino Mediterraneo', 'Robalo, tomates, azeitonas e ervas frescas.', 'EUR 32'],
      ['Bistecca Fiorentina', 'T-bone na brasa, alecrim e sal marinho.', 'EUR 58'],
      ['Pollo al Limone', 'Frango orgânico, limão, tomilho e vinho branco.', 'EUR 29'],
      ['Osso Buco Milanese', 'Ossobuco de vitela, risoto de açafrão e gremolata.', 'EUR 38'],
      ['Melanzane Ripiene', 'Berinjela assada, ervas e provola defumada.', 'EUR 24'],
      ['Costolette d Agnello', 'Costeletas de cordeiro, azeitonas e folhas da estação.', 'EUR 36'],
    ],
  },
  {
    name: 'Sobremesas',
    dishes: [
      ['Tiramisu Classico', 'Mascarpone, espresso e cacau.', 'EUR 12'],
      ['Panna Cotta', 'Creme de baunilha, frutas vermelhas e balsâmico maturado.', 'EUR 11'],
      ['Cannoli Siciliani', 'Ricota, pistache e laranja cristalizada.', 'EUR 12'],
      ['Torta Caprese', 'Chocolate, amêndoas e creme batido.', 'EUR 13'],
      ['Affogato Cucina', 'Gelato fior di latte e espresso.', 'EUR 9'],
      ['Gelati Artigianali', 'Três gelatos artesanais da estação.', 'EUR 10'],
    ],
  },
  {
    name: 'Vinhos',
    dishes: [
      ['Barolo, Piemonte', 'Nebbiolo estruturado com notas de rosa e especiarias.', 'EUR 18'],
      ['Chianti Classico', 'Sangiovese com cereja, ervas e cedro.', 'EUR 14'],
      ['Vermentino di Sardegna', 'Branco mineral com cítricos e salinidade.', 'EUR 13'],
      ['Franciacorta Brut', 'Borbulhas elegantes pelo método clássico.', 'EUR 16'],
      ['Etna Rosso', 'Nerello mascalese de solos vulcânicos.', 'EUR 15'],
      ['Vin Santo', 'Vinho de sobremesa toscano com notas de amêndoa.', 'EUR 12'],
    ],
  },
];

export const galleryItems = [
  { title: 'Massa feita à mão', image: images.aboutPasta, alt: 'Massa artesanal fresca polvilhada com farinha' },
  { title: 'Sala Cucina', image: images.interior, alt: 'Interior sofisticado de restaurante com luz quente' },
  { title: 'Tiramisu', image: images.tiramisu, alt: 'Tiramisu clássico servido de forma elegante' },
  { title: 'Mesa mediterrânea', image: images.table, alt: 'Mesa italiana elegante com pratos mediterrâneos e vinho' },
  { title: 'Taça de vinho', image: images.wine, alt: 'Vinho tinto servido em uma taça de cristal' },
  { title: 'Chef em ação', image: images.chef, alt: 'Chef finalizando um prato refinado na cozinha' },
];

export const testimonials = [
  {
    quote: 'Um daqueles lugares em que cada detalhe parece autenticamente italiano.',
    author: 'Sofia Romano',
    role: 'Crítica gastronômica',
  },
  {
    quote: 'A massa artesanal tem a confiança serena de uma receita familiar aperfeiçoada por décadas.',
    author: 'Luca Ferri',
    role: 'Sommelier',
  },
  {
    quote: 'Acolhedor, cinematográfico e profundamente memorável. O Resto Cucina transforma o jantar em ritual.',
    author: 'Elena Conti',
    role: 'Cliente',
  },
  {
    quote: 'Serviço preciso, vinho impecável e pratos que chegam à mesa com alma de trattoria elegante.',
    author: 'Marco Bellandi',
    role: 'Cliente',
  },
  {
    quote: 'A luz, o aroma do forno e o cuidado da equipe fazem a noite parecer uma pequena viagem à Itália.',
    author: 'Camila Moretti',
    role: 'Cliente',
  },
];
