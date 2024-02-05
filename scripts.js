const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately, we do not ship to your country of residence';
const NONE_SELECTED = 0;

let shipping = null;
let currency = '$';
let customers = 1;
const location = 'RSA'; // Set the user's location

// Function to calculate shipping based on location
function calcShipping(location) {
    if (location === 'RSA') {
        shipping = 400;
    } else if (location === 'NAM') {
        shipping = 600;
    } else {
        shipping = 800;
    }
}

// Item prices
const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;

// Calculate total cost without shipping
const totalCost = shoes + toys + shirts + batteries + pens;

// Check if free shipping applies
if (totalCost >= 1000 && (location === 'RSA' || location === 'NAM') && customers === 1) {
    calcShipping(location); 
} else {
    calcShipping(location);
}

// Check for special cases
if (location === 'NAM' && customers !== 1) {
    console.log(FREE_WARNING);
} else if (location === 'NK') {
    console.log(BANNED_WARNING);
} else {
    console.log('Price:', currency, totalCost + shipping);
}
