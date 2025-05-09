document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    menuToggle?.addEventListener("click", () => {
        mobileMenu?.classList.toggle("active");
    });

    // Dropdown Functionality (Desktop and Mobile)
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach((dropdown) => {
        const dropdownContent = dropdown.querySelector(".dropdown-content");
        dropdown.addEventListener("click", (e) => {
            // Prevent default only for the toggle link
            if (e.target === dropdown.querySelector("a")) {
                e.preventDefault();
                dropdownContent?.classList.toggle("show");
            }
        });
    });

    // Function to update header based on login status
    function updateHeader() {
        const accountLink = document.querySelector('.account a');
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        
        if (currentUser) {
            // User is logged in
            accountLink.innerHTML = `<i class="fas fa-user"></i> ${currentUser.name}`;
            accountLink.href = '#'; // Changed to # to prevent navigation
        } else {
            // User is not logged in
            accountLink.innerHTML = '<i class="fas fa-user"></i> Account';
            accountLink.href = 'account/login.html';
        }
    }

    // Call updateHeader when page loads
    updateHeader();
    
    // Add logout functionality
    const accountLink = document.querySelector('.account a');
    accountLink.addEventListener('click', function(e) {
        if (localStorage.getItem('currentUser')) {
            e.preventDefault();
            localStorage.removeItem('currentUser');
            updateHeader();
            window.location.href = 'index.html';
        }
    });

    // Search Form Logic
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("product-search");
    const productsGrid = document.getElementById("products-grid");
    const productItems = productsGrid?.querySelectorAll(".product-item");

    // --- Read query from URL and filter products on page load ---
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param) || "";
    }

    if (searchInput && productItems) {
        const initialQuery = getQueryParam("query");
        if (initialQuery) {
            searchInput.value = initialQuery;
            filterProducts(initialQuery);
        }
        searchInput.addEventListener("input", () => {
            filterProducts(searchInput.value);
        });
    }

    function filterProducts(query) {
        const searchValue = query.toLowerCase();
        productItems.forEach((item) => {
            const productName = item.getAttribute("data-name")?.toLowerCase() || "";
            item.style.display = productName.includes(searchValue) ? "block" : "none";
        });
    }

    searchForm?.addEventListener("submit", (event) => {
        // Only prevent default if we're on products.html, otherwise let the form submit
        if (window.location.pathname.includes("products.html")) {
            event.preventDefault();
            filterProducts(searchInput.value);
        }
    });

    // Slider Logic
    const slides = document.querySelector(".slides");
    const dots = document.querySelectorAll(".slider-dot");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let currentSlide = 0;
    const slideCount = document.querySelectorAll(".slide").length;
    let autoSlideInterval;

    function updateSlidePosition() {
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlidePosition();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateSlidePosition();
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentSlide = index;
            updateSlidePosition();
            resetAutoSlide();
        });
    });

    prevBtn?.addEventListener("click", () => {
        prevSlide();
        resetAutoSlide();
    });

    nextBtn?.addEventListener("click", () => {
        nextSlide();
        resetAutoSlide();
    });

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    startAutoSlide();

    // Product Modal Functionality
    const modal = document.getElementById('productModal');
    const closeModal = document.querySelector('.close-modal');
    const modalQuantity = document.getElementById('modalQuantity');
    const minusBtn = document.querySelector('.quantity-btn.minus');
    const plusBtn = document.querySelector('.quantity-btn.plus');

    // Function to extract product data from a product card
    function getProductData(productCard) {
        const title = productCard.querySelector('.product-title').textContent;
        const image = productCard.querySelector('.product-image img').src;
        const currentPrice = productCard.querySelector('.current-price').textContent;
        const oldPriceElement = productCard.querySelector('.old-price');
        const oldPrice = oldPriceElement ? oldPriceElement.textContent : null;
        
        // Get rating from stars
        const stars = productCard.querySelectorAll('.product-rating i.fas.fa-star').length;
        const halfStar = productCard.querySelector('.product-rating i.fas.fa-star-half-alt') ? 0.5 : 0;
        const rating = stars + halfStar;
        
        // Get review count
        const reviews = parseInt(productCard.querySelector('.product-rating span').textContent.replace(/[()]/g, '')) || 0;

        // Generate description and specs based on product type
        let description, specs;
        const titleLower = title.toLowerCase();

        if (titleLower.includes('phone') || titleLower.includes('smartphone')) {
            description = `Experience the future of smartphones with the ${title}. Featuring a stunning display, powerful processor, and revolutionary camera system.`;
            specs = [
                '6.7-inch Super AMOLED Display',
                '256GB Storage',
                '12GB RAM',
                'Triple Camera System (108MP + 12MP + 10MP)',
                '5000mAh Battery with Fast Charging',
                '5G Connectivity',
                'IP68 Water Resistance',
                'In-display Fingerprint Sensor'
            ];
        } else if (titleLower.includes('laptop') || titleLower.includes('macbook') || titleLower.includes('notebook')) {
            description = `The ultimate laptop for professionals. Powered by the latest processor, featuring a stunning display and all-day battery life.`;
            specs = [
                '14-inch Retina Display',
                'Latest Generation Processor',
                '16GB Unified Memory',
                '512GB SSD Storage',
                'Up to 18 hours battery life',
                'Backlit Magic Keyboard',
                'Touch ID',
                'Thunderbolt 4 Ports'
            ];
        } else if (titleLower.includes('headphone') || titleLower.includes('earphone') || titleLower.includes('earbud')) {
            description = `Premium wireless headphones with active noise cancellation and crystal-clear sound quality. Perfect for music lovers and professionals alike.`;
            specs = [
                'Active Noise Cancellation',
                '40-hour Battery Life',
                'Bluetooth 5.0 with Multipoint',
                'Built-in Microphone with Noise Reduction',
                'Quick Charge (10 min = 5 hours)',
                'Foldable Design',
                'Touch Controls',
                'IPX4 Water Resistance'
            ];
        } else if (titleLower.includes('watch') || titleLower.includes('smartwatch')) {
            description = `Advanced smartwatch with health monitoring features, fitness tracking, and long battery life. Stay connected and track your fitness goals.`;
            specs = [
                '1.4-inch AMOLED Display',
                'Heart Rate Monitor',
                'Blood Pressure Monitor',
                'Sleep Tracking with Sleep Score',
                'IP68 Waterproof',
                '14-day Battery Life',
                'GPS Tracking',
                'Smart Notifications'
            ];
        } else if (titleLower.includes('camera') || titleLower.includes('dslr') || titleLower.includes('mirrorless')) {
            description = `Professional-grade camera with advanced imaging capabilities. Capture stunning photos and videos with exceptional detail and clarity.`;
            specs = [
                '24.1MP Full-Frame Sensor',
                '4K Video Recording',
                '5-Axis Image Stabilization',
                'Dual Memory Card Slots',
                'Weather-Sealed Body',
                'Advanced Autofocus System',
                'Built-in Wi-Fi & Bluetooth',
                'Long Battery Life'
            ];
        } else if (titleLower.includes('tablet') || titleLower.includes('ipad')) {
            description = `Versatile tablet with powerful performance and stunning display. Perfect for work, entertainment, and creative tasks.`;
            specs = [
                '11-inch Liquid Retina Display',
                'Latest Generation Processor',
                '8GB RAM',
                '256GB Storage',
                'All-day Battery Life',
                'Apple Pencil Support',
                'Magic Keyboard Compatible',
                '5G Connectivity'
            ];
        } else if (titleLower.includes('speaker') || titleLower.includes('soundbar')) {
            description = `Premium audio device delivering immersive sound experience. Perfect for home entertainment and music enthusiasts.`;
            specs = [
                '360° Surround Sound',
                '40W Total Power Output',
                'Bluetooth 5.0',
                'Voice Assistant Compatible',
                'IPX7 Waterproof',
                '20-hour Battery Life',
                'Party Mode',
                'Multi-room Audio Support'
            ];
        } else {
            description = `High-quality tech product with advanced features and modern design. Perfect for everyday use and professional needs.`;
            specs = [
                'Modern Design',
                'Advanced Features',
                'Long Battery Life',
                'Wireless Connectivity',
                'User-Friendly Interface',
                'Premium Build Quality',
                'Regular Software Updates',
                '1-Year Warranty'
            ];
        }

        return {
            title,
            image,
            currentPrice,
            oldPrice,
            rating,
            reviews,
            description,
            specs
        };
    }

    // Function to open modal with product details
    function openProductModal(productCard) {
        const product = getProductData(productCard);

        // Update modal content
        document.getElementById('modalProductImage').src = product.image;
        document.getElementById('modalProductTitle').textContent = product.title;
        document.getElementById('modalCurrentPrice').textContent = product.currentPrice;
        
        // Handle old price display
        const oldPriceElement = document.getElementById('modalOldPrice');
        if (product.oldPrice) {
            oldPriceElement.textContent = product.oldPrice;
            oldPriceElement.style.display = 'inline';
            oldPriceElement.style.textDecoration = 'line-through';
            oldPriceElement.style.color = '#999';
            oldPriceElement.style.fontSize = '16px';
            oldPriceElement.style.fontWeight = 'normal';
        } else {
            oldPriceElement.style.display = 'none';
        }

        document.getElementById('modalProductDescription').textContent = product.description;

        // Update rating
        const ratingHtml = generateRatingStars(product.rating) + `<span>(${product.reviews})</span>`;
        document.getElementById('modalProductRating').innerHTML = ratingHtml;

        // Update specifications
        const specsList = document.getElementById('modalProductSpecs');
        specsList.innerHTML = product.specs.map(spec => `<li>${spec}</li>`).join('');

        // Reset quantity to 1
        modalQuantity.value = '1';

        // Show modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    // Function to generate rating stars
    function generateRatingStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let stars = '';

        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star"></i>';
        }

        return stars;
    }

    // Close modal when clicking the close button
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Quantity buttons functionality
    minusBtn.addEventListener('click', () => {
        const currentValue = parseInt(modalQuantity.value);
        if (currentValue > 1) {
            modalQuantity.value = currentValue - 1;
        }
    });

    plusBtn.addEventListener('click', () => {
        const currentValue = parseInt(modalQuantity.value);
        modalQuantity.value = currentValue + 1;
    });

    // Add to cart functionality
    document.querySelector('.add-to-cart').addEventListener('click', () => {
        const quantity = parseInt(modalQuantity.value);
        // Add your cart functionality here
        alert(`Added ${quantity} item(s) to cart!`);
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Add to wishlist functionality
    document.querySelector('.wishlist-btn').addEventListener('click', () => {
        // Add your wishlist functionality here
        alert('Added to wishlist!');
    });

    // Update product cards to use the modal
    document.querySelectorAll('.product-card .btn-primary').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const productCard = e.target.closest('.product-card');
            openProductModal(productCard);
        });
    });
});