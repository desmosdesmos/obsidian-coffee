/**
 * РОЗА РОЗ // FLORAL STUDIO & BOUTIQUE
 * Core Interactive Controller
 * Features: High-Contrast Scroll Dimming, Packaging Switcher, Fly-to-Cart Animation, Online Bouquet Booking
 */

// 1. CURATED FLORAL CATALOG DATA
const DEFAULT_MENU_DATA = [
  // 1. АВТОРСКИЕ БУКЕТЫ (AUTHOR BOUQUETS)
  {
    id: 1,
    category: 'author',
    name: 'Гранд-букет «Малиновый рассвет»',
    tag: 'WOW-эффект',
    badge: 'Пышный авторский',
    volume: 'Высота 55 см · Ø 45 см',
    price: 6500,
    image: 'assets/images/curated/catalog_1_author_grand.jpg',
    desc: 'Роскошный объемный авторский букет в ягодно-малиновых тонах: французские пионовидные розы, пудровые диантусы, сочная альстромерия и веточки эвкалипта в многослойной матовой упаковке.',
    specs: { height: '55 см', diam: '45 см', life: '12–14 дней', aroma: 'Сладковатый ягодный' },
    ingredients: 'Пионовидные розы (7 шт.), диантус сортовой (7 шт.), альстромерия (5 шт.), эустома, эвкалипт цинерея, многослойное оформление, атласная лента.'
  },
  {
    id: 2,
    category: 'author',
    name: 'Авторский букет «Африканская королева»',
    tag: 'Экзотика',
    badge: 'С королевской протеей',
    volume: 'Высота 50 см · Ø 40 см',
    price: 5900,
    image: 'assets/images/curated/catalog_2_protea.jpg',
    desc: 'Редкая экзотическая розовая протея в окружении нежных кремово-розовых роз, белого воскового хамелациума и веточек альстромерии в нюдовой дизайнерской кальке.',
    specs: { height: '50 см', diam: '40 см', life: '14 дней', aroma: 'Тонкий пряный' },
    ingredients: 'Королевская протея (2 шт.), сортовая эквадорская роза (7 шт.), хамелациум (воскоцветник), альстромерия, авторская бумага.'
  },
  {
    id: 3,
    category: 'author',
    name: 'Букет «Лавандовое утро» с эустомой',
    tag: 'Нежный хит',
    badge: 'Стойкость 12 дней',
    volume: 'Высота 50 см · Ø 36 см',
    price: 4200,
    image: 'assets/images/curated/catalog_4_eustoma_field.jpg',
    desc: 'Воздушный полевой шарм: махровая сиреневая эустома, кустовая матрикария (ромашки) и ажурная зелень в нежно-мятной матовой бумаге с лавандовой лентой.',
    specs: { height: '50 см', diam: '36 см', life: '10–12 дней', aroma: 'Легкий свежий' },
    ingredients: 'Эустома махровая лавандовая (7 веток), ромашка матрикария (5 веток), пастушья сумка (гринбелл), мятная калька, шелковая лента.'
  },
  {
    id: 4,
    category: 'author',
    name: 'Букет «Мятный бриз» с кустовой розой',
    tag: 'Свежий срез',
    badge: 'Аромат эвкалипта',
    volume: 'Высота 48 см · Ø 38 см',
    price: 4150,
    image: 'assets/images/curated/catalog_12_mint_spray.jpg',
    desc: 'Контрастная свежесть: бархатные кустовые розы цвета фуксии, белоснежная альстромерия и ароматные побеги эвкалипта в мятной дизайнерской упаковке.',
    specs: { height: '48 см', diam: '38 см', life: '12 дней', aroma: 'Свежий цитрусовый' },
    ingredients: 'Кустовая роза малиновая (5 веток), альстромерия белая (4 ветки), эвкалипт цинерея, хамелациум, мятная дизайнерская упаковка.'
  },

  // 2. РОЗЫ И МОНОБУКЕТЫ (ROSES & MONO)
  {
    id: 5,
    category: 'roses',
    name: '25 роз «Miss Piggy» в матовой кальке',
    tag: 'Двухцветный сорт',
    badge: 'Эквадор 50 см',
    volume: 'Высота 50 см · Ø 38 см',
    price: 5400,
    image: 'assets/images/curated/catalog_3_miss_piggy.jpg',
    desc: 'Знаменитый сорт с уникальным градиентным переходом: персиково-коралловый центр бутона и нежно-розовые наружные лепестки. Оформлен в матовую полупрозрачную кальку.',
    specs: { height: '50 см', diam: '38 см', life: '12–14 дней', aroma: 'Нежный розовый' },
    ingredients: '25 отборных роз Miss Piggy (Эквадор 50 см), матовая калька, атласная лента в тон лепестков.'
  },
  {
    id: 6,
    category: 'roses',
    name: '25 роз «Pink Mondial» (Эквадор)',
    tag: 'Премиум срез',
    badge: 'Крупный бутон 10 см',
    volume: 'Высота 60 см · Ø 40 см',
    price: 5800,
    image: 'assets/images/curated/catalog_8_blush_roses.jpg',
    desc: 'Пудрово-розовые розы с зеленоватым оттенком крайних лепестков — знак безупречной свежести среза. Раскрываются в пышные бокалы диаметром до 10 см.',
    specs: { height: '60 см', diam: '40 см', life: '14 дней', aroma: 'Тонкий цветочный' },
    ingredients: '25 роз сорта Pink Mondial (Эквадор 60 см), фирменная лента с логотипом.'
  },
  {
    id: 7,
    category: 'roses',
    name: 'Гранд-охапка из 101 красной розы',
    tag: 'Королевский масштаб',
    badge: '101 роза Эквадор',
    volume: 'Высота 60 см · Ø 65 см',
    price: 19500,
    image: 'assets/images/curated/catalog_7_101_roses.jpg',
    desc: 'Внушительный гранд-букет из 101 алой розы Explorer. Плотная тяжелая шапка цветов в благородном крафте с атласным бантом для самых памятных событий.',
    specs: { height: '60 см', diam: '65 см', life: '14 дней', aroma: 'Глубокий розовый' },
    ingredients: '101 роза Explorer (Эквадор 60 см), крафтовая флористическая бумага, двойной атласный бант.'
  },
  {
    id: 8,
    category: 'roses',
    name: 'Авторский букет «Розовый шелк» с брассикой',
    tag: 'Флористический тренд',
    badge: 'С брассикой и розами',
    volume: 'Высота 48 см · Ø 40 см',
    price: 4900,
    image: 'assets/images/curated/catalog_14_duet_blush.jpg',
    desc: 'Фактурный трендовый букет: декоративная кружевная брассика, пудровые садовые розы, махровые хризантемы и веточки хамелациума.',
    specs: { height: '48 см', diam: '40 см', life: '12 дней', aroma: 'Легкий травянистый' },
    ingredients: 'Брассика сортовая, розы пудровые (5 шт.), хризантема кустовая, хамелациум, дизайнерская упаковка.'
  },

  // 3. КОРОБКИ И КОРЗИНЫ (BOXES & BASKETS)
  {
    id: 9,
    category: 'boxes',
    name: 'Шляпная коробка «Royal Blush»',
    tag: 'Бестселлер',
    badge: 'Не требует вазы',
    volume: 'Коробка M · Ø 32 см',
    price: 4800,
    image: 'assets/images/curated/catalog_5_hatbox_royal.jpg',
    desc: 'Элегантная круглая шляпная коробка сиреневого оттенка с тропической орхидеей Ванда, нежной гортензией, диантусами и кустовыми хризантемами на влажном оазисе.',
    specs: { height: '35 см', diam: '32 см', life: '14 дней в оазисе', aroma: 'Тонкий орхидейный' },
    ingredients: 'Орхидея Ванда (2 соцветия), гортензия, диантусы пудровые (5 шт.), хризантема Сантини, шляпная коробка, оазис с питанием.'
  },
  {
    id: 10,
    category: 'boxes',
    name: 'Деревянная корзинка «Прованс»',
    tag: 'Уютная композиция',
    badge: 'С ручкой и бантом',
    volume: 'Высота 35 см · Ø 28 см',
    price: 3900,
    image: 'assets/images/curated/catalog_6_wooden_basket.jpg',
    desc: 'Очаровательный деревянный ящичек ручной работы с ручкой и сиреневым бантом. Внутри — розовые розы, белоснежные хризантемы и синяя статица на флористической губке.',
    specs: { height: '35 см', diam: '28 см', life: '14 дней', aroma: 'Свежий луговой' },
    ingredients: 'Розы розовые (3 шт.), хризантема кустовая белая (4 шт.), статица синяя, альстромерия, деревянный ящичек с ручкой, оазис Oasis.'
  },
  {
    id: 11,
    category: 'boxes',
    name: 'Цветочный бокс «Love» с орхидеями',
    tag: 'Для любимых',
    badge: 'Резное дерево',
    volume: 'Высота 30 см · Ø 26 см',
    price: 4400,
    image: 'assets/images/curated/catalog_13_box_love.jpg',
    desc: 'Нежная композиция в резном деревянном кашпо с ручкой в форме сердца: редкие салатовые орхидеи Цимбидиум, сиреневые розы и ромашковые хризантемы.',
    specs: { height: '30 см', diam: '26 см', life: '12–14 дней', aroma: 'Сладковатый пудровый' },
    ingredients: 'Орхидея Цимбидиум (3 соцветия), розы сортовые (2 шт.), хризантема ромашковая, альстромерия, деревянное резное кашпо Love.'
  },

  // 4. СЕЗОННЫЕ И ГОРТЕНЗИИ (SEASONAL & HYDRANGEAS)
  {
    id: 12,
    category: 'seasonal',
    name: 'Букет «Белая орхидея & Гортензия»',
    tag: 'Премиум экзотика',
    badge: 'Пышная гортензия',
    volume: 'Высота 50 см · Ø 42 см',
    price: 5600,
    image: 'assets/images/curated/catalog_9_orchid_hydrangea.jpg',
    desc: 'Изысканное сочетание крупной белой орхидеи Цимбидиум, воздушной лавандовой гортензии, персиковых кустовых роз и фиолетовой эустомы.',
    specs: { height: '50 см', diam: '42 см', life: '10–14 дней', aroma: 'Экзотический свежий' },
    ingredients: 'Орхидея Цимбидиум крупная, гортензия лавандовая (1 шт.), роза кустовая персиковая (4 шт.), эустома (3 шт.), матовая бумага.'
  },
  {
    id: 13,
    category: 'seasonal',
    name: 'Охапка альстромерий «Феерия» (25 веток)',
    tag: 'Рекордная стойкость',
    badge: 'До 3 недель в вазе',
    volume: 'Высота 55 см · Ø 46 см',
    price: 4500,
    image: 'assets/images/curated/catalog_10_alstroemeria.jpg',
    desc: 'Пышный моно-микс из 25 веток стойкой альстромерии насыщенных фиолетовых, нежно-розовых и белых оттенков. Бутоны постепенно распускаются до 20 дней.',
    specs: { height: '55 см', diam: '46 см', life: '18–21 день', aroma: 'Легкий чистый' },
    ingredients: '25 сортовых веток альстромерии микс, нежно-розовая дизайнерская бумага, шелковая лента.'
  },
  {
    id: 14,
    category: 'seasonal',
    name: 'Букет «Французский шарм» (хризантемы и эустома)',
    tag: 'Стойкий микс',
    badge: 'Свежий срез',
    volume: 'Высота 50 см · Ø 38 см',
    price: 3700,
    image: 'assets/images/curated/catalog_11_chrysanth_eustoma.jpg',
    desc: 'Контрастное сочетание белоснежных игольчатых хризантем и глубоких фиолетовых бутонов эустомы в пудровой упаковке. Практичный и долговечный букет.',
    specs: { height: '50 см', diam: '38 см', life: '14–16 дней', aroma: 'Свежий травянистый' },
    ingredients: 'Хризантема белая одноголовая/кустовая (5 шт.), эустома фиолетовая (4 ветки), матовая пудровая бумага.'
  }
];

