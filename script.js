document.addEventListener('DOMContentLoaded', function() {

    // --- Custom Alert Functions ---
    const customAlertModal = document.getElementById('customAlertModal');
    const alertMessageEl = document.getElementById('alertMessage');

    function showCustomAlert(message) {
        alertMessageEl.innerText = message;
        customAlertModal.classList.add('active');
    }

    window.closeCustomAlert = function() {
        customAlertModal.classList.remove('active');
    }

    // --- Product Data (More Items with Detailed Information and Categories) ---
    const productsData = [
        {
            id: 'product-1',
            logoText: '🎧', // Using a simple emoji as a "logo"
            name: 'Premium Wireless Headphones',
            price: 15999.00, // Price in INR
            description: 'Experience unparalleled sound quality and comfort with our Premium Wireless Headphones. Featuring noise-cancelling technology, long-lasting battery, and a sleek design, these headphones are perfect for music lovers and professionals alike. Enjoy crystal-clear audio and deep bass.',
            sku: 'HP001',
            availability: 'In Stock',
            category: 'Audio',
            reviews: [
                { name: "Alice B.", rating: 5, comment: "Absolutely love these headphones! Sound quality is phenomenal and they're so comfortable." },
                { name: "Bob C.", rating: 4, comment: "Great product for the price. Battery life is impressive." },
                { name: "Charlie D.", rating: 5, comment: "Best headphones I've ever owned. Highly recommend!" },
            ]
        },
        {
            id: 'product-2',
            logoText: '⌚',
            name: 'Smart Fitness Watch',
            price: 9999.00, // Price in INR
            description: 'Track your fitness goals with the Smart Fitness Watch. Features include heart rate monitoring, step tracking, sleep analysis, and notifications. Waterproof design makes it perfect for all activities. Syncs seamlessly with your smartphone.',
            sku: 'SW002',
            availability: 'In Stock',
            category: 'Wearables',
            reviews: [
                { name: "David F.", rating: 5, comment: "A fantastic fitness companion! Accurate and stylish." },
                { name: "Eve G.", rating: 4, comment: "Good value, does everything I need. Battery lasts forever." },
            ]
        },
        {
            id: 'product-3',
            logoText: '⌨️',
            name: 'Mechanical Gaming Keyboard',
            price: 7499.00, // Price in INR
            description: 'Dominate your games with the Mechanical Gaming Keyboard. Features tactile switches, RGB backlighting, and programmable macros. Designed for speed and precision. Durable construction for intense gaming sessions.',
            sku: 'KB003',
            availability: 'Low Stock',
            category: 'Gaming',
            reviews: [
                { name: "Frank H.", rating: 5, comment: "Clicky keys and amazing RGB. My gaming has improved!" },
            ]
        },
        {
            id: 'product-4',
            logoText: '📷',
            name: 'Compact Digital Camera',
            price: 28999.00, // Price in INR
            description: 'Capture stunning photos and videos with our Compact Digital Camera. High-resolution sensor, optical zoom, and built-in Wi-Fi for easy sharing. Perfect for travel and everyday photography. Lightweight and portable.',
            sku: 'DC004',
            availability: 'Out of Stock',
            category: 'Electronics',
            reviews: []
        },
        {
            id: 'product-5',
            logoText: '🎒',
            name: 'Ergonomic Laptop Backpack',
            price: 2499.00, // Price in INR
            description: 'Carry your laptop and essentials in comfort with this ergonomic backpack. Features padded compartments, water-resistant material, and multiple pockets for organization. Ideal for daily commute or travel.',
            sku: 'BP005',
            availability: 'In Stock',
            category: 'Accessories',
            reviews: [
                { name: "Grace I.", rating: 4, comment: "Spacious and comfortable. A bit pricey but worth it." }
            ]
        },
        {
            id: 'product-6',
            logoText: '💡',
            name: 'Smart LED Light Bulb',
            price: 799.00, // Price in INR
            description: 'Control your lighting from anywhere with the Smart LED Light Bulb. Compatible with voice assistants, offers dimming and color-changing features. Easy to install and energy-efficient.',
            sku: 'LB006',
            availability: 'In Stock',
            category: 'Smart Home',
            reviews: []
        },
        // --- Newly Added Products ---
        {
            id: 'product-7',
            logoText: '🎶',
            name: 'True Wireless Earbuds (Brand X)',
            price: 5499.00,
            description: 'Immersive sound with active noise cancellation. Ergonomic design for all-day comfort. Comes with a portable charging case.',
            sku: 'EB007',
            availability: 'In Stock',
            category: 'Audio',
            reviews: [
                { name: "Suresh P.", rating: 5, comment: "Fantastic sound quality and comfortable fit. ANC works great!" }
            ]
        },
        {
            id: 'product-8',
            logoText: '📱',
            name: 'Smartphone (Brand Y)',
            price: 35000.00,
            description: 'Powerful processor, stunning OLED display, and a versatile quad-camera system. Long-lasting battery life. Unlocked for all carriers.',
            sku: 'SM008',
            availability: 'In Stock',
            category: 'Mobile Phones',
            reviews: [
                { name: "Anjali S.", rating: 4, comment: "Great phone, camera is superb. A bit expensive but worth it." },
                { name: "Rohit K.", rating: 5, comment: "Fast and smooth experience. Love the display." }
            ]
        },
        {
            id: 'product-9',
            logoText: '📱',
            name: 'Smartphone (Brand Z)',
            price: 22000.00,
            description: 'Affordable smartphone with a large display and decent camera. Ideal for everyday use and social media. Comes with fast charging support.',
            sku: 'SM009',
            availability: 'Low Stock',
            category: 'Mobile Phones',
            reviews: []
        },
        {
            id: 'product-10',
            logoText: '🎧',
            name: 'Wired In-Ear Earphones',
            price: 899.00,
            description: 'High-fidelity audio with a comfortable in-ear design. Durable cable and clear microphone for calls. Perfect for daily commutes.',
            sku: 'WE010',
            availability: 'In Stock',
            category: 'Audio',
            reviews: [
                { name: "Priya M.", rating: 4, comment: "Good sound for the price. Fits well." }
            ]
        },
        {
            id: 'product-11',
            logoText: '🔌',
            name: '20W Fast Charger',
            price: 1299.00,
            description: 'Compact and powerful 20W USB-C fast charger. Charges your devices rapidly and safely. Universal compatibility.',
            sku: 'CH011',
            availability: 'In Stock',
            category: 'Accessories',
            reviews: []
        },
        {
            id: 'product-12',
            logoText: '🔗',
            name: 'USB-C to USB-C Cable (1m)',
            price: 499.00,
            description: 'Durable USB-C to USB-C cable for fast charging and data transfer. 1-meter length, braided for extra strength. Supports up to 60W power delivery.',
            sku: 'CB012',
            availability: 'In Stock',
            category: 'Accessories',
            reviews: []
        },
        {
            id: 'product-13',
            logoText: '🔗',
            name: 'USB-A to Lightning Cable (2m)',
            price: 799.00,
            description: 'Long 2-meter USB-A to Lightning cable for Apple devices. MFi certified for safe and reliable charging and syncing.',
            sku: 'CB013',
            availability: 'In Stock',
            category: 'Accessories',
            reviews: []
        },
    ];

    let cart = []; // In-memory cart, will be synced with localStorage

    // --- Mock User Data (for Account Section) ---
    const mockUserData = {
        name: "Chandan kumar",
        email: "Chandankumar@gmail.com",
        membershipTier: "Gold"
    };


    // --- DOM Elements ---
    const cartItemCountEl = document.getElementById('cartItemCount');
    const cartItemsDisplay = document.getElementById('cartItemsDisplay');
    const cartTotalItemsEl = document.getElementById('cartTotalItems');
    const cartTotalPriceEl = document.getElementById('cartTotalPrice');
    const categoryButtonsContainer = document.getElementById('categoryButtons');
    const otherProductsContainer = document.getElementById('otherProductsContainer');
    const featuredProductsContainer = document.getElementById('featuredProductsContainer');
    const paymentForm = document.getElementById('paymentForm');
    const reviewForm = document.getElementById('reviewForm');
    const reviewsDisplay = document.getElementById('reviewsDisplay');
    const reviewProductIdSelect = document.getElementById('reviewProductId');

    // Account Section elements
    const accountNameEl = document.getElementById('accountName');
    const accountEmailEl = document.getElementById('accountEmail');
    const accountMembershipEl = document.getElementById('accountMembership');
    const updateProfileForm = document.getElementById('updateProfileForm');
    const profileNameInput = document.getElementById('profileName');
    const profileEmailInput = document.getElementById('profileEmail');


    // --- Page Section Management ---
    const pageSections = document.querySelectorAll('.page-section');

    function showSection(sectionId) {
        pageSections.forEach(section => {
            section.classList.remove('active');
            section.style.display = 'none'; // Hide all sections by default
        });

        // Show the requested section
        document.getElementById(sectionId).classList.add('active');
        document.getElementById(sectionId).style.display = 'block';

        // Scroll to the top of the displayed section for better UX
        document.querySelector('.product-page-main').scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Special handling for cart, reviews, and account sections to re-render items/reviews/data
        if (sectionId === 'cartSection') {
            renderCart();
        } else if (sectionId === 'reviewsSection') {
            renderAllProductReviews(); // Render reviews for all products when reviews section is active
            populateProductReviewSelect(); // Populate product dropdown for review form
        } else if (sectionId === 'homeSection') {
            renderFeaturedProducts();
        } else if (sectionId === 'accountSection') { // New: Render account page when active
            renderAccountPage();
        }
    }

    // --- Category Filtering ---
    let activeCategory = 'All'; // Default active category

    function getUniqueCategories() {
        const categories = new Set(productsData.map(p => p.category));
        return ['All', ...Array.from(categories)].sort();
    }

    function renderCategoryButtons() {
        categoryButtonsContainer.innerHTML = '';
        getUniqueCategories().forEach(category => {
            const button = document.createElement('button');
            button.classList.add('category-button');
            if (category === activeCategory) {
                button.classList.add('active');
            }
            button.innerText = category;
            button.addEventListener('click', () => {
                activeCategory = category;
                renderCategoryButtons(); // Re-render to update active state
                renderOtherProducts(); // Re-render products based on new category
            });
            categoryButtonsContainer.appendChild(button);
        });
    }

    // --- Other Products Listing (now the primary product display) ---
    function renderOtherProducts() {
        otherProductsContainer.innerHTML = ''; // Clear previous items
        const filteredProducts = activeCategory === 'All' ? productsData : productsData.filter(p => p.category === activeCategory);

        if (filteredProducts.length === 0) {
            otherProductsContainer.innerHTML = '<p class="empty-cart-message">No products found in this category.</p>';
            return;
        }

        filteredProducts.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('other-product-item');
            productItem.dataset.productId = product.id; // Store product ID
            productItem.innerHTML = `
                <div class="other-product-logo">${product.logoText}</div>
                <div class="other-product-details">
                    <h5 class="other-product-name">${product.name}</h5>
                    <p class="other-product-price">₹${product.price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    <button class="add-to-cart-btn-small" data-product-id="${product.id}">Add to Cart</button>
                </div>
            `;
            // Changed the click behavior to add to cart directly or show product details in a modal (if implemented)
            productItem.querySelector('.add-to-cart-btn-small').addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent the parent item click from triggering
                addToCart(product.id, 1); // Add 1 quantity of this product
            });

            // Optional: If you want a click on the product card itself to show more details (e.g., in a modal)
            productItem.addEventListener('click', () => {
                showCustomAlert(`Showing details for: ${product.name}\nDescription: ${product.description}`);
                // In a real application, you'd open a modal here with full product details
            });
            
            otherProductsContainer.appendChild(productItem);
        });
    }

    // --- Featured Products on Home Screen ---
    function renderFeaturedProducts() {
        featuredProductsContainer.innerHTML = ''; // Clear previous items

        // Select a few products to feature (e.g., first 3-4 products, or specific ones)
        const featuredProductIds = ['product-1', 'product-8', 'product-7']; // Example: Premium Wireless Headphones, Smartphone (Brand Y), True Wireless Earbuds
        const featuredProducts = productsData.filter(p => featuredProductIds.includes(p.id));

        if (featuredProducts.length === 0) {
            featuredProductsContainer.innerHTML = '<p class="empty-cart-message">No featured products available.</p>';
            return;
        }

        featuredProducts.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('other-product-item'); // Reusing existing product item style
            productItem.dataset.productId = product.id;
            productItem.innerHTML = `
                <div class="other-product-logo">${product.logoText}</div>
                <div class="other-product-details">
                    <h5 class="other-product-name">${product.name}</h5>
                    <p class="other-product-price">₹${product.price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    <button class="add-to-cart-btn-small" data-product-id="${product.id}">Add to Cart</button>
                </div>
            `;
            productItem.querySelector('.add-to-cart-btn-small').addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(product.id, 1);
            });
            productItem.addEventListener('click', () => {
                showCustomAlert(`Showing details for: ${product.name}\nDescription: ${product.description}`);
            });
            featuredProductsContainer.appendChild(productItem);
        });
    }

    // --- Cart System with LocalStorage ---

    function getCartFromLocalStorage() {
        const storedCart = localStorage.getItem('shoppingCart');
        return storedCart ? JSON.parse(storedCart) : [];
    }

    function saveCartToLocalStorage() {
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
        updateCartCount();
    }

    function updateCartCount() {
        const totalItemsInCart = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartItemCountEl.innerText = totalItemsInCart;
        cartItemCountEl.style.display = totalItemsInCart > 0 ? 'inline-block' : 'none'; // Show/hide count badge
    }

    // Modified addToCart to take product ID and quantity directly
    window.addToCart = function(productId, quantity) {
        const productToAdd = productsData.find(p => p.id === productId);

        if (!productToAdd) {
            showCustomAlert('Product not found.');
            return;
        }

        if (isNaN(quantity) || quantity < 1) {
            showCustomAlert('Please enter a valid quantity (minimum 1).');
            return;
        }
        if (productToAdd.availability === 'Out of Stock') {
            showCustomAlert(`${productToAdd.name} is currently out of stock.`);
            return;
        }

        const existingItemIndex = cart.findIndex(item => item.id === productToAdd.id);

        if (existingItemIndex > -1) {
            cart[existingItemIndex].quantity += quantity;
        } else {
            cart.push({
                id: productToAdd.id,
                name: productToAdd.name,
                price: productToAdd.price,
                logoText: productToAdd.logoText,
                quantity: quantity
            });
        }

        saveCartToLocalStorage();
        showCustomAlert(`Added ${quantity} x "${productToAdd.name}" to your cart!`);
        console.log(`Added ${quantity} x "${productToAdd.name}" to cart. Current cart:`, cart);
    }

    function renderCart() {
        cart = getCartFromLocalStorage(); // Always get latest from local storage
        cartItemsDisplay.innerHTML = ''; // Clear previous items

        if (cart.length === 0) {
            cartItemsDisplay.innerHTML = '<p class="empty-cart-message">Your cart is empty. Start shopping now!</p>';
        } else {
            cart.forEach(item => {
                const cartItemCard = document.createElement('div');
                cartItemCard.classList.add('cart-item-card');
                cartItemCard.innerHTML = `
                    <div class="cart-item-logo">${item.logoText}</div>
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p class="cart-item-price">₹${(item.price * item.quantity).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    </div>
                    <div class="cart-item-actions">
                        <input type="number" value="${item.quantity}" min="1" class="cart-item-quantity" data-item-id="${item.id}">
                        <button class="remove-item-btn" data-item-id="${item.id}">Remove</button>
                    </div>
                `;
                cartItemsDisplay.appendChild(cartItemCard);
            });

            // Add event listeners for quantity changes and remove buttons
            document.querySelectorAll('.cart-item-quantity').forEach(input => {
                input.addEventListener('change', (e) => {
                    const itemId = e.target.dataset.itemId;
                    const newQuantity = parseInt(e.target.value);
                    updateCartItemQuantity(itemId, newQuantity);
                });
            });

            document.querySelectorAll('.remove-item-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const itemId = e.target.dataset.itemId;
                    removeCartItem(itemId);
                });
            });
        }

        updateCartSummary();
    }

    function updateCartItemQuantity(itemId, newQuantity) {
        const itemIndex = cart.findIndex(item => item.id === itemId);
        if (itemIndex > -1 && newQuantity > 0) {
            cart[itemIndex].quantity = newQuantity;
            saveCartToLocalStorage();
            renderCart(); // Re-render to update prices and totals
        } else if (newQuantity <= 0) {
            removeCartItem(itemId); // Remove if quantity drops to 0 or less
        }
    }

    function removeCartItem(itemId) {
        cart = cart.filter(item => item.id !== itemId);
        saveCartToLocalStorage();
        renderCart(); // Re-render to update display
        showCustomAlert('Item removed from cart.');
    }

    function updateCartSummary() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotalItemsEl.innerText = totalItems;
        cartTotalPriceEl.innerText = `₹${totalPrice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        
        // Enable/disable checkout button based on cart content
        document.querySelector('.checkout-btn').disabled = cart.length === 0;
    }

    // --- Checkout & Payment System (Mocked) ---
    window.showCheckout = function() {
        if (cart.length === 0) {
            showCustomAlert('Your cart is empty. Please add items before checking out.');
            return;
        }
        showSection('checkoutSection');
    }

    paymentForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Simple mock validation (could be more robust)
        const cardName = document.getElementById('cardName').value.trim();
        const cardNumber = document.getElementById('cardNumber').value.trim();
        const expiryDate = document.getElementById('expiryDate').value.trim();
        const cvv = document.getElementById('cvv').value.trim();
        const billingAddress = document.getElementById('billingAddress').value.trim();

        if (!cardName || !cardNumber || !expiryDate || !cvv || !billingAddress) {
            showCustomAlert('Please fill in all payment and billing details.');
            return;
        }

        if (!/^[0-9]{16}$/.test(cardNumber)) {
            showCustomAlert('Please enter a valid 16-digit card number.');
            return;
        }
        if (!/^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(expiryDate)) {
            showCustomAlert('Please enter a valid expiry date (MM/YY).');
            return;
        }
        if (!/^[0-9]{3,4}$/.test(cvv)) {
            showCustomAlert('Please enter a valid 3 or 4 digit CVV.');
            return;
        }

        // Simulate payment processing
        showCustomAlert('Processing your order...');

        setTimeout(() => {
            const paymentSuccess = Math.random() > 0.1; // 90% chance of success

            if (paymentSuccess) {
                showCustomAlert('Payment Successful! Your order has been placed.');
                cart = []; // Clear cart
                saveCartToLocalStorage(); // Save empty cart
                paymentForm.reset(); // Clear form
                navigatePage('products'); // Go back to products page
            } else {
                showCustomAlert('Payment Failed. Please check your details or try again.');
            }
        }, 2000); // Simulate API call delay
    });

    // --- Reviews Section Functionality ---
    function renderAllProductReviews() {
        reviewsDisplay.innerHTML = ''; // Clear previous reviews

        let allReviews = [];
        productsData.forEach(product => {
            product.reviews.forEach(review => {
                allReviews.push({ ...review, productName: product.name, productId: product.id });
            });
        });

        if (allReviews.length === 0) {
            reviewsDisplay.innerHTML = '<p class="empty-cart-message">No reviews yet. Be the first to leave one!</p>';
            return;
        }

        allReviews.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0)); // Sort by date if available, otherwise by arbitrary order

        allReviews.forEach(review => {
            const reviewCard = document.createElement('div');
            reviewCard.classList.add('review-card');
            const fullStars = '⭐'.repeat(review.rating);
            const emptyStars = '☆'.repeat(5 - review.rating);
            reviewCard.innerHTML = `
                <strong>${review.name}</strong> on ${review.productName ? `<em>${review.productName}</em>` : 'a product'}
                <span class="stars">${fullStars}${emptyStars}</span>
                <p>"${review.comment}"</p>
            `;
            reviewsDisplay.appendChild(reviewCard);
        });
    }

    function populateProductReviewSelect() {
        reviewProductIdSelect.innerHTML = '<option value="">General Review (no specific product)</option>'; // Default option
        productsData.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.innerText = product.name;
            reviewProductIdSelect.appendChild(option);
        });
    }

    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const reviewerName = document.getElementById('reviewerName').value.trim();
        const reviewRating = parseInt(document.getElementById('reviewRating').value);
        const reviewComment = document.getElementById('reviewComment').value.trim();
        const reviewProductId = document.getElementById('reviewProductId').value;

        // Basic validation
        if (!reviewerName || !reviewComment || isNaN(reviewRating) || reviewRating < 1 || reviewRating > 5) {
            showCustomAlert('Please fill in your name, a comment, and a rating between 1 and 5.');
            return;
        }

        const newReview = {
            name: reviewerName,
            rating: reviewRating,
            comment: reviewComment,
            date: new Date().toISOString() // Add timestamp for sorting
        };

        let productToUpdate = null;
        if (reviewProductId) {
            productToUpdate = productsData.find(p => p.id === reviewProductId);
            if (productToUpdate) {
                productToUpdate.reviews.push(newReview);
            }
        } else {
            // For general reviews, could store them separately or add to a dummy product.
            // For simplicity, let's just show a success message.
            // In a real app, general reviews would need a separate storage mechanism.
        }
        
        showCustomAlert('Thank you for your review!');
        reviewForm.reset(); // Clear the form
        renderAllProductReviews(); // Re-render reviews to show the new one
    });

    // --- Account Section Functionality ---
    function renderAccountPage() {
        accountNameEl.innerText = mockUserData.name;
        accountEmailEl.innerText = mockUserData.email;
        accountMembershipEl.innerText = mockUserData.membershipTier;

        // Populate the update form with current data
        profileNameInput.value = mockUserData.name;
        profileEmailInput.value = mockUserData.email;
    }

    updateProfileForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const newName = profileNameInput.value.trim();
        const newEmail = profileEmailInput.value.trim();

        if (!newName || !newEmail) {
            showCustomAlert('Name and Email cannot be empty.');
            return;
        }

        // Basic email validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)) {
            showCustomAlert('Please enter a valid email address.');
            return;
        }

        // Simulate updating user data
        mockUserData.name = newName;
        mockUserData.email = newEmail;

        // Re-render the account page to show updated details
        renderAccountPage();
        showCustomAlert('Profile updated successfully!');
    });

    // --- Navigation Functionality ---
    window.navigatePage = function(page) {
        switch (page) {
            case 'home':
                showSection('homeSection');
                break;
            case 'products':
                showSection('productsSection');
                renderOtherProducts(); // Ensure products are rendered based on current category
                break;
            case 'cart':
                showSection('cartSection');
                break;
            case 'reviews':
                showSection('reviewsSection');
                populateProductReviewSelect();
                renderAllProductReviews();
                break;
            case 'account': // Updated to render account page
                showSection('accountSection');
                renderAccountPage(); // Call render function
                break;
            default:
                console.log(`Navigation to ${page} not implemented.`);
        }
    };


    // --- Initial Load ---
    cart = getCartFromLocalStorage(); // Load cart from local storage on startup
    updateCartCount(); // Update cart count badge
    renderCategoryButtons(); // Render category filter buttons
    renderOtherProducts(); // Render the list of all products (or filtered by default 'All')
    showSection('homeSection'); // Ensure the home section is active initially
});
