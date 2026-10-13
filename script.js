/**
 * HOT BLACK COFFEE — CORE INTERACTIVE CONTROLLER
 * Minimalist Specialty Coffee Website
 */

// 1. MENU CATALOG DATABASE (По факту, без воды)
const MENU_DATA = [
  // COFFEE & DRINKS
  {
    id: 1,
    category: 'coffee',
    name: 'Айс-латте',
    tag: 'Хит сезона',
    volume: '350 мл',
    price: 290,
    image: 'assets/images/cafe_photo_2.jpg',
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
    image: 'assets/images/cafe_photo_3.jpg',
    desc: 'Заваривается на капельной кофеварке Moccamaster. Сорт недели: Эфиопия Иргачеффе мытой обработки. Дескрипторы: бергамот, белый персик, чёрный чай.',
    nutrition: { kcal: 4, p: '0.2 г', f: '0.1 г', c: '0.6 г' },
    ingredients: 'Зерно Specialty (Эфиопия), подготовленная вода TDS 110 ppm.'
  },
  {
    id: 3,
    category: 'coffee',
    name: 'Флэт Уайт',
    tag: 'Интенсивный',
    volume: '200 мл',
    price: 280,
    image: 'assets/images/cafe_photo_4.jpg',
    desc: 'Двойной шот ристретто с глянцевой тонкой молочной пенкой. Яркий насыщенный вкус кофе на первом плане.',
    nutrition: { kcal: 110, p: '5.1 г', f: '5.4 г', c: '9.2 г' },
    ingredients: 'Двойной шот ристретто, взбитое молоко 60°C.'
  },
  {
    id: 4,
    category: 'coffee',
    name: 'Капучино',
    tag: 'Классика',
    volume: '250 мл',
    price: 250,
    image: 'assets/images/cafe_photo_5.jpg',
    desc: 'Гармония эспрессо и шелковистой микропены. Зерно средней обжарки (Колумбия). Орехово-шоколадный профиль.',
    nutrition: { kcal: 120, p: '5.8 г', f: '6.0 г', c: '10.5 г' },
    ingredients: 'Спешелти эспрессо 36 мл, цельное молоко.'
  },
  {
    id: 5,
    category: 'coffee',
    name: 'Раф Цитрусовый',
    tag: 'Авторский',
    volume: '300 мл',
    price: 340,
    image: 'assets/images/cafe_photo_6.jpg',
    desc: 'Эспрессо, взбитый вместе со сливками 10%, натуральной цедрой апельсина и тростниковым сахаром muscovado.',
    nutrition: { kcal: 240, p: '4.2 г', f: '15.5 г', c: '21.0 г' },
    ingredients: 'Эспрессо, сливки 10%, цедра апельсина, тростниковый сахар.'
  },
  {
    id: 6,
    category: 'coffee',
    name: 'Cold Brew Тоник',
    tag: 'Освежающий',
    volume: '300 мл',
    price: 310,
    image: 'assets/images/cafe_photo_7.jpg',
    desc: 'Колд-брю 18-часовой холодной экстракции, крафтовый тоник Indian, долька свежего лайма.',
    nutrition: { kcal: 65, p: '0.4 г', f: '0.0 г', c: '16.0 г' },
    ingredients: 'Колд-брю кофе, тоник, свежий лайм, лед.'
  },
  {
    id: 7,
    category: 'coffee',
    name: 'Матча Латте (Удзи)',
    tag: 'Superfood',
    volume: '300 мл',
    price: 320,
    image: 'assets/images/cafe_photo_8.jpg',
    desc: 'Оригинальная японская церемониальная матча первого сбора из префектуры Киото. Мягкий травянисто-сливочный вкус.',
    nutrition: { kcal: 140, p: '6.0 г', f: '6.2 г', c: '12.0 г' },
    ingredients: 'Матча церемониальная, молоко (классическое или растительное).'
  },
  {
    id: 8,
    category: 'coffee',
    name: 'Двойной Эспрессо',
    tag: 'Чистый вкус',
    volume: '36 мл',
    price: 180,
    image: 'assets/images/cafe_photo_9.jpg',
    desc: '19.5 г помола на 36 г напитка, время пролива 27 секунд. Чистая чашка с яркой кислотностью красных ягод и долгим карамельным послевкусием.',
    nutrition: { kcal: 2, p: '0.2 г', f: '0.0 г', c: '0.3 г' },
    ingredients: 'Спешелти зерно свежей обжарки, фильтрованная вода.'
  },

  // FOOD & BREAKFASTS
  {
    id: 9,
    category: 'food',
    name: 'Круассан с лососем и крем-чизом',
    tag: 'Весь день',
    volume: '210 г',
    price: 460,
    image: 'assets/images/cafe_photo_10.jpg',
    desc: 'Слоеный хрустящий круассан на сливочном масле 82.5%, филе слабосоленого лосося, творожный сыр с зеленью, слайсы огурца и свежая рукола.',
    nutrition: { kcal: 480, p: '19.2 г', f: '28.4 г', c: '36.5 г' },
    ingredients: 'Французский круассан, слабосоленый лосось, сливочный сыр, огурец, рукола.'
  },
  {
    id: 10,
    category: 'food',
    name: 'Сырники из фермерского творога',
    tag: 'Хит гостей',
    volume: '240 г',
    price: 380,
    image: 'assets/images/cafe_photo_11.jpg',
    desc: 'Три нежных сырника из натурального творога 9% с минимальным добавлением муки. Подаются со сметаной 20% и брусничным конфитюром.',
    nutrition: { kcal: 395, p: '24.5 г', f: '16.8 г', c: '32.0 г' },
    ingredients: 'Творог 9%, рисовая мука, яйцо фермерское, ваниль, сметана, брусника.'
  },
  {
    id: 11,
    category: 'food',
    name: 'Бриошь с авокадо и яйцом пашот',
    tag: 'Завтрак',
    volume: '260 г',
    price: 420,
    image: 'assets/images/cafe_photo_12.jpg',
    desc: 'Поджаренный ломоть сливочной бриоши, спелый авокадо Хасс, яйцо пашот с жидким желтком, соус голландез и семена льна.',
    nutrition: { kcal: 430, p: '14.0 г', f: '26.2 г', c: '34.0 г' },
    ingredients: 'Бриошь, авокадо Хасс, яйцо куриное, соус голландез, микс семян.'
  },
  {
    id: 12,
    category: 'food',
    name: 'Сэндвич с пастрами на тартине',
    tag: 'Сытный',
    volume: '280 г',
    price: 490,
    image: 'assets/images/cafe_photo_13.jpg',
    desc: 'Ремесленный тартин на закваске, тонко нарезанная томленая говядина пастрами, корнишоны, сыр чеддер и зернистая дижонская горчица.',
    nutrition: { kcal: 540, p: '29.5 г', f: '22.0 г', c: '51.0 г' },
    ingredients: 'Хлеб тартин, пастрами из говядины, чеддер, корнишоны, горчица.'
  },
  {
    id: 13,
    category: 'food',
    name: 'Зеленый боул с киноа и эдамаме',
    tag: 'Healthy',
    volume: '310 г',
    price: 440,
    image: 'assets/images/cafe_photo_14.jpg',
    desc: 'Киноа аль денте, бобы эдамаме, авокадо, бланшированный шпинат, яйцо пашот, заправка на основе оливкового масла extra virgin и кунжута.',
    nutrition: { kcal: 370, p: '16.8 г', f: '18.2 г', c: '33.4 г' },
    ingredients: 'Киноа, эдамаме, авокадо, шпинат, яйцо, кунжутная заправка.'
  },

  // DESSERTS & BAKERY
  {
    id: 14,
    category: 'desserts',
    name: 'Медовик с брусникой',
    tag: 'Фирменный',
    volume: '160 г',
    price: 320,
    image: 'assets/images/cafe_photo_15.jpg',
    desc: 'Тончайшие медовые коржи на натуральном гречишном меду, легкий сметанно-сливочный крем и прослойка из таежной брусники с кислинкой.',
    nutrition: { kcal: 360, p: '5.2 г', f: '17.4 г', c: '46.0 г' },
    ingredients: 'Мед натуральный, мука пшеничная, сметана, сливки, брусника, сахар.'
  },
  {
    id: 15,
    category: 'desserts',
    name: 'Баскский обожженный чизкейк',
    tag: 'Бестселлер',
    volume: '175 г',
    price: 350,
    image: 'assets/images/cafe_photo_16.jpg',
    desc: 'Испанский чизкейк San Sebastian. Нежнейшая кремовая текстура внутри и характерная карамелизованная запеченная корочка снаружи.',
    nutrition: { kcal: 410, p: '7.8 г', f: '29.0 г', c: '28.5 г' },
    ingredients: 'Сливочный сыр Cremette, сливки 33%, яйца, сахар, мадагаскарская ваниль.'
  },
  {
    id: 16,
    category: 'desserts',
    name: 'Миндальный круассан',
    tag: 'Свежая выпечка',
    volume: '140 г',
    price: 260,
    image: 'assets/images/cafe_photo_1.jpg',
    desc: 'Пропитанный сиропом круассан с начинкой из французского миндального крема франжипан, посыпанный лепестками калифорнийского миндаля.',
    nutrition: { kcal: 450, p: '9.4 г', f: '25.6 г', c: '44.8 г' },
    ingredients: 'Круассан сливочный, миндальная мука, масло сливочное, лепестки миндаля.'
  },
  {
    id: 17,
    category: 'desserts',
    name: 'Тарталетка с пеканом и карамелью',
    tag: 'Десерт',
    volume: '130 г',
    price: 310,
    image: 'assets/images/cafe_photo_2.jpg',
    desc: 'Хрустящее песочное сабле, домашняя соленая карамель и отборный обжаренный орех пекан.',
    nutrition: { kcal: 390, p: '5.1 г', f: '23.8 г', c: '38.0 г' },
    ingredients: 'Песочное тесто, орех пекан, карамель, морская соль Fleur de Sel.'
  },

  // BEANS TO GO
  {
    id: 18,
    category: 'beans',
    name: 'Зерно: Эфиопия Иргачеффе (250г)',
    tag: 'Q-Score 86',
    volume: '250 г',
    price: 850,
    image: 'assets/images/cafe_photo_3.jpg',
    desc: 'Светлая обжарка под фильтр и воронку V60. Мытая обработка. Яркий букет: бергамот, спелый персик, жасмин и лемонграсс.',
    nutrition: { kcal: 0, p: '0 г', f: '0 г', c: '0 г' },
    ingredients: '100% арабика specialty в зернах. Бесплатный помол по запросу.'
  },
  {
    id: 19,
    category: 'beans',
    name: 'Зерно: Колумбия Уила (250г)',
    tag: 'Q-Score 85',
    volume: '250 г',
    price: 790,
    image: 'assets/images/cafe_photo_4.jpg',
    desc: 'Средняя обжарка под эспрессо, гейзер и турку. Мытая обработка. Сладкий баланс: молочный шоколад, красное яблоко, карамель.',
    nutrition: { kcal: 0, p: '0 г', f: '0 г', c: '0 г' },
    ingredients: '100% арабика specialty в зернах. Бесплатный помол по запросу.'
  }
];

