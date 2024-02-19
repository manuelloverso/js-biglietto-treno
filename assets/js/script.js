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
let finalPrice = price.toFixed(2);
console.log("Il prezzo del biglietto non scontato è " + finalPrice + "€");

//apply the discount
if (age < 18) {
  price = price - (price * 20) / 100;
} else if (age > 65) {
  price = price - (price * 40) / 100;
} else {
  console.log("Non hai diritto ad alcuno sconto");
}

// Print final price
finalPrice = price.toFixed(2);
console.log("Il tuo prezzo finale è " + finalPrice + "€");
alert("Il tuo prezzo finale è " + finalPrice + "€");
