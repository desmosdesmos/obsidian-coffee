/**
 * OBSIDIAN // 07 — SPECIALTY COFFEE ROASTERS
 * Interactive Core Controller
 * Features: Seamless Scroll Blur, Dynamic Cart, Grind Selector, Hover Schedule
 */

// 1. CURATED MENU DATA WITH CINEMATIC PHOTOGRAPHY (DEFAULT PRESET)
const DEFAULT_MENU_DATA = [
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

// DYNAMIC STORAGE & CATALOG PERSISTENCE (ADMIN POWERED)
const MENU_STORAGE_KEY = 'obsidian_menu_items_v2';

function loadMenuData() {
  try {
    const saved = localStorage.getItem(MENU_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Could not read menu from localStorage', e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_MENU_DATA));
}

let MENU_DATA = loadMenuData();

function saveMenuData(data, notify = true) {
  MENU_DATA = data;
  try {
    localStorage.setItem(MENU_STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Error saving menu to localStorage', e);
  }
  renderCatalog();
  if (typeof renderAdminProductsList === 'function') {
    renderAdminProductsList();
  }
  if (notify) {
    showToast('Каталог успешно обновлен');
  }
}

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

  catalogGrid.innerHTML = filtered.map(item => {
    const isOut = item.outOfStock === true;
    return `
    <article class="product-card ${isOut ? 'item-out-of-stock' : ''}" data-id="${item.id}">
      <div class="card-img-wrapper">
        <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='assets/images/cappuccino.jpg'">
        <span class="product-tag" ${isOut ? 'style="background:rgba(239,68,68,0.85); color:#fff;"' : ''}>${isOut ? 'На стопе' : item.tag}</span>
      </div>
      <div class="card-body">
        <div class="card-title-row">
          <h3 class="card-title">${item.name}</h3>
        </div>
        <div class="card-specs">${item.volume || ''} · ${item.category === 'coffee' ? 'Спешелти' : (item.category === 'beans' ? 'Зерно 250г' : (item.category === 'desserts' ? 'Кондитерская' : 'Кухня'))}</div>
        <p class="card-desc">${item.desc || ''}</p>
        <div class="card-footer">
          <div class="card-price"><span class="price-val">${item.price}</span>&nbsp;<span class="price-curr">₽</span></div>
          <div class="card-actions">
            <button class="btn-card-details" onclick="openProductModal(${item.id})">Состав</button>
            <button class="btn-card-add ${isOut ? 'btn-disabled' : ''}" ${isOut ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : `onclick="addToCart(${item.id})"`}>
              ${isOut ? '<span>На стопе</span>' : `
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              <span>В&nbsp;заказ</span>
              `}
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
  }).join('');
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

function getFeaturedBeansData() {
  try {
    const raw = localStorage.getItem('obsidian_featured_beans_v1');
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return {
    title: 'ЭФИОПИЯ ИРГАЧЕФФЕ // G1',
    tag: 'ЛУЧШИЙ ВЫБОР ДЛЯ ВОРОНКИ И ФИЛЬТРА',
    descriptors: 'Бергамот, Белый персик, Жасмин, Чёрный чай',
    desc: 'Яркий искрящийся лот мытой обработки из региона Гедеб. Чистейшая кислотность тропических фруктов, нежное цветочное тело и сладкое медовое послевкусие.',
    price: 850,
    weight: '250 г',
    roast: 'Omni-Roast / Каждую неделю',
    qGrade: '86.25 баллов',
    grindInfo: 'Бесплатно под ваш девайс',
    image: 'assets/images/specialty_bean_bags.jpg'
  };
}

function renderFeaturedBeansSection() {
  const featured = getFeaturedBeansData();
  const titleEl = document.querySelector('.beans-card-title');
  const tagEl = document.querySelector('.beans-card-tag');
  const descEl = document.querySelector('.beans-description');
  const priceValEl = document.querySelector('.beans-price-value');
  const priceMetaEl = document.querySelector('.beans-price-meta');
  const imgEl = document.querySelector('.beans-image-wrap img');
  const descriptorsEl = document.querySelector('.beans-descriptors');
  const profileRow = document.querySelector('.beans-profile-row');

  if (titleEl && featured.title) titleEl.textContent = featured.title;
  if (tagEl && featured.tag) tagEl.textContent = featured.tag;
  if (descEl && featured.desc) descEl.textContent = featured.desc;
  if (priceValEl && featured.price) priceValEl.innerHTML = `${featured.price}&nbsp;₽`;
  if (priceMetaEl && featured.weight) priceMetaEl.textContent = `/ ${featured.weight}`;
  if (imgEl && featured.image) imgEl.src = featured.image;

  if (descriptorsEl && featured.descriptors) {
    const pills = featured.descriptors.split(',').map(s => s.trim()).filter(Boolean);
    descriptorsEl.innerHTML = pills.map(p => `<span class="desc-pill">${p}</span>`).join('');
  }

  if (profileRow) {
    const items = profileRow.querySelectorAll('.profile-item .profile-val');
    if (items[0] && featured.roast) items[0].textContent = featured.roast;
    if (items[1] && featured.qGrade) items[1].textContent = featured.qGrade;
    if (items[2] && featured.grindInfo) items[2].textContent = featured.grindInfo;
  }
}

if (addBeansToCartBtn) {
  addBeansToCartBtn.addEventListener('click', () => {
    const featured = getFeaturedBeansData();
    const beanName = featured.title || 'Зерно: Эфиопия Иргачеффе G1';
    const beanPrice = featured.price || 850;
    const beanVolume = featured.weight || '250 г';
    const beanImage = featured.image || 'assets/images/specialty_bean_bags.jpg';

    const existing = cart.find(item => item.id === 12 && item.grind === selectedGrind);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        id: 12,
        name: `${beanName} (${selectedGrind})`,
        price: beanPrice,
        volume: beanVolume,
        image: beanImage,
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

  const dockCartCount = document.getElementById('dockCartCount');
  if (dockCartCount) {
    dockCartCount.textContent = totalCount;
  }

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

const mobileCartTrigger = document.getElementById('mobileCartTrigger');
if (mobileCartTrigger) {
  mobileCartTrigger.addEventListener('click', () => {
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
}

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
  const nameInput = document.getElementById('orderName');
  const phoneInput = document.getElementById('orderPhone');
  const timeInput = document.getElementById('orderTime');
  const commentInput = document.getElementById('orderComment');

  const customerName = nameInput ? nameInput.value.trim() : 'Гость';
  const customerPhone = phoneInput ? phoneInput.value.trim() : '';
  const readyTime = timeInput ? timeInput.value : 'Через 15 минут';
  const comment = commentInput ? commentInput.value.trim() : '';

  const totalSum = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const orderId = 'ORD-' + Math.floor(1000 + Math.random() * 9000);

  const newOrder = {
    id: orderId,
    timestamp: Date.now(),
    customerName,
    customerPhone,
    readyTime,
    comment,
    items: cart.map(item => ({
      name: item.name,
      qty: item.quantity,
      price: item.price
    })),
    total: totalSum,
    status: 'new'
  };

  try {
    const existingOrders = JSON.parse(localStorage.getItem('obsidian_orders_v1') || '[]');
    existingOrders.unshift(newOrder);
    localStorage.setItem('obsidian_orders_v1', JSON.stringify(existingOrders));
    window.dispatchEvent(new Event('storage'));
  } catch (err) {
    console.error('Error saving order to localStorage', err);
  }

  cart = [];
  saveCart();

  checkoutModalOverlay.classList.remove('active');
  document.body.style.overflow = '';

  showToast(`Заказ #${orderId} принят! Готовим для ${customerName} к: ${readyTime}`);
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
// 11. ANIMATED RATING 5.0 & STARS
// ==========================================================================
function initRatingAnimation() {
  const ratingCounter = document.getElementById('ratingCounter');
  const ratingStars = document.getElementById('ratingStars');
  const yandexBanner = document.getElementById('yandexBanner');
  if (!ratingCounter || !yandexBanner) return;

  let hasAnimated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        animateRatingCounter(ratingCounter);
        if (ratingStars) {
          ratingStars.classList.add('animate');
        }
      }
    });
  }, { threshold: 0.35 });

  observer.observe(yandexBanner);
}

function animateRatingCounter(elem) {
  const target = parseFloat(elem.getAttribute('data-target') || '5.0');
  const duration = 1600;
  const start = 0.0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Smooth easeOutExpo curve
    const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const currentVal = (start + (target - start) * ease).toFixed(1);
    
    elem.textContent = currentVal;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      elem.textContent = target.toFixed(1);
    }
  }

  requestAnimationFrame(update);
}

