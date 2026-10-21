/**
 * РОЗА РОЗ // FLORAL STUDIO & BOUTIQUE
 * Core Interactive Controller
 * Features: Video Parallax & Scroll Blur, Live Catalog, Dynamic Cart, Modal Details, WhatsApp Order Dispatch
 */

// 1. CURATED FLORAL CATALOG DATA
const DEFAULT_MENU_DATA = [
  // AUTHOR BOUQUETS
  {
    id: 1,
    category: 'author',
    name: 'Букет «Французский поцелуй»',
    tag: 'Хит сезона',
    volume: 'Высота 50 см · Ø 38 см',
    price: 4900,
    image: 'assets/images/flowers/flower_1.jpg',
    desc: 'Нежный авторский букет с французскими пионовидными розами Kahala, кремовой эустомой и веточками эвкалипта в матовой дизайнерской бумаге.',
    specs: { height: '50 см', diam: '38 см', life: '10–12 дней', aroma: 'Тонкий цветочный' },
    ingredients: 'Роза пионовидная Kahala (7 шт.), эустома кремовая (5 шт.), диантус пудровый (5 шт.), озотамнус, эвкалипт цинерея, матовая дизайнерская бумага, шелковая лента.'
  },
  {
    id: 2,
    category: 'author',
    name: 'Авторский букет «Малиновый рассвет»',
    tag: 'Премиум',
    volume: 'Высота 55 см · Ø 42 см',
    price: 5400,
    image: 'assets/images/flowers/flower_6.jpg',
    desc: 'Насыщенная ягодная гамма: бархатные кустовые розы, сочная малиновая альстромерия и веточки эвкалипта. Идеально для признаний и праздников.',
    specs: { height: '55 см', diam: '42 см', life: '10–14 дней', aroma: 'Сладковатый ягодный' },
    ingredients: 'Кустовая роза малиновая (5 шт.), роза Explorer (5 шт.), эустома розовая (4 шт.), альстромерия, эвкалипт, авторская упаковка, атласная лента.'
  },
  {
    id: 3,
    category: 'author',
    name: 'Букет «Лавандовое утро»',
    tag: 'Нежный',
    volume: 'Высота 45 см · Ø 35 см',
    price: 3900,
    image: 'assets/images/flowers/flower_10.jpg',
    desc: 'Утонченное сочетание сиреневых и лавандовых оттенков с пудровыми диантусами и кружевной статицей. Свежий весенний аромат.',
    specs: { height: '45 см', diam: '35 см', life: '12–14 дней', aroma: 'Легкий свежий' },
    ingredients: 'Эустома лавандовая (5 шт.), диантус сиреневый (7 шт.), кустовая хризантема Сантини, статица, матовая бумага, атласная лента.'
  },
  {
    id: 4,
    category: 'author',
    name: 'Авторская охапка «Пастельный саунд»',
    tag: 'WOW-эффект',
    volume: 'Высота 60 см · Ø 48 см',
    price: 6200,
    image: 'assets/images/flowers/flower_7.jpg',
    desc: 'Объемный роскошный букет в кремово-персиковых тонах с крупными розами Shimmer, французской эустомой и пушистой зеленью.',
    specs: { height: '60 см', diam: '48 см', life: '10–14 дней', aroma: 'Цветочно-медовый' },
    ingredients: 'Пионовидные розы Shimmer (9 шт.), кустовые розы Cream Gracia (6 шт.), озотамнус, эустома, эвкалипт Populus, многослойная дизайнерская упаковка.'
  },

  // ROSES & MONO BOUQUETS
  {
    id: 5,
    category: 'roses',
    name: 'Монобукет из 25 роз Explorer (60 см)',
    tag: 'Эквадор',
    volume: 'Высота 60 см · Ø 40 см',
    price: 5900,
    image: 'assets/images/flowers/flower_2.jpg',
    desc: 'Классические темно-красные розы премиального сорта Explorer из высокогорного Эквадора. Высокий плотный бокал и исключительная стойкость.',
    specs: { height: '60 см', diam: '40 см', life: '12–14 дней', aroma: 'Благородный розовый' },
    ingredients: '25 отборных роз сорта Explorer (Эквадор 60 см), крафт или атласная лента в тон лепестков.'
  },
  {
    id: 6,
    category: 'roses',
    name: '19 пионовидных роз White O\'Hara',
    tag: 'Французский сорт',
    volume: 'Высота 50 см · Ø 42 см',
    price: 6800,
    image: 'assets/images/flowers/flower_5.jpg',
    desc: 'Легендарный сорт с головокружительным парфюмерным ароматом французского сада. Бутон раскрывается пышной чашей диаметром до 12 см.',
    specs: { height: '50 см', diam: '42 см', life: '9–12 дней', aroma: 'Яркий парфюмерный' },
    ingredients: '19 пионовидных роз White O\'Hara высшего качества, матовая дизайнерская калька, атласная лента.'
  },
  {
    id: 7,
    category: 'roses',
    name: 'Монобукет из 35 роз Red Piano',
    tag: 'Кения',
    volume: 'Высота 40 см · Ø 36 см',
    price: 4600,
    image: 'assets/images/flowers/flower_8.jpg',
    desc: 'Пышная стойкая охапка шаровидных алых роз из Кении. Устойчивы к перепадам температур и долго стоят в вазе.',
    specs: { height: '40 см', diam: '36 см', life: '14 дней', aroma: 'Легкий травянистый' },
    ingredients: '35 роз сорта Red Piano (Кения 40 см), фирменная лента с логотипом.'
  },
  {
    id: 8,
    category: 'roses',
    name: 'Букет-гигант из 51 розы Explorer (70 см)',
    tag: 'Гранд-букет',
    volume: 'Высота 70 см · Ø 60 см',
    price: 11900,
    image: 'assets/images/flowers/flower_12.jpg',
    desc: 'Внушительный монобукет из 51 крупной розы высотой 70 см. Плотная тяжелая охапка для самых особенных и незабываемых поводов.',
    specs: { height: '70 см', diam: '60 см', life: '12–14 дней', aroma: 'Глубокий розовый' },
    ingredients: '51 роза сорта Explorer высшей категории (Эквадор 70 см), атласные ленты.'
  },

  // BOXES & BASKETS
  {
    id: 9,
    category: 'boxes',
    name: 'Шляпная коробка «Royal Blush»',
    tag: 'Бестселлер',
    volume: 'Коробка M · Ø 32 см',
    price: 4800,
    image: 'assets/images/flowers/flower_3.jpg',
    desc: 'Композиция в бархатной шляпной коробке на флористической губке Oasis. Не требует вазы — достаточно подливать 100 мл воды раз в день.',
    specs: { height: '35 см', diam: '32 см', life: '10–14 дней', aroma: 'Нежный цветочный' },
    ingredients: 'Пионовидные розы Kahala, белая эустома, диантусы, эвкалипт, шляпная коробка, оазис с питательным раствором.'
  },
  {
    id: 10,
    category: 'boxes',
    name: 'Шляпная коробка «Бархатный пион»',
    tag: 'Премиум бокс',
    volume: 'Коробка L · Ø 40 см',
    price: 6900,
    image: 'assets/images/flowers/flower_9.jpg',
    desc: 'Большая шляпная коробка с пышными розами сорта Pink Mondial, кустовой эустомой и ароматным эвкалиптом. Стильный подарок без хлопот.',
    specs: { height: '42 см', diam: '40 см', life: '10–14 дней', aroma: 'Сладковатый пудровый' },
    ingredients: 'Розы Pink Mondial (15 шт.), эустома (7 шт.), эвкалипт, премиальная коробка с золотым тиснением, оазис Oasis.'
  },
  {
    id: 11,
    category: 'boxes',
    name: 'Цветочная корзина «Лесная поляна»',
    tag: 'В корзине',
    volume: 'Корзина L · Ø 48 см',
    price: 7800,
    image: 'assets/images/flowers/flower_13.jpg',
    desc: 'Большая плетеная корзина из натуральной ивы, наполненная гортензиями, розами и фактурной зеленью. Сохраняет свежесть до 2 недель.',
    specs: { height: '45 см', diam: '48 см', life: '10–14 дней', aroma: 'Свежий луговой' },
    ingredients: 'Гортензия (2 шт.), розы Эквадор (11 шт.), кустовая роза (5 шт.), эвкалипт, корзина ручной работы, оазис.'
  },

  // SEASONAL & HYDRANGEAS
  {
    id: 12,
    category: 'seasonal',
    name: 'Букет «Нежное облако» с гортензией',
    tag: 'Пышный',
    volume: 'Высота 45 см · Ø 38 см',
    price: 3600,
    image: 'assets/images/flowers/flower_4.jpg',
    desc: 'Воздушный объемный букет с крупной пудровой гортензией, кустовыми розами и веточками эвкалипта. Легкость и гармония.',
    specs: { height: '45 см', diam: '38 см', life: '8–12 дней', aroma: 'Легкий свежий' },
    ingredients: 'Гортензия крупноцветковая пудровая (1 шт.), кустовая роза (4 шт.), эвкалипт, матовая дизайнерская бумага.'
  },
  {
    id: 13,
    category: 'seasonal',
    name: 'Дуэт гортензий «Небесная лазурь»',
    tag: 'Сезонный хит',
    volume: 'Высота 50 см · Ø 40 см',
    price: 4200,
    image: 'assets/images/flowers/flower_11.jpg',
    desc: 'Две пышные гортензии небесно-голубого и белого оттенка в обрамлении зелени фисташки и матовой полупрозрачной кальки.',
    specs: { height: '50 см', diam: '40 см', life: '8–12 дней', aroma: 'Чистый свежий' },
    ingredients: 'Гортензия голубая (1 шт.), гортензия белая (1 шт.), веточки фисташки, упаковка, атласная лента.'
  },
  {
    id: 14,
    category: 'seasonal',
    name: 'Охапка разноцветных хризантем',
    tag: 'Макс. стойкость',
    volume: 'Высота 55 см · Ø 45 см',
    price: 2800,
    image: 'assets/images/flowers/flower_16.jpg',
    desc: 'Пышная объемная охапка стойких кустовых хризантем сочных оттенков. Стоит в вазе до 3 недель при регулярной смене воды.',
    specs: { height: '55 см', diam: '45 см', life: '18–21 день', aroma: 'Свежий терпкий' },
    ingredients: 'Кустовая хризантема микс (7 пышных веток), матовая упаковка, атласная лента.'
  }
];

