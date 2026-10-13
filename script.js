/**
 * OBSIDIAN // 07 — SPECIALTY COFFEE ROASTERS
 * Interactive Core Controller
 * Features: Seamless Scroll Blur, Dynamic Cart, Grind Selector, Hover Schedule
 */

// 1. CURATED MENU DATA WITH CINEMATIC PHOTOGRAPHY
const MENU_DATA = [
  // COFFEE & DRINKS
  {
    id: 1,
    category: 'coffee',
    name: 'Айс-латте',
    tag: 'Хит сезона',
    volume: '350 мл',
    price: 290,
    image: 'assets/images/iced_latte.jpg',
    desc: 'Двойной шот спешелти эспрессо, отборное фермерское молоко 3.2% и чистый кусковой лёд. Плотный кофейный баланс без горечи.',
    nutrition: { kcal: 135, p: '6.2 г', f: '6.8 г', c: '11.4 г' },
    ingredients: 'Эспрессо (100% арабика), молоко цельное, лед очищенный.'
  },
  {
    id: 2,
    category: 'coffee',
    name: 'Фильтр-кофе (Батч-брю)',
    tag: 'Спешелти',
    volume: '250 мл',
    price: 220,
    image: 'assets/images/filter_coffee.jpg',
    desc: 'Капельный метод Moccamaster на зерне мытой Эфиопии. Яркий чайный профиль с нотами бергамота, персика и жасмина.',
    nutrition: { kcal: 4, p: '0.2 г', f: '0.1 г', c: '0.6 г' },
    ingredients: 'Зерно Specialty (Эфиопия Иргачеффе), минерализованная вода TDS 110 ppm.'
  },
  {
    id: 3,
    category: 'coffee',
    name: 'Флэт Уайт',
    tag: 'Интенсивный',
    volume: '200 мл',
    price: 280,
    image: 'assets/images/flat_white.jpg',
    desc: 'Двойной ристретто с глянцевой тонкой микропенкой. Насыщенный глубокий вкус спешелти эспрессо на первом плане.',
    nutrition: { kcal: 110, p: '5.1 г', f: '5.4 г', c: '9.2 г' },
    ingredients: 'Двойной ристретто (100% арабика), молоко цельное 60°C.'
  },
  {
    id: 4,
    category: 'coffee',
    name: 'Капучино',
    tag: 'Классика',
    volume: '250 мл',
    price: 250,
    image: 'assets/images/cappuccino.jpg',
    desc: 'Идеальный баланс эспрессо и шелковистой микропены. Зерно средней обжарки с орехово-шоколадным профилем.',
    nutrition: { kcal: 120, p: '5.8 г', f: '6.0 г', c: '10.5 г' },
    ingredients: 'Эспрессо 36 мл, фермерское молоко цельное.'
  },
  {
    id: 5,
    category: 'coffee',
    name: 'Матча Латте (Удзи)',
    tag: 'Superfood',
    volume: '300 мл',
    price: 320,
    image: 'assets/images/matcha_latte.jpg',
    desc: 'Церемониальная матча первого сбора из Киото на взбитом растительном или цельном молоке. Мягкий травянистый вкус.',
    nutrition: { kcal: 140, p: '6.0 г', f: '6.2 г', c: '12.0 г' },
    ingredients: 'Матча японская церемониальная, молоко на выбор.'
  },

  // FOOD & BREAKFASTS
  {
    id: 6,
    category: 'food',
    name: 'Круассан с лососем и крем-чизом',
    tag: 'Завтрак',
    volume: '210 г',
    price: 460,
    image: 'assets/images/salmon_croissant.jpg',
    desc: 'Хрустящий круассан на новозеландском сливочном масле, ломтики слабосоленого лосося, творожный сыр и свежий огурец.',
    nutrition: { kcal: 480, p: '19.2 г', f: '28.4 г', c: '36.5 г' },
    ingredients: 'Сливочный круассан, слабосоленый лосось, творожный сыр, свежий огурец, микрозелень.'
  },
  {
    id: 7,
    category: 'food',
    name: 'Сырники из фермерского творога',
    tag: 'Хит кухни',
    volume: '240 г',
    price: 380,
    image: 'assets/images/syrniki_breakfast.jpg',
    desc: 'Три пышных нежных сырника из фермерского творога 9%. Подаются с густой деревенской сметаной и таёжной брусникой.',
    nutrition: { kcal: 395, p: '24.5 г', f: '16.8 г', c: '32.0 г' },
    ingredients: 'Творог 9%, рисовая мука, яйцо фермерское, сахар тростниковый, сметана, брусника.'
  },
  {
    id: 8,
    category: 'food',
    name: 'Бриошь с авокадо и яйцом пашот',
    tag: 'Бранч',
    volume: '260 г',
    price: 420,
    image: 'assets/images/avocado_brioche.jpg',
    desc: 'Поджаренная сливочная бриошь, спелый авокадо Хасс, яйцо пашот с текучим желтком и теплый соус голландез.',
    nutrition: { kcal: 430, p: '14.0 г', f: '26.2 г', c: '34.0 г' },
    ingredients: 'Бриошь ремесленная, авокадо Хасс, яйцо пашот, соус голландез, микс трав.'
  },
  {
    id: 9,
    category: 'food',
    name: 'Сэндвич с пастрами на тартине',
    tag: 'Сытный',
    volume: '280 г',
    price: 490,
    image: 'assets/images/pastrami_sandwich.jpg',
    desc: 'Тартин на закваске, щедрая порция томленой говядины пастрами, сыр чеддер, корнишоны и дижонская горчица.',
    nutrition: { kcal: 540, p: '29.5 г', f: '22.0 г', c: '51.0 г' },
    ingredients: 'Хлеб тартин, говядина пастрами, чеддер, маринованные корнишоны, зернистая горчица.'
  },

  // DESSERTS & BAKERY
  {
    id: 10,
    category: 'desserts',
    name: 'Баскский обожженный чизкейк',
    tag: 'Бестселлер',
    volume: '175 г',
    price: 350,
    image: 'assets/images/basque_cheesecake.jpg',
    desc: 'Испанский чизкейк San Sebastian. Нежнейшая шелковистая кремовая текстура и карамелизированная обожженная корочка.',
    nutrition: { kcal: 410, p: '7.8 г', f: '29.0 г', c: '28.5 г' },
    ingredients: 'Сливочный сыр Cremette, сливки 33%, яйца, тростниковый сахар, натуральная ваниль.'
  },
  {
    id: 11,
    category: 'desserts',
    name: 'Медовик с брусникой',
    tag: 'Фирменный',
    volume: '160 г',
    price: 320,
    image: 'assets/images/medovik_cake.jpg',
    desc: 'Тончайшие карамельно-медовые коржи, воздушный сметанный крем и сочные ягоды таежной брусники с приятной кислинкой.',
    nutrition: { kcal: 360, p: '5.2 г', f: '17.4 г', c: '46.0 г' },
    ingredients: 'Гречишный мед, мука пшеничная, сметана, сливки, ягоды брусники, сахарная пудра.'
  },

  // BEANS TO GO
  {
    id: 12,
    category: 'beans',
    name: 'Зерно: Эфиопия Иргачеффе G1',
    tag: 'Q-Score 86.2',
    volume: '250 г',
    price: 850,
    image: 'assets/images/specialty_bean_bags.jpg',
    desc: 'Мытая обработка, светлая обжарка под фильтр. Высота произрастания 1950–2100м. Ноты бергамота, белого персика и жасмина.',
    nutrition: { kcal: 0, p: '0 г', f: '0 г', c: '0 г' },
    ingredients: '100% арабика specialty в зернах. Бесплатный помол под любой девайс.'
  }
];

