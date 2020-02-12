let products = [
  {
    name: "chair",
    inventory: 5,
    unit_price: 45.99
  },
  {
    name: "table",
    inventory: 10,
    unit_price: 123.75
  },
  {
    name: "sofa",
    inventory: 2,
    unit_price: 399.50
  }
];
function listProducts(prods) {
  let product_names = [];
  for (let i=0; i<prods.length; i+=1) {
   product_names.push(prods[i].name);
  }
  return product_names;
}
console.log(listProducts(products));
function totalValue(prods) {
  let inventory_value = 0;
  for (let i=0; i<prods.length; i+=1) {
    inventory_value += prods[i].inventory * prods[i].unit_price;
  }
  return inventory_value;
}
console.log(totalValue(products));
