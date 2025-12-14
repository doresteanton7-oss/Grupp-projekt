let cart = [];
let totalSum = document.querySelector("#total-sum");

const dialog = document.getElementById("cart-dialog");
const showCartDialog = (show) => show ? dialog.show() : dialog.close();



function calculateTotalSum() {
    return cart.reduce((sum, product) => sum + product.price, 0);
}

function updateTotalSum() {
    if (cart.length === 0) {
        totalSum.textContent = "Varukorgen är tom";
        return;
    }

    const total = calculateTotalSum();
    totalSum.textContent = `Totalt: ${total} kr`;
}
 
function addToCart(product) {
    cart.push(product);
    updateTotalSum();

    console.log("Produkt tillagd i kundkorgen:", product);
    console.log("Nuvarande kundkorg:", cart);
}

