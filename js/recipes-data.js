// Recipe Data
const recipesData = [
  {
    id: 1,
    title: "Classic Margherita Pizza",
    description: "Authentic Italian pizza with fresh mozzarella, basil, and San Marzano tomatoes. A timeless favorite that never disappoints.",
    category: "Dinner",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=600&fit=crop",
    prepTime: "20 min",
    cookTime: "15 min",
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "500g pizza dough",
      "200g San Marzano tomatoes, crushed",
      "250g fresh mozzarella, sliced",
      "Fresh basil leaves",
      "2 tbsp olive oil",
      "2 cloves garlic, minced",
      "Salt and pepper to taste",
      "Semolina flour for dusting"
    ],
    instructions: [
      "Preheat your oven to the highest temperature (usually 250°C/480°F) with a pizza stone inside for at least 30 minutes.",
      "Roll out the pizza dough on a floured surface to about 12 inches in diameter.",
      "Mix crushed tomatoes with minced garlic, olive oil, salt, and pepper to create the sauce.",
      "Spread a thin layer of tomato sauce over the dough, leaving a 1-inch border.",
      "Distribute mozzarella slices evenly over the sauce.",
      "Transfer pizza to the preheated pizza stone using a pizza peel dusted with semolina.",
      "Bake for 12-15 minutes until the crust is golden and cheese is bubbling.",
      "Remove from oven, top with fresh basil leaves, drizzle with olive oil, and serve immediately."
    ],
    tips: [
      "Use high-quality fresh mozzarella for the best flavor and texture",
      "Don't overload the pizza with toppings - less is more for authentic Italian style",
      "If you don't have a pizza stone, use an inverted baking sheet preheated in the oven"
    ]
  },
  {
    id: 2,
    title: "Grilled Salmon with Lemon Herb Butter",
    description: "Perfectly grilled salmon fillet topped with aromatic lemon herb butter. Healthy, flavorful, and ready in under 30 minutes.",
    category: "Dinner",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=600&fit=crop",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "4 salmon fillets (6 oz each)",
      "3 tbsp butter, softened",
      "2 tbsp fresh parsley, chopped",
      "1 tbsp fresh dill, chopped",
      "1 lemon (zest and juice)",
      "2 cloves garlic, minced",
      "Salt and black pepper",
      "Olive oil for grilling"
    ],
    instructions: [
      "Preheat your grill to medium-high heat (about 400°F/200°C).",
      "In a small bowl, mix softened butter with parsley, dill, lemon zest, garlic, salt, and pepper.",
      "Pat salmon fillets dry and brush both sides with olive oil. Season with salt and pepper.",
      "Place salmon skin-side down on the grill. Cook for 6-8 minutes without moving.",
      "Carefully flip the salmon and cook for another 4-6 minutes until it flakes easily with a fork.",
      "Remove from grill and immediately top each fillet with a dollop of lemon herb butter.",
      "Squeeze fresh lemon juice over the salmon and let rest for 2 minutes before serving."
    ],
    tips: [
      "Don't flip the salmon too early - wait until it releases easily from the grill",
      "The salmon is done when it reaches an internal temperature of 145°F (63°C)",
      "Make extra herb butter and store it in the freezer for future use"
    ]
  },
  {
    id: 3,
    title: "Chocolate Lava Cake",
    description: "Decadent individual chocolate cakes with a molten center. The perfect dessert for chocolate lovers and special occasions.",
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&h=600&fit=crop",
    prepTime: "15 min",
    cookTime: "12 min",
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "6 oz dark chocolate (70% cocoa)",
      "6 tbsp unsalted butter",
      "2 large eggs",
      "2 egg yolks",
      "1/4 cup granulated sugar",
      "2 tbsp all-purpose flour",
      "1/4 tsp salt",
      "Butter and cocoa powder for ramekins",
      "Vanilla ice cream for serving"
    ],
    instructions: [
      "Preheat oven to 425°F (220°C). Butter four 6-oz ramekins and dust with cocoa powder.",
      "Melt chocolate and butter together in a double boiler or microwave, stirring until smooth.",
      "In a separate bowl, whisk eggs, egg yolks, and sugar until thick and pale (about 2 minutes).",
      "Gently fold the melted chocolate mixture into the egg mixture.",
      "Sift in flour and salt, folding gently until just combined.",
      "Divide batter evenly among prepared ramekins, filling them about 3/4 full.",
      "Bake for 12-14 minutes until edges are firm but center is still soft.",
      "Let cool for 1 minute, then invert onto plates. Serve immediately with vanilla ice cream."
    ],
    tips: [
      "The timing is crucial - underbake slightly for a runnier center, or bake longer for a more cake-like texture",
      "You can prepare these up to 4 hours ahead and refrigerate, then bake when ready to serve (add 2-3 minutes to baking time)",
      "Use high-quality chocolate for the best flavor"
    ]
  },
  {
    id: 4,
    title: "Caesar Salad with Homemade Dressing",
    description: "Crisp romaine lettuce with creamy Caesar dressing, parmesan, and crunchy croutons. A classic that never gets old.",
    category: "Lunch",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&h=600&fit=crop",
    prepTime: "15 min",
    cookTime: "10 min",
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "2 large romaine lettuce hearts",
      "1 cup parmesan cheese, shaved",
      "2 cups croutons",
      "For the dressing:",
      "3 garlic cloves, minced",
      "2 anchovy fillets",
      "1/4 cup lemon juice",
      "1 tsp Dijon mustard",
      "1 egg yolk",
      "3/4 cup olive oil",
      "1/4 cup parmesan, grated",
      "Salt and pepper to taste"
    ],
    instructions: [
      "For the dressing: In a food processor, blend garlic, anchovies, lemon juice, Dijon, and egg yolk until smooth.",
      "With processor running, slowly drizzle in olive oil until emulsified and creamy.",
      "Add grated parmesan, salt, and pepper. Pulse to combine. Adjust seasoning to taste.",
      "Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.",
      "In a large bowl, toss lettuce with dressing until well coated.",
      "Add half of the parmesan shavings and croutons, toss gently.",
      "Transfer to serving plates and top with remaining parmesan and croutons.",
      "Serve immediately while crisp and fresh."
    ],
    tips: [
      "Make sure the lettuce is completely dry for the dressing to adhere properly",
      "The dressing can be made ahead and refrigerated for up to 3 days",
      "For a heartier meal, top with grilled chicken or shrimp"
    ]
  },
  {
    id: 5,
    title: "Blueberry Pancakes",
    description: "Fluffy buttermilk pancakes studded with fresh blueberries. The perfect way to start your weekend morning.",
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800&h=600&fit=crop",
    prepTime: "10 min",
    cookTime: "20 min",
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "2 cups all-purpose flour",
      "2 tbsp granulated sugar",
      "2 tsp baking powder",
      "1 tsp baking soda",
      "1/2 tsp salt",
      "2 cups buttermilk",
      "2 large eggs",
      "4 tbsp melted butter",
      "1 tsp vanilla extract",
      "1 1/2 cups fresh blueberries",
      "Butter for cooking",
      "Maple syrup for serving"
    ],
    instructions: [
      "In a large bowl, whisk together flour, sugar, baking powder, baking soda, and salt.",
      "In another bowl, whisk buttermilk, eggs, melted butter, and vanilla until combined.",
      "Pour wet ingredients into dry ingredients and stir until just combined (batter should be lumpy).",
      "Gently fold in blueberries, being careful not to overmix.",
      "Heat a griddle or large pan over medium heat. Add a small amount of butter.",
      "Pour 1/4 cup batter for each pancake. Cook until bubbles form on surface (about 3 minutes).",
      "Flip and cook until golden brown on the other side (about 2 minutes).",
      "Serve warm with butter and maple syrup."
    ],
    tips: [
      "Don't overmix the batter - lumps are okay and will result in fluffier pancakes",
      "Let the batter rest for 5 minutes before cooking for even fluffier pancakes",
      "Frozen blueberries work too, but don't thaw them first to avoid purple batter"
    ]
  },
  {
    id: 6,
    title: "Thai Green Curry",
    description: "Aromatic and creamy Thai curry with vegetables and your choice of protein. Bursting with authentic flavors.",
    category: "Dinner",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&h=600&fit=crop",
    prepTime: "15 min",
    cookTime: "25 min",
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "2 tbsp vegetable oil",
      "3 tbsp Thai green curry paste",
      "1 can (14 oz) coconut milk",
      "1 cup chicken or vegetable broth",
      "1 lb chicken breast, sliced (or tofu)",
      "1 red bell pepper, sliced",
      "1 cup bamboo shoots",
      "1 cup Thai basil leaves",
      "2 tbsp fish sauce",
      "1 tbsp palm sugar (or brown sugar)",
      "2 kaffir lime leaves",
      "Steamed jasmine rice for serving"
    ],
    instructions: [
      "Heat oil in a large pan or wok over medium-high heat.",
      "Add curry paste and fry for 1-2 minutes until fragrant.",
      "Pour in half the coconut milk and stir until the oil separates (about 3 minutes).",
      "Add chicken and cook until no longer pink (about 5 minutes).",
      "Pour in remaining coconut milk and broth. Bring to a simmer.",
      "Add bell pepper, bamboo shoots, and kaffir lime leaves. Simmer for 10 minutes.",
      "Stir in fish sauce and palm sugar. Adjust seasoning to taste.",
      "Remove from heat and stir in Thai basil leaves. Serve over jasmine rice."
    ],
    tips: [
      "Frying the curry paste in the coconut cream intensifies the flavors",
      "Adjust the amount of curry paste based on your spice preference",
      "Fresh kaffir lime leaves make a big difference - look for them in Asian markets"
    ]
  },
  {
    id: 7,
    title: "Classic Beef Burger",
    description: "Juicy homemade beef burger with all the fixings. Simple, satisfying, and always a crowd-pleaser.",
    category: "Lunch",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop",
    prepTime: "15 min",
    cookTime: "10 min",
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "1.5 lbs ground beef (80/20)",
      "Salt and black pepper",
      "4 burger buns",
      "4 slices cheddar cheese",
      "Lettuce leaves",
      "Tomato slices",
      "Red onion slices",
      "Pickles",
      "Ketchup, mustard, and mayo",
      "1 tbsp butter for toasting buns"
    ],
    instructions: [
      "Divide ground beef into 4 equal portions and gently form into patties slightly larger than your buns.",
      "Make a small indent in the center of each patty to prevent bulging during cooking.",
      "Season both sides generously with salt and pepper.",
      "Heat a grill or cast-iron skillet over high heat.",
      "Cook patties for 3-4 minutes per side for medium doneness.",
      "Add cheese slices during the last minute of cooking and cover to melt.",
      "Toast burger buns with butter until golden brown.",
      "Assemble burgers with your favorite toppings and condiments. Serve immediately."
    ],
    tips: [
      "Don't overwork the meat when forming patties - handle gently for a tender burger",
      "Don't press down on the burgers while cooking - you'll lose all the juices",
      "Let burgers rest for 2-3 minutes before serving for juicier results"
    ]
  },
  {
    id: 8,
    title: "Tiramisu",
    description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and creamy mascarpone. An elegant crowd-pleaser.",
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&h=600&fit=crop",
    prepTime: "30 min",
    cookTime: "0 min",
    servings: 8,
    difficulty: "Medium",
    ingredients: [
      "6 egg yolks",
      "3/4 cup granulated sugar",
      "1 1/3 cups mascarpone cheese",
      "2 cups heavy cream",
      "2 cups strong espresso, cooled",
      "3 tbsp coffee liqueur (optional)",
      "40-48 ladyfinger cookies",
      "Cocoa powder for dusting",
      "Dark chocolate shavings for garnish"
    ],
    instructions: [
      "Whisk egg yolks and sugar in a heatproof bowl over simmering water until thick and pale (about 5 minutes).",
      "Remove from heat and let cool slightly. Whisk in mascarpone until smooth.",
      "In a separate bowl, whip heavy cream to stiff peaks. Gently fold into mascarpone mixture.",
      "Mix espresso with coffee liqueur in a shallow dish.",
      "Quickly dip each ladyfinger in the coffee mixture (don't soak) and arrange in a single layer in a 9x13 dish.",
      "Spread half of the mascarpone cream over the ladyfingers.",
      "Repeat with another layer of dipped ladyfingers and remaining cream.",
      "Cover and refrigerate for at least 6 hours (overnight is best). Dust with cocoa powder before serving."
    ],
    tips: [
      "Use real mascarpone cheese - substitutes won't give the authentic flavor and texture",
      "Make this dessert a day ahead for the best flavor development",
      "Dip the ladyfingers quickly to avoid them becoming too soggy"
    ]
  },
  {
    id: 9,
    title: "Avocado Toast with Poached Egg",
    description: "Creamy avocado on toasted sourdough topped with a perfectly poached egg. A nutritious and trendy breakfast option.",
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=800&h=600&fit=crop",
    prepTime: "10 min",
    cookTime: "5 min",
    servings: 2,
    difficulty: "Easy",
    ingredients: [
      "2 slices sourdough bread",
      "1 ripe avocado",
      "2 large eggs",
      "1 tbsp white vinegar",
      "1 tbsp lemon juice",
      "Red pepper flakes",
      "Salt and black pepper",
      "Olive oil",
      "Fresh herbs (optional)"
    ],
    instructions: [
      "Toast sourdough bread until golden and crispy.",
      "Meanwhile, bring a pot of water to a gentle simmer. Add vinegar.",
      "Crack each egg into a small cup. Create a gentle whirlpool in the water and slide in the egg. Poach for 3-4 minutes.",
      "Mash avocado with lemon juice, salt, and pepper until creamy but still chunky.",
      "Spread avocado mixture generously on toasted bread.",
      "Use a slotted spoon to remove poached eggs and drain on paper towel.",
      "Place poached egg on top of avocado toast.",
      "Drizzle with olive oil, sprinkle with red pepper flakes, salt, and fresh herbs. Serve immediately."
    ],
    tips: [
      "Use the freshest eggs possible for the best poached eggs",
      "The vinegar helps the egg whites coagulate faster",
      "You can also fry the eggs instead of poaching if you prefer"
    ]
  }
];

// Get all unique categories
function getCategories() {
  const categories = ['All', ...new Set(recipesData.map(recipe => recipe.category))];
  return categories;
}

// Filter recipes by category
function filterRecipes(category) {
  if (category === 'All') return recipesData;
  return recipesData.filter(recipe => recipe.category === category);
}

// Get recipe by ID
function getRecipeById(id) {
  return recipesData.find(recipe => recipe.id === parseInt(id));
}

// Get featured recipes (first 6)
function getFeaturedRecipes() {
  return recipesData.slice(0, 6);
}