// PACKAGING VARIANTS FOR FLAGSHIP SHOWCASE (ROYAL BLUSH)
const PACKAGING_VARIANTS = {
  'Шляпная коробка': {
    title: 'ШЛЯПНАЯ КОРОБКА «ROYAL BLUSH»',
    tag: 'БАРХАТНЫЙ БОКС С ОРХИДЕЕЙ И ГОРТЕНЗИЕЙ',
    price: 4800,
    image: 'assets/images/curated/catalog_5_hatbox_royal.jpg',
    note: 'Не требует вазы · Собрано на влажном оазисе с питанием',
    descriptors: ['Орхидея Ванда', 'Гортензия', 'Роза кустовая', 'Диантус'],
    desc: 'Фирменная шляпная коробка не требует поиска вазы и подрезки стеблей. Достаточно раз в день подливать 100 мл прохладной воды в центр композиции. В комплекте фирменная открытка с вашим текстом.',
    profile: ['Плантации Эквадора', '14 дней в оазисе', 'Оазис Oasis · Без вазы']
  },
  'Дизайнерская бумага': {
    title: 'АВТОРСКИЙ БУКЕТ «ROYAL BLUSH»',
    tag: 'ФРАНЦУЗСКАЯ МНОГОСЛОЙНАЯ КАЛЬКА',
    price: 4400,
    image: 'assets/images/curated/catalog_1_author_grand.jpg',
    note: 'Многослойная матовая бумага · Транспортировочный аквабокс',
    descriptors: ['Французские розы', 'Эустома', 'Диантус', 'Эвкалипт'],
    desc: 'Воздушный объемный букет в пудровой матовой упаковке с шелковыми лентами. Поставляется во временном аквабоксе с водой для бережной перевозки.',
    profile: ['Премиум срез', '12–14 дней в вазе', 'Аквабокс · Матовая бумага']
  },
  'Классический крафт': {
    title: 'ОХАПКА «ROYAL BLUSH» В КРАФТЕ',
    tag: 'ПЛОТНЫЙ ЭКО-КРАФТ И ДЖУТОВЫЙ ШНУР',
    price: 3900,
    image: 'assets/images/curated/catalog_3_miss_piggy.jpg',
    note: 'Экологичная упаковка из крафта · Атласные ленты',
    descriptors: ['Коралловые розы', 'Эвкалипт', 'Натуральный крафт', 'Ленты'],
    desc: 'Лаконичная эстетика плотного крафта подчеркивает свежесть и природную грацию цветка. Букет на гидропитании готов к бережной транспортировке.',
    profile: ['Свежая поставка', '12–14 дней', 'Эко-крафт · Атласный бант']
  },
  'Стеклянная ваза': {
    title: 'КОМПОЗИЦИЯ «ROYAL BLUSH» В ВАЗЕ',
    tag: 'ИНТЕРЬЕРНАЯ СТЕКЛЯННАЯ ВАЗА В КОМПЛЕКТЕ',
    price: 5900,
    image: 'assets/images/curated/catalog_4_eustoma_field.jpg',
    note: 'Подарок «под ключ» · Стеклянная ваза с кризалом',
    descriptors: ['Букет на воде', 'Ваза из стекла', 'Порошок Chrysal', 'Открытка'],
    desc: 'Готовый подарок: букет профессионально подрезан и сразу собран в элегантной стеклянной вазе со свежей водой и подкормкой. Получателю ничего не нужно искать.',
    profile: ['Готовый подарок', '14 дней на воде', 'Стеклянная ваза в сборе']
  }
};

