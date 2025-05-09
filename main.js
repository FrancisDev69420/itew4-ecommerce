document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const mainNav = document.querySelector(".main-nav");

    menuToggle?.addEventListener("click", () => {
        mobileMenu?.classList.toggle("active");
        mainNav?.classList.toggle("active");
        // Toggle the menu icon
        const menuIcon = menuToggle.querySelector("i");
        if (menuIcon) {
            menuIcon.classList.toggle("fa-bars");
            menuIcon.classList.toggle("fa-times");
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".mobile-menu-toggle") && !e.target.closest(".mobile-menu")) {
            mobileMenu?.classList.remove("active");
            mainNav?.classList.remove("active");
            const menuIcon = menuToggle?.querySelector("i");
            if (menuIcon) {
                menuIcon.classList.add("fa-bars");
                menuIcon.classList.remove("fa-times");
            }
            // Close all dropdowns when closing mobile menu
            document.querySelectorAll(".dropdown").forEach((dropdown) => {
                dropdown.classList.remove("active");
                const arrow = dropdown.querySelector("i");
                if (arrow) {
                    arrow.style.transform = "rotate(0)";
                }
            });
        }
    });

    // Dropdown Functionality (Desktop and Mobile)
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach((dropdown) => {
        const dropdownToggle = dropdown.querySelector("a");
        const dropdownContent = dropdown.querySelector(".dropdown-content");
        
        dropdownToggle?.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Close other dropdowns
            dropdowns.forEach((otherDropdown) => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove("active");
                    otherDropdown.querySelector(".dropdown-content")?.classList.remove("show");
                    const arrow = otherDropdown.querySelector("i");
                    if (arrow) {
                        arrow.style.transform = "rotate(0)";
                    }
                }
            });
            
            // Toggle current dropdown
            dropdown.classList.toggle("active");
            dropdownContent?.classList.toggle("show");
            
            // Rotate arrow icon
            const arrow = dropdownToggle.querySelector("i");
            if (arrow) {
                arrow.style.transform = dropdown.classList.contains("active") ? "rotate(180deg)" : "rotate(0)";
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".dropdown")) {
            dropdowns.forEach((dropdown) => {
                dropdown.classList.remove("active");
                dropdown.querySelector(".dropdown-content")?.classList.remove("show");
                const arrow = dropdown.querySelector("i");
                if (arrow) {
                    arrow.style.transform = "rotate(0)";
                }
            });
        }
    });

    // Function to update header based on login status
    function updateHeader() {
        const accountLink = document.querySelector('.account a');
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        
        if (currentUser) {
            // User is logged in
            accountLink.innerHTML = `<i class="fas fa-user"></i> ${currentUser.name}`;
            accountLink.href = '#';
            
            // Create or update dropdown content
            let dropdownContent = document.querySelector('.account .dropdown-content');
            if (!dropdownContent) {
                dropdownContent = document.createElement('div');
                dropdownContent.className = 'dropdown-content';
                document.querySelector('.account').appendChild(dropdownContent);
            }
            
            // Get the current path to determine correct link paths
            const currentPath = window.location.pathname;
            const isInAccountSection = currentPath.includes('/account/');
            const basePath = isInAccountSection ? '' : 'account/';
            
            dropdownContent.innerHTML = `
                <a href="${basePath}profile.html"><i class="fas fa-user-circle"></i> My Profile</a>
                <a href="${basePath}orders.html"><i class="fas fa-shopping-bag"></i> My Orders</a>
                <a href="${basePath}settings.html"><i class="fas fa-cog"></i> Settings</a>
                <a href="#" id="logout-btn"><i class="fas fa-sign-out-alt"></i> Logout</a>
            `;
        } else {
            // User is not logged in
            accountLink.innerHTML = '<i class="fas fa-user"></i> Account';
            accountLink.href = 'account/login.html';
            // Remove dropdown if it exists
            const dropdownContent = document.querySelector('.account .dropdown-content');
            dropdownContent?.remove();
        }
    }

    // Handle logout
    document.addEventListener('click', (e) => {
        if (e.target.id === 'logout-btn' || e.target.closest('#logout-btn')) {
            e.preventDefault();
            localStorage.removeItem('currentUser');
            // Get the current path to determine correct login path
            const currentPath = window.location.pathname;
            const isInAccountSection = currentPath.includes('/account/');
            const loginPath = isInAccountSection ? 'login.html' : 'account/login.html';
            window.location.href = loginPath;
        }
    });

    // Call updateHeader when page loads
    updateHeader();

    // Update header on window resize
    window.addEventListener('resize', updateHeader);
});