// ==========================================================================
// 12. REVIEWS MARQUEE CAROUSEL INTERACTIVITY
// ==========================================================================
function initReviewsMarquee() {
  const track = document.getElementById('reviewsTrack');
  const viewport = document.getElementById('reviewsMarquee');
  const prevBtn = document.getElementById('revPrevBtn');
  const nextBtn = document.getElementById('revNextBtn');
  if (!track || !viewport) return;

  let manualOffset = 0;
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      manualOffset -= 320;
      applyManualNudge();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      manualOffset += 320;
      applyManualNudge();
    });
  }

  function applyManualNudge() {
    track.style.animationPlayState = 'paused';
    track.style.transition = 'transform 0.4s ease';
    track.style.transform = `translateX(calc(-50% + ${manualOffset}px))`;
    
    setTimeout(() => {
      track.style.transition = '';
      track.style.animationPlayState = 'running';
    }, 1800);
  }
}

// ==========================================================================
// 13. MINIMALIST MAP CONTROLS
// ==========================================================================
function initMapControls() {
  const copyBtn = document.getElementById('copyAddressBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const address = 'г. Королёв, Подмосковная ул., 7';
      navigator.clipboard.writeText(address).then(() => {
        showToast('Точный адрес скопирован в буфер обмена!');
      }).catch(() => {
        showToast('Подмосковная ул., 7');
      });
    });
  }
}

