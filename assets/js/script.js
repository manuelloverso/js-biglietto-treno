// Variables declaration
let price;
const pricePerKm = 0.21;
const numberKm = Number(
  prompt("Inserisci il numero di km che vuoi percorrere")
);
console.log(numberKm, typeof numberKm);

const age = Number(prompt("Inserisci la tua età"));
console.log(age, typeof age);

// Calculate the price based on price per km
price = numberKm * pricePerKm;
console.log(price + "€");

//apply the discount
if (age < 18) {
  price = (price * 80) / 100;
  console.log(price);
}

if (age > 65) {
  price = (price * 60) / 100;
  console.log(price);
}
