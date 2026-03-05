// --- 36 Premium Products Data ---
const products = [
    // Bats
    { id: 1, title: "Gray-Nicolls Pro English Willow", category: "Bats", price: 45000, oldPrice: 50000, rating: 5.0, tag: "PREMIUM", img: "https://images.unsplash.com/photo-1593341646782-e0ba2b5cb3c8?q=80&w=600&auto=format&fit=crop", desc: "Top of the line Grade 1 English Willow for professional matches. Huge sweet spot." },
    { id: 2, title: "CA Sports Plus English Willow", category: "Bats", price: 30000, oldPrice: 35000, rating: 4.8, img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=600&auto=format&fit=crop", desc: "Fantastic ping and balance, hand-crafted CA Sports original from Grade 2 willow." },
    { id: 3, title: "TM Master Classic English Willow", category: "Bats", price: 20000, oldPrice: null, rating: 4.6, img: "https://images.unsplash.com/photo-1589801258579-18e091e4ca5c?q=80&w=600&auto=format&fit=crop", desc: "Perfect for league cricket, durable and highly potent." },
    { id: 4, title: "SS Ton Kashmir Willow Power", category: "Bats", price: 8000, oldPrice: 10000, rating: 4.5, tag: "SALE", img: "https://plus.unsplash.com/premium_photo-1679905206126-5b43be1269ac?q=80&w=600&auto=format&fit=crop", desc: "Premium Kashmir willow for explosive hard ball hitting." },
    { id: 5, title: "CA Tape Ball Specialized Bat", category: "Bats", price: 3500, oldPrice: 4500, rating: 4.9, img: "https://images.unsplash.com/photo-1540455855-f268f7d98d28?q=80&w=600&auto=format&fit=crop", desc: "Engineered specifically for tennis and tape ball cricket. Ultra light." },
    { id: 6, title: "Kookaburra Junior Starter Bat", category: "Bats", price: 4000, oldPrice: null, rating: 4.4, img: "https://images.unsplash.com/photo-1560942548-c89b724f940a?q=80&w=600&auto=format&fit=crop", desc: "Great for young beginners stepping into the world of cricket." },
    { id: 7, title: "MB Malik Tournament Bat", category: "Bats", price: 5000, oldPrice: 6000, rating: 4.8, img: "https://images.unsplash.com/photo-1594470117722-de4b9a02ebed?q=80&w=600&auto=format&fit=crop", desc: "Heavy bottom bat for maximum six-hitting capability." },

    // Balls
    { id: 8, title: "Kookaburra Turf White Ball", category: "Balls", price: 8500, oldPrice: 10000, rating: 4.9, tag: "PRO", img: "https://images.unsplash.com/photo-1612874136934-2e255ddb8d65?q=80&w=600&auto=format&fit=crop", desc: "Official white ball for ODI and T20 format." },
    { id: 9, title: "Dukes Pro Red Leather Ball", category: "Balls", price: 2500, oldPrice: 3000, rating: 4.7, img: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=600&auto=format&fit=crop", desc: "4-piece Alum tanned red leather ball for test matches." },
    { id: 10, title: "CA Pink Day/Night Test Ball", category: "Balls", price: 3000, oldPrice: null, rating: 4.6, img: "https://images.unsplash.com/photo-1575361204481-413ce1e51f8a?q=80&w=600&auto=format&fit=crop", desc: "Highly visible pink ball for day/night longer format games." },
    { id: 11, title: "Heavy Tennis Ball Pro (Box of 6)", category: "Balls", price: 1200, oldPrice: 1500, rating: 4.8, tag: "VALUE", img: "https://images.unsplash.com/photo-1591124610196-8571408db05d?q=80&w=600&auto=format&fit=crop", desc: "High bounce heavy tennis balls ideal for practice." },
    { id: 12, title: "Tape Ball Master (Box of 6)", category: "Balls", price: 1800, oldPrice: null, rating: 4.5, img: "https://images.unsplash.com/photo-1565516773322-29837a77df12?q=80&w=600&auto=format&fit=crop", desc: "Pre-taped perfectly weighted balls for immediate street cricket play." },

    // Footwear
    { id: 13, title: "Adidas Cricket Performance Spikes", category: "Footwear", price: 12000, oldPrice: 15000, rating: 4.9, tag: "NEW", img: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=600&auto=format&fit=crop", desc: "Full metal spikes with Adidas signature comfort." },
    { id: 14, title: "Nike Turf Rubber Studs", category: "Footwear", price: 8500, oldPrice: null, rating: 4.7, img: "https://images.unsplash.com/photo-1538356111053-748a48e1acb8?q=80&w=600&auto=format&fit=crop", desc: "Perfect for artificial pitches and synthetic nets by Nike." },
    { id: 15, title: "Puma Elite Fielding Shoes", category: "Footwear", price: 10000, oldPrice: 12000, rating: 4.8, img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=600&auto=format&fit=crop", desc: "Ultra-lightweight Puma shoes designed for agility on the field." },
    { id: 16, title: "CA Fast Bowler High-Top Spikes", category: "Footwear", price: 14000, oldPrice: 16000, rating: 4.6, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop", desc: "Added ankle support to prevent injuries during delivery stride." },

    // Clothing
    { id: 17, title: "Pakistan Cricket Kit 2026", category: "Clothing", price: 3500, oldPrice: 4000, rating: 4.9, tag: "HOT", img: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=600&auto=format&fit=crop", desc: "Official replica fan jersey of the Pakistan national team." },
    { id: 18, title: "India National Team Kit", category: "Clothing", price: 3500, oldPrice: null, rating: 4.8, img: "https://images.unsplash.com/photo-1579951401309-8bbdd300d8d7?q=80&w=600&auto=format&fit=crop", desc: "Official replica blue jersey of the Indian cricket team." },
    { id: 19, title: "Australia National Team Kit", category: "Clothing", price: 3500, oldPrice: 4000, rating: 4.7, img: "https://images.unsplash.com/photo-1589088600810-749e75eb82b8?q=80&w=600&auto=format&fit=crop", desc: "Aussie fans favourite yellow and green official kit." },
    { id: 20, title: "England National Team Kit", category: "Clothing", price: 3500, oldPrice: null, rating: 4.6, img: "https://images.unsplash.com/photo-1618517047721-698f1aef2d17?q=80&w=600&auto=format&fit=crop", desc: "The iconic English ODI kit for professional cricket." },

    // Protection
    { id: 21, title: "Gray-Nicolls Batting Gloves", category: "Protection", price: 5500, oldPrice: 6500, rating: 4.8, img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=600&auto=format&fit=crop", desc: "Sausage finger design with high-density foam for impact absorption." },
    { id: 22, title: "CA Elite Wicket Keeping Gloves", category: "Protection", price: 7000, oldPrice: 8500, rating: 4.9, img: "https://images.unsplash.com/photo-1502444330042-d1a1ddf9ee5b?q=80&w=600&auto=format&fit=crop", desc: "Octopus grip rubber facing with supreme webbing." },
    { id: 23, title: "Masuri Titanium Helmet", category: "Protection", price: 12000, oldPrice: 15000, rating: 4.9, img: "https://images.unsplash.com/photo-1541334057885-ad78c2e646f8?q=80&w=600&auto=format&fit=crop", desc: "Top safety standards with a lightweight titanium grill." },
    { id: 24, title: "SS Premium Batting Leg Guards", category: "Protection", price: 8000, oldPrice: 9500, rating: 4.7, tag: "PRO", img: "https://images.unsplash.com/photo-1606778930925-fb355b252df6?q=80&w=600&auto=format&fit=crop", desc: "Lightweight HD foam pads offering maximum protection against pace." },
    { id: 25, title: "Inner Gloves (Cotton)", category: "Protection", price: 500, oldPrice: null, rating: 4.4, img: "https://images.unsplash.com/photo-1627685600649-ee9ac59846b4?q=80&w=600&auto=format&fit=crop", desc: "Absorbs sweat and prolongs the life of your batting gloves." },
    { id: 26, title: "Wicket Keeping Pads", category: "Protection", price: 6500, oldPrice: null, rating: 4.6, img: "https://images.unsplash.com/photo-1607567116279-d1fc752627cb?q=80&w=600&auto=format&fit=crop", desc: "Shorter length pads for maximum agility behind the stumps." },
    { id: 27, title: "Thigh Guard Set (Inner & Outer)", category: "Protection", price: 3000, oldPrice: 3500, rating: 4.7, img: "https://images.unsplash.com/photo-1616428414169-7928b7538b34?q=80&w=600&auto=format&fit=crop", desc: "Complete lower body protection with adjustable straps." },
    { id: 28, title: "Chest Guard Pro", category: "Protection", price: 1500, oldPrice: null, rating: 4.5, img: "https://images.unsplash.com/photo-1608249052528-98e94f31d044?q=80&w=600&auto=format&fit=crop", desc: "Protection against hostile fast bowling on bouncy tracks." },
    { id: 29, title: "Abdomen Guard / Box", category: "Protection", price: 400, oldPrice: null, rating: 4.8, img: "https://images.unsplash.com/photo-1619623631988-cbfee5dbbc2f?q=80&w=600&auto=format&fit=crop", desc: "Toughened plastic with padded edges. Essential." },

    // Accessories
    { id: 30, title: "Adidas Cap", category: "Accessories", price: 1500, oldPrice: null, rating: 4.8, tag: "NEW", img: "https://images.unsplash.com/photo-1572522463668-bea50ca328db?q=80&w=600&auto=format&fit=crop", desc: "Official Adidas cap with sweat-wicking technology." },
    { id: 31, title: "Nike Cap", category: "Accessories", price: 1500, oldPrice: null, rating: 4.8, tag: "HOT", img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=600&auto=format&fit=crop", desc: "Classic stylish Nike cap for the field." },
    { id: 32, title: "Pakistan Team Cap", category: "Accessories", price: 1200, oldPrice: null, rating: 4.9, img: "https://images.unsplash.com/photo-1580218760738-16c59051ded8?q=80&w=600&auto=format&fit=crop", desc: "Official Pakistan cricket team green cap." },
    { id: 33, title: "CA Kit Bag (Wheelie)", category: "Accessories", price: 11000, oldPrice: 13000, rating: 4.8, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop", desc: "Massive storage for all your gear with industrial-grade wheels." },
    { id: 34, title: "Premium Bat Cover", category: "Accessories", price: 800, oldPrice: null, rating: 4.5, img: "https://images.unsplash.com/photo-1528659556847-f49553f19e71?q=80&w=600&auto=format&fit=crop", desc: "Padded cover to protect your expensive bats from moisture." },
    { id: 35, title: "Octopus Grip (Pack of 3)", category: "Accessories", price: 1000, oldPrice: 1200, rating: 4.8, img: "https://images.unsplash.com/photo-1590483863845-de0e5dc4220b?q=80&w=600&auto=format&fit=crop", desc: "Superior traction even when sweating profusely." },
    { id: 36, title: "Wooden Stumps Set", category: "Accessories", price: 3500, oldPrice: null, rating: 4.6, img: "https://images.unsplash.com/photo-1517457788107-b35272a5ba82?q=80&w=600&auto=format&fit=crop", desc: "Ash wood stumps, perfect for professional matches." }
];

// Utilities
const formatPrice = (p) => "Rs. " + p.toLocaleString();
const toast = document.getElementById('toast');

function showToast(msg) {
    toast.innerHTML = `<i class="ri-checkbox-circle-fill"></i> <span>${msg}</span>`;
    toast.classList.remove('hidden');
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Global state
let cart = [];
let generatedTrackingId = null;

// Render Products Logic
const productsGrid = document.getElementById('productsGrid');

function renderProducts(category = 'All') {
    let filtered = products;
    if (category !== 'All') {
        filtered = products.filter(p => p.category === category);
    }

    productsGrid.innerHTML = filtered.map(product => `
        <div class="product-card" onclick="openProductModal(${product.id})">
            ${product.tag ? `<div class="discount-badge">${product.tag}</div>` : ''}
            <div class="product-img">
                <img src="${product.img}" alt="${product.title}">
            </div>
            <div class="product-info">
                <div>
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-title">${product.title}</h3>
                </div>
                <div>
                    <div class="product-rating">
                        <i class="ri-star-fill"></i>
                        <span>${product.rating}</span>
                    </div>
                    <div class="product-price">
                        <span class="current-price">${formatPrice(product.price)}</span>
                        ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ''}
                    </div>
                    <button class="btn product-card-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                        <i class="ri-shopping-cart-2-line"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Category Filters Activation
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderProducts(e.target.getAttribute('data-filter'));
    });
});

// Product Modal
window.openProductModal = function (id) {
    const product = products.find(p => p.id === id);
    const modal = document.getElementById('productModal');
    const body = document.getElementById('modalBody');

    body.innerHTML = `
        <div class="modal-grid">
            <div class="modal-gallery">
                <img src="${product.img}" class="modal-main-img" alt="${product.title}">
            </div>
            <div class="modal-info">
                <h2>${product.title}</h2>
                <div class="product-rating" style="margin-bottom: 1rem;">
                    <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-fill"></i>
                    <span>${product.rating} Rating Point</span>
                </div>
                <div class="product-price">
                    <span class="current-price" style="font-size: 2rem;">${formatPrice(product.price)}</span>
                    ${product.oldPrice ? `<span class="old-price" style="font-size: 1.2rem;">${formatPrice(product.oldPrice)}</span>` : ''}
                </div>
                <p class="modal-desc">${product.desc}</p>
                <div style="margin-top:2rem;">
                    <button class="btn btn-primary" style="width: 100%; padding: 1rem; font-size:1.1rem;" onclick="addToCart(${product.id}); closeProductModal()">
                        <i class="ri-shopping-cart-fill"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
    modal.style.display = 'block';
};

window.closeProductModal = function () {
    document.getElementById('productModal').style.display = 'none';
};

// Cart Engine
window.addToCart = function (productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(c => c.id === productId);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCartCount();
    showToast(`${product.title} added!`);
};

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    document.querySelector('.cart-count').innerText = count;
}

window.openCartModal = function () {
    renderCart();
    document.getElementById('cartModal').style.display = 'block';
};

window.closeCartModal = function () {
    document.getElementById('cartModal').style.display = 'none';
};

function renderCart() {
    const container = document.getElementById('cartItemsContainer');
    const totalEl = document.getElementById('cartTotal');

    if (cart.length === 0) {
        container.innerHTML = `<p style="text-align:center; padding: 2rem; color:var(--gray);">Cart is empty.</p>`;
        totalEl.innerText = "Rs. 0";
        return;
    }

    let total = 0;
    container.innerHTML = cart.map(item => {
        total += (item.price * item.qty);
        return `
        <div class="cart-item">
            <img src="${item.img}" class="cart-item-img">
            <div class="cart-item-details">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
                <div class="cart-item-qty">
                    <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})"><i class="ri-delete-bin-line"></i></button>
        </div>
        `;
    }).join('');

    totalEl.innerText = formatPrice(total);
}

window.updateQty = function (id, change) {
    const item = cart.find(c => c.id === id);
    if (item) {
        item.qty += change;
        if (item.qty <= 0) removeFromCart(id);
        else renderCart();
        updateCartCount();
    }
};

window.removeFromCart = function (id) {
    cart = cart.filter(c => c.id !== id);
    renderCart();
    updateCartCount();
};

// Payment System
window.proceedToPayment = function () {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    document.getElementById('paymentTotal').innerText = formatPrice(total);

    closeCartModal();
    document.getElementById('paymentModal').style.display = 'block';
};

window.closePaymentModal = function () {
    document.getElementById('paymentModal').style.display = 'none';
};

window.confirmOrder = function () {
    const phone = document.getElementById('custPhone').value;
    const tid = document.getElementById('custTid').value;
    const addr = document.getElementById('custAddress').value;

    if (!phone || !tid || !addr) {
        alert("Please fill all details to confirm the order.");
        return;
    }

    // Process order success logic
    generatedTrackingId = "ORD-" + Math.floor(100000 + Math.random() * 900000);

    // Reset Data
    cart = [];
    updateCartCount();

    closePaymentModal();

    // Show tracking success
    document.getElementById('trackingContent').classList.remove('hidden');
    document.getElementById('trackSearchContent').classList.add('hidden');
    document.getElementById('displayTrackingId').innerText = generatedTrackingId;

    document.getElementById('trackingModal').style.display = 'block';
};

// Tracking System
window.openTrackModal = function (e) {
    if (e) e.preventDefault();
    document.getElementById('trackingContent').classList.add('hidden');
    document.getElementById('trackSearchContent').classList.remove('hidden');
    document.getElementById('searchTrackResult').classList.add('hidden');
    document.getElementById('searchTrackId').value = '';

    document.getElementById('trackingModal').style.display = 'block';
};

window.closeTrackingModal = function () {
    document.getElementById('trackingModal').style.display = 'none';
};

window.searchOrder = function () {
    const val = document.getElementById('searchTrackId').value.trim();
    if (val === "") {
        alert("Please enter a Tracking ID");
        return;
    }

    // If they typed the one they just made or any fake ID, show success
    document.getElementById('searchTrackResult').classList.remove('hidden');
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('All');
});