// Preload packaging variant images to avoid any latency
Object.values(PACKAGING_VARIANTS).forEach(v => {
  const pImg = new Image();
  pImg.src = v.image;
});

// DYNAMIC STORAGE & CATALOG PERSISTENCE
const MENU_STORAGE_KEY = 'roza_roz_catalog_v3';
const CART_STORAGE_KEY = 'roza_roz_cart_v2';

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
// 2. VIDEO SCROLL BLUR & HIGH-CONTRAST DARKENING ENGINE
// ==========================================================================
let isTicking = false;

function onScrollHandler() {
  const scrollY = window.scrollY;
  const vh = window.innerHeight;

  // Header background toggle
  if (scrollY > 35) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  // Calculate blur and dark overlay progress
  // At top of hero: overlay is 0.65 (video softly visible behind content)
  // When scrolling down into catalog: overlay deepens to 0.96 (dark velvet midnight)
  const progress = Math.min(Math.max(scrollY / (vh * 0.70), 0), 1);
  const blurVal = (progress * 24).toFixed(1);
  const overlayOpacity = (0.65 + progress * 0.31).toFixed(2);
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
// 3. CATALOG RENDERING & BADGES
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
    const badgeText = item.badge || 'Свежий срез';

    return `
    <article class="product-card ${isOut ? 'item-out-of-stock' : ''}" data-id="${item.id}">
      <div class="card-img-wrapper" onclick="openProductModal(${item.id})">
        <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='assets/images/flowers/flower_1.jpg'">
        <span class="product-tag" ${isOut ? 'style="background:rgba(239,68,68,0.85); color:#fff;"' : ''}>${isOut ? 'Под заказ' : item.tag}</span>
        <span style="position:absolute; bottom:10px; right:10px; padding:3px 8px; border-radius:4px; font-size:0.65rem; font-weight:700; background:rgba(12,15,18,0.88); border:1px solid rgba(255,255,255,0.12); color:var(--text-main);">${badgeText}</span>
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
            <button class="btn-card-add ${isOut ? 'btn-disabled' : ''}" ${isOut ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : `onclick="handleAddToCart(${item.id}, event)"`}>
              ${isOut ? '<span>Под заказ</span>' : `
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              <span>В&nbsp;бронь</span>
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
    if (navigator.vibrate) try { navigator.vibrate(15); } catch(e){}
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
// 4. ANIMATED PACKAGING SWITCHER FOR SIGNATURE BOUQUET (ROYAL BLUSH)
// ==========================================================================
function updatePackagingDisplay(pkgKey) {
  const variant = PACKAGING_VARIANTS[pkgKey] || PACKAGING_VARIANTS['Шляпная коробка'];
  selectedPackaging = pkgKey;

  const titleEl = document.querySelector('.beans-card-title');
  const tagEl = document.querySelector('.beans-card-tag');
  const descEl = document.querySelector('.beans-description');
  const priceValEl = document.querySelector('.beans-price-value');
  const descriptorsEl = document.querySelector('.beans-descriptors');
  const imgEl = document.querySelector('.beans-image-wrap img');
  const noteTextEl = document.getElementById('packagingNoteText');
  const profileRow = document.querySelector('.beans-profile-row');

  // Smooth image cross-fade without layout shift
  if (imgEl) {
    imgEl.style.opacity = '0.2';
    setTimeout(() => {
      imgEl.src = variant.image;
      imgEl.style.opacity = '1';
    }, 120);
  }

  if (titleEl) titleEl.textContent = variant.title;
  if (tagEl) tagEl.textContent = variant.tag;
  if (descEl) descEl.textContent = variant.desc;
  if (priceValEl) priceValEl.innerHTML = `${variant.price.toLocaleString('ru-RU')}&nbsp;₽`;

  if (noteTextEl) {
    noteTextEl.style.opacity = '0.2';
    setTimeout(() => {
      noteTextEl.textContent = variant.note;
      noteTextEl.style.opacity = '1';
    }, 120);
  }

  if (descriptorsEl && Array.isArray(variant.descriptors)) {
    descriptorsEl.innerHTML = variant.descriptors.map(d => `<span class="desc-pill">${d}</span>`).join('');
  }

  if (profileRow && Array.isArray(variant.profile)) {
    const valItems = profileRow.querySelectorAll('.profile-item .profile-val');
    variant.profile.forEach((text, i) => {
      if (valItems[i]) valItems[i].textContent = text;
    });
  }

  const formatProfileVal = document.getElementById('beansProfileFormat');
  if (formatProfileVal && variant.profile && variant.profile[2]) {
    formatProfileVal.textContent = variant.profile[2];
  }
}

if (grindOptionsGrid) {
  grindOptionsGrid.addEventListener('click', (e) => {
    const pill = e.target.closest('.grind-pill');
    if (!pill) return;

    grindOptionsGrid.querySelectorAll('.grind-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    
    const pkgName = pill.getAttribute('data-grind');
    if (navigator.vibrate) try { navigator.vibrate(15); } catch(e){}
    updatePackagingDisplay(pkgName);
  });
}

if (addBeansToCartBtn) {
  addBeansToCartBtn.addEventListener('click', (e) => {
    const variant = PACKAGING_VARIANTS[selectedPackaging] || PACKAGING_VARIANTS['Шляпная коробка'];
    const bouquetName = `${variant.title} (${selectedPackaging})`;
    const bouquetPrice = variant.price;
    const bouquetImage = variant.image;

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
    triggerFlyToCartAnimation(addBeansToCartBtn, bouquetImage);
    animateButtonSuccess(addBeansToCartBtn);
    showToast(`«${variant.title}» забронирован!`);
  });
}

// ==========================================================================
// 5. CART & FLY-TO-CART ANIMATION ENGINE
// ==========================================================================
function triggerFlyToCartAnimation(sourceElement, imageUrl) {
  const isMobile = window.innerWidth <= 768;
  const cartTarget = isMobile 
    ? document.getElementById('mobileCartTrigger') 
    : document.getElementById('openCartBtn');
  
  if (!cartTarget) return;

  const btn = sourceElement ? (sourceElement.closest('button') || sourceElement) : null;
  const startRect = btn ? btn.getBoundingClientRect() : { top: window.innerHeight / 2, left: window.innerWidth / 2, width: 40, height: 40 };
  const endRect = cartTarget.getBoundingClientRect();

  const cloneSize = isMobile ? 42 : 58;
  const flying = document.createElement('img');
  flying.src = imageUrl || 'assets/images/flowers/flower_1.jpg';
  flying.className = 'fly-to-cart-clone';
  flying.style.width = `${cloneSize}px`;
  flying.style.height = `${cloneSize}px`;
  flying.style.top = `${startRect.top + startRect.height / 2 - cloneSize / 2}px`;
  flying.style.left = `${startRect.left + startRect.width / 2 - cloneSize / 2}px`;
  flying.style.transform = 'scale(0.5)';
  document.body.appendChild(flying);

  // Force reflow
  void flying.offsetWidth;

  // Animate arc to cart target
  flying.style.transform = 'scale(1.12)';
  flying.style.top = `${endRect.top + endRect.height / 2 - cloneSize / 2}px`;
  flying.style.left = `${endRect.left + endRect.width / 2 - cloneSize / 2}px`;
  flying.style.opacity = '0.15';

  setTimeout(() => {
    flying.remove();
    cartTarget.classList.remove('cart-bump');
    void cartTarget.offsetWidth;
    cartTarget.classList.add('cart-bump');
    if (navigator.vibrate) {
      try { navigator.vibrate(25); } catch(e){}
    }
  }, 680);
}

function animateButtonSuccess(btn) {
  if (!btn) return;
  btn.classList.add('btn-added');
  const originalHtml = btn.innerHTML;
  btn.innerHTML = `
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>В брони ✓</span>
  `;
  setTimeout(() => {
    btn.innerHTML = originalHtml;
    btn.classList.remove('btn-added');
  }, 1600);
}

function handleAddToCart(productId, event) {
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
  if (navigator.vibrate) try { navigator.vibrate(25); } catch(e){}

  const btn = event?.target?.closest('button');
  if (btn) {
    animateButtonSuccess(btn);
    triggerFlyToCartAnimation(btn, product.image);
  }

  showToast(`Букет «${product.name}» добавлен в бронь`);
}

function saveCart() {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  updateCartUI();
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
          Бесплатный комплект к бронированию:
        </span>
        <p style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.45;">
          Транспортировочный аквабокс с водой, средство Chrysal для вазы и дизайнерская открытка с вашим текстом.
        </p>
      </div>

      <button class="btn btn-primary btn-block" onclick="handleAddToCart(${product.id}, event); closeProductModal();">
        <span>Забронировать букет · ${product.price.toLocaleString('ru-RU')}&nbsp;₽</span>
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
// 7. RESERVATION CHECKOUT MODAL & DIRECT WHATSAPP DISPATCH
// ==========================================================================
if (proceedCheckoutBtn && checkoutModalOverlay) {
  proceedCheckoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;
    if (cartOverlay) cartOverlay.classList.remove('active');

    const totalSum = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    if (orderSummaryBox) {
      orderSummaryBox.innerHTML = `
        <div style="font-weight: 700; margin-bottom: 8px; color: var(--text-main); font-family: var(--font-heading); font-size: 0.9rem;">Состав бронирования:</div>
        <ul style="list-style: none; margin-bottom: 12px; color: var(--text-muted); font-size: 0.85rem; line-height: 1.6;">
          ${cart.map(i => `<li>— ${i.name} × ${i.quantity} шт. (${(i.price * i.quantity).toLocaleString('ru-RU')}&nbsp;₽)</li>`).join('')}
        </ul>
        <div style="font-weight: 800; color: var(--accent-orange); font-size: 1.15rem; font-family: var(--font-heading);">
          Итого по брони: ${totalSum.toLocaleString('ru-RU')}&nbsp;₽
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

    const customerName = nameInput ? nameInput.value.trim() : 'Гость';
    const customerPhone = phoneInput ? phoneInput.value.trim() : '';
    const deliveryType = typeInput ? typeInput.value : 'Самовывоз';
    const address = addressInput ? addressInput.value.trim() : '';
    const readyTime = timeInput ? timeInput.value : 'Как можно скорее';
    const cardText = cardInput ? cardInput.value.trim() : '';
    const comment = commentInput ? commentInput.value.trim() : '';

    const totalSum = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const orderId = 'FLW-' + Math.floor(1000 + Math.random() * 9000);

    const itemsSummary = cart.map((i, idx) => `${idx + 1}. ${i.name} × ${i.quantity} шт. (${i.price * i.quantity} ₽)`).join('\n');

    // Build friendly WhatsApp booking message
    const waText = encodeURIComponent(
`Здравствуйте! Оформляю бронь букетов в салоне «Роза роз» [${orderId}]:

Состав брони:
${itemsSummary}

Сумма: ${totalSum.toLocaleString('ru-RU')} ₽
Получение: ${deliveryType}${address ? ` (Адрес: ${address})` : ' (Салон на ул. Рождественская, 11)'}
Время готовности: ${readyTime}
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

    showToast(`Бронь ${orderId} принята! Открываем WhatsApp для подтверждения...`);

    // Open WhatsApp to florist +7 925 290-55-50
    setTimeout(() => {
      window.open(`https://wa.me/79252905550?text=${waText}`, '_blank');
    }, 1100);
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
    const isOpen = burgerBtn.classList.toggle('active');
    navMenu.classList.toggle('mobile-open', isOpen);
    navMenu.classList.toggle('open', isOpen);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (navigator.vibrate) try { navigator.vibrate(20); } catch(e){}
    } else {
      document.body.style.overflow = '';
    }
  });

  navMenu.querySelectorAll('.nav-link, .mobile-nav-phone-btn, .mobile-nav-wa-btn').forEach(link => {
    link.addEventListener('click', () => {
      burgerBtn.classList.remove('active');
      navMenu.classList.remove('mobile-open');
      navMenu.classList.remove('open');
      document.body.style.overflow = '';
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
  updatePackagingDisplay('Шляпная коробка');
});

renderCatalog();
updateCartUI();
updatePackagingDisplay('Шляпная коробка');
