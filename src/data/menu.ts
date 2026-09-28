export type Diet = "veg" | "nonveg";

export type MenuItem = {
  name: string;
  price: number;
  full?: number;
  diet: Diet;
  popular?: boolean;
};

export type BiryaniItem = {
  name: string;
  diet: Diet;
  popular?: boolean;
  sizes: { label: string; price: number }[];
};

export type MenuSection = {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
};

const v = (name: string, price: number, popular?: boolean, full?: number): MenuItem => ({
  name,
  price,
  diet: "veg",
  ...(popular ? { popular } : {}),
  ...(full ? { full } : {}),
});
const n = (name: string, price: number, popular?: boolean, full?: number): MenuItem => ({
  name,
  price,
  diet: "nonveg",
  ...(popular ? { popular } : {}),
  ...(full ? { full } : {}),
});

// ─── Biryanis ────────────────────────────────────────────────────────────────
export const biryanis: BiryaniItem[] = [
  // VEG
  {
    name: "Zafrani Hyderabadi Veg Dum Biryani",
    diet: "veg",
    sizes: [
      { label: "Serve 1", price: 349 },
      { label: "Full", price: 569 },
      { label: "Family Pack", price: 1149 },
      { label: "Jumbo Pack", price: 1389 },
    ],
  },
  {
    name: "Kaju Paneer Biryani",
    diet: "veg",
    popular: true,
    sizes: [
      { label: "Serve 1", price: 469 },
      { label: "Full", price: 749 },
      { label: "Family Pack", price: 1429 },
      { label: "Jumbo Pack", price: 1829 },
    ],
  },
  {
    name: "Paneer Biryani",
    diet: "veg",
    sizes: [
      { label: "Serve 1", price: 389 },
      { label: "Full", price: 649 },
      { label: "Family Pack", price: 1289 },
      { label: "Jumbo Pack", price: 1469 },
    ],
  },
  {
    name: "Mushroom Biryani",
    diet: "veg",
    popular: true,
    sizes: [
      { label: "Serve 1", price: 389 },
      { label: "Full", price: 649 },
      { label: "Family Pack", price: 1289 },
      { label: "Jumbo Pack", price: 1469 },
    ],
  },
  // NON-VEG
  {
    name: "Zafrani Hyderabadi Chicken Dum Biryani",
    diet: "nonveg",
    popular: true,
    sizes: [
      { label: "Serve 1", price: 489 },
      { label: "Full", price: 889 },
      { label: "Family Pack", price: 1689 },
      { label: "Jumbo Pack", price: 1949 },
      { label: "Special With Egg", price: 519 },
    ],
  },
  {
    name: "Zafrani Hyderabadi Mutton Dum Biryani",
    diet: "nonveg",
    popular: true,
    sizes: [
      { label: "Serve 1", price: 489 },
      { label: "Full", price: 889 },
      { label: "Family Pack", price: 1689 },
      { label: "Jumbo Pack", price: 1949 },
      { label: "Special With Egg", price: 519 },
    ],
  },
  {
    name: "Chicken Boneless Biryani",
    diet: "nonveg",
    popular: true,
    sizes: [
      { label: "Serve 1", price: 449 },
      { label: "Full", price: 789 },
      { label: "Family Pack", price: 1489 },
      { label: "Jumbo Pack", price: 1949 },
    ],
  },
  {
    name: "Chicken Tangdi Masala Biryani",
    diet: "nonveg",
    popular: true,
    sizes: [
      { label: "Serve 1", price: 449 },
      { label: "Full", price: 869 },
      { label: "Family Pack", price: 1489 },
      { label: "Jumbo Pack", price: 1949 },
    ],
  },
  {
    name: "Chicken Fry Piece Biryani",
    diet: "nonveg",
    popular: true,
    sizes: [
      { label: "Serve 1", price: 369 },
      { label: "Full", price: 639 },
      { label: "Family Pack", price: 1289 },
      { label: "Jumbo Pack", price: 1649 },
    ],
  },
  {
    name: "Mutton Fry Piece Biryani",
    diet: "nonveg",
    popular: true,
    sizes: [
      { label: "Serve 1", price: 489 },
      { label: "Full", price: 889 },
      { label: "Family Pack", price: 1689 },
      { label: "Jumbo Pack", price: 1949 },
    ],
  },
  {
    name: "Egg Dum Biryani",
    diet: "nonveg",
    sizes: [
      { label: "Serve 1", price: 339 },
      { label: "Full", price: 569 },
      { label: "Family Pack", price: 1379 },
      { label: "Jumbo Pack", price: 1609 },
    ],
  },
  {
    name: "Fish Biryani",
    diet: "nonveg",
    sizes: [
      { label: "Serve 1", price: 409 },
      { label: "Full", price: 639 },
      { label: "Family Pack", price: 1329 },
      { label: "Jumbo Pack", price: 1719 },
    ],
  },
  {
    name: "Prawns Biryani",
    diet: "nonveg",
    popular: true,
    sizes: [
      { label: "Serve 1", price: 509 },
      { label: "Full", price: 1029 },
      { label: "Family Pack", price: 1829 },
      { label: "Jumbo Pack", price: 2129 },
    ],
  },
  {
    name: "Chicken 65 Biryani",
    diet: "nonveg",
    sizes: [
      { label: "Serve 1", price: 369 },
      { label: "Full", price: 639 },
      { label: "Family Pack", price: 1289 },
      { label: "Jumbo Pack", price: 1649 },
    ],
  },
];