// STATE
let currentCategory = 'all';
let searchQuery = '';
let cart = JSON.parse(localStorage.getItem('hotblack_cart') || '[]');

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
  // 0 at top of hero screen, reaches max at 1 screen scroll
  const progress = Math.min(Math.max(scrollY / (vh * 0.85), 0), 1);

  // Blur: 0px at hero -> 22px when scrolling down
  const blurVal = (progress * 22).toFixed(1);
  // Overlay opacity: 0.38 at hero -> 0.88 when scrolling into catalog
  const overlayOpacity = (0.38 + progress * 0.50).toFixed(2);
  // Subtle parallax translation of the video
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

// Initial run
onScrollHandler();

// ==========================================================================
// 3. CATALOG RENDERING & FILTERING
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
        <div style="font-size: 2.2rem; margin-bottom: 12px; opacity: 0.6;">🔍</div>
        <h3 style="font-family: var(--font-heading); font-size: 1.4rem; text-transform: uppercase;">Ничего не найдено</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 6px;">Попробуйте изменить поисковый запрос или выбрать другую категорию.</p>
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
          <div class="card-price">${item.price} ₽</div>
          <div class="card-actions">
            <button class="btn-card-details" onclick="openProductModal(${item.id})">Состав</button>
            <button class="btn-card-add" onclick="addToCart(${item.id})">+ В заказ</button>
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
    clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
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
// 4. CART & ORDER STATE MANAGEMENT
// ==========================================================================
function saveCart() {
  localStorage.setItem('hotblack_cart', JSON.stringify(cart));
  updateCartUI();
}

