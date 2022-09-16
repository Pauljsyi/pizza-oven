function pizzaOven(crustType, sauceType, cheese, toppings) {
  let pizza = {};
  pizza.crustType = crustType;
  pizza.sauceType = sauceType;
  pizza.cheese = cheese;
  pizza.toppings = toppings;

  console.log("pizza", pizza);
  return pizza;
}

var p1 = pizzaOven(
  "deep dish",
  "traditional",
  ["mozzarella"],
  ["pepperoni", "sausage"]
);

var p2 = pizzaOven(
  "hand tossed",
  "marinara",
  ["mozzarella", "feta"],
  ["mushrooms", "olives", "onions"]
);

var p3 = pizzaOven(
  "thin crust",
  "alfredo",
  ["provolone", "mozzarella"],
  ["chicken", "sausage", "bacon"]
);

var p4 = pizzaOven("stuff crust", "marinara", ["mozzarella"], ["pepperoni"]);