// ─── Menu sections ────────────────────────────────────────────────────────────
export const sections: MenuSection[] = [
  // SOUPS
  {
    id: "soups",
    title: "Soups",
    items: [
      // VEG
      v("Veg Hot And Sour Soup", 269),
      v("Sweet Corn Soup", 269),
      v("Veg Manchow Soup", 269),
      v("Cream of Mushroom Soup", 299, true),
      v("Veg Lemon Coriander Soup", 269, true),
      // NON-VEG
      n("Chicken Hot And Sour Soup", 289),
      n("Chicken Manchow Soup", 289),
      n("Chicken Long Pong Soup", 289, true),
      n("Chicken Lemon Coriander Soup", 289, true),
    ],
  },

  // STARTERS
  {
    id: "starters",
    title: "Starters",
    items: [
      // VEG
      v("Crispy Corn", 329, true),
      v("Crispy Mushroom", 349),
      v("Chilli Mushroom", 349),
      v("Mushroom Salt And Pepper", 349, true),
      v("Paneer 65", 389),
      v("Chilli Paneer", 389, true),
      v("Paneer Manchurian", 389),
      v("Veg Manchurian", 329),
      v("Gobi Manchurian", 349),
      v("Gobi 65", 349, true),
      v("Honey Chilli Potato", 329),
      v("French Fries", 289),
      v("Crispy Chilli Garlic Potato", 329, true),
      v("Chilli Baby Corn", 349),
      v("Baby Corn Garlic Fried", 349, true),
      v("Veg Spring Roll", 389),
      // NON-VEG
      n("Chicken 65", 389),
      n("Chilli Chicken", 389),
      n("Chicken Lollipop", 389, true),
      n("Chicken Drumsticks", 389),
      n("Pepper Chicken", 389),
      n("Lemon Coriander Chicken", 389, true),
      n("Chicken Manchurian", 389),
      n("Korean Fried Chicken Wings", 389, true),
      n("Crispy Fried Chicken Wings", 389),
      n("Kaju Chicken", 429, true),
      n("Dragon Chicken", 429),
      n("Chicken Majestic", 429, true),
      n("Chicken Pakoda", 369),
      n("Chicken Ghee Roast", 449, true),
      n("Mutton Ghee Roast", 519, true),
      n("Loose Prawns", 449, true),
      n("Chilli Garlic Prawns", 449, true),
      n("Butter Garlic Prawns", 449, true),
      n("Chilli Fish", 449),
      n("Fish Fry", 429),
      n("Apollo Fish", 439, true),
      n("Egg Chilly", 349),
      n("Black Pepper Chicken", 389),
      n("Chicken Hot & Red", 409),
      n("Fish Finger", 429),
      n("Spicy Fried Chicken", 389, true),
      n("Chicken Spring Roll", 429),
    ],
  },

  // TANDOOR
  {
    id: "tandoor",
    title: "Tandoor",
    note: "Priced Half / Full",
    items: [
      // VEG
      v("Malai Paneer", 389, false, 589),
      v("Achari Paneer Tikka", 389, true, 589),
      v("Lal Mirch Ka Paneer Tikka", 389, false, 589),
      v("Tandoori Mushroom", 389, false, 589),
      v("Special Paneer Tikka", 429, true, 639),
      v("Hariyali Paneer Tikka", 389, false, 589),
      v("Tandoori Platter Veg", 1139),
      v("Chukandi Kebab", 409, false, 639),
      v("Stuffed Mushroom Tikka", 409, false, 639),
      v("Pineapple Tikka", 369, false, 589),
      v("Multani Paneer Tikka", 409, true, 639),
      // NON-VEG
      n("Tandoori Chicken", 409, true, 639),
      n("Malai Murg Kebab Boneless", 409, true, 639),
      n("Banjara Kebab", 409, false, 639),
      n("Chicken Tikka", 409, false, 639),
      n("Chicken Angara Kebab", 409, true, 639),
      n("Special Lehsuni Murg", 429, true, 659),
      n("Hari Mirch Kebab", 409, false, 639),
      n("Tangdi Kebab", 409, true, 639),
      n("Chicken Seekh Kebab", 409, false, 639),
      n("Tandoori Prawns", 519, false, 749),
      n("Mutton Seekh Kebab", 429, false, 659),
      n("Tandoori Platter Non Veg", 1419),
      n("Burmese Tangdi", 409, true, 639),
      n("Murgh Patiyala", 429, true, 659),
      n("Arab Tandoori", 429, true, 659),
      n("Chicken Nawabi Kebab", 429, true, 659),
      n("Chicken Laziz Tikka", 409, true, 639),
      n("Ajwain Fish Tikka", 439, false, 639),
      n("Achari Fish Tikka", 439, false, 639),
      n("Afgani Fish Tikka", 439, false, 639),
      n("Fish Tikka", 439, false, 639),
    ],
  },

  // CURRIES
  {
    id: "curries",
    title: "Indian Curries & Main Course",
    items: [
      // VEG
      v("Dal Tadka", 269, true),
      v("Dal Fry", 279),
      v("Mixed Veg Curry", 309),
      v("Veg Kadai", 309),
      v("Aloo Gobi Masala", 299),
      v("Veg Chatpata", 329),
      v("Lehsuni Palak Paneer", 369, true),
      v("Paneer Butter Masala", 369, true),
      v("Kaju Paneer Curry", 379, true),
      v("Kadai Paneer", 339, true),
      v("Mushroom Curry", 339, true),
      v("Mushroom Butter Masala", 349),
      v("Mutter Mushroom", 349, true),
      v("Kaju Curry", 369),
      v("Paneer Multani Masala", 369, true),
      v("Shahi Paneer", 379, true),
      v("Malai Kofta", 399, true),
      v("Methi Chaman", 379),
      // NON-VEG
      n("Butter Chicken", 409, true),
      n("Chicken Curry", 379),
      n("Chicken Mughlai", 409, true),
      n("Afghani Chicken", 429, true),
      n("Andhra Chicken Curry", 339, true),
      n("Kadai Chicken", 379),
      n("Charminar Special Chicken Curry", 429, true),
      n("Chicken Tikka Masala", 429),
      n("Chicken Boneless Curry", 429),
      n("Chicken Chatpata", 369),
      n("Chicken Kolhapuri", 369),
      n("Chettinad Chicken Curry", 369, true),
      n("Mutton Curry", 449),
      n("Kadai Mutton", 449, true),
      n("Mutton Dopyaza", 449),
      n("Prawns Curry", 449, true),
      n("Egg Curry", 339),
      n("Egg Bhurji", 229),
      n("Egg Keema Masala", 309, true),
      n("Mutton Lal Maas", 479),
      n("Mutton Rogan Josh", 489, true),
      n("Mutton Marag", 489, true),
    ],
  },

  // BREADS
  {
    id: "breads",
    title: "Breads",
    items: [
      v("Tandoori Roti (100% Wheat)", 69),
      v("Rumali Roti", 89),
      v("Butter Roti (100% Wheat)", 79),
      v("Pudina Roti (100% Wheat)", 79),
      v("Garlic Roti (100% Wheat)", 89),
      v("Phulka (100% Wheat)", 49),
      v("Plain Naan", 79),
      v("Butter Naan", 99, true),
      v("Garlic Naan", 119, true),
      v("Onion Naan", 99),
      v("Kulcha", 119),
      v("Masala Kulcha", 149, true),
      v("Paneer Kulcha", 169),
      v("Chicken Keema Naan", 169),
      v("Puff Naan", 129, true),
      v("Folding Naan", 119),
    ],
  },

  // FRIED RICE
  {
    id: "fried-rice",
    title: "Fried Rice",
    items: [
      // VEG
      v("Veg Fried Rice", 289),
      v("Veg Burnt Garlic Fried Rice", 309, true),
      v("Veg Schezwan Fried Rice", 299),
      v("Paneer Fried Rice", 309),
      v("Mushroom Fried Rice", 309, true),
      v("Mix Veg Fried Rice", 339),
      v("Schezwan Rice", 299, true),
      // NON-VEG
      n("Egg Fried Rice", 309),
      n("Double Egg Fried Rice", 339),
      n("Chicken Fried Rice", 339),
      n("Double Egg Chicken Fried Rice", 369, true),
      n("Chicken Burnt Garlic Fried Rice", 379, true),
      n("Schezwan Chicken Fried Rice", 339),
      n("Mixed Non Veg Fried Rice", 409, true),
    ],
  },

  // NOODLES
  {
    id: "noodles",
    title: "Noodles",
    items: [
      // VEG
      v("Veg Noodles", 289),
      v("Veg Soft Noodles", 309),
      v("Veg Schezwan Noodles", 299),
      v("Veg Burnt Garlic Noodles", 309, true),
      v("Veg Hakka Noodles", 309),
      v("Mix Veg Noodles", 339, true),
      // NON-VEG
      n("Egg Noodles", 309),
      n("Double Egg Noodles", 339),
      n("Chicken Noodles", 339),
      n("Double Egg Chicken Noodles", 369, true),
      n("Chicken Hakka Noodles", 349),
      n("Chicken Soft Noodles", 339),
      n("Chicken Burnt Garlic Noodles", 369, true),
      n("Chicken Schezwan Noodles", 339),
      n("Mixed Non Veg Noodles", 409, true),
    ],
  },

  // RICE & COMBOS
  {
    id: "rice-combos",
    title: "Rice & Combos",
    items: [
      // VEG
      v("Curd Rice", 269),
      v("Curd Rice With Paneer Pakoda", 309),
      v("Sambar Rice", 279),
      v("Sambar Rice With Paneer Pakoda", 309),
      v("Jeera Rice", 219, true),
      v("Steamed Rice", 199),
      v("Biryani Rice", 219),
      v("Kaju Rice", 249, true),
      v("Ghee Rice", 219, true),
      // NON-VEG
      n("Curd Rice With Chicken 65", 339),
      n("Curd Rice With Chicken Pakoda", 329),
      n("Sambar Rice With Chicken Pakoda", 339),
    ],
  },

  // DESSERTS
  {
    id: "desserts",
    title: "Desserts",
    items: [
      v("Gulab Jamun", 139, true),
      v("Double Ka Meetha", 139),
      v("Apricot Delight", 259, true),
    ],
  },

  // MOCKTAILS
  {
    id: "mocktails",
    title: "Mocktails",
    items: [
      v("Watermelon Mojito", 199, true),
      v("Orange Mix", 199),
      v("Mango Crush", 199, true),
      v("Virgin Mojito", 199),
      v("Blue Lagoon Splash", 219, true),
      v("Kiwi Blast", 219),
      v("Strawberry Delight", 229),
      v("Peaceful Peach", 199),
      v("Vanilla Rush", 199),
    ],
  },

  // ACCOMPANIMENTS
  {
    id: "accompaniments",
    title: "Accompaniments",
    items: [
      v("Green Salad", 149),
      v("Masala Papad", 149),
      v("Coke", 59),
      v("Thums Up", 59),
      v("Sprite", 59),
      v("Pepsi", 59),
      v("Masala Cold Drink", 179, true),
      v("Diet Coke", 70),
      v("Mountain Dew", 59),
    ],
  },
];
