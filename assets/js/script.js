// Variables declaration
let price;
let discount = false;
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
  price = (price * 80) / 100;
  discount = true;
}

if (age > 65) {
  price = (price * 60) / 100;
  discount = true;
}

// Print if discount doesn't apply at all
if (discount == false) {
  console.log("Non hai diritto ad alcuno sconto");
}

// Print final price
finalPrice = price.toFixed(2);
console.log("Il tuo prezzo finale è " + finalPrice + "€");
