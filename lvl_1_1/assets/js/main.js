function myDrinks() {
  let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta",
  ];
  getraenke.sort();
  console.log(getraenke);

  getraenke.forEach(function (drink) {
    console.log(drink);
    document.write(drink + "<br/>");
  });
}
myDrinks();
