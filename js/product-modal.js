// Product data (this would typically come from a database or API)
const productData = {
    // Smartphones
    'ultra-phone-pro-13': {
        image: 'https://s.alicdn.com/@sc04/kf/H424c0ec9e82d43e3a777fd58c397453cC.jpg_720x720q50.jpg',
        price: '₱899.99',
        oldPrice: '₱999.99',
        description: 'The latest flagship smartphone with cutting-edge features and stunning design.',
        specs: [
            '6.7-inch Super AMOLED display',
            'Triple camera system',
            '5000mAh battery',
            '256GB storage',
            '5G connectivity'
        ],
        rating: 4.5,
        reviews: 128
    },
    'smartphone-x': {
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80',
        price: '₱699.99',
        oldPrice: '₱799.99',
        description: 'Powerful smartphone with advanced features and sleek design.',
        specs: [
            '6.5-inch OLED display',
            'Quad camera system',
            '4500mAh battery',
            '128GB storage',
            '5G ready'
        ],
        rating: 4.5,
        reviews: 85
    },
    // Laptops
    'laptop-pro': {
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&q=80',
        price: '₱1,299.99',
        oldPrice: '₱1,499.99',
        description: 'High-performance laptop for professionals and gamers.',
        specs: [
            '15.6-inch 4K display',
            'Intel Core i7 processor',
            '16GB RAM',
            '512GB SSD',
            'NVIDIA RTX 3060'
        ],
        rating: 4.8,
        reviews: 95
    },
    'macbook-pro': {
        image: 'https://images.gmanews.tv/webpics/2021/10/Apple_Macbook_Pro_2021_10_19_17_09_32.jpg',
        price: '₱1,299.99',
        oldPrice: '₱1,499.99',
        description: 'Professional-grade laptop with powerful performance and stunning display.',
        specs: [
            '14-inch Liquid Retina XDR display',
            'Apple M1 Pro chip',
            '16GB unified memory',
            '512GB SSD',
            'Up to 17 hours battery life'
        ],
        rating: 4.9,
        reviews: 128
    },
    // Audio Products
    'wireless-earbuds': {
        image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: '₱199.99',
        oldPrice: '₱249.99',
        description: 'Premium wireless earbuds with active noise cancellation and crystal-clear sound quality.',
        specs: [
            'Active Noise Cancellation',
            'Bluetooth 5.0',
            '20-hour battery life',
            'IPX4 water resistance',
            'Touch controls'
        ],
        rating: 4.5,
        reviews: 75
    },
    'noise-cancelling-headphones': {
        image: 'https://plus.unsplash.com/premium_photo-1661964426199-181e5ebbdba5?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: '₱299.99',
        oldPrice: '₱349.99',
        description: 'Professional-grade noise-cancelling headphones with exceptional sound quality and comfort.',
        specs: [
            'Advanced Noise Cancellation',
            '40-hour battery life',
            'Premium sound drivers',
            'Comfortable over-ear design',
            'Bluetooth 5.1'
        ],
        rating: 4.8,
        reviews: 92
    },
    'sonicwave-pro': {
        image: 'https://gutostore.com/cdn/shop/files/Sddcca517489f4e4c99a4d2408d4646177_394x.webp?v=1745329711',
        price: '₱249.99',
        description: 'Professional studio headphones with exceptional sound clarity and comfort.',
        specs: [
            'Studio-grade sound',
            'Comfortable memory foam',
            'Detachable cable',
            'Foldable design',
            'Durable construction'
        ],
        rating: 4.6,
        reviews: 76
    },
    'bluetooth-speaker': {
        image: 'https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: '₱149.99',
        description: 'Portable Bluetooth speaker with powerful sound and long battery life.',
        specs: [
            '360° sound',
            '12-hour battery life',
            'IPX7 waterproof',
            'Bluetooth 5.0',
            'Built-in microphone'
        ],
        rating: 4.2,
        reviews: 45
    },
    // Smart Home Products
    'smart-home-hub': {
        image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=300&q=80',
        price: '₱249.99',
        oldPrice: '₱299.99',
        description: 'Control your entire smart home ecosystem with this powerful hub. Compatible with Alexa, Google Home, and Apple HomeKit.',
        specs: [
            'Voice control compatible',
            'Wi-Fi and Bluetooth connectivity',
            'Works with 100+ smart devices',
            'Easy setup and configuration',
            'Energy monitoring features'
        ],
        rating: 4.5,
        reviews: 85
    },
    'smart-light-bulbs': {
        image: 'https://images.unsplash.com/photo-1711006155490-ec01a0ecf0de?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: '₱49.99',
        oldPrice: '₱69.99',
        description: 'Smart LED bulbs that can be controlled via smartphone or voice commands. Change colors, set schedules, and create scenes.',
        specs: [
            '16 million colors',
            'Voice control compatible',
            'Energy efficient LED',
            'Scheduling and automation',
            'Group control support'
        ],
        rating: 4.3,
        reviews: 85
    },
    'smart-thermostat': {
        image: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: '₱199.99',
        oldPrice: '₱249.99',
        description: 'Smart thermostat that learns your schedule and preferences to optimize your home\'s temperature and energy usage.',
        specs: [
            'Learning capability',
            'Energy usage reports',
            'Geofencing support',
            'Remote control via app',
            'Compatible with major HVAC systems'
        ],
        rating: 4.7,
        reviews: 85
    },
    // Wearables
    'fittech-watch': {
        image: 'https://image.made-in-china.com/2f0j00uDTfVsZgHBke/Fashion-X2-Plus-Smart-Watch-Waterproof-IP68-Heart-Rate-Monitor-Blood-Pressure-Pedometer-Sport-Smartwatch-X2-.jpg',
        price: '₱179.99',
        oldPrice: '₱199.99',
        description: 'Advanced smartwatch with health monitoring, fitness tracking, and smartphone connectivity. Perfect for active lifestyles.',
        specs: [
            'Heart rate monitoring',
            'GPS tracking',
            'Water resistant (5ATM)',
            '7-day battery life',
            'Smartphone notifications'
        ],
        rating: 4.6,
        reviews: 214
    },
    'smart-watch-pro': {
        image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: '₱399.99',
        description: 'Advanced smartwatch with comprehensive health monitoring and fitness tracking features.',
        specs: [
            'Heart rate monitoring',
            'Blood oxygen tracking',
            'Sleep analysis',
            'GPS tracking',
            'Water resistant (5ATM)',
            '7-day battery life',
            'Smartphone notifications'
        ],
        rating: 4.7,
        reviews: 156
    },
    'fitness-tracker-elite': {
        image: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: '₱149.99',
        description: 'Advanced fitness tracker with comprehensive health monitoring and activity tracking.',
        specs: [
            'Heart rate monitoring',
            'Step counter',
            'Sleep tracking',
            'Water resistant (5ATM)',
            '14-day battery life',
            'Smartphone notifications'
        ],
        rating: 4.5,
        reviews: 98
    },
    'smart-ring': {
        image: 'https://www.intego.com/mac-security-blog/wp-content/uploads/2024/07/Apple-Smart-Ring-mockup-by-Josh-Long-Intego-CC-BY-NC-SA-600x300-1.jpg',
        price: '₱199.99',
        description: 'Innovative smart ring that tracks your health and fitness metrics in a stylish package.',
        specs: [
            'Heart rate monitoring',
            'Sleep tracking',
            'Activity tracking',
            'Water resistant',
            '7-day battery life',
            'Smartphone notifications'
        ],
        rating: 4.3,
        reviews: 45
    },
    // Photography Products
    'Pro DSLR Camera': {
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: '₱899.99',
        oldPrice: '₱1099.99',
        description: 'Professional-grade DSLR camera with advanced features for stunning photography and videography.',
        specs: [
            '24.1MP full-frame sensor',
            '4K video recording',
            'Dual card slots',
            'Weather sealed body',
            'Advanced autofocus system'
        ],
        rating: 4.8,
        reviews: 150
    },
    'Mirrorless Camera': {
        image: 'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: '₱799.99',
        oldPrice: '₱999.99',
        description: 'Compact mirrorless camera with professional features and excellent image quality.',
        specs: [
            '20.1MP APS-C sensor',
            '4K video recording',
            '5-axis image stabilization',
            'Electronic viewfinder',
            'Wi-Fi connectivity'
        ],
        rating: 4.7,
        reviews: 130
    },
    'Action Camera': {
        image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: '₱299.99',
        oldPrice: '₱399.99',
        description: 'Rugged action camera perfect for capturing adventures in any environment.',
        specs: [
            '4K video recording',
            'Waterproof up to 30m',
            'Image stabilization',
            'Voice control',
            'Wi-Fi connectivity'
        ],
        rating: 4.5,
        reviews: 110
    }
};

