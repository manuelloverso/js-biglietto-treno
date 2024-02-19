// Variables declaration
let price;
let sconto = false;
const pricePerKm = 0.21;
const numberKm = Number(
  prompt("Inserisci il numero di km che vuoi percorrere")
);
console.log(numberKm, typeof numberKm);

const age = Number(prompt("Inserisci la tua età"));
console.log(age, typeof age);

// Calculate the price based on price per km
price = numberKm * pricePerKm;
console.log("Il prezzo del biglietto non scontato è " + price + "€");

//apply the discount
if (age < 18) {
  price = (price * 80) / 100;
  sconto = true;
}

if (age > 65) {
  price = (price * 60) / 100;
  sconto = true;
}

// Print if discount doesn't apply at all
if (sconto == false) {
  console.log("Non hai diritto ad alcuno sconto");
}

// Print final price
console.log("Il tuo prezzo finale è " + price + "€");