// DYNAMIC STORAGE & CATALOG PERSISTENCE
const MENU_STORAGE_KEY = 'roza_roz_catalog_v2';
const CART_STORAGE_KEY = 'roza_roz_cart_v2';
const FEATURED_STORAGE_KEY = 'roza_roz_featured_v2';

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
    console.warn('Could not read catalog from localStorage', e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_MENU_DATA));
}

let MENU_DATA = loadMenuData();

function saveMenuData(data, notify = true) {
  MENU_DATA = data;
  try {
    localStorage.setItem(MENU_STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Error saving catalog to localStorage', e);
  }
  renderCatalog();
  if (notify) {
    showToast('Каталог успешно обновлен');
  }
}

// STATE
let currentCategory = 'all';
let searchQuery = '';
let selectedPackaging = 'Шляпная коробка';
let cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || '[]');

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
  const progress = Math.min(Math.max(scrollY / (vh * 0.85), 0), 1);

  // Dynamic blur: 0px at hero -> 20px when scrolling down
  const blurVal = (progress * 20).toFixed(1);
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
// 3. CATALOG RENDERING
// ==========================================================================
function renderCatalog() {
  if (!catalogGrid) return;

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
        <h3 style="font-family: var(--font-heading); font-size: 1.25rem; text-transform: uppercase;">Композиций не найдено</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 6px;">Попробуйте скорректировать поисковый запрос или выбрать другую категорию букетов.</p>
      </div>
    `;
    return;
  }

  const categoryNameMap = {
    'author': 'Авторский букет',
    'roses': 'Розы & Моно',
    'boxes': 'В коробке / Корзине',
    'seasonal': 'Сезонные цветы'
  };

  catalogGrid.innerHTML = filtered.map(item => {
    const isOut = item.outOfStock === true;
    const catLabel = categoryNameMap[item.category] || 'Цветочная композиция';

    return `
    <article class="product-card ${isOut ? 'item-out-of-stock' : ''}" data-id="${item.id}">
      <div class="card-img-wrapper" onclick="openProductModal(${item.id})">
        <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='assets/images/flowers/flower_1.jpg'">
        <span class="product-tag" ${isOut ? 'style="background:rgba(239,68,68,0.85); color:#fff;"' : ''}>${isOut ? 'Под заказ' : item.tag}</span>
      </div>
      <div class="card-body">
        <div class="card-title-row">
          <h3 class="card-title" onclick="openProductModal(${item.id})">${item.name}</h3>
        </div>
        <div class="card-specs">${item.volume || ''} · ${catLabel}</div>
        <p class="card-desc">${item.desc || ''}</p>
        <div class="card-footer">
          <div class="card-price"><span class="price-val">${item.price.toLocaleString('ru-RU')}</span>&nbsp;<span class="price-curr">₽</span></div>
          <div class="card-actions">
            <button class="btn-card-details" onclick="openProductModal(${item.id})">Состав</button>
            <button class="btn-card-add ${isOut ? 'btn-disabled' : ''}" ${isOut ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : `onclick="addToCart(${item.id})"`}>
              ${isOut ? '<span>Под заказ</span>' : `
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
    if (clearSearchBtn) clearSearchBtn.style.display = searchQuery ? 'flex' : 'none';
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
// 4. FEATURED SIGNATURE BOUQUET & PACKAGING SELECTOR
// ==========================================================================
if (grindOptionsGrid) {
  grindOptionsGrid.addEventListener('click', (e) => {
    const pill = e.target.closest('.grind-pill');
    if (!pill) return;

    grindOptionsGrid.querySelectorAll('.grind-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    selectedPackaging = pill.getAttribute('data-grind');
  });
}

function getFeaturedBouquetData() {
  try {
    const raw = localStorage.getItem(FEATURED_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return {
    title: 'ШЛЯПНАЯ КОРОБКА «ROYAL BLUSH»',
    tag: 'ЛУЧШИЙ ВЫБОР ДЛЯ ПРАЗДНИКА И ПОДАРКА',
    descriptors: 'Пионовидная роза Kahala, Белая эустома, Эвкалипт цинерея, Диантус',
    desc: 'Идеальный подарок без забот: цветы не нужно подрезать и искать подходящую вазу. Достаточно раз в день подливать 100 мл прохладной воды в центр композиции. В комплекте фирменная открытка с вашим текстом.',
    price: 4800,
    volume: 'композиция',
    image: 'assets/images/flowers/flower_3.jpg'
  };
}

if (addBeansToCartBtn) {
  addBeansToCartBtn.addEventListener('click', () => {
    const featured = getFeaturedBouquetData();
    const bouquetName = `${featured.title} (${selectedPackaging})`;
    const bouquetPrice = featured.price || 4800;
    const bouquetVolume = featured.volume || 'композиция';
    const bouquetImage = featured.image || 'assets/images/flowers/flower_3.jpg';

    const existing = cart.find(item => item.id === 999 && item.packaging === selectedPackaging);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        id: 999,
        name: bouquetName,
        price: bouquetPrice,
        volume: selectedPackaging,
        image: bouquetImage,
        packaging: selectedPackaging,
        quantity: 1
      });
    }

    saveCart();
    showToast(`Композиция (${selectedPackaging}) добавлена в заказ!`);
  });
}

// ==========================================================================
// 5. CART & ORDER STATE MANAGEMENT
// ==========================================================================
function saveCart() {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  updateCartUI();
}

function addToCart(productId) {
  const product = MENU_DATA.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId && !item.packaging);
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

  if (cartCount) cartCount.textContent = totalCount;
  if (cartHeaderCount) cartHeaderCount.textContent = `(${totalCount})`;

  const dockCartCount = document.getElementById('dockCartCount');
  if (dockCartCount) {
    dockCartCount.textContent = totalCount;
  }

  if (cart.length === 0) {
    if (cartItemsList) {
      cartItemsList.innerHTML = '';
      if (emptyCartState) {
        cartItemsList.appendChild(emptyCartState);
        emptyCartState.style.display = 'flex';
      }
    }
    if (cartFooter) cartFooter.style.display = 'none';
  } else {
    if (emptyCartState) emptyCartState.style.display = 'none';
    if (cartFooter) cartFooter.style.display = 'block';
    if (cartTotalSum) cartTotalSum.innerHTML = `${totalSum.toLocaleString('ru-RU')}&nbsp;₽`;

    if (cartItemsList) {
      cartItemsList.innerHTML = cart.map((item, idx) => `
        <div class="cart-item-row">
          <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
          <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">${item.price.toLocaleString('ru-RU')}&nbsp;₽ · ${item.volume}</div>
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
}

// Drawer Open/Close
if (openCartBtn && cartOverlay) {
  openCartBtn.addEventListener('click', () => {
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
}

const mobileCartTrigger = document.getElementById('mobileCartTrigger');
if (mobileCartTrigger && cartOverlay) {
  mobileCartTrigger.addEventListener('click', () => {
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
}

if (closeCartBtn && cartOverlay) {
  closeCartBtn.addEventListener('click', () => {
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });
}

if (cartOverlay) {
  cartOverlay.addEventListener('click', (e) => {
    if (e.target === cartOverlay) {
      cartOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// ==========================================================================
// 6. PRODUCT DETAILS MODAL (FLOWER SPECIFICATIONS & CARE GUIDE)
// ==========================================================================
window.openProductModal = function(productId) {
  const product = MENU_DATA.find(p => p.id === productId);
  if (!product || !modalBody || !productModalOverlay) return;

  const specs = product.specs || { height: '50 см', diam: '38 см', life: '10–12 дней', aroma: 'Нежный' };

  modalBody.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="modal-detail-img">
    <div class="modal-detail-content">
      <h3 class="modal-detail-title">${product.name}</h3>
      <div class="modal-detail-specs">${product.volume} · ${product.price.toLocaleString('ru-RU')}&nbsp;₽ · ${product.tag}</div>
      <p class="modal-detail-desc">${product.desc}</p>
      
      <div style="font-size: 0.76rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-dim); margin-bottom: 8px;">
        Характеристики композиции:
      </div>
      <div class="modal-nutrition-grid">
        <div>
          <span class="nutri-val">${specs.height}</span>
          <span class="nutri-lbl">Высота</span>
        </div>
        <div>
          <span class="nutri-val">${specs.diam}</span>
          <span class="nutri-lbl">Диаметр</span>
        </div>
        <div>
          <span class="nutri-val">${specs.life}</span>
          <span class="nutri-lbl">Стойкость</span>
        </div>
        <div>
          <span class="nutri-val">${specs.aroma}</span>
          <span class="nutri-lbl">Аромат</span>
        </div>
      </div>

      <div style="margin-bottom: 18px;">
        <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-dim); display: block; margin-bottom: 4px;">
          Точный состав букета:
        </span>
        <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5;">${product.ingredients}</p>
      </div>

      <div style="margin-bottom: 24px; padding: 12px 14px; background: rgba(255,255,255,0.03); border-radius: 8px; border-left: 2px solid var(--accent-orange);">
        <span style="font-size: 0.74rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--accent-orange); display: block; margin-bottom: 3px;">
          Бесплатный комплект к букету:
        </span>
        <p style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.45;">
          Транспортировочный аквабокс с водой, порошок Chrysal для вазы и дизайнерская открытка с вашим текстом.
        </p>
      </div>

      <button class="btn btn-primary btn-block" onclick="addToCart(${product.id}); closeProductModal();">
        <span>Добавить в заказ · ${product.price.toLocaleString('ru-RU')}&nbsp;₽</span>
      </button>
    </div>
  `;

  productModalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeProductModal = function() {
  if (!productModalOverlay) return;
  productModalOverlay.classList.remove('active');
  document.body.style.overflow = '';
};

if (closeModalBtn) closeModalBtn.addEventListener('click', closeProductModal);
if (productModalOverlay) {
  productModalOverlay.addEventListener('click', (e) => {
    if (e.target === productModalOverlay) closeProductModal();
  });
}

// ==========================================================================
// 7. CHECKOUT MODAL & DIRECT WHATSAPP DISPATCH
// ==========================================================================
if (proceedCheckoutBtn && checkoutModalOverlay) {
  proceedCheckoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;
    if (cartOverlay) cartOverlay.classList.remove('active');

    const totalSum = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    if (orderSummaryBox) {
      orderSummaryBox.innerHTML = `
        <div style="font-weight: 700; margin-bottom: 8px; color: var(--text-main); font-family: var(--font-heading); font-size: 0.9rem;">Состав заказа:</div>
        <ul style="list-style: none; margin-bottom: 12px; color: var(--text-muted); font-size: 0.85rem; line-height: 1.6;">
          ${cart.map(i => `<li>— ${i.name} × ${i.quantity} шт. (${(i.price * i.quantity).toLocaleString('ru-RU')}&nbsp;₽)</li>`).join('')}
        </ul>
        <div style="font-weight: 800; color: var(--accent-orange); font-size: 1.15rem; font-family: var(--font-heading);">
          Итого: ${totalSum.toLocaleString('ru-RU')}&nbsp;₽
        </div>
      `;
    }

    checkoutModalOverlay.classList.add('active');
  });
}

if (closeCheckoutBtn && checkoutModalOverlay) {
  closeCheckoutBtn.addEventListener('click', () => {
    checkoutModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });
}

if (checkoutModalOverlay) {
  checkoutModalOverlay.addEventListener('click', (e) => {
    if (e.target === checkoutModalOverlay) {
      checkoutModalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// Toggle address field depending on delivery type
const deliveryTypeSelect = document.getElementById('deliveryType');
const addressGroup = document.getElementById('addressGroup');
if (deliveryTypeSelect && addressGroup) {
  deliveryTypeSelect.addEventListener('change', (e) => {
    if (e.target.value === 'Самовывоз') {
      addressGroup.style.display = 'none';
    } else {
      addressGroup.style.display = 'block';
    }
  });
}

if (checkoutForm) {
  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('orderName');
    const phoneInput = document.getElementById('orderPhone');
    const typeInput = document.getElementById('deliveryType');
    const addressInput = document.getElementById('orderAddress');
    const timeInput = document.getElementById('orderTime');
    const cardInput = document.getElementById('cardText');
    const commentInput = document.getElementById('orderComment');

    const customerName = nameInput ? nameInput.value.trim() : 'Покупатель';
    const customerPhone = phoneInput ? phoneInput.value.trim() : '';
    const deliveryType = typeInput ? typeInput.value : 'Доставка курьером';
    const address = addressInput ? addressInput.value.trim() : '';
    const readyTime = timeInput ? timeInput.value : 'Как можно скорее';
    const cardText = cardInput ? cardInput.value.trim() : '';
    const comment = commentInput ? commentInput.value.trim() : '';

    const totalSum = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const orderId = 'FLW-' + Math.floor(1000 + Math.random() * 9000);

    const itemsSummary = cart.map((i, idx) => `${idx + 1}. ${i.name} × ${i.quantity} шт. (${i.price * i.quantity} ₽)`).join('\n');

    // Build friendly WhatsApp message
    const waText = encodeURIComponent(
`Здравствуйте! Хочу оформить заказ в салоне «Роза роз» [${orderId}]:

Состав заказа:
${itemsSummary}

Сумма: ${totalSum.toLocaleString('ru-RU')} ₽
Способ: ${deliveryType}${address ? ` (${address})` : ''}
Время: ${readyTime}
Имя: ${customerName}
Телефон: ${customerPhone}
${cardText ? `Текст для открытки: «${cardText}»\n` : ''}${comment ? `Пожелания: ${comment}` : ''}`
    );

    // Clear cart and close modal
    cart = [];
    saveCart();

    if (checkoutModalOverlay) {
      checkoutModalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    showToast(`Заказ ${orderId} принят! Открываем WhatsApp для согласования...`);

    // Open WhatsApp to florist +7 925 290-55-50
    setTimeout(() => {
      window.open(`https://wa.me/79252905550?text=${waText}`, '_blank');
    }, 1200);
  });
}

// ==========================================================================
// 8. TOAST NOTIFICATION UTILITY
// ==========================================================================
let toastTimer = null;
function showToast(message) {
  if (!toastNotification || !toastText) return;
  toastText.textContent = message;
  toastNotification.classList.add('show');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastNotification.classList.remove('show');
  }, 3500);
}

// Copy address button
const copyAddressBtn = document.getElementById('copyAddressBtn');
if (copyAddressBtn) {
  copyAddressBtn.addEventListener('click', () => {
    const address = 'Московская область, г. Мытищи, Рождественская ул., 11';
    navigator.clipboard.writeText(address).then(() => {
      showToast('Адрес скопирован в буфер обмена');
    }).catch(() => {
      showToast('г. Мытищи, Рождественская ул., 11');
    });
  });
}

// Mobile burger
if (burgerBtn && navMenu) {
  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    navMenu.classList.toggle('mobile-open');
  });

  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      burgerBtn.classList.remove('active');
      navMenu.classList.remove('mobile-open');
    });
  });
}

// Reviews marquee buttons
const revPrevBtn = document.getElementById('revPrevBtn');
const revNextBtn = document.getElementById('revNextBtn');
const reviewsMarquee = document.getElementById('reviewsMarquee');

if (revPrevBtn && reviewsMarquee) {
  revPrevBtn.addEventListener('click', () => {
    reviewsMarquee.scrollBy({ left: -340, behavior: 'smooth' });
  });
}
if (revNextBtn && reviewsMarquee) {
  revNextBtn.addEventListener('click', () => {
    reviewsMarquee.scrollBy({ left: 340, behavior: 'smooth' });
  });
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
  updateCartUI();
});

renderCatalog();
updateCartUI();