function addToCart(productId) {
  const product = MENU_DATA.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
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

function changeQty(productId, delta) {
  const itemIndex = cart.findIndex(item => item.id === productId);
  if (itemIndex === -1) return;

  cart[itemIndex].quantity += delta;
  if (cart[itemIndex].quantity <= 0) {
    cart.splice(itemIndex, 1);
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
    cartTotalSum.textContent = `${totalSum.toLocaleString('ru-RU')} ₽`;

    cartItemsList.innerHTML = cart.map(item => `
      <div class="cart-item-row">
        <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">${item.price} ₽ · ${item.volume}</div>
        </div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
          <span class="qty-num">${item.quantity}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
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
// 5. PRODUCT DETAILS MODAL
// ==========================================================================
window.openProductModal = function(productId) {
  const product = MENU_DATA.find(p => p.id === productId);
  if (!product) return;

  modalBody.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="modal-detail-img">
    <div class="modal-detail-content">
      <h3 class="modal-detail-title">${product.name}</h3>
      <div class="modal-detail-specs">${product.volume} · ${product.price} ₽ · ${product.tag}</div>
      <p class="modal-detail-desc">${product.desc}</p>
      
      <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--text-dim); margin-bottom: 8px;">
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
        <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--text-dim); display: block; margin-bottom: 4px;">
          Состав по факту:
        </span>
        <p style="font-size: 0.85rem; color: var(--text-muted);">${product.ingredients}</p>
      </div>

      <button class="btn btn-primary btn-block" onclick="addToCart(${product.id}); closeProductModal();">
        Добавить в заказ · ${product.price} ₽
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
// 6. CHECKOUT MODAL
// ==========================================================================
proceedCheckoutBtn.addEventListener('click', () => {
  if (cart.length === 0) return;
  cartOverlay.classList.remove('active');

  const totalSum = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  orderSummaryBox.innerHTML = `
    <div style="font-weight: 600; margin-bottom: 8px; color: var(--text-main);">Состав предзаказа:</div>
    <ul style="list-style: none; margin-bottom: 10px; color: var(--text-muted); font-size: 0.82rem; line-height: 1.6;">
      ${cart.map(i => `<li>• ${i.name} × ${i.quantity} шт. (${i.price * i.quantity} ₽)</li>`).join('')}
    </ul>
    <div style="font-weight: 700; color: var(--accent-orange); font-size: 1rem;">
      Итого: ${totalSum.toLocaleString('ru-RU')} ₽
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
  const phone = document.getElementById('orderPhone').value;
  const time = document.getElementById('orderTime').value;
  const comment = document.getElementById('orderComment').value;

  // Clear cart
  cart = [];
  saveCart();

  checkoutModalOverlay.classList.remove('active');
  document.body.style.overflow = '';

  showToast(`Заказ принят! Ждём вас к: ${time}`);
  alert(`Спасибо, ${name}! Предзаказ отправлен на бар Hot Black.\nГотовим к: ${time}.\nАдрес: Королёв, Подмосковная ул., 7.`);
});

// ==========================================================================
// 7. TOAST HELPER
// ==========================================================================
let toastTimer = null;
function showToast(msg) {
  if (toastTimer) clearTimeout(toastTimer);
  toastText.textContent = msg;
  toastNotification.classList.add('active');
  toastTimer = setTimeout(() => {
    toastNotification.classList.remove('active');
  }, 2800);
}

// ==========================================================================
// 8. MOBILE MENU TOGGLE
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
// 9. OPENING HOURS DYNAMIC CHECK
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
    dot.style.boxShadow = '0 0 10px rgba(34, 197, 94, 0.8)';
    text.textContent = 'Открыто до 22:00';
  } else {
    dot.style.backgroundColor = '#f59e0b';
    dot.style.boxShadow = '0 0 10px rgba(245, 158, 11, 0.8)';
    text.textContent = 'Откроемся в 08:00';
  }
}

// ==========================================================================
// 10. INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
  updateCartUI();
  checkOpeningHours();
});