// ==========================================================================
// 14. CLOSED ADMIN CONSOLE SYSTEM (OBSIDIAN // 07 TERMINAL)
// ==========================================================================
let adminCurrentCategory = 'all';
let adminSearchQuery = '';
let adminFailedAttempts = 0;
let adminLockoutUntil = 0;

function getAdminPin() {
  return localStorage.getItem('obsidian_admin_pin') || '0707';
}

function isAdminAuthenticated() {
  return sessionStorage.getItem('obsidian_admin_auth') === 'true';
}

function openAdminAccess() {
  if (isAdminAuthenticated()) {
    openAdminDashboard();
  } else {
    openAdminAuthModal();
  }
}

function openAdminAuthModal() {
  const overlay = document.getElementById('adminAuthOverlay');
  const input = document.getElementById('adminPinInput');
  const err = document.getElementById('adminPinError');
  if (!overlay) return;

  if (Date.now() < adminLockoutUntil) {
    const leftSec = Math.ceil((adminLockoutUntil - Date.now()) / 1000);
    err.textContent = `Доступ заблокирован. Повторите через ${leftSec} сек.`;
    err.style.display = 'block';
  } else {
    err.style.display = 'none';
  }

  overlay.classList.add('active');
  input.value = '';
  setTimeout(() => input.focus(), 150);
}

function closeAdminAuthModal() {
  const overlay = document.getElementById('adminAuthOverlay');
  if (overlay) overlay.classList.remove('active');
  if (window.location.hash === '#admin' && !isAdminAuthenticated()) {
    history.replaceState(null, '', window.location.pathname + window.location.search);
  }
}

function openAdminDashboard() {
  closeAdminAuthModal();
  const dash = document.getElementById('adminDashboardOverlay');
  if (!dash) return;
  dash.classList.add('active');
  renderAdminProductsList();
}

function closeAdminDashboard() {
  const dash = document.getElementById('adminDashboardOverlay');
  if (dash) dash.classList.remove('active');
  if (window.location.hash === '#admin') {
    history.replaceState(null, '', window.location.pathname + window.location.search);
  }
}