// STATE
let currentCategory = 'all';
let searchQuery = '';
let selectedGrind = 'В зёрнах';
let cart = JSON.parse(localStorage.getItem('obsidian_cart') || '[]');

// DOM ELEMENTS
const catalogGrid = document.getElementById('catalogGrid');
const categoryTabs = document.getElementById('categoryTabs');
const catalogSearch = document.getElementById('catalogSearch');
const clearSearchBtn = document.getElementById('clearSearchBtn');

const header = document.getElementById('header');
const openCartBtn = document.getElementById('openCartBtn');
const cartOverlay = document.getElementById('cartOverlay');
const cartDrawer = document.getElementById('cartDrawer');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartCount = document.getElementById('cartCount');
const cartHeaderCount = document.getElementById('cartHeaderCount');
const cartItemsList = document.getElementById('cartItemsList');
const cartFooter = document.getElementById('cartFooter');
const cartTotalSum = document.getElementById('cartTotalSum');
const emptyCartState = document.getElementById('emptyCartState');

const productModalOverlay = document.getElementById('productModalOverlay');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalBody = document.getElementById('modalBody');

const checkoutModalOverlay = document.getElementById('checkoutModalOverlay');
const proceedCheckoutBtn = document.getElementById('proceedCheckoutBtn');
const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');
const checkoutForm = document.getElementById('checkoutForm');
const orderSummaryBox = document.getElementById('orderSummaryBox');