// Get modal elements
const modal = document.getElementById('productModal');
const modalImage = document.getElementById('modalProductImage');
const modalTitle = document.getElementById('modalProductTitle');
const modalCurrentPrice = document.getElementById('modalCurrentPrice');
const modalOldPrice = document.getElementById('modalOldPrice');
const modalDescription = document.getElementById('modalProductDescription');
const modalSpecs = document.getElementById('modalProductSpecs');
const modalRating = document.getElementById('modalProductRating');
const modalQuantity = document.getElementById('modalQuantity');

// Function to generate rating stars
function generateRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Close modal when clicking the close button or outside the modal
document.querySelector('.close-modal').addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Handle quantity buttons
document.querySelector('.quantity-btn.minus').addEventListener('click', () => {
    const currentValue = parseInt(modalQuantity.value);
    if (currentValue > 1) {
        modalQuantity.value = currentValue - 1;
    }
});

document.querySelector('.quantity-btn.plus').addEventListener('click', () => {
    const currentValue = parseInt(modalQuantity.value);
    modalQuantity.value = currentValue + 1;
});

// Function to open modal with product details
function openProductModal(productId) {
    const product = productData[productId];
    if (!product) return;

    modalImage.src = product.image;
    modalTitle.textContent = productId;
    modalCurrentPrice.textContent = product.price;
    modalOldPrice.textContent = product.oldPrice || '';
    modalDescription.textContent = product.description;
    
    // Clear and populate specs
    modalSpecs.innerHTML = '';
    product.specs.forEach(spec => {
        const li = document.createElement('li');
        li.textContent = spec;
        modalSpecs.appendChild(li);
    });

    // Set rating
    modalRating.innerHTML = generateRatingStars(product.rating) + ` <span>(${product.reviews})</span>`;

    // Reset quantity
    modalQuantity.value = 1;

    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Add click event listeners to all View Details buttons
document.addEventListener('DOMContentLoaded', () => {
    const viewDetailsButtons = document.querySelectorAll('.product-card .btn-primary');
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productCard = e.target.closest('.product-card');
            const productId = productCard.dataset.productId;
            openProductModal(productId);
        });
    });
});

// Open modal when clicking "View Details" on product items
document.querySelectorAll('.product-item .btn').forEach(button => {
    button.addEventListener('click', () => {
        const productItem = button.closest('.product-item');
        const productName = productItem.dataset.name;
        const product = productData[productName];
        
        if (product) {
            modalImage.src = product.image;
            modalTitle.textContent = productName;
            modalCurrentPrice.textContent = product.price;
            modalOldPrice.textContent = product.oldPrice || '';
            modalDescription.textContent = product.description;
            
            // Clear and populate specs
            modalSpecs.innerHTML = '';
            product.specs.forEach(spec => {
                const li = document.createElement('li');
                li.textContent = spec;
                modalSpecs.appendChild(li);
            });
            
            // Set rating stars
            modalRating.innerHTML = generateRatingStars(product.rating) + `<span>(${product.reviews})</span>`;
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});