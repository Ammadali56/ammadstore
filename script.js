// --- 36 Premium Products Data ---
const products = [
    // Bats
    { id: 1, title: "Ammad Pro English Willow Grade 1", category: "Bats", price: 45000, oldPrice: 50000, rating: 5.0, tag: "PREMIUM", img: "https://images.unsplash.com/photo-1593341646782-e0ba2b5cb3c8?q=80&w=600&auto=format&fit=crop", desc: "Top of the line Grade 1 English Willow for professional matches. Huge sweet spot." },
    { id: 2, title: "Ammad Elite English Willow Grade 2", category: "Bats", price: 30000, oldPrice: 35000, rating: 4.8, img: "https://placehold.co/600x600/1e3a8a/ffffff?text=Elite+Bat+Grade+2", desc: "Fantastic ping and balance, hand-crafted from Grade 2 willow." },
    { id: 3, title: "Ammad Classic English Willow Grade 3", category: "Bats", price: 20000, oldPrice: null, rating: 4.6, img: "https://placehold.co/600x600/0f172a/ffffff?text=Classic+Grade+3", desc: "Perfect for club cricket, durable and lightweight." },
    { id: 4, title: "Master Blaster Kashmir Willow", category: "Bats", price: 8000, oldPrice: 10000, rating: 4.5, tag: "SALE", img: "https://placehold.co/600x600/3b82f6/ffffff?text=Kashmir+Willow", desc: "Premium Kashmir willow for explosive hard ball hitting." },
    { id: 5, title: "Power Hitter Tape Ball Bat", category: "Bats", price: 3500, oldPrice: 4500, rating: 4.9, img: "https://placehold.co/600x600/10b981/ffffff?text=Tape+Ball+Bat", desc: "Engineered specifically for tennis and tape ball cricket. Ultra light." },
    { id: 6, title: "Junior Starter Bat (Size 5)", category: "Bats", price: 4000, oldPrice: null, rating: 4.4, img: "https://placehold.co/600x600/fbbf24/000000?text=Junior+Bat", desc: "Great for young beginners stepping into the world of cricket." },
    { id: 7, title: "Ammad Tournament Bat (Tape Ball)", category: "Bats", price: 5000, oldPrice: 6000, rating: 4.8, img: "https://placehold.co/600x600/ef4444/ffffff?text=Tournament+Bat", desc: "Heavy bottom bat for maximum six-hitting capability." },

    // Balls
    { id: 8, title: "Kookaburra Turf White Ball", category: "Balls", price: 8500, oldPrice: 10000, rating: 4.9, tag: "PRO", img: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=600&auto=format&fit=crop", desc: "Official white ball for ODI and T20 format." },
    { id: 9, title: "Ammad Pro Red Leather Ball", category: "Balls", price: 2500, oldPrice: 3000, rating: 4.7, img: "https://placehold.co/600x600/991b1b/ffffff?text=Red+Leather+Ball", desc: "4-piece Alum tanned red leather ball for test matches." },
    { id: 10, title: "Pink Day/Night Test Ball", category: "Balls", price: 3000, oldPrice: null, rating: 4.6, img: "https://placehold.co/600x600/ec4899/ffffff?text=Pink+Test+Ball", desc: "Highly visible pink ball for day/night longer format games." },
    { id: 11, title: " Heavy Tennis Ball (Box of 6)", category: "Balls", price: 1200, oldPrice: 1500, rating: 4.8, tag: "VALUE", img: "https://placehold.co/600x600/eab308/000000?text=Tennis+Balls", desc: "High bounce heavy tennis balls ideal for practice." },
    { id: 12, title: "Tape Ball Pro (Box of 6)", category: "Balls", price: 1800, oldPrice: null, rating: 4.5, img: "https://placehold.co/600x600/475569/ffffff?text=Tape+Balls", desc: "Pre-taped perfectly weighted balls for immediate street cricket play." },

    // Footwear
    { id: 13, title: "Ammad Pro Performance Spikes", category: "Footwear", price: 12000, oldPrice: 15000, rating: 4.9, tag: "NEW", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop", desc: "Full metal spikes for genuine fast bowlers." },
    { id: 14, title: "Ammad Turf Rubber Studs", category: "Footwear", price: 8500, oldPrice: null, rating: 4.7, img: "https://placehold.co/600x600/0f172a/ffffff?text=Rubber+Studs", desc: "Perfect for artificial pitches and synthetic nets." },
    { id: 15, title: "Elite Fielding Shoes (Neon)", category: "Footwear", price: 10000, oldPrice: 12000, rating: 4.8, img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=600&auto=format&fit=crop", desc: "Ultra-lightweight shoes designed for maximum agility on the field." },
    { id: 16, title: "Fast Bowler High-Top Spikes", category: "Footwear", price: 14000, oldPrice: 16000, rating: 4.6, img: "https://placehold.co/600x600/1d4ed8/ffffff?text=High-Top+Spikes", desc: "Added ankle support to prevent injuries during delivery stride." },

    // Clothing
    { id: 17, title: "National Team Jersey 2026", category: "Clothing", price: 3500, oldPrice: 4000, rating: 4.9, tag: "HOT", img: "https://images.unsplash.com/photo-1579951401309-8bbdd300d8d7?q=80&w=600&auto=format&fit=crop", desc: "Official replica fan jersey. Premium sweat-wicking fabric." },
    { id: 18, title: "Ammad Training T-Shirt", category: "Clothing", price: 1500, oldPrice: null, rating: 4.5, img: "https://placehold.co/600x600/334155/ffffff?text=Training+Kit", desc: "Breathable mesh t-shirt, perfect for net sessions." },
    { id: 19, title: "Premium White Test Match Whites", category: "Clothing", price: 4000, oldPrice: 5000, rating: 4.7, img: "https://placehold.co/600x600/f8fafc/000000?text=Test+Whites", desc: "Classic crisp white jersey and trousers for red-ball cricket." },
    { id: 20, title: "Performance Track Pants", category: "Clothing", price: 2500, oldPrice: null, rating: 4.6, img: "https://placehold.co/600x600/1e293b/ffffff?text=Track+Pants", desc: "Stretchable fabric for complete freedom of movement." },

    // Protection
    { id: 21, title: "Pro Batting Gloves (Right Hand)", category: "Protection", price: 5500, oldPrice: 6500, rating: 4.8, img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=600&auto=format&fit=crop", desc: "Sausage finger design with high-density foam for impact absorption." },
    { id: 22, title: "Pro Batting Gloves (Left Hand)", category: "Protection", price: 5500, oldPrice: null, rating: 4.8, img: "https://placehold.co/600x600/0ea5e9/ffffff?text=Left+Hand+Gloves", desc: "Premium sheep leather palm for excellent grip and feel." },
    { id: 23, title: "Elite Wicket Keeping Gloves", category: "Protection", price: 7000, oldPrice: 8500, rating: 4.9, img: "https://placehold.co/600x600/f97316/ffffff?text=WK+Gloves", desc: "Octopus grip rubber facing with supreme webbing." },
    { id: 24, title: "Inner Gloves (Cotton)", category: "Protection", price: 500, oldPrice: null, rating: 4.4, img: "https://placehold.co/600x600/cbd5e1/000000?text=Inner+Gloves", desc: "Absorbs sweat and prolongs the life of your batting gloves." },
    { id: 25, title: "Premium Batting Leg Guards", category: "Protection", price: 8000, oldPrice: 9500, rating: 4.7, tag: "PRO", img: "https://placehold.co/600x600/1e3a8a/ffffff?text=Batting+Pads", desc: "Lightweight HD foam pads offering maximum protection against pace." },
    { id: 26, title: "Wicket Keeping Pads", category: "Protection", price: 6500, oldPrice: null, rating: 4.6, img: "https://placehold.co/600x600/0284c7/ffffff?text=WK+Pads", desc: "Shorter length pads for maximum agility behind the stumps." },
    { id: 27, title: "Titanium Faceguard Helmet (Navy)", category: "Protection", price: 12000, oldPrice: 15000, rating: 4.9, img: "https://placehold.co/600x600/172554/ffffff?text=Helmets", desc: "Top safety standards with a lightweight titanium grill." },
    { id: 28, title: "Thigh Guard Set (Inner & Outer)", category: "Protection", price: 3000, oldPrice: 3500, rating: 4.7, img: "https://placehold.co/600x600/64748b/ffffff?text=Thigh+Guard", desc: "Complete lower body protection with adjustable straps." },
    { id: 29, title: "Abdomen Guard / Box", category: "Protection", price: 400, oldPrice: null, rating: 4.8, img: "https://placehold.co/600x600/94a3b8/000000?text=Abdo+Guard", desc: "Toughened plastic with padded edges. Essential." },
    { id: 30, title: "Chest Guard Pro", category: "Protection", price: 1500, oldPrice: null, rating: 4.5, img: "https://placehold.co/600x600/0f172a/ffffff?text=Chest+Guard", desc: "Protection against hostile fast bowling on bouncy tracks." },

    // Accessories
    { id: 31, title: "Ammad Player Kit Bag (Wheelie)", category: "Accessories", price: 11000, oldPrice: 13000, rating: 4.8, img: "https://placehold.co/600x600/e11d48/ffffff?text=Kit+Bag", desc: "Massive storage for all your gear with industrial-grade wheels." },
    { id: 32, title: "Duffle Backpack Pro", category: "Accessories", price: 6000, oldPrice: null, rating: 4.6, img: "https://placehold.co/600x600/be123c/ffffff?text=Duffle+Bag", desc: "Easy to carry backpack style kit bag with external bat pockets." },
    { id: 33, title: "Premium Bat Cover", category: "Accessories", price: 800, oldPrice: null, rating: 4.5, img: "https://placehold.co/600x600/020617/ffffff?text=Bat+Cover", desc: "Padded cover to protect your expensive bats from moisture." },
    { id: 34, title: "Octopus Grip (Pack of 3)", category: "Accessories", price: 1000, oldPrice: 1200, rating: 4.8, img: "https://placehold.co/600x600/10b981/ffffff?text=Bat+Grip", desc: "Superior traction even when sweating profusely." },
    { id: 35, title: "Wooden Stumps Set with Bails", category: "Accessories", price: 3500, oldPrice: null, rating: 4.6, img: "https://placehold.co/600x600/ca8a04/ffffff?text=Stumps", desc: "Ash wood stumps, perfect for professional matches." },
    { id: 36, title: "Umpire Counter & Accessories", category: "Accessories", price: 500, oldPrice: null, rating: 4.2, img: "https://placehold.co/600x600/525252/ffffff?text=Umpire+Counter", desc: "Track balls and overs easily." }
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