const burgerBtn = document.getElementById('burgerBtn');
const navMenu = document.getElementById('navMenu');
const toastNotification = document.getElementById('toastNotification');
const toastText = document.getElementById('toastText');
const bgVideo = document.getElementById('bgVideo');

const grindOptionsGrid = document.getElementById('grindOptionsGrid');
const addBeansToCartBtn = document.getElementById('addBeansToCartBtn');

// ==========================================================================
// 2. VIDEO SCROLL BLUR & PARALLAX ENGINE
// ==========================================================================
let isTicking = false;

function onScrollHandler() {
  const scrollY = window.scrollY;
  const vh = window.innerHeight;

  // Header background toggle
  if (scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  // Calculate blur and dark overlay progress
  // 0 at top of hero screen, reaches max blur at 1 screen scroll
  const progress = Math.min(Math.max(scrollY / (vh * 0.85), 0), 1);

  // Dynamic blur: 0px at hero -> 22px when scrolling down
  const blurVal = (progress * 22).toFixed(1);
  // Overlay opacity: 0.38 at hero -> 0.88 when scrolling into catalog
  const overlayOpacity = (0.38 + progress * 0.50).toFixed(2);
  // Parallax translation of the video
  const videoOffset = (scrollY * 0.12).toFixed(1);

  document.documentElement.style.setProperty('--scroll-blur', `${blurVal}px`);
  document.documentElement.style.setProperty('--overlay-opacity', overlayOpacity);
  document.documentElement.style.setProperty('--video-offset-y', `${videoOffset}px`);

  isTicking = false;
}

window.addEventListener('scroll', () => {
  if (!isTicking) {
    window.requestAnimationFrame(onScrollHandler);
    isTicking = true;
  }
}, { passive: true });

onScrollHandler();

// Ensure video plays continuously
if (bgVideo) {
  bgVideo.play().catch(() => {
    const resumeVideo = () => {
      bgVideo.play();
      window.removeEventListener('click', resumeVideo);
      window.removeEventListener('touchstart', resumeVideo);
    };
    window.addEventListener('click', resumeVideo);
    window.addEventListener('touchstart', resumeVideo);
  });
}

// ==========================================================================
// 3. CATALOG RENDERING & PREVENT TEXT OVERFLOW (NO RUBLE SIGN WRAPPING)
// ==========================================================================
function renderCatalog() {
  const filtered = MENU_DATA.filter(item => {
    const matchesCat = currentCategory === 'all' || item.category === currentCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch = !query || 
      item.name.toLowerCase().includes(query) || 
      item.desc.toLowerCase().includes(query) ||
      item.tag.toLowerCase().includes(query);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    catalogGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <div style="margin-bottom: 16px; color: var(--text-dim); display: flex; justify-content: center;">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </div>
        <h3 style="font-family: var(--font-heading); font-size: 1.25rem; text-transform: uppercase;">Позиций не найдено</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 6px;">Попробуйте скорректировать поисковый запрос или выбрать другую категорию.</p>
      </div>
    `;
    return;
  }

  catalogGrid.innerHTML = filtered.map(item => `
    <article class="product-card" data-id="${item.id}">
      <div class="card-img-wrapper">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <span class="product-tag">${item.tag}</span>
      </div>
      <div class="card-body">
        <div class="card-title-row">
          <h3 class="card-title">${item.name}</h3>
        </div>
        <div class="card-specs">${item.volume} · ${item.category === 'coffee' ? 'Спешелти' : (item.category === 'beans' ? 'Зерно 250г' : 'Кухня')}</div>
        <p class="card-desc">${item.desc}</p>
        <div class="card-footer">
          <div class="card-price"><span class="price-val">${item.price}</span>&nbsp;<span class="price-curr">₽</span></div>
          <div class="card-actions">
            <button class="btn-card-details" onclick="openProductModal(${item.id})">Состав</button>
            <button class="btn-card-add" onclick="addToCart(${item.id})">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              <span>В&nbsp;заказ</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  `).join('');
}

// Category Tabs
if (categoryTabs) {
  categoryTabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.cat-btn');
    if (!btn) return;
    
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    currentCategory = btn.getAttribute('data-category');
    renderCatalog();
  });
}

// Search
if (catalogSearch) {
  catalogSearch.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    clearSearchBtn.style.display = searchQuery ? 'flex' : 'none';
    renderCatalog();
  });
}

if (clearSearchBtn) {
  clearSearchBtn.addEventListener('click', () => {
    catalogSearch.value = '';
    searchQuery = '';
    clearSearchBtn.style.display = 'none';
    catalogSearch.focus();
    renderCatalog();
  });
}

// ==========================================================================
// 4. BEANS GRIND SELECTOR INTERACTIVITY
// ==========================================================================
if (grindOptionsGrid) {
  grindOptionsGrid.addEventListener('click', (e) => {
    const pill = e.target.closest('.grind-pill');
    if (!pill) return;

    grindOptionsGrid.querySelectorAll('.grind-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    selectedGrind = pill.getAttribute('data-grind');
  });
}

if (addBeansToCartBtn) {
  addBeansToCartBtn.addEventListener('click', () => {
    const beanItem = MENU_DATA.find(i => i.id === 12);
    if (!beanItem) return;

    const existing = cart.find(item => item.id === 12 && item.grind === selectedGrind);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        id: beanItem.id,
        name: `${beanItem.name} (${selectedGrind})`,
        price: beanItem.price,
        volume: beanItem.volume,
        image: beanItem.image,
        grind: selectedGrind,
        quantity: 1
      });
    }

    saveCart();
    showToast(`Пачка кофе (${selectedGrind}) добавлена в заказ!`);
  });
}

// ==========================================================================
// 5. CART & ORDER STATE MANAGEMENT
// ==========================================================================
function saveCart() {
  localStorage.setItem('obsidian_cart', JSON.stringify(cart));
  updateCartUI();
}

function addToCart(productId) {
  const product = MENU_DATA.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId && !item.grind);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      volume: product.volume,
      image: product.image,
      quantity: 1
    });
  }

  saveCart();
  showToast(`«${product.name}» добавлен в заказ`);
}

function changeQty(index, delta) {
  if (index < 0 || index >= cart.length) return;

  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCart();
}

function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalSum = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  cartCount.textContent = totalCount;
  cartHeaderCount.textContent = `(${totalCount})`;

  if (cart.length === 0) {
    cartItemsList.innerHTML = '';
    cartItemsList.appendChild(emptyCartState);
    emptyCartState.style.display = 'flex';
    cartFooter.style.display = 'none';
  } else {
    emptyCartState.style.display = 'none';
    cartFooter.style.display = 'block';
    cartTotalSum.innerHTML = `${totalSum.toLocaleString('ru-RU')}&nbsp;₽`;

    cartItemsList.innerHTML = cart.map((item, idx) => `
      <div class="cart-item-row">
        <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">${item.price}&nbsp;₽ · ${item.volume}</div>
        </div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="changeQty(${idx}, -1)" aria-label="Уменьшить">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
          <span class="qty-num">${item.quantity}</span>
          <button class="qty-btn" onclick="changeQty(${idx}, 1)" aria-label="Увеличить">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>
    `).join('');
  }
}

// Drawer Open/Close
openCartBtn.addEventListener('click', () => {
  cartOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
});

closeCartBtn.addEventListener('click', () => {
  cartOverlay.classList.remove('active');
  document.body.style.overflow = '';
});

cartOverlay.addEventListener('click', (e) => {
  if (e.target === cartOverlay) {
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// ==========================================================================
// 6. PRODUCT DETAILS MODAL
// ==========================================================================
window.openProductModal = function(productId) {
  const product = MENU_DATA.find(p => p.id === productId);
  if (!product) return;

  modalBody.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="modal-detail-img">
    <div class="modal-detail-content">
      <h3 class="modal-detail-title">${product.name}</h3>
      <div class="modal-detail-specs">${product.volume} · ${product.price}&nbsp;₽ · ${product.tag}</div>
      <p class="modal-detail-desc">${product.desc}</p>
      
      <div style="font-size: 0.76rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-dim); margin-bottom: 8px;">
        Пищевая ценность (на порцию):
      </div>
      <div class="modal-nutrition-grid">
        <div>
          <span class="nutri-val">${product.nutrition.kcal}</span>
          <span class="nutri-lbl">ккал</span>
        </div>
        <div>
          <span class="nutri-val">${product.nutrition.p}</span>
          <span class="nutri-lbl">белки</span>
        </div>
        <div>
          <span class="nutri-val">${product.nutrition.f}</span>
          <span class="nutri-lbl">жиры</span>
        </div>
        <div>
          <span class="nutri-val">${product.nutrition.c}</span>
          <span class="nutri-lbl">углеводы</span>
        </div>
      </div>

      <div style="margin-bottom: 24px;">
        <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-dim); display: block; margin-bottom: 4px;">
          Состав по факту:
        </span>
        <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5;">${product.ingredients}</p>
      </div>

      <button class="btn btn-primary btn-block" onclick="addToCart(${product.id}); closeProductModal();">
        <span>Добавить в заказ · ${product.price}&nbsp;₽</span>
      </button>
    </div>
  `;

  productModalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeProductModal = function() {
  productModalOverlay.classList.remove('active');
  document.body.style.overflow = '';
};

closeModalBtn.addEventListener('click', closeProductModal);
productModalOverlay.addEventListener('click', (e) => {
  if (e.target === productModalOverlay) closeProductModal();
});

// ==========================================================================
// 7. CHECKOUT MODAL
// ==========================================================================
proceedCheckoutBtn.addEventListener('click', () => {
  if (cart.length === 0) return;
  cartOverlay.classList.remove('active');

  const totalSum = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  orderSummaryBox.innerHTML = `
    <div style="font-weight: 700; margin-bottom: 8px; color: var(--text-main); font-family: var(--font-heading); font-size: 0.9rem;">Состав предзаказа:</div>
    <ul style="list-style: none; margin-bottom: 12px; color: var(--text-muted); font-size: 0.85rem; line-height: 1.6;">
      ${cart.map(i => `<li>— ${i.name} × ${i.quantity} шт. (${i.price * i.quantity}&nbsp;₽)</li>`).join('')}
    </ul>
    <div style="font-weight: 800; color: var(--accent-orange); font-size: 1.15rem; font-family: var(--font-heading);">
      Итого: ${totalSum.toLocaleString('ru-RU')}&nbsp;₽
    </div>
  `;

  checkoutModalOverlay.classList.add('active');
});

closeCheckoutBtn.addEventListener('click', () => {
  checkoutModalOverlay.classList.remove('active');
  document.body.style.overflow = '';
});

checkoutModalOverlay.addEventListener('click', (e) => {
  if (e.target === checkoutModalOverlay) {
    checkoutModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
});

checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('orderName').value;
  const time = document.getElementById('orderTime').value;

  cart = [];
  saveCart();

  checkoutModalOverlay.classList.remove('active');
  document.body.style.overflow = '';

  showToast(`Заказ принят! Готовим для ${name} к: ${time}`);
});

// ==========================================================================
// 8. TOAST HELPER
// ==========================================================================
let toastTimer = null;
function showToast(msg) {
  if (toastTimer) clearTimeout(toastTimer);
  toastText.textContent = msg;
  toastNotification.classList.add('active');
  toastTimer = setTimeout(() => {
    toastNotification.classList.remove('active');
  }, 3200);
}

// ==========================================================================
// 9. MOBILE MENU TOGGLE
// ==========================================================================
if (burgerBtn && navMenu) {
  burgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  });
}

// ==========================================================================
// 10. OPENING HOURS DYNAMIC CHECK
// ==========================================================================
function checkOpeningHours() {
  const badge = document.getElementById('liveStatusBadge');
  if (!badge) return;

  const now = new Date();
  const hours = now.getHours();
  // Open 08:00 to 22:00
  const isOpen = hours >= 8 && hours < 22;

  const dot = badge.querySelector('.status-dot');
  const text = badge.querySelector('.status-text');

  if (isOpen) {
    dot.style.backgroundColor = '#22c55e';
    dot.style.boxShadow = '0 0 10px rgba(34, 197, 94, 0.9)';
    text.textContent = '08:00 – 22:00';
  } else {
    dot.style.backgroundColor = '#f59e0b';
    dot.style.boxShadow = '0 0 10px rgba(245, 158, 11, 0.9)';
    text.textContent = 'Откроемся в 08:00';
  }
}

// ==========================================================================
// 11. INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
  updateCartUI();
  checkOpeningHours();
});