function renderAdminProductsList() {
  const listEl = document.getElementById('adminProductsList');
  if (!listEl) return;

  // Counts
  const countAll = MENU_DATA.length;
  const countCoffee = MENU_DATA.filter(i => i.category === 'coffee').length;
  const countFood = MENU_DATA.filter(i => i.category === 'food').length;
  const countDesserts = MENU_DATA.filter(i => i.category === 'desserts').length;
  const countBeans = MENU_DATA.filter(i => i.category === 'beans').length;

  const elAll = document.getElementById('adminCountAll');
  const elCoffee = document.getElementById('adminCountCoffee');
  const elFood = document.getElementById('adminCountFood');
  const elDesserts = document.getElementById('adminCountDesserts');
  const elBeans = document.getElementById('adminCountBeans');

  if (elAll) elAll.textContent = countAll;
  if (elCoffee) elCoffee.textContent = countCoffee;
  if (elFood) elFood.textContent = countFood;
  if (elDesserts) elDesserts.textContent = countDesserts;
  if (elBeans) elBeans.textContent = countBeans;

  // Filtering
  const filtered = MENU_DATA.filter(item => {
    const matchesCat = adminCurrentCategory === 'all' || item.category === adminCurrentCategory;
    const query = adminSearchQuery.trim().toLowerCase();
    const matchesQuery = !query || 
      item.name.toLowerCase().includes(query) || 
      (item.desc && item.desc.toLowerCase().includes(query)) ||
      (item.tag && item.tag.toLowerCase().includes(query));
    return matchesCat && matchesQuery;
  });

  if (filtered.length === 0) {
    listEl.innerHTML = `
      <div style="text-align: center; padding: 40px; color: var(--text-dim);">
        <p>Позиций не найдено по заданному фильтру.</p>
      </div>
    `;
    return;
  }

  const categoryNames = {
    coffee: 'Кофе',
    food: 'Еда',
    desserts: 'Десерты',
    beans: 'Зерно'
  };

  listEl.innerHTML = filtered.map(item => {
    const isOutOfStock = item.outOfStock === true;
    return `
      <div class="admin-product-row" data-id="${item.id}">
        <img src="${item.image}" alt="${item.name}" class="admin-row-thumb" onerror="this.src='assets/images/cappuccino.jpg'">
        
        <div class="admin-row-info">
          <div class="admin-row-name">${item.name}</div>
          <div class="admin-row-meta">
            <span class="admin-cat-pill">${categoryNames[item.category] || item.category}</span>
            <span>${item.volume || ''}</span>
            ${item.tag ? `<span style="color: var(--accent-orange); font-weight:700;">· ${item.tag}</span>` : ''}
          </div>
        </div>

        <div class="admin-price-editor-box">
          <input 
            type="number" 
            class="admin-inline-price-input" 
            id="inlinePrice_${item.id}" 
            value="${item.price}" 
            min="0" 
            step="10" 
            title="Изменить цену прямо здесь"
          >
          <span class="admin-price-unit">₽</span>
          <button class="admin-save-price-btn" onclick="handleInlinePriceSave(${item.id})" title="Сохранить цену">✓</button>
        </div>

        <div 
          class="admin-status-pill ${isOutOfStock ? 'out-of-stock' : 'in-stock'}" 
          onclick="toggleProductStock(${item.id})" 
          title="Нажмите, чтобы переключить доступность"
        >
          ${isOutOfStock ? 'На стопе' : 'В наличии'}
        </div>

        <div class="admin-row-actions">
          <button class="admin-action-icon-btn" onclick="openEditProductModal(${item.id})" title="Редактировать товар">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
          <button class="admin-action-icon-btn delete-btn" onclick="deleteProductItem(${item.id})" title="Удалить товар">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Global actions exposed for inline HTML onclicks
window.handleInlinePriceSave = function(id) {
  const input = document.getElementById(`inlinePrice_${id}`);
  if (!input) return;
  const newPrice = parseInt(input.value, 10);
  if (isNaN(newPrice) || newPrice < 0) {
    showToast('Введите корректную цену');
    return;
  }
  const item = MENU_DATA.find(p => p.id === id);
  if (!item) return;
  item.price = newPrice;
  saveMenuData([...MENU_DATA], false);
  showToast(`Цена «${item.name}» обновлена: ${newPrice} ₽`);
};

window.toggleProductStock = function(id) {
  const item = MENU_DATA.find(p => p.id === id);
  if (!item) return;
  item.outOfStock = !item.outOfStock;
  saveMenuData([...MENU_DATA], false);
  showToast(`Позиция «${item.name}»: ${item.outOfStock ? 'поставлена на стоп' : 'снова в наличии'}`);
};

window.deleteProductItem = function(id) {
  const item = MENU_DATA.find(p => p.id === id);
  if (!item) return;
  if (confirm(`Вы уверены, что хотите удалить «${item.name}» из каталога?`)) {
    const updated = MENU_DATA.filter(p => p.id !== id);
    saveMenuData(updated, false);
    showToast(`Товар «${item.name}» удален`);
  }
};

window.openEditProductModal = function(id) {
  const overlay = document.getElementById('adminProductEditOverlay');
  const titleEl = document.getElementById('adminEditModalTitle');
  const idInput = document.getElementById('editProductId');
  const nameInput = document.getElementById('editProductName');
  const catInput = document.getElementById('editProductCategory');
  const priceInput = document.getElementById('editProductPrice');
  const volInput = document.getElementById('editProductVolume');
  const tagInput = document.getElementById('editProductTag');
  const imgUrlInput = document.getElementById('editProductImageUrl');
  const descInput = document.getElementById('editProductDesc');
  const ingrInput = document.getElementById('editProductIngredients');
  const kcalInput = document.getElementById('editProductKcal');
  const nutrInput = document.getElementById('editProductNutrition');
  const previewImg = document.getElementById('imagePreviewImg');
  const placeholder = document.getElementById('imagePreviewPlaceholder');

  if (!overlay) return;

  if (id) {
    // Edit Mode
    const item = MENU_DATA.find(p => p.id === id);
    if (!item) return;
    titleEl.textContent = 'РЕДАКТИРОВАТЬ ТОВАР';
    idInput.value = item.id;
    nameInput.value = item.name || '';
    catInput.value = item.category || 'coffee';
    priceInput.value = item.price || 0;
    volInput.value = item.volume || '';
    tagInput.value = item.tag || '';
    imgUrlInput.value = item.image || '';
    descInput.value = item.desc || '';
    ingrInput.value = item.ingredients || '';
    kcalInput.value = item.nutrition ? item.nutrition.kcal : '';
    nutrInput.value = item.nutrition ? `${item.nutrition.p || ''} / ${item.nutrition.f || ''} / ${item.nutrition.c || ''}` : '';

    if (item.image) {
      previewImg.src = item.image;
      previewImg.style.display = 'block';
      placeholder.style.display = 'none';
    } else {
      previewImg.style.display = 'none';
      placeholder.style.display = 'block';
    }
  } else {
    // Add Mode
    titleEl.textContent = 'ДОБАВИТЬ НОВЫЙ ТОВАР';
    idInput.value = '';
    nameInput.value = '';
    catInput.value = 'coffee';
    priceInput.value = '';
    volInput.value = '250 мл';
    tagInput.value = 'Новинка';
    imgUrlInput.value = 'assets/images/cappuccino.jpg';
    descInput.value = '';
    ingrInput.value = '';
    kcalInput.value = '';
    nutrInput.value = '';

    previewImg.src = 'assets/images/cappuccino.jpg';
    previewImg.style.display = 'block';
    placeholder.style.display = 'none';
  }

  overlay.classList.add('active');
  setTimeout(() => nameInput.focus(), 150);
};

function closeEditProductModal() {
  const overlay = document.getElementById('adminProductEditOverlay');
  if (overlay) overlay.classList.remove('active');
}

function initAdminConsole() {
  // 1. Triggers
  const secretTrigger = document.getElementById('secretAdminTrigger');
  if (secretTrigger) {
    secretTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      if (e.altKey || e.ctrlKey) {
        window.open('admin.html', '_blank');
      } else {
        openAdminAccess();
      }
    });
    secretTrigger.addEventListener('dblclick', (e) => {
      e.preventDefault();
      window.open('admin.html', '_blank');
    });
  }

  // Keyboard shortcut Ctrl + Shift + A (Inline console) & Ctrl + Alt + A (Full Enterprise)
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a' || e.code === 'KeyA')) {
      e.preventDefault();
      openAdminAccess();
    }
    if ((e.ctrlKey || e.metaKey) && e.altKey && (e.key === 'A' || e.key === 'a' || e.code === 'KeyA')) {
      e.preventDefault();
      window.open('admin.html', '_blank');
    }
  });

  // URL Hash check
  if (window.location.hash === '#admin-full' || window.location.hash === '#admin-panel') {
    window.location.href = 'admin.html';
  } else if (window.location.hash === '#admin') {
    setTimeout(openAdminAccess, 300);
  }
  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#admin-full' || window.location.hash === '#admin-panel') {
      window.location.href = 'admin.html';
    } else if (window.location.hash === '#admin') {
      openAdminAccess();
    }
  });

  // 2. Auth Modal Form & PIN Check
  const pinForm = document.getElementById('adminPinForm');
  const pinInput = document.getElementById('adminPinInput');
  const pinErr = document.getElementById('adminPinError');
  const closeAuthBtn = document.getElementById('closeAdminAuthBtn');
  const togglePinBtn = document.getElementById('togglePinVisibilityBtn');

  if (closeAuthBtn) closeAuthBtn.addEventListener('click', closeAdminAuthModal);

  if (togglePinBtn && pinInput) {
    togglePinBtn.addEventListener('click', () => {
      const isPwd = pinInput.getAttribute('type') === 'password';
      pinInput.setAttribute('type', isPwd ? 'text' : 'password');
    });
  }

  if (pinForm) {
    pinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (Date.now() < adminLockoutUntil) {
        return;
      }

      const enteredPin = pinInput.value.trim();
      const currentMasterPin = getAdminPin();

      if (enteredPin === currentMasterPin) {
        adminFailedAttempts = 0;
        sessionStorage.setItem('obsidian_admin_auth', 'true');
        pinErr.style.display = 'none';
        openAdminDashboard();
        showToast('Доступ в админ-консоль разрешен');
      } else {
        adminFailedAttempts++;
        if (adminFailedAttempts >= 5) {
          adminLockoutUntil = Date.now() + 60000;
          pinErr.textContent = 'Превышен лимит попыток. Блокировка на 60 сек.';
        } else {
          pinErr.textContent = `Неверный код доступа (попытка ${adminFailedAttempts} из 5)`;
        }
        pinErr.style.display = 'block';
        pinInput.value = '';
        pinInput.focus();
      }
    });
  }

  // 3. Dashboard Header Actions
  const closeDashBtn = document.getElementById('closeAdminDashboardBtn');
  const openAddBtn = document.getElementById('openAddProductModalBtn');
  const resetMenuBtn = document.getElementById('adminResetMenuBtn');
  const changePinBtn = document.getElementById('adminChangePinBtn');
  const logoutBtn = document.getElementById('adminLogoutBtn');

  if (closeDashBtn) closeDashBtn.addEventListener('click', closeAdminDashboard);
  if (openAddBtn) openAddBtn.addEventListener('click', () => openEditProductModal(null));

  if (resetMenuBtn) {
    resetMenuBtn.addEventListener('click', () => {
      if (confirm('Сбросить весь каталог до стандартного заводского меню из 12 позиций? Все добавленные вручную товары будут заменены на стандарт.')) {
        saveMenuData(JSON.parse(JSON.stringify(DEFAULT_MENU_DATA)));
        showToast('Каталог сброшен к заводским настройкам');
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem('obsidian_admin_auth');
      closeAdminDashboard();
      showToast('Вы вышли из админ-консоли');
    });
  }

  // 4. Category Filter & Search in Dashboard
  const adminFilterBar = document.querySelector('.admin-filter-bar');
  if (adminFilterBar) {
    adminFilterBar.addEventListener('click', (e) => {
      const btn = e.target.closest('.admin-tab-btn');
      if (!btn) return;
      document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      adminCurrentCategory = btn.getAttribute('data-cat') || 'all';
      renderAdminProductsList();
    });
  }

  const adminSearchInput = document.getElementById('adminSearchInput');
  if (adminSearchInput) {
    adminSearchInput.addEventListener('input', (e) => {
      adminSearchQuery = e.target.value;
      renderAdminProductsList();
    });
  }

  // 5. Add / Edit Product Form
  const editForm = document.getElementById('adminProductForm');
  const closeEditBtn = document.getElementById('closeAdminEditBtn');
  const cancelEditBtn = document.getElementById('cancelAdminEditBtn');
  const fileInput = document.getElementById('editProductFileInput');
  const imgUrlInput = document.getElementById('editProductImageUrl');
  const previewImg = document.getElementById('imagePreviewImg');
  const previewPlaceholder = document.getElementById('imagePreviewPlaceholder');

  if (closeEditBtn) closeEditBtn.addEventListener('click', closeEditProductModal);
  if (cancelEditBtn) cancelEditBtn.addEventListener('click', closeEditProductModal);

  // File Upload (Base64 conversion for direct photo uploads from phone/desktop)
  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function(evt) {
        const base64Data = evt.target.result;
        imgUrlInput.value = base64Data;
        previewImg.src = base64Data;
        previewImg.style.display = 'block';
        if (previewPlaceholder) previewPlaceholder.style.display = 'none';
        showToast('Фотография загружена');
      };
      reader.readAsDataURL(file);
    });
  }

  if (imgUrlInput) {
    imgUrlInput.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      if (val) {
        previewImg.src = val;
        previewImg.style.display = 'block';
        if (previewPlaceholder) previewPlaceholder.style.display = 'none';
      } else {
        previewImg.style.display = 'none';
        if (previewPlaceholder) previewPlaceholder.style.display = 'block';
      }
    });
  }

  if (editForm) {
    editForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const idVal = document.getElementById('editProductId').value;
      const nameVal = document.getElementById('editProductName').value.trim();
      const catVal = document.getElementById('editProductCategory').value;
      const priceVal = parseInt(document.getElementById('editProductPrice').value, 10);
      const volVal = document.getElementById('editProductVolume').value.trim();
      const tagVal = document.getElementById('editProductTag').value.trim() || 'Спешелти';
      const imgVal = document.getElementById('editProductImageUrl').value.trim() || 'assets/images/cappuccino.jpg';
      const descVal = document.getElementById('editProductDesc').value.trim() || 'Свежеприготовленная позиция из нашего бара.';
      const ingrVal = document.getElementById('editProductIngredients').value.trim() || 'Отборные натуральные ингредиенты.';
      const kcalVal = parseInt(document.getElementById('editProductKcal').value, 10) || 120;
      const nutrVal = document.getElementById('editProductNutrition').value.trim();

      const parts = nutrVal ? nutrVal.split('/') : [];

      const nutritionObj = {
        kcal: kcalVal,
        p: parts[0] ? parts[0].trim() : '5.0 г',
        f: parts[1] ? parts[1].trim() : '6.0 г',
        c: parts[2] ? parts[2].trim() : '10.0 г'
      };

      if (idVal) {
        // Update existing item
        const numId = parseInt(idVal, 10);
        const itemIdx = MENU_DATA.findIndex(p => p.id === numId);
        if (itemIdx !== -1) {
          MENU_DATA[itemIdx] = {
            ...MENU_DATA[itemIdx],
            name: nameVal,
            category: catVal,
            price: priceVal,
            volume: volVal,
            tag: tagVal,
            image: imgVal,
            desc: descVal,
            ingredients: ingrVal,
            nutrition: nutritionObj
          };
          saveMenuData([...MENU_DATA], false);
          showToast(`Товар «${nameVal}» обновлен!`);
        }
      } else {
        // Add brand new item
        const newId = Date.now();
        const newItem = {
          id: newId,
          category: catVal,
          name: nameVal,
          tag: tagVal,
          volume: volVal,
          price: priceVal,
          image: imgVal,
          desc: descVal,
          nutrition: nutritionObj,
          ingredients: ingrVal,
          outOfStock: false
        };
        MENU_DATA.unshift(newItem);
        saveMenuData([...MENU_DATA], false);
        showToast(`Новый товар «${nameVal}» добавлен в меню!`);
      }

      closeEditProductModal();
    });
  }

  // 6. Change PIN Dialog
  const pinModal = document.getElementById('adminPinModalOverlay');
  const closePinModalBtn = document.getElementById('closeAdminPinModalBtn');
  const changePinForm = document.getElementById('changePinForm');
  const newPinInput = document.getElementById('newPinInput');
  const confirmPinInput = document.getElementById('confirmPinInput');
  const changePinErr = document.getElementById('changePinError');

  if (changePinBtn) {
    changePinBtn.addEventListener('click', () => {
      if (pinModal) {
        pinModal.classList.add('active');
        newPinInput.value = '';
        confirmPinInput.value = '';
        changePinErr.style.display = 'none';
        setTimeout(() => newPinInput.focus(), 150);
      }
    });
  }

  if (closePinModalBtn && pinModal) {
    closePinModalBtn.addEventListener('click', () => {
      pinModal.classList.remove('active');
    });
  }

  if (changePinForm) {
    changePinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const p1 = newPinInput.value.trim();
      const p2 = confirmPinInput.value.trim();

      if (p1.length < 4) {
        changePinErr.textContent = 'PIN должен быть не короче 4 символов';
        changePinErr.style.display = 'block';
        return;
      }

      if (p1 !== p2) {
        changePinErr.textContent = 'PIN-коды не совпадают';
        changePinErr.style.display = 'block';
        return;
      }

      localStorage.setItem('obsidian_admin_pin', p1);
      pinModal.classList.remove('active');
      showToast('Новый PIN-код успешно сохранен');
    });
  }
}

// ==========================================================================
// 15. DYNAMIC STORE SETTINGS & REVIEWS RENDERER
// ==========================================================================
function applyStoreSettings() {
  try {
    const raw = localStorage.getItem('obsidian_store_settings_v1');
    if (!raw) return;
    const s = JSON.parse(raw);

    if (s.phone) {
      document.querySelectorAll('a[href^="tel:"]').forEach(a => {
        a.href = `tel:${s.phone.replace(/[^+\d]/g, '')}`;
        if (a.classList.contains('info-val') || a.textContent.includes('+7')) {
          a.textContent = s.phone;
        }
      });
    }

    const badge = document.getElementById('liveStatusBadge');
    if (badge && s.statusMode && s.statusMode !== 'auto') {
      const dot = badge.querySelector('.status-dot');
      const text = badge.querySelector('.status-text');
      if (s.statusMode === 'open') {
        if (dot) {
          dot.style.backgroundColor = '#22c55e';
          dot.style.boxShadow = '0 0 10px rgba(34, 197, 94, 0.9)';
        }
        if (text) text.textContent = s.hoursWeekdays || '08:00 – 22:00';
      } else if (s.statusMode === 'closed') {
        if (dot) {
          dot.style.backgroundColor = '#ef4444';
          dot.style.boxShadow = '0 0 10px rgba(239, 68, 68, 0.9)';
        }
        if (text) text.textContent = 'Сейчас закрыто';
      }
    }
  } catch (e) {
    console.warn('Could not apply store settings', e);
  }
}

function renderDynamicReviews() {
  const track = document.getElementById('reviewsTrack');
  if (!track) return;
  try {
    const raw = localStorage.getItem('obsidian_reviews_v1');
    if (!raw) return;
    const list = JSON.parse(raw);
    if (!Array.isArray(list) || list.length === 0) return;

    const renderCard = (rev, isClone = false) => `
      <div class="review-card" ${isClone ? 'aria-hidden="true"' : ''}>
        <div class="review-card-top">
          <div class="author-info">
            <div class="author-avatar-wrap">
              <img src="${rev.avatar || 'assets/images/avatar_sofia.jpg'}" alt="${rev.author}" class="author-avatar-img" loading="lazy" onerror="this.src='assets/images/avatar_sofia.jpg'">
              <span class="avatar-badge-yandex" title="Проверен Яндекс Картами">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="#fc3f1d"><path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 7 12 8 12s8-6.75 8-12c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>
              </span>
            </div>
            <div>
              <div class="author-name">${rev.author}</div>
              <div class="author-level">${rev.role || 'Знаток города'}</div>
            </div>
          </div>
          <div class="stars-vector-row">
            ${Array.from({ length: rev.stars || 5 }).map(() => `
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#fc0"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            `).join('')}
          </div>
        </div>
        <p class="review-text">«${rev.text}»</p>
        <div class="review-date">${rev.date || 'Яндекс Карты'}</div>
      </div>
    `;

    track.innerHTML = list.map(r => renderCard(r, false)).join('') + list.map(r => renderCard(r, true)).join('');
  } catch (e) {
    console.warn('Could not render dynamic reviews', e);
  }
}

// Cross-tab real-time synchronization listener
window.addEventListener('storage', (e) => {
  if (!e.key || e.key === MENU_STORAGE_KEY) {
    MENU_DATA = loadMenuData();
    renderCatalog();
  }
  if (!e.key || e.key === 'obsidian_featured_beans_v1') {
    renderFeaturedBeansSection();
  }
  if (!e.key || e.key === 'obsidian_store_settings_v1') {
    applyStoreSettings();
  }
  if (!e.key || e.key === 'obsidian_reviews_v1') {
    renderDynamicReviews();
  }
});

// ==========================================================================
// 16. INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
  renderFeaturedBeansSection();
  applyStoreSettings();
  renderDynamicReviews();
  updateCartUI();
  checkOpeningHours();
  initRatingAnimation();
  initReviewsMarquee();
  initMapControls();
  initAdminConsole();
});
