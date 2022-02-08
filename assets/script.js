// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Martin Prost" // HINT: Replace this with your own name!
credit.textContent = `Created by ${yourName}`

// We'll use these variables to track the counts of each cookie type
let gbCount = 0 // Gingerbread
let ccCount = 0 // Chocolate Chip
let sugCount = 0 // Sugar Sprinkle

let gbTotalPrice = 0.00;
let ccTotalPrice = 0.00;
let sugTotalPrice = 0.00;

const gbPrice = 2.50
const ccPrice = 3.00
const sugPrice = 2.00

const btnGbDown = document.querySelector('#minus-gb');
const btnGbUp = document.querySelector('#add-gb');
const tdGbQuantTotal = document.querySelector('#qty-gb');
const tdGbPriceTotal = document.querySelector('#price-gb');

const btnCcDown = document.querySelector('#minus-cc');
const btnCcUp = document.querySelector('#add-cc');
const tdCcQuantTotal = document.querySelector('#qty-cc');
const tdCcPriceTotal = document.querySelector('#price-cc');

const btnSugDown = document.querySelector('#minus-sugar');
const btnSugUp = document.querySelector('#add-sugar');
const tdSugQuantTotal = document.querySelector('#qty-sugar');
const tdSugPriceTotal = document.querySelector('#price-sugar');

const thTotalCount = document.querySelector('#qty-total');
const thTotalPrice = document.querySelector('#price-total');

btnGbDown.addEventListener('click', function(e)
{
    if (gbCount > 0) {
        gbCount -= 1;
        updateGb();
    }
    updateTotal();
});

btnGbUp.addEventListener('click', function(e)
{
   gbCount += 1;
    updateGb();
    updateTotal();
});

btnCcDown.addEventListener('click', function(e)
{
    if (ccCount > 0) {
      ccCount -= 1;
        updateCc();
    }
    updateTotal();
});

btnCcUp.addEventListener('click', function(e)
{
   ccCount += 1;
    updateCc();
    updateTotal();
});

btnSugDown.addEventListener('click', function(e)
{
    if (sugCount > 0) {
        sugCount -= 1;
        updateSug();
    }
    updateTotal();
});

btnSugUp.addEventListener('click', function(e)
{
   sugCount += 1;
    updateSug();
    updateTotal();
});

function updateGb(){
   tdGbQuantTotal.textContent = gbCount;
   gbTotalPrice = gbCount * gbPrice;
   tdGbPriceTotal.textContent = `$${(gbTotalPrice).toLocaleString(
      'en-US',
      {  minimumFractionDigits: 2 }
      )}`
}

function updateCc(){
   tdCcQuantTotal.textContent = ccCount
   ccTotalPrice = ccCount * ccPrice;
   tdCcPriceTotal.textContent = `$${(ccTotalPrice).toLocaleString(
      'en-US',
      {  minimumFractionDigits: 2 }
      )}`
}

function updateSug(){
   tdSugQuantTotal.textContent = sugCount;
   sugTotalPrice = sugCount * sugPrice;
   tdSugPriceTotal.textContent = `$${(sugTotalPrice).toLocaleString(
      'en-US',
      {  minimumFractionDigits: 2 }
      )}`
}

function updateTotal()
{
   thTotalPrice.textContent = `$${(gbTotalPrice + ccTotalPrice + sugTotalPrice).toLocaleString(
      'en-US',
      {  minimumFractionDigits: 2 }
      )}`
}