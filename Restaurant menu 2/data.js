const menu = [
  {
    id: 1,
    title: "Caesar Salad",
    category: "lunch",
    price: 11.99,
    img: "./images/caesarsalad.jpeg",
    desc: `Romaine and kale lettuce with caesar dressing and croutons. Add grilled chicken for $4.99 `,
  },

  {
    id: 2,
    title: "Seasonal Salad",
    category: "lunch",
    price: 11.99,
    img: "./images/seasonalsalad.jpeg",
    desc: `Organic mixed lettuce with fresh fruit. Add grilled chicken for $4.99`,
  },
  {
    id: 3,
    title: "Soup of the Day",
    category: "lunch",
    price: 7.99,
    img: "./images/soupofthedaylunch.jpeg",
    desc: ` `,
  },

  {
    id: 4,
    title: "Sirloin Steak Sandwich",
    category: "lunch",
    price: 17.99,
    img: "./images/sirloinsteak.jpeg",
    desc: `With onions and fontina cheese `,
  },

  {
    id: 5,
    title: "Cheeseburger",
    category: "lunch",
    price: 14.99,
    img: "./images/cheeseburger.jpeg",
    desc: `with lettuce and tomato `,
  },

  {
    id: 6,
    title: "Cheese Ravioli",
    category: "lunch",
    price: 17.99,
    img: "./images/cheeseravioli.jpeg",
    desc: `Homemade with tomato and basil sauce `,
  },

  {
    id: 7,
    title: "Rigatoni Shrimp and Scallops",
    category: "lunch",
    price: 11.99,
    img: "./images/rigatoniwithshrimpandscallops.jpeg",
    desc: `Homemade rigatoni in vodka sauce`,
  },

  {
    id: 8,
    title: "Chicken or Veal Capri",
    category: "lunch",
    price: 21.99,
    img: "./images/chickencapri.jpeg",
    desc: `Breaded cutlet topped with fresh tomato and mozzarella `,
  },

  {
    id: 9,
    title: "Calimari Maranara",
    category: "lunch",
    price: 19.99,
    img: "./images/calimarimaranara.jpeg",
    desc: `Calamari in our marinara sauce over linguni `,
  },

  {
    id: 10,
    title: "Baked Stuffed Shrimp",
    category: "lunch",
    price: 18.99,
    img: "./images/bakedstuffedshrimp.jpeg",
    desc: `Baked shrimp stuffed with our homemade filling `,
  },

  {
    id: 11,
    title: "House Salad",
    category: "dinner",
    price: 11.99,
    img: "./images/housesalad.jpeg",
    desc: `Hearts of romaine, tomato, red onion, and shredded carrots with a choice of dressing `,
  },

  {
    id: 12,
    title: "Portabello Salad",
    category: "dinner",
    price: 11.99,
    img: "./images/portabellosalad.jpeg",
    desc: `Marinated portabello with roasted peppers and balsamic dressing`,
  },

  {
    id: 13,
    title: "Soup of the Day",
    category: "dinner",
    price: 7.99,
    img: "./images/soupofthedaylunch.jpeg",
    desc: ` `,
  },

  {
    id: 14,
    title: "Lobster Stuffed Mushrooms",
    category: "dinner",
    price: 14.99,
    img: "./images/lobsterstuffedmushrooms.jpeg",
    desc: `Homemade lobster stuffing with garlic, butter, and parsley `,
  },

  {
    id: 15,
    title: "Baked Clams",
    category: "dinner",
    price: 16.99,
    img: "./images/bakedclams.jpeg",
    desc: `Seasoned breadcrumbs, garlic, parsley, butter, and white wine `,
  },

  {
    id: 16,
    title: "Fried Calamari",
    category: "dinner",
    price: 17.99,
    img: "./images/friedcalamari.jpeg",
    desc: `Comes with spicy garlic aioli `,
  },
  {
    id: 17,
    title: "Penne Chicken Alfredo",
    category: "dinner",
    price: 23.99,
    img: "./images/pennechickenalfredo.jpeg",
    desc: `Diced breaded chicken cutlet with alfredo sauce `,
  },

  {
    id: 18,
    title: "Spaghetti with Meatballs",
    category: "dinner",
    price: 21.99,
    img: "./images/spaghettiwithmeatballs.jpeg",
    desc: `Homemade meatballs with tomato sauce `,
  },

  {
    id: 19,
    title: "Rigatoni Alla Vodka",
    category: "dinner",
    price: 21.99,
    img: "./images/rigatoniallavodka.jpeg",
    desc: `Fresh ground beef with parmigiano cheese `,
  },

  {
    id: 20,
    title: "Eggplant Parm",
    category: "dinner",
    price: 25.99,
    img: "./images/eggplantparm.jpeg",
    desc: `served with spaghetti `,
  },

  {
    id: 21,
    title: "Chicken Marsala",
    category: "dinner",
    price: 24.99,
    img: "./images/chickenmarsala.jpeg",
    desc: `Marsala sauce and mushrooms `,
  },

  {
    id: 22,
    title: "Chicken Francaise",
    category: "dinner",
    price: 23.99,
    img: "./images/chickenfrancaise.jpeg",
    desc: `Egg battered, lemon, white wine, butter `,
  },

  {
    id: 23,
    title: "Chicken Parm",
    category: "dinner",
    price: 26.99,
    img: "./images/chickenparm.jpeg",
    desc: `fresh tomato, mozzarella, and grated cheese `,
  },

  {
    id: 24,
    title: "Grilled Salmon",
    category: "dinner",
    price: 28.99,
    img: "./images/grilledsalmon.jpeg",
    desc: `Served with fresh mixed vegetables and roasted potatoes`,
  },

  {
    id: 25,
    title: "Grilled Trout",
    category: "dinner",
    price: 27.99,
    img: "./images/grilledtrout.jpeg",
    desc: `Served with fresh herbs `,
  },

  {
    id: 26,
    title: "Vanilla or Chocolate Ice Cream",
    category: "dessert",
    price: 6.99,
    img: "./images/icecream.jpeg",
    desc: `Served with whipped cream and Chocoalte syrup `,
  },

  {
    id: 27,
    title: "Chocolate Lava Cake",
    category: "dessert",
    price: 9.99,
    img: "./images/chocolatelavacake.jpeg",
    desc: `Served warm with vanilla ice cream `,
  },

  {
    id: 28,
    title: "New York Style Cheesecake",
    category: "dessert",
    price: 9.99,
    img: "./images/cheesecake.jpeg",
    desc: `Served with graham cracker crust `,
  },

  {
    id: 29,
    title: "Tiramisu",
    category: "dessert",
    price: 11.99,
    img: "./images/tiramisu.jpeg",
    desc: ` `,
  },

  {
    id: 30,
    title: "Cannolis",
    category: "dessert",
    price: 8.99,
    img: "./images/cannoli.jpeg",
    desc: `Freshly filled `,
  },
];
export default menu;
