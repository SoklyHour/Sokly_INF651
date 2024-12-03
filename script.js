let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    // Hide all slides and reset dot classes
    Array.from(slides).forEach(slide => slide.style.display = "none");
    Array.from(dots).forEach(dot => dot.classList.remove("active"));

    // Increment slideIndex and reset if necessary
    slideIndex = (slideIndex + 1) % slides.length;

    // Show current slide and activate corresponding dot
    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");

    // Change slide every 2 seconds
    setTimeout(showSlides, 2000);
}

function currentSlide(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    // Ensure n is within the bounds of slides array
    slideIndex = (n - 1 + slides.length) % slides.length;

    // Hide all slides and reset dot classes
    Array.from(slides).forEach(slide => slide.style.display = "none");
    Array.from(dots).forEach(dot => dot.classList.remove("active"));

    // Show the selected slide and activate corresponding dot
    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
}

// Start slideshow when page loads
showSlides();

// Cart functionality
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCart)
} else {
    initializeCart()
}

// Cart data structure to store items added to the cart
let cart = [];

function initializeCart() {
    // Set up event listeners for cart actions
    var removeCartItemButtons = document.getElementsByClassName('btn-danger');
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem);
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }

    var addToCartButtons = document.getElementsByClassName('shop-button');
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked);
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);
}

// Cart actions

// Handle the purchase button click
function purchaseClicked() {
    // Show the checkout section
    document.getElementById('checkout-section').style.display = 'block';

    // Populate the order summary with cart items
    const orderSummary = document.getElementById('order-summary');
    orderSummary.innerHTML = ''; // Clear any existing content in the order summary

    cart.forEach(item => {
        const summaryRow = document.createElement('div');
        summaryRow.classList.add('cart-row');
        summaryRow.innerHTML = `
            <span class="cart-item column">${item.name}</span>
            <span class="cart-price column">$${item.price}</span>
            <span class="cart-quantity column">${item.quantity}</span>
        `;
        orderSummary.appendChild(summaryRow);
    });

    // Update the total price for the order in the checkout section
    updateOrderTotal();
}

// Update the total price for the order in the checkout section
function updateOrderTotal() {
    let totalPrice = 0;

    // Calculate the total price from the cart items
    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
    });

    // Display the total price in the checkout section
    document.getElementById('order-total-price').innerText = `$${totalPrice.toFixed(2)}`;
}

// Remove item from cart
function removeCartItem(event) {
    const buttonClicked = event.target;
    const itemName = buttonClicked.closest('.cart-row').querySelector('.cart-item').innerText;

    // Remove the item from the cart array
    cart = cart.filter(item => item.name !== itemName);
    buttonClicked.closest('.cart-row').remove(); // Remove the item from the cart display
    updateCartTotal(); // Update the cart total
}

// Handle quantity change in cart
function quantityChanged(event) {
    const input = event.target;
    const itemName = input.closest('.cart-row').querySelector('.cart-item').innerText;
    const newQuantity = parseInt(input.value);

    if (newQuantity <= 0 || isNaN(newQuantity)) {
        input.value = 1; // Set quantity to 1 if invalid
    }

    // Update the cart with the new quantity
    const item = cart.find(item => item.name === itemName);
    if (item) {
        item.quantity = newQuantity;
    }

    updateCartTotal();
}

// Add item to cart
function addToCartClicked(event) {
    const button = event.target;
    const shopItem = button.closest('.shop-item');
    const itemName = shopItem.querySelector('.shop-item-title').innerText;
    const itemPrice = parseFloat(shopItem.querySelector('.shop-item-price').innerText.replace('$', ''));

    // Check if the item is already in the cart
    const existingItem = cart.find(item => item.name === itemName);
    if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if item is already in the cart
    } else {
        cart.push({ name: itemName, price: itemPrice, quantity: 1 }); // Add new item
    }

    // Show notification for adding to cart
    showAddToCartNotification(itemName);

    // Update the cart display and total price
    displayCartItems();
    updateCartTotal();
}

// Display cart items in the shopping cart section
function displayCartItems() {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = ''; // Clear existing items

    // Loop through each cart item and display it
    cart.forEach(item => {
        const cartRow = document.createElement('div');
        cartRow.classList.add('cart-row');
        cartRow.innerHTML = `
            <span class="cart-item column">${item.name}</span>
            <span class="cart-price column">$${item.price}</span>
            <input class="cart-quantity-input column" type="number" value="${item.quantity}" min="1" />
            <button class="btn-danger column">REMOVE</button>
        `;
        cartItemsContainer.appendChild(cartRow);
    });

    // Add event listeners to the newly added cart items
    initializeCart();
}

// Update the total price in the cart
function updateCartTotal() {
    let totalPrice = 0;

    // Calculate the total price from the cart items
    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
    });

    // Update the cart total in the UI
    document.querySelector('.cart-total-price').innerText = `$${totalPrice.toFixed(2)}`;
}

// Handle the Confirm Purchase button click
document.getElementById('confirm-purchase-button').addEventListener('click', confirmPurchaseClicked);

function confirmPurchaseClicked() {
    // Validate the shipping form fields
    const shippingName = document.getElementById('shipping-name').value;
    const shippingAddress = document.getElementById('shipping-address').value;
    const shippingCity = document.getElementById('shipping-city').value;
    const shippingPostalcode = document.getElementById('shipping-postalcode').value;
    const shippingCountry = document.getElementById('shipping-country').value;

    if (!shippingName || !shippingAddress || !shippingCity || !shippingPostalcode || !shippingCountry) {
        alert("Please fill out all shipping information fields.");
        return;
    }

    // Process the purchase (This is where you'd typically send the order to the backend)
    alert("Thank you for your purchase!");

    // Clear the cart
    cart = [];
    displayCartItems();  // Re-render the cart with no items
    updateCartTotal();   // Update the cart total to $0

    // Hide the checkout section
    document.getElementById('checkout-section').style.display = 'none';
}

// Show "Item Added to Cart" notification (toast)
function showAddToCartNotification(itemName) {
    // Create the toast element
    var toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = `${itemName} added to cart!`;

    // Append the toast to the body
    document.body.appendChild(toast);

    // Set the timeout to remove the toast after 3 seconds
    setTimeout(function() {
        toast.remove();
    }, 3000);
}

// Purchase btn in cart section 
// Get elements
const purchaseButton = document.getElementById('purchase-button');
const notification = document.getElementById('notification');

// Add event listener to the Purchase button
purchaseButton.addEventListener('click', () => {
  // Show notification
  notification.classList.add('show');
  
  // Hide notification after 3 seconds
  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000); // 3000ms = 3 seconds
});

