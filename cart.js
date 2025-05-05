// Mobile Menu Toggle
document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
    document.querySelector('.mobile-menu').classList.toggle('active');
});

// Back to Top Button
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        document.getElementById('backToTop').style.display = "block";
    } else {
        document.getElementById('backToTop').style.display = "none";
    }
});

document.getElementById('backToTop').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
});

// Quantity Selector
const decreaseButtons = document.querySelectorAll('.decrease');
const increaseButtons = document.querySelectorAll('.increase');
const quantityInputs = document.querySelectorAll('.quantity-input');

decreaseButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        if (quantityInputs[index].value > 1) {
            quantityInputs[index].value = parseInt(quantityInputs[index].value) - 1;
            updateCartItem(index);
        }
    });
});

increaseButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        if (quantityInputs[index].value < 10) {
            quantityInputs[index].value = parseInt(quantityInputs[index].value) + 1;
            updateCartItem(index);
        }
    });
});

quantityInputs.forEach((input, index) => {
    input.addEventListener('change', function() {
        if (this.value < 1) this.value = 1;
        if (this.value > 10) this.value = 10;
        updateCartItem(index);
    });
});

// Remove item from cart
const removeButtons = document.querySelectorAll('.remove-item');
removeButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        if (confirm('Are you sure you want to remove this item from your cart?')) {
            const row = this.closest('tr');
            row.classList.add('removing');
            setTimeout(() => {
                row.remove();
                updateCart();
            }, 300);
        }
    });
});

// Update cart total (dummy function)
function updateCartItem(index) {
    // In a real implementation, this would make an AJAX call to update the cart
    console.log(`Updated item ${index+1} quantity to ${quantityInputs[index].value}`);
}

function updateCart() {
    // This would recalculate totals based on current cart items
    console.log('Cart updated');
}

// Update cart button
document.querySelector('.update-cart').addEventListener('click', function() {
    alert('Cart updated successfully!');
});

// Checkout button 
document.querySelector('.checkout-btn').addEventListener('click', function() {
    window.location.href = 'checkout.html';
});