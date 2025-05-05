// Mobile Menu Toggle
document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
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

// Billing Address Toggle
document.getElementById('sameAsBilling').addEventListener('change', function() {
    const billingAddressSection = document.querySelector('.billing-address');
    
    if (this.checked) {
        billingAddressSection.style.display = 'none';
    } else {
        billingAddressSection.style.display = 'block';
    }
});

// Payment Method Selection
const paymentMethods = document.querySelectorAll('.payment-method');
const cardInputs = document.querySelector('.card-inputs');

paymentMethods.forEach(method => {
    method.addEventListener('click', function() {
        // Remove selected class from all payment methods
        paymentMethods.forEach(m => m.classList.remove('selected'));
        
        // Add selected class to clicked payment method
        this.classList.add('selected');
        
        // Check the radio button
        const radioBtn = this.querySelector('input[type="radio"]');
        radioBtn.checked = true;
        
        // Show/hide card inputs
        if (radioBtn.id === 'creditCard') {
            cardInputs.classList.add('active');
        } else {
            cardInputs.classList.remove('active');
        }
    });
});

// Shipping Method Selection
const shippingMethods = document.querySelectorAll('input[name="shippingMethod"]');

shippingMethods.forEach(method => {
    method.addEventListener('change', function() {
        // Update total based on shipping method
        const shippingCost = this.id === 'standardShipping' ? 99 : 
                            this.id === 'expressShipping' ? 199 : 0;
        
        document.querySelector('.summary-row:nth-child(2) span:last-child').textContent = 
            shippingCost > 0 ? `₱${shippingCost.toFixed(2)}` : 'Free';
        
        // Recalculate total
        updateOrderTotal();
    });
});

// Form Validation
document.querySelector('.place-order-btn').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Get all required fields that are visible, excluding newsletter form
    const requiredFields = document.querySelectorAll('.checkout-form input[required]:not([style*="display: none"]), .checkout-form select[required]:not([style*="display: none"])');
    let isValid = true;
    
    // Check which payment method is selected
    const isCreditCardSelected = document.getElementById('creditCard').checked;
    
    // Check if billing address is visible
    const isBillingAddressVisible = document.querySelector('.billing-address').style.display !== 'none';
    
    requiredFields.forEach(field => {
        // Skip billing fields if billing address is not visible
        if (!isBillingAddressVisible && field.id.startsWith('billing')) {
            return;
        }
        
        // Skip credit card fields if credit card is not selected
        if (!isCreditCardSelected && (field.id === 'cardName' || field.id === 'cardNumber' || field.id === 'expiryDate' || field.id === 'cvv')) {
            return;
        }
        
        // Check if field is empty or just whitespace
        if (!field.value || field.value.trim() === '') {
            isValid = false;
            field.style.borderColor = '#e74c3c';
        } else {
            field.style.borderColor = '#ddd';
        }
    });
    
    if (isValid) {
        // Simulate order processing
        this.textContent = 'Processing...';
        this.disabled = true;
        
        // Redirect to order confirmation page after a delay
        setTimeout(() => {
            window.location.href = 'order-complete.html';
        }, 2000);
    } else {
        alert('Please fill out all required fields');
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
});

// Helper function to update order total
function updateOrderTotal() {
    const subtotal = 1329.97; // Hardcoded from cart
    const shippingText = document.querySelector('.summary-row:nth-child(2) span:last-child').textContent;
    const shipping = shippingText === 'Free' ? 0 : parseFloat(shippingText.replace('₱', ''));
    const tax = subtotal * 0.12; // 12% tax rate
    
    const total = subtotal + shipping + tax;
    
    document.querySelector('.summary-row.total span:last-child').textContent = `₱${total.toFixed(2)}`;
}

// Format credit card input
const cardNumberInput = document.getElementById('cardNumber');
cardNumberInput.addEventListener('input', function(e) {
    let value = this.value.replace(/\D/g, '');
    if (value.length > 16) {
        value = value.substr(0, 16);
    }
    
    // Format with spaces every 4 digits
    let formattedValue = '';
    for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formattedValue += ' ';
        }
        formattedValue += value[i];
    }
    
    this.value = formattedValue;
});

// Format expiry date input
const expiryDateInput = document.getElementById('expiryDate');
expiryDateInput.addEventListener('input', function(e) {
    let value = this.value.replace(/\D/g, '');
    if (value.length > 4) {
        value = value.substr(0, 4);
    }
    
    // Format as MM/YY
    if (value.length > 2) {
        this.value = value.substr(0, 2) + '/' + value.substr(2);
    } else {
        this.value = value;
    }
});

// Format CVV input
const cvvInput = document.getElementById('cvv');
cvvInput.addEventListener('input', function(e) {
    let value = this.value.replace(/\D/g, '');
    if (value.length > 3) {
        value = value.substr(0, 3);
    }
    this.value = value;
});