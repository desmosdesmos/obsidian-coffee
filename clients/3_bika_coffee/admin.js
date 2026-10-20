/**
 * БИКА — ENTERPRISE ADMINISTRATIVE BACK-OFFICE CONTROLLER
 * Full Management Engine: Catalog, Featured Beans, Orders, Reviews, Settings, Security & Backups
 */

// ==========================================================================
// 1. DATA STORAGE KEYS & DEFAULT SCHEMAS
// ==========================================================================
const STORAGE_KEYS = {
  MENU: '3_bika_coffee_menu_items_v2',
  BEANS: '3_bika_coffee_featured_beans_v1',
  SETTINGS: '3_bika_coffee_store_settings_v1',
  REVIEWS: '3_bika_coffee_reviews_v1',
  ORDERS: '3_bika_coffee_orders_v1',
  SECURITY: '3_bika_coffee_admin_security_v1',
  AUDIT: '3_bika_coffee_audit_log_v1'
};

const DEFAULT_PRODUCTS = [
  {
    id: 1,
    category: 'coffee',
    name: 'Айс-латте',
    tag: 'Хит сезона',
    volume: '350 мл',
    price: 290,
    oldPrice: null,
    image: 'assets/images/iced_latte.jpg',
    desc: 'Двойной шот спешелти эспрессо, отборное фермерское молоко 3.2% и чистый кусковой лёд. Плотный кофейный баланс без горечи.',
    nutrition: { kcal: 135, p: '6.2 г', f: '6.8 г', c: '11.4 г' },
    ingredients: 'Эспрессо (100% арабика), молоко цельное, лед очищенный.',
    outOfStock: false
  },
  {
    id: 2,
    category: 'coffee',
    name: 'Фильтр-кофе (Батч-брю)',
    tag: 'Спешелти',
    volume: '250 мл',
    price: 220,
    oldPrice: null,
    image: 'assets/images/filter_coffee.jpg',
    desc: 'Капельный метод Moccamaster на зерне мытой Эфиопии. Яркий чайный профиль с нотами бергамота, персика и жасмина.',
    nutrition: { kcal: 4, p: '0.2 г', f: '0.1 г', c: '0.6 г' },
    ingredients: 'Зерно Specialty (Эфиопия Иргачеффе), минерализованная вода TDS 110 ppm.',
    outOfStock: false
  },
  {
    id: 3,
    category: 'coffee',
    name: 'Флэт Уайт',
    tag: 'Интенсивный',
    volume: '200 мл',
    price: 280,
    oldPrice: null,
    image: 'assets/images/flat_white.jpg',
    desc: 'Двойной ристретто с глянцевой тонкой микропенкой. Насыщенный глубокий вкус спешелти эспрессо на первом плане.',
    nutrition: { kcal: 110, p: '5.1 г', f: '5.4 г', c: '9.2 г' },
    ingredients: 'Двойной ристретто (100% арабика), молоко цельное 60°C.',
    outOfStock: false
  },
  {
    id: 4,
    category: 'coffee',
    name: 'Капучино',
    tag: 'Классика',
    volume: '250 мл',
    price: 250,
    oldPrice: null,
    image: 'assets/images/cappuccino.jpg',
    desc: 'Идеальный баланс эспрессо и шелковистой микропены. Зерно средней обжарки с орехово-шоколадным профилем.',
    nutrition: { kcal: 120, p: '5.8 г', f: '6.0 г', c: '10.5 г' },
    ingredients: 'Эспрессо 36 мл, фермерское молоко цельное.',
    outOfStock: false
  },
  {
    id: 5,
    category: 'coffee',
    name: 'Матча Латте (Удзи)',
    tag: 'Superfood',
    volume: '300 мл',
    price: 320,
    oldPrice: null,
    image: 'assets/images/matcha_latte.jpg',
    desc: 'Церемониальная матча первого сбора из Киото на взбитом растительном или цельном молоке. Мягкий травянистый вкус.',
    nutrition: { kcal: 140, p: '6.0 г', f: '6.2 г', c: '12.0 г' },
    ingredients: 'Матча японская церемониальная, молоко на выбор.',
    outOfStock: false
  },
  {
    id: 6,
    category: 'food',
    name: 'Круассан с лососем и крем-чизом',
    tag: 'Завтрак',
    volume: '210 г',
    price: 460,
    oldPrice: null,
    image: 'assets/images/salmon_croissant.jpg',
    desc: 'Хрустящий круассан на новозеландском сливочном масле, ломтики слабосоленого лосося, творожный сыр и свежий огурец.',
    nutrition: { kcal: 480, p: '19.2 г', f: '28.4 г', c: '36.5 г' },
    ingredients: 'Сливочный круассан, слабосоленый лосось, творожный сыр, свежий огурец, микрозелень.',
    outOfStock: false
  },
  {
    id: 7,
    category: 'food',
    name: 'Сырники из фермерского творога',
    tag: 'Хит кухни',
    volume: '240 г',
    price: 380,
    oldPrice: null,
    image: 'assets/images/syrniki_breakfast.jpg',
    desc: 'Три пышных нежных сырника из фермерского творога 9%. Подаются с густой деревенской сметаной и таёжной брусникой.',
    nutrition: { kcal: 395, p: '24.5 г', f: '16.8 г', c: '32.0 г' },
    ingredients: 'Творог 9%, рисовая мука, яйцо фермерское, сахар тростниковый, сметана, брусника.',
    outOfStock: false
  },
  {
    id: 8,
    category: 'food',
    name: 'Бриошь с авокадо и яйцом пашот',
    tag: 'Бранч',
    volume: '260 г',
    price: 420,
    oldPrice: null,
    image: 'assets/images/avocado_brioche.jpg',
    desc: 'Поджаренная сливочная бриошь, спелый авокадо Хасс, яйцо пашот с текучим желтком и теплый соус голландез.',
    nutrition: { kcal: 430, p: '14.0 г', f: '26.2 г', c: '34.0 г' },
    ingredients: 'Бриошь ремесленная, авокадо Хасс, яйцо пашот, соус голландез, микс трав.',
    outOfStock: false
  },
  {
    id: 9,
    category: 'food',
    name: 'Сэндвич с пастрами на тартине',
    tag: 'Сытный',
    volume: '280 г',
    price: 490,
    oldPrice: null,
    image: 'assets/images/pastrami_sandwich.jpg',
    desc: 'Тартин на закваске, щедрая порция томленой говядины пастрами, сыр чеддер, корнишоны и дижонская горчица.',
    nutrition: { kcal: 540, p: '29.5 г', f: '22.0 г', c: '51.0 г' },
    ingredients: 'Хлеб тартин, говядина пастрами, чеддер, маринованные корнишоны, зернистая горчица.',
    outOfStock: false
  },
  {
    id: 10,
    category: 'desserts',
    name: 'Баскский обожженный чизкейк',
    tag: 'Бестселлер',
    volume: '175 г',
    price: 350,
    oldPrice: null,
    image: 'assets/images/basque_cheesecake.jpg',
    desc: 'Испанский чизкейк San Sebastian. Нежнейшая шелковистая кремовая текстура и карамелизированная обожженная корочка.',
    nutrition: { kcal: 410, p: '7.8 г', f: '29.0 г', c: '28.5 г' },
    ingredients: 'Сливочный сыр Cremette, сливки 33%, яйца, тростниковый сахар, натуральная ваниль.',
    outOfStock: false
  },
  {
    id: 11,
    category: 'desserts',
    name: 'Медовик с брусникой',
    tag: 'Фирменный',
    volume: '160 г',
    price: 320,
    oldPrice: null,
    image: 'assets/images/medovik_cake.jpg',
    desc: 'Тончайшие карамельно-медовые коржи, воздушный сметанный крем и сочные ягоды таежной брусники с приятной кислинкой.',
    nutrition: { kcal: 360, p: '5.2 г', f: '17.4 г', c: '46.0 г' },
    ingredients: 'Гречишный мед, мука пшеничная, сметана, сливки, ягоды брусники, сахарная пудра.',
    outOfStock: false
  },
  {
    id: 12,
    category: 'beans',
    name: 'Зерно: Эфиопия Иргачеффе G1',
    tag: 'Q-Score 86.2',
    volume: '250 г',
    price: 850,
    oldPrice: null,
    image: 'assets/images/specialty_bean_bags.jpg',
    desc: 'Мытая обработка, светлая обжарка под фильтр. Высота произрастания 1950–2100м. Ноты бергамота, белого персика и жасмина.',
    nutrition: { kcal: 0, p: '0 г', f: '0 г', c: '0 г' },
    ingredients: '100% арабика specialty в зернах. Бесплатный помол под любой девайс.',
    outOfStock: false
  }
];

const DEFAULT_FEATURED_BEANS = {
  title: 'ЭФИОПИЯ ИРГАЧЕФФЕ // G1',
  tag: 'ЛУЧШИЙ ВЫБОР ДЛЯ ВОРОНКИ И ФИЛЬТРА',
  roast: 'Omni-Roast / Каждую неделю',
  qGrade: '86.25 баллов',
  grindInfo: 'Бесплатно под ваш девайс',
  descriptors: ['Бергамот', 'Белый персик', 'Жасмин', 'Чёрный чай'],
  desc: 'Яркий искрящийся лот мытой обработки из региона Гедеб. Чистейшая кислотность тропических фруктов, нежное цветочное тело и сладкое медовое послевкусие.',
  price: 850,
  weight: '250 г',
  image: 'assets/images/specialty_bean_bags.jpg'
};

const DEFAULT_STORE_SETTINGS = {
  cafeName: 'БИКА',
  phone: '+7 (910) 347-22-60',
  address: 'Москва, Енисейская ул., 17, корп. 2',
  telegramUrl: 'https://t.me/3_bika_coffee_coffee_07',
  whatsappUrl: 'https://wa.me/79103472260',
  yandexMapsUrl: 'https://yandex.ru/maps/-/CXRAFR8n',
  hoursWeekdays: '08:00 — 22:00',
  hoursWeekends: '08:00 — 22:00',
  hoursKitchen: 'до 21:45',
  statusMode: 'auto', // 'auto', 'open', 'closed'
  heroTitle: 'КОФЕ,\nКОТОРЫЙ РАБОТАЕТ\nТАК ЖЕ ЧЕСТНО, КАК ВЫ.',
  promoBannerText: ''
};

const DEFAULT_REVIEWS = [
  {
    id: 1,
    author: 'София Н.',
    role: 'Знаток города 10 уровня',
    avatar: 'assets/images/avatar_sofia.jpg',
    stars: 5,
    date: '22 июня · Яндекс Карты',
    text: 'Безумно понравился баскский чизкейк и бриошь с авокадо! Атмосфера сдержанная, музыка не бьёт по ушам, бариста с душой рассказывают про регион произрастания зерен. Ставлю 5 из 5 без сомнений.'
  },
  {
    id: 2,
    author: 'Алексей Г.',
    role: 'Знаток города 8 уровня',
    avatar: 'assets/images/avatar_alexey.jpg',
    stars: 5,
    date: '14 июля · Яндекс Карты',
    text: 'Кофейня топового уровня! Зерно жарят грамотно: в эспрессо плотное тело с шоколадно-ореховым балансом. Очень стильный интерьер, приятный персонал. Однозначно лучшая точка в Подлипках.'
  },
  {
    id: 3,
    author: 'Евгения Орлова',
    role: 'Знаток города 9 уровня',
    avatar: 'assets/images/avatar_evorlova.jpg',
    stars: 5,
    date: '3 августа · Яндекс Карты',
    text: 'Вкуснейший фильтр на мытой Эфиопии! Чистый вкус без дефектов, температура подачи идеальная. Отдельное спасибо за свежие круассаны с лососем — хрустят как в Париже.'
  },
  {
    id: 4,
    author: 'Артем В.',
    role: 'Местный житель',
    avatar: 'assets/images/avatar_artem.jpg',
    stars: 5,
    date: '18 августа · Яндекс Карты',
    text: 'Лучший кофе и выпечка в районе Бабушкинской. Уютная и душевная атмосфера Бики, приветливые бариста, отличное место чтобы поработать или взять кофе с собой.'
  }
];

// ==========================================================================
// 2. DATA ACCESS LAYER
// ==========================================================================
function getStoredData(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error(`Error loading key ${key}:`, e);
  }
  return JSON.parse(JSON.stringify(fallback));
}

function setStoredData(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    window.dispatchEvent(new Event('storage'));
  } catch (e) {
    console.error(`Error saving key ${key}:`, e);
  }
}

function logAudit(actionText) {
  const list = getStoredData(STORAGE_KEYS.AUDIT, []);
  const entry = {
    id: Date.now(),
    action: actionText,
    timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ', ' + new Date().toLocaleDateString('ru-RU')
  };
  list.unshift(entry);
  if (list.length > 50) list.pop();
  setStoredData(STORAGE_KEYS.AUDIT, list);
}

// Current memory state
let productsData = getStoredData(STORAGE_KEYS.MENU, DEFAULT_PRODUCTS);
let featuredBeansData = getStoredData(STORAGE_KEYS.BEANS, DEFAULT_FEATURED_BEANS);
let storeSettingsData = getStoredData(STORAGE_KEYS.SETTINGS, DEFAULT_STORE_SETTINGS);
let reviewsData = getStoredData(STORAGE_KEYS.REVIEWS, DEFAULT_REVIEWS);
let ordersData = getStoredData(STORAGE_KEYS.ORDERS, []);

// ==========================================================================
// 3. SECURITY GATE & ACCESS CONTROLLER
// ==========================================================================
// 3. SECURITY GATE & ACCESS CONTROLLER (CRYPTOGRAPHIC SHA-256)
// ==========================================================================
let lockoutUntil = 0;
let failedAttempts = 0;

// Master PIN SHA-256 hash (default corresponds to 0707)
const DEFAULT_PIN_HASH = '6c25c8f454fea8dd5cd0b201b4f739993aebfc454de7b410ee9457c553699a85';

async function sha256(str) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function getMasterPinHash() {
  const sec = getStoredData(STORAGE_KEYS.SECURITY, {});
  if (sec.pinHash) return sec.pinHash;
  if (sec.pin) {
    const h = await sha256(sec.pin);
    sec.pinHash = h;
    delete sec.pin;
    setStoredData(STORAGE_KEYS.SECURITY, sec);
    return h;
  }
  return DEFAULT_PIN_HASH;
}

function isSessionAuthorized() {
  const token = sessionStorage.getItem('3_bika_coffee_admin_session_auth');
  const exp = parseInt(sessionStorage.getItem('3_bika_coffee_admin_session_exp') || '0', 10);
  if (token === 'active_07' && Date.now() < exp) {
    return true;
  }
  return false;
}

function authorizeSession() {
  sessionStorage.setItem('3_bika_coffee_admin_session_auth', 'active_07');
  // 3-hour session expiration
  sessionStorage.setItem('3_bika_coffee_admin_session_exp', String(Date.now() + 3 * 3600 * 1000));
}

function revokeSession() {
  sessionStorage.removeItem('3_bika_coffee_admin_session_auth');
  sessionStorage.removeItem('3_bika_coffee_admin_session_exp');
}

async function verifyPin(inputPin) {
  const inputHash = await sha256(inputPin.trim());
  const masterHash = await getMasterPinHash();
  return inputHash === masterHash;
}

async function sendTelegramSecurityAlert(messageText) {
  try {
    const token = '8650352781:AAERhPKs7TmBOEIftRO-y9O0Be18Cyiur28';
    let chatId = localStorage.getItem('3_bika_coffee_tg_chat_id');
    if (!chatId) return;

    const ids = chatId.split(',').map(s => s.trim()).filter(Boolean);
    for (const cid of ids) {
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: cid,
          text: messageText,
          parse_mode: 'HTML'
        })
      });
    }
  } catch (e) {
    console.warn('Security alert dispatch error:', e);
  }
}

// ==========================================================================
// 4. TOAST HELPER
// ==========================================================================
let toastTimer = null;
function showAdminToast(msg) {
  const toast = document.getElementById('adminToast');
  const textEl = document.getElementById('adminToastText');
  if (!toast || !textEl) return;
  textEl.textContent = msg;
  toast.classList.add('active');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('active');
  }, 2800);
}

// ==========================================================================
// 5. VIEW ROUTER & TABS
// ==========================================================================
let currentTab = 'overview';
let productCategoryFilter = 'all';
let productSearchFilter = '';

function switchTab(targetTabId) {
  currentTab = targetTabId;

  // Nav buttons
  document.querySelectorAll('.admin-nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === targetTabId);
  });

  // Panels
  document.querySelectorAll('.admin-view-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === `viewPanel_${targetTabId}`);
  });

  // Update breadcrumb
  const breadcrumb = document.getElementById('topbarCurrentSection');
  const titles = {
    overview: 'Обзор & Метрики',
    products: 'Каталог товаров',
    beans: 'Фирменное зерно',
    orders: 'Входящие предзаказы',
    reviews: 'Отзывы гостей',
    settings: 'Настройки заведения',
    security: 'Безопасность & Аудит',
    backups: 'Бэкап & Синхронизация'
  };
  if (breadcrumb) {
    breadcrumb.textContent = titles[targetTabId] || 'Админ-панель';
  }

  // Refresh panel view data
  if (targetTabId === 'overview') renderOverview();
  if (targetTabId === 'products') renderProductsTable();
  if (targetTabId === 'beans') loadBeansForm();
  if (targetTabId === 'orders') renderOrdersTable();
  if (targetTabId === 'reviews') renderReviewsList();
  if (targetTabId === 'settings') loadSettingsForm();
  if (targetTabId === 'security') renderAuditLog();
}

// ==========================================================================
// 6. OVERVIEW & METRICS
// ==========================================================================
function renderOverview() {
  const totalItemsEl = document.getElementById('statTotalProducts');
  const avgPriceEl = document.getElementById('statAvgPrice');
  const activeOrdersEl = document.getElementById('statActiveOrders');
  const storeStatusEl = document.getElementById('statStoreStatus');

  if (totalItemsEl) totalItemsEl.textContent = productsData.length;

  if (avgPriceEl) {
    const avg = productsData.length ? Math.round(productsData.reduce((s, p) => s + p.price, 0) / productsData.length) : 0;
    avgPriceEl.textContent = `${avg} ₽`;
  }

  if (activeOrdersEl) {
    const activeCount = ordersData.filter(o => o.status === 'new' || o.status === 'in_progress').length;
    activeOrdersEl.textContent = activeCount;
  }

  if (storeStatusEl) {
    storeStatusEl.textContent = isStoreCurrentlyOpen() ? 'ОТКРЫТО' : 'ЗАКРЫТО';
    storeStatusEl.style.color = isStoreCurrentlyOpen() ? 'var(--admin-accent-green)' : 'var(--admin-accent-red)';
  }

  // Render recent 5 audit logs in overview
  const recentLogsEl = document.getElementById('overviewRecentAuditList');
  if (recentLogsEl) {
    const audit = getStoredData(STORAGE_KEYS.AUDIT, []);
    if (audit.length === 0) {
      recentLogsEl.innerHTML = '<div style="color:var(--admin-text-dim); padding:12px;">Действий пока не зафиксировано</div>';
    } else {
      recentLogsEl.innerHTML = audit.slice(0, 5).map(item => `
        <div class="audit-entry-row">
          <span class="audit-entry-action">${item.action}</span>
          <span class="audit-entry-time">${item.timestamp}</span>
        </div>
      `).join('');
    }
  }
}

function isStoreCurrentlyOpen() {
  if (storeSettingsData.statusMode === 'open') return true;
  if (storeSettingsData.statusMode === 'closed') return false;
  // Auto mode
  const now = new Date();
  const h = now.getHours();
  return h >= 8 && h < 22;
}

// ==========================================================================
// 7. PRODUCTS CATALOG CRUD
// ==========================================================================
function renderProductsTable() {
  const tbody = document.getElementById('productsTableBody');
  if (!tbody) return;

  const categoryNames = {
    coffee: 'Кофе',
    food: 'Еда',
    desserts: 'Десерты',
    beans: 'Зерно'
  };

  const filtered = productsData.filter(item => {
    const matchesCat = productCategoryFilter === 'all' || item.category === productCategoryFilter;
    const q = productSearchFilter.trim().toLowerCase();
    const matchesSearch = !q ||
      item.name.toLowerCase().includes(q) ||
      (item.desc && item.desc.toLowerCase().includes(q)) ||
      (item.tag && item.tag.toLowerCase().includes(q));
    return matchesCat && matchesSearch;
  });

  // Update pills count
  document.getElementById('countPill_all').textContent = productsData.length;
  document.getElementById('countPill_coffee').textContent = productsData.filter(p => p.category === 'coffee').length;
  document.getElementById('countPill_food').textContent = productsData.filter(p => p.category === 'food').length;
  document.getElementById('countPill_desserts').textContent = productsData.filter(p => p.category === 'desserts').length;
  document.getElementById('countPill_beans').textContent = productsData.filter(p => p.category === 'beans').length;

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; padding: 40px; color: var(--admin-text-dim);">
          Товары не найдены. Попробуйте изменить параметры поиска или добавьте новый товар.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(item => {
    const isOut = item.outOfStock === true;
    return `
      <tr data-id="${item.id}">
        <td style="width: 60px;">
          <img src="${item.image}" alt="${item.name}" class="product-row-thumb" onerror="this.src='assets/images/cappuccino.jpg'">
        </td>
        <td>
          <div class="product-row-title-box">
            <span class="product-name-main">${item.name}</span>
            <span class="product-meta-sub">${item.volume || ''} ${item.tag ? `· ${item.tag}` : ''}</span>
          </div>
        </td>
        <td>
          <span class="category-tag-pill">${categoryNames[item.category] || item.category}</span>
        </td>
        <td>
          <div class="inline-price-group">
            <input type="number" class="inline-price-input" id="tablePrice_${item.id}" value="${item.price}" min="0" step="10">
            <span style="font-size:0.8rem; color:var(--admin-text-muted); font-weight:700;">₽</span>
            <button class="btn-inline-save" onclick="saveInlinePrice(${item.id})" title="Сохранить цену">✓</button>
          </div>
        </td>
        <td>
          <div class="stock-badge-toggle ${isOut ? 'out-of-stock' : 'in-stock'}" onclick="toggleStock(${item.id})" title="Нажмите для переключения">
            <span class="stock-dot"></span>
            <span>${isOut ? 'На стопе' : 'В наличии'}</span>
          </div>
        </td>
        <td style="text-align: right;">
          <div class="actions-cell-group">
            <button class="btn-row-action" onclick="duplicateProduct(${item.id})" title="Дублировать позицию">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            </button>
            <button class="btn-row-action" onclick="openProductEditModal(${item.id})" title="Редактировать">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            </button>
            <button class="btn-row-action delete" onclick="deleteProduct(${item.id})" title="Удалить">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

window.saveInlinePrice = function(id) {
  const input = document.getElementById(`tablePrice_${id}`);
  if (!input) return;
  const newPrice = parseInt(input.value, 10);
  if (isNaN(newPrice) || newPrice < 0) {
    showAdminToast('Укажите корректную цену');
    return;
  }
  const item = productsData.find(p => p.id === id);
  if (!item) return;
  const oldPrice = item.price;
  item.price = newPrice;
  setStoredData(STORAGE_KEYS.MENU, productsData);
  logAudit(`Изменена цена товара «${item.name}»: ${oldPrice} ₽ ➔ ${newPrice} ₽`);
  showAdminToast(`Цена «${item.name}» обновлена: ${newPrice} ₽`);
};

window.toggleStock = function(id) {
  const item = productsData.find(p => p.id === id);
  if (!item) return;
  item.outOfStock = !item.outOfStock;
  setStoredData(STORAGE_KEYS.MENU, productsData);
  logAudit(`Статус «${item.name}» изменен на: ${item.outOfStock ? 'На стопе' : 'В наличии'}`);
  showAdminToast(`Позиция «${item.name}»: ${item.outOfStock ? 'поставлена на стоп' : 'в наличии'}`);
  renderProductsTable();
};

window.duplicateProduct = function(id) {
  const item = productsData.find(p => p.id === id);
  if (!item) return;
  const copy = JSON.parse(JSON.stringify(item));
  copy.id = Date.now();
  copy.name = `${copy.name} (Копия)`;
  productsData.unshift(copy);
  setStoredData(STORAGE_KEYS.MENU, productsData);
  logAudit(`Дублирован товар «${item.name}»`);
  showAdminToast(`Товар «${copy.name}» создан`);
  renderProductsTable();
};

window.deleteProduct = function(id) {
  const item = productsData.find(p => p.id === id);
  if (!item) return;
  if (confirm(`Удалить товар «${item.name}» безвозвратно?`)) {
    productsData = productsData.filter(p => p.id !== id);
    setStoredData(STORAGE_KEYS.MENU, productsData);
    logAudit(`Удален товар «${item.name}»`);
    showAdminToast(`Товар «${item.name}» удален`);
    renderProductsTable();
  }
};

// MODAL EDIT PRODUCT
window.openProductEditModal = function(id) {
  const modal = document.getElementById('modalProductEdit');
  const modalTitle = document.getElementById('modalProductTitle');
  const form = document.getElementById('productEditForm');
  if (!modal || !form) return;

  const preview = document.getElementById('modalPhotoPreview');

  if (id) {
    const item = productsData.find(p => p.id === id);
    if (!item) return;
    modalTitle.textContent = 'Редактировать товар';
    document.getElementById('fld_productId').value = item.id;
    document.getElementById('fld_name').value = item.name || '';
    document.getElementById('fld_category').value = item.category || 'coffee';
    document.getElementById('fld_price').value = item.price || 0;
    document.getElementById('fld_volume').value = item.volume || '';
    document.getElementById('fld_tag').value = item.tag || '';
    document.getElementById('fld_image').value = item.image || '';
    document.getElementById('fld_desc').value = item.desc || '';
    document.getElementById('fld_ingredients').value = item.ingredients || '';
    document.getElementById('fld_kcal').value = item.nutrition ? item.nutrition.kcal : '';
    document.getElementById('fld_nutr').value = item.nutrition ? `${item.nutrition.p || ''} / ${item.nutrition.f || ''} / ${item.nutrition.c || ''}` : '';
    
    preview.src = item.image || 'assets/images/cappuccino.jpg';
  } else {
    modalTitle.textContent = 'Добавить новый товар';
    form.reset();
    document.getElementById('fld_productId').value = '';
    document.getElementById('fld_category').value = 'coffee';
    document.getElementById('fld_volume').value = '250 мл';
    document.getElementById('fld_tag').value = 'Спешелти';
    document.getElementById('fld_image').value = 'assets/images/cappuccino.jpg';
    preview.src = 'assets/images/cappuccino.jpg';
  }

  modal.classList.add('active');
};

function closeProductModal() {
  const modal = document.getElementById('modalProductEdit');
  if (modal) modal.classList.remove('active');
}

// ==========================================================================
// 8. FEATURED BEANS (ЗЕРНО НЕДЕЛИ)
// ==========================================================================
function loadBeansForm() {
  document.getElementById('beans_title').value = featuredBeansData.title || '';
  document.getElementById('beans_tag').value = featuredBeansData.tag || '';
  document.getElementById('beans_roast').value = featuredBeansData.roast || '';
  document.getElementById('beans_qGrade').value = featuredBeansData.qGrade || '';
  document.getElementById('beans_grindInfo').value = featuredBeansData.grindInfo || '';
  document.getElementById('beans_descriptors').value = (featuredBeansData.descriptors || []).join(', ');
  document.getElementById('beans_desc').value = featuredBeansData.desc || '';
  document.getElementById('beans_price').value = featuredBeansData.price || 850;
  document.getElementById('beans_weight').value = featuredBeansData.weight || '250 г';
  document.getElementById('beans_image').value = featuredBeansData.image || '';
  
  const preview = document.getElementById('beansImagePreview');
  if (preview) preview.src = featuredBeansData.image || 'assets/images/specialty_bean_bags.jpg';
}

function saveBeansForm(e) {
  e.preventDefault();
  const descStr = document.getElementById('beans_descriptors').value;
  const descriptors = descStr.split(',').map(s => s.trim()).filter(Boolean);

  featuredBeansData = {
    title: document.getElementById('beans_title').value.trim(),
    tag: document.getElementById('beans_tag').value.trim(),
    roast: document.getElementById('beans_roast').value.trim(),
    qGrade: document.getElementById('beans_qGrade').value.trim(),
    grindInfo: document.getElementById('beans_grindInfo').value.trim(),
    descriptors: descriptors.length ? descriptors : ['Бергамот', 'Персик'],
    desc: document.getElementById('beans_desc').value.trim(),
    price: parseInt(document.getElementById('beans_price').value, 10) || 850,
    weight: document.getElementById('beans_weight').value.trim(),
    image: document.getElementById('beans_image').value.trim() || 'assets/images/specialty_bean_bags.jpg'
  };

  setStoredData(STORAGE_KEYS.BEANS, featuredBeansData);
  logAudit(`Обновлен блок фирменного зерна: «${featuredBeansData.title}»`);
  showAdminToast('Параметры зерна недели успешно сохранены');
}

// ==========================================================================
// 9. LIVE ORDERS
// ==========================================================================
function renderOrdersTable() {
  const container = document.getElementById('ordersListContainer');
  const countBadge = document.getElementById('navOrdersBadge');
  if (!container) return;

  ordersData = getStoredData(STORAGE_KEYS.ORDERS, []);

  const activeOrders = ordersData.filter(o => o.status === 'new' || o.status === 'in_progress');
  if (countBadge) {
    countBadge.textContent = activeOrders.length;
    countBadge.style.display = activeOrders.length ? 'inline-block' : 'none';
  }

  if (ordersData.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; color: var(--admin-text-dim);">
        <p style="font-size: 1rem; font-weight:700;">Входящих предзаказов пока нет</p>
        <p style="font-size: 0.8rem; margin-top: 6px;">Когда клиент оформит заказ через корзину на сайте, он отобразится здесь моментально.</p>
      </div>
    `;
    return;
  }

  const statusNames = {
    new: '🟡 Новый заказ',
    in_progress: '🔵 Готовится на баре',
    completed: '🟢 Выдан гостю',
    cancelled: '🔴 Отменен'
  };

  container.innerHTML = ordersData.map(order => {
    const itemsListStr = (order.items || []).map(i => `${i.name} (${i.qty} шт.)`).join(', ');
    return `
      <div class="order-entry-card">
        <div class="order-main-info">
          <div class="order-header-line">
            <span class="order-id-tag">${order.id}</span>
            <span class="order-customer-name">${order.customerName}</span>
            <a href="tel:${order.customerPhone}" class="order-phone-link">${order.customerPhone}</a>
            <span class="order-time-badge">· К: ${order.readyTime}</span>
          </div>
          <div class="order-items-summary"><strong>Состав:</strong> ${itemsListStr || 'Позиции не указаны'}</div>
          ${order.comment ? `<div class="order-comment-pill">Комментарий: ${order.comment}</div>` : ''}
          <div style="font-size:0.7rem; color:var(--admin-text-dim); margin-top:4px;">
            Создан: ${new Date(order.timestamp).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}, ${new Date(order.timestamp).toLocaleDateString('ru-RU')}
          </div>
        </div>

        <div class="order-right-box">
          <div class="order-total-sum">${order.total ? order.total.toLocaleString('ru-RU') : 0} ₽</div>
          <select class="order-status-select" onchange="changeOrderStatus('${order.id}', this.value)">
            <option value="new" ${order.status === 'new' ? 'selected' : ''}>🟡 Новый</option>
            <option value="in_progress" ${order.status === 'in_progress' ? 'selected' : ''}>🔵 Готовится</option>
            <option value="completed" ${order.status === 'completed' ? 'selected' : ''}>🟢 Выдан</option>
            <option value="cancelled" ${order.status === 'cancelled' ? 'selected' : ''}>🔴 Отменен</option>
          </select>
        </div>
      </div>
    `;
  }).join('');
}

window.changeOrderStatus = function(orderId, newStatus) {
  const order = ordersData.find(o => o.id === orderId);
  if (!order) return;
  order.status = newStatus;
  setStoredData(STORAGE_KEYS.ORDERS, ordersData);
  logAudit(`Статус заказа ${orderId} изменен на: ${newStatus}`);
  showAdminToast(`Заказ ${orderId} обновлен`);
  renderOrdersTable();
};

window.clearCompletedOrders = function() {
  if (confirm('Удалить из списка все выданные и отмененные заказы?')) {
    ordersData = ordersData.filter(o => o.status === 'new' || o.status === 'in_progress');
    setStoredData(STORAGE_KEYS.ORDERS, ordersData);
    logAudit('Очищен архив выполненных заказов');
    showAdminToast('Архивные заказы очищены');
    renderOrdersTable();
  }
};

// ==========================================================================
// 10. REVIEWS (ОТЗЫВЫ ГОСТЕЙ)
// ==========================================================================
function renderReviewsList() {
  const container = document.getElementById('reviewsContainer');
  if (!container) return;

  reviewsData = getStoredData(STORAGE_KEYS.REVIEWS, DEFAULT_REVIEWS);

  container.innerHTML = reviewsData.map(rev => `
    <div class="order-entry-card" style="align-items: center;">
      <div style="display:flex; align-items:center; gap:14px;">
        <img src="${rev.avatar}" alt="${rev.author}" style="width:48px; height:48px; border-radius:50%; object-fit:cover; border:1px solid var(--admin-border-medium);" onerror="this.src='assets/images/avatar_sofia.jpg'">
        <div>
          <div style="font-weight:700; color:#fff;">${rev.author} <span style="font-size:0.72rem; color:var(--admin-text-dim);">· ${rev.role}</span></div>
          <p style="font-size:0.82rem; color:var(--admin-text-muted); margin-top:4px;">«${rev.text}»</p>
          <span style="font-size:0.7rem; color:var(--admin-accent-orange); font-weight:700;">★ ${rev.stars}.0 · ${rev.date}</span>
        </div>
      </div>
      <button class="btn-row-action delete" onclick="deleteReviewItem(${rev.id})" title="Удалить отзыв">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
      </button>
    </div>
  `).join('');
}

window.deleteReviewItem = function(id) {
  if (confirm('Удалить этот отзыв из ленты?')) {
    reviewsData = reviewsData.filter(r => r.id !== id);
    setStoredData(STORAGE_KEYS.REVIEWS, reviewsData);
    logAudit('Удален отзыв гостя');
    showAdminToast('Отзыв удален');
    renderReviewsList();
  }
};

window.openAddReviewModal = function() {
  const author = prompt('Имя автора отзыва:');
  if (!author) return;
  const text = prompt('Текст отзыва:');
  if (!text) return;
  const newRev = {
    id: Date.now(),
    author: author.trim(),
    role: 'Гость кофейни',
    avatar: 'assets/images/avatar_sofia.jpg',
    stars: 5,
    date: 'Только что · Яндекс Карты',
    text: text.trim()
  };
  reviewsData.unshift(newRev);
  setStoredData(STORAGE_KEYS.REVIEWS, reviewsData);
  logAudit(`Добавлен новый отзыв от «${author}»`);
  showAdminToast('Отзыв успешно добавлен в бегущую строку');
  renderReviewsList();
};

// ==========================================================================
// 11. CAFE SETTINGS
// ==========================================================================
function loadSettingsForm() {
  document.getElementById('set_phone').value = storeSettingsData.phone || '';
  document.getElementById('set_address').value = storeSettingsData.address || '';
  document.getElementById('set_telegram').value = storeSettingsData.telegramUrl || '';
  document.getElementById('set_whatsapp').value = storeSettingsData.whatsappUrl || '';
  document.getElementById('set_weekdays').value = storeSettingsData.hoursWeekdays || '';
  document.getElementById('set_weekends').value = storeSettingsData.hoursWeekends || '';
  document.getElementById('set_kitchen').value = storeSettingsData.hoursKitchen || '';
  document.getElementById('set_statusMode').value = storeSettingsData.statusMode || 'auto';
  document.getElementById('set_heroTitle').value = storeSettingsData.heroTitle || '';

  const tgInput = document.getElementById('set_tgChatId');
  if (tgInput) {
    tgInput.value = localStorage.getItem('3_bika_coffee_tg_chat_id') || '';
  }
}

async function detectTelegramChatId() {
  const btn = document.getElementById('btnDetectTgChat');
  const input = document.getElementById('set_tgChatId');
  if (btn) btn.textContent = 'Определяю...';

  try {
    const resp = await fetch('https://api.telegram.org/bot8650352781:AAERhPKs7TmBOEIftRO-y9O0Be18Cyiur28/getUpdates');
    const json = await resp.json();
    if (json && json.ok && Array.isArray(json.result) && json.result.length > 0) {
      const ids = new Set();
      json.result.forEach(upd => {
        const cid = upd.message?.chat?.id || upd.channel_post?.chat?.id || upd.my_chat_member?.chat?.id;
        if (cid) ids.add(String(cid));
      });
      if (ids.size > 0) {
        const joined = Array.from(ids).join(', ');
        if (input) input.value = joined;
        localStorage.setItem('3_bika_coffee_tg_chat_id', joined);
        logAudit(`Определен Telegram Chat ID: ${joined}`);
        showAdminToast(`Chat ID успешно найден: ${joined}`);
        return;
      }
    }
    showAdminToast('Сообщений не найдено. Напишите /start боту @coffeetestwork_bot');
  } catch (e) {
    showAdminToast('Ошибка связи с Telegram API');
  } finally {
    if (btn) btn.textContent = 'Определить';
  }
}

function saveTelegramChatId() {
  const input = document.getElementById('set_tgChatId');
  if (!input) return;
  const val = input.value.trim();
  localStorage.setItem('3_bika_coffee_tg_chat_id', val);
  logAudit(`Сохранен Telegram Chat ID: ${val || 'Очищен'}`);
  showAdminToast(val ? `Telegram Chat ID сохранен: ${val}` : 'Telegram Chat ID очищен');
}

async function sendTestTelegramNotification() {
  const input = document.getElementById('set_tgChatId');
  let chatId = input ? input.value.trim() : localStorage.getItem('3_bika_coffee_tg_chat_id');

  if (!chatId) {
    await detectTelegramChatId();
    chatId = input ? input.value.trim() : localStorage.getItem('3_bika_coffee_tg_chat_id');
  }

  if (!chatId) {
    showAdminToast('Сначала напишите /start боту @coffeetestwork_bot в Telegram');
    return;
  }

  const token = '8650352781:AAERhPKs7TmBOEIftRO-y9O0Be18Cyiur28';
  const testId = 'TEST-' + Math.floor(100 + Math.random() * 900);
  const text = 
`☕ <b>ТЕСТОВАЯ ЗАЯВКА [${testId}]</b>
──────────────────
📋 <b>Состав позиций (без ПД):</b>
1. <b>Флэт Уайт</b> × 1 шт. — <i>280 ₽</i>
2. <b>Круассан с лососем</b> × 1 шт. — <i>460 ₽</i>
──────────────────
💰 <b>Сумма заказа:</b> <b>740 ₽</b>
⏱ <b>Время готовности:</b> Через 15 минут
📌 <i>Пожелания:</i> Тест связи БИКА`;

  const ids = chatId.split(',').map(s => s.trim()).filter(Boolean);
  let okCount = 0;

  for (const cid of ids) {
    try {
      const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: cid, text: text, parse_mode: 'HTML' })
      });
      const data = await res.json();
      if (data.ok) okCount++;
    } catch (e) {}
  }

  if (okCount > 0) {
    logAudit('Отправлено тестовое оповещение в Telegram');
    showAdminToast('Тестовое уведомление доставлено в Telegram!');
  } else {
    showAdminToast('Ошибка отправки. Проверьте, что нажали /start боту');
  }
}

function saveSettingsForm(e) {
  e.preventDefault();
  storeSettingsData = {
    ...storeSettingsData,
    phone: document.getElementById('set_phone').value.trim(),
    address: document.getElementById('set_address').value.trim(),
    telegramUrl: document.getElementById('set_telegram').value.trim(),
    whatsappUrl: document.getElementById('set_whatsapp').value.trim(),
    hoursWeekdays: document.getElementById('set_weekdays').value.trim(),
    hoursWeekends: document.getElementById('set_weekends').value.trim(),
    hoursKitchen: document.getElementById('set_kitchen').value.trim(),
    statusMode: document.getElementById('set_statusMode').value,
    heroTitle: document.getElementById('set_heroTitle').value.trim()
  };

  setStoredData(STORAGE_KEYS.SETTINGS, storeSettingsData);
  logAudit('Обновлены общие настройки кофейни (режим работы / контакты)');
  showAdminToast('Настройки заведения успешно применены');
  renderOverview();
}

// ==========================================================================
// 12. SECURITY, AUDIT & BACKUPS
// ==========================================================================
function renderAuditLog() {
  const container = document.getElementById('auditLogContainer');
  if (!container) return;
  const audit = getStoredData(STORAGE_KEYS.AUDIT, []);
  if (audit.length === 0) {
    container.innerHTML = '<div style="color:var(--admin-text-dim); padding:16px;">Журнал пуст</div>';
    return;
  }
  container.innerHTML = audit.map(entry => `
    <div class="audit-entry-row">
      <span class="audit-entry-action">${entry.action}</span>
      <span class="audit-entry-time">${entry.timestamp}</span>
    </div>
  `).join('');
}

async function changeAdminPin(e) {
  e.preventDefault();
  const p1 = document.getElementById('pin_new').value.trim();
  const p2 = document.getElementById('pin_confirm').value.trim();
  const err = document.getElementById('pinChangeError');

  if (p1.length < 4) {
    err.textContent = 'PIN-код должен содержать минимум 4 символа';
    err.style.display = 'block';
    return;
  }

  if (p1 !== p2) {
    err.textContent = 'Введенные PIN-коды не совпадают';
    err.style.display = 'block';
    return;
  }

  err.style.display = 'none';
  const newHash = await sha256(p1);
  const sec = getStoredData(STORAGE_KEYS.SECURITY, {});
  sec.pinHash = newHash;
  delete sec.pin;
  setStoredData(STORAGE_KEYS.SECURITY, sec);
  localStorage.removeItem('3_bika_coffee_admin_pin');
  logAudit('Изменен мастер-код доступа администратора (SHA-256)');
  showAdminToast('Мастер-PIN успешно обновлен и зашифрован');
  document.getElementById('pinChangeForm').reset();
  sendTelegramSecurityAlert('🔐 <b>БЕЗОПАСНОСТЬ:</b> Мастер-PIN администратора был изменен в консоли.');
}

function exportFullBackup() {
  const fullBackup = {
    exportedAt: new Date().toISOString(),
    version: '2.0-enterprise',
    menu: productsData,
    beans: featuredBeansData,
    settings: storeSettingsData,
    reviews: reviewsData,
    orders: ordersData
  };

  const jsonStr = JSON.stringify(fullBackup, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `obsidian-coffee-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  logAudit('Выгружен полный бэкап базы данных (JSON)');
  showAdminToast('Резервная копия базы успешно скачана');
}

function importBackupFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const data = JSON.parse(evt.target.result);
      if (data.menu && Array.isArray(data.menu)) {
        productsData = data.menu;
        setStoredData(STORAGE_KEYS.MENU, productsData);
      }
      if (data.beans) {
        featuredBeansData = data.beans;
        setStoredData(STORAGE_KEYS.BEANS, featuredBeansData);
      }
      if (data.settings) {
        storeSettingsData = data.settings;
        setStoredData(STORAGE_KEYS.SETTINGS, storeSettingsData);
      }
      if (data.reviews && Array.isArray(data.reviews)) {
        reviewsData = data.reviews;
        setStoredData(STORAGE_KEYS.REVIEWS, reviewsData);
      }
      logAudit('База данных успешно восстановлена из бэкапа');
      showAdminToast('Все данные успешно импортированы!');
      switchTab(currentTab);
    } catch (err) {
      alert('Ошибка чтения файла бэкапа: неверный JSON формат');
    }
  };
  reader.readAsText(file);
}

function factoryReset() {
  const conf1 = confirm('ВНИМАНИЕ! Вы собираетесь сбросить все данные кофейни до исходного состояния.');
  if (!conf1) return;
  const conf2 = prompt('Для подтверждения напишите слово СБРОС большими буквами:');
  if (conf2 !== 'СБРОС') {
    alert('Сброс отменен.');
    return;
  }

  localStorage.removeItem(STORAGE_KEYS.MENU);
  localStorage.removeItem(STORAGE_KEYS.BEANS);
  localStorage.removeItem(STORAGE_KEYS.SETTINGS);
  localStorage.removeItem(STORAGE_KEYS.REVIEWS);
  localStorage.removeItem(STORAGE_KEYS.ORDERS);

  productsData = JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
  featuredBeansData = JSON.parse(JSON.stringify(DEFAULT_FEATURED_BEANS));
  storeSettingsData = JSON.parse(JSON.stringify(DEFAULT_STORE_SETTINGS));
  reviewsData = JSON.parse(JSON.stringify(DEFAULT_REVIEWS));
  ordersData = [];

  setStoredData(STORAGE_KEYS.MENU, productsData);
  setStoredData(STORAGE_KEYS.BEANS, featuredBeansData);
  setStoredData(STORAGE_KEYS.SETTINGS, storeSettingsData);
  setStoredData(STORAGE_KEYS.REVIEWS, reviewsData);
  setStoredData(STORAGE_KEYS.ORDERS, ordersData);

  logAudit('ВЫПОЛНЕН ПОЛНЫЙ СБРОС ДО ЗАВОДСКИХ НАСТРОЕК');
  showAdminToast('Все настройки и товары сброшены к заводским');
  switchTab('overview');
}

// ==========================================================================
// 13. INITIALIZATION & EVENT WIRING
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  const gateScreen = document.getElementById('adminGateScreen');
  const appLayout = document.getElementById('adminAppLayout');
  const gateForm = document.getElementById('gatePinForm');
  const gateInput = document.getElementById('gatePinInput');
  const gateError = document.getElementById('gateErrorBanner');
  const toggleEye = document.getElementById('toggleGateEye');

  // Check initial session authentication
  if (isSessionAuthorized()) {
    gateScreen.style.display = 'none';
    appLayout.style.display = 'flex';
    switchTab('overview');
  } else {
    gateScreen.style.display = 'flex';
    appLayout.style.display = 'none';
    setTimeout(() => gateInput && gateInput.focus(), 200);
  }

  // Eye toggle for Gate input
  if (toggleEye && gateInput) {
    toggleEye.addEventListener('click', () => {
      const type = gateInput.getAttribute('type') === 'password' ? 'text' : 'password';
      gateInput.setAttribute('type', type);
    });
  }

  // Gate PIN Form Submit
  if (gateForm) {
    gateForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (Date.now() < lockoutUntil) {
        const leftSec = Math.ceil((lockoutUntil - Date.now()) / 1000);
        gateError.textContent = `Доступ заблокирован защитной системой. Подождите ${leftSec} сек.`;
        gateError.style.display = 'block';
        return;
      }

      const pinVal = gateInput.value.trim();
      const isOk = await verifyPin(pinVal);

      if (isOk) {
        failedAttempts = 0;
        authorizeSession();
        gateError.style.display = 'none';
        gateScreen.style.display = 'none';
        appLayout.style.display = 'flex';
        const timeStr = new Date().toLocaleTimeString('ru-RU');
        logAudit('Авторизация в закрытую админ-консоль (успешно)');
        sendTelegramSecurityAlert(`✅ <b>УСПЕШНАЯ АВТОРИЗАЦИЯ</b> в админ-консоль БИКА\nВремя: ${timeStr}`);
        switchTab('overview');
        showAdminToast('Добро пожаловать в админ-консоль БИКА');
      } else {
        failedAttempts++;
        gateError.style.display = 'block';
        const timeStr = new Date().toLocaleTimeString('ru-RU');
        sendTelegramSecurityAlert(`🚨 <b>ВНИМАНИЕ!</b> Попытка несанкционированного входа в админ-консоль!\nНеверный PIN (попытка ${failedAttempts} из 5)\nВремя: ${timeStr}`);

        if (failedAttempts >= 5) {
          lockoutUntil = Date.now() + 300000;
          gateError.textContent = 'Превышен лимит попыток! Консоль заблокирована на 5 минут.';
        } else {
          gateError.textContent = `Неверный PIN-код (попытка ${failedAttempts} из 5)`;
        }
        gateInput.value = '';
        gateInput.focus();
      }
    });
  }

  // Sidebar navigation wiring
  document.querySelectorAll('.admin-nav-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tab = btn.getAttribute('data-tab');
      if (tab) switchTab(tab);
      // Mobile auto close sidebar
      document.querySelector('.admin-sidebar')?.classList.remove('open');
    });
  });

  // Mobile sidebar toggle button
  document.getElementById('mobileSidebarToggle')?.addEventListener('click', () => {
    document.querySelector('.admin-sidebar')?.classList.toggle('open');
  });

  // Logout button
  document.getElementById('adminLogoutBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    revokeSession();
    gateScreen.style.display = 'flex';
    appLayout.style.display = 'none';
    gateInput.value = '';
    showAdminToast('Сессия завершена');
  });

  // Product Category Filters
  document.querySelectorAll('.filter-tab-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      productCategoryFilter = pill.getAttribute('data-category') || 'all';
      renderProductsTable();
    });
  });

  // Product Search
  document.getElementById('productSearchInput')?.addEventListener('input', (e) => {
    productSearchFilter = e.target.value;
    renderProductsTable();
  });

  // Add Product Button
  document.getElementById('btnAddNewProduct')?.addEventListener('click', () => {
    openProductEditModal(null);
  });

  // Product Modal Submit
  const productForm = document.getElementById('productEditForm');
  if (productForm) {
    productForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const idVal = document.getElementById('fld_productId').value;
      const name = document.getElementById('fld_name').value.trim();
      const category = document.getElementById('fld_category').value;
      const price = parseInt(document.getElementById('fld_price').value, 10);
      const volume = document.getElementById('fld_volume').value.trim();
      const tag = document.getElementById('fld_tag').value.trim() || 'Спешелти';
      const image = document.getElementById('fld_image').value.trim() || 'assets/images/cappuccino.jpg';
      const desc = document.getElementById('fld_desc').value.trim();
      const ingredients = document.getElementById('fld_ingredients').value.trim();
      const kcal = parseInt(document.getElementById('fld_kcal').value, 10) || 120;
      const nutrStr = document.getElementById('fld_nutr').value.trim();

      const parts = nutrStr ? nutrStr.split('/') : [];
      const nutrition = {
        kcal: kcal,
        p: parts[0] ? parts[0].trim() : '5.0 г',
        f: parts[1] ? parts[1].trim() : '6.0 г',
        c: parts[2] ? parts[2].trim() : '10.0 г'
      };

      if (idVal) {
        // Edit existing
        const numId = parseInt(idVal, 10);
        const idx = productsData.findIndex(p => p.id === numId);
        if (idx !== -1) {
          productsData[idx] = {
            ...productsData[idx],
            name, category, price, volume, tag, image, desc, ingredients, nutrition
          };
          logAudit(`Отредактирован товар «${name}»`);
          showAdminToast(`Товар «${name}» сохранен`);
        }
      } else {
        // Create new
        const newProd = {
          id: Date.now(),
          name, category, price, volume, tag, image, desc, ingredients, nutrition,
          outOfStock: false
        };
        productsData.unshift(newProd);
        logAudit(`Создан новый товар «${name}»`);
        showAdminToast(`Новый товар «${name}» успешно добавлен!`);
      }

      setStoredData(STORAGE_KEYS.MENU, productsData);
      closeProductModal();
      renderProductsTable();
    });
  }

  // Modal Image File Upload
  const fileInput = document.getElementById('fld_fileInput');
  const imgInput = document.getElementById('fld_image');
  const previewImg = document.getElementById('modalPhotoPreview');

  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => {
        imgInput.value = evt.target.result;
        previewImg.src = evt.target.result;
      };
      reader.readAsDataURL(file);
    });
  }

  if (imgInput) {
    imgInput.addEventListener('input', (e) => {
      previewImg.src = e.target.value.trim() || 'assets/images/cappuccino.jpg';
    });
  }

  // Beans Form
  document.getElementById('beansEditForm')?.addEventListener('submit', saveBeansForm);
  document.getElementById('beans_fileInput')?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      document.getElementById('beans_image').value = evt.target.result;
      document.getElementById('beansImagePreview').src = evt.target.result;
    };
    reader.readAsDataURL(file);
  });

  // Settings Form & Telegram Bot Controls
  document.getElementById('settingsForm')?.addEventListener('submit', saveSettingsForm);
  document.getElementById('btnDetectTgChat')?.addEventListener('click', detectTelegramChatId);
  document.getElementById('btnSaveTgChat')?.addEventListener('click', saveTelegramChatId);
  document.getElementById('btnTestTgNotify')?.addEventListener('click', sendTestTelegramNotification);

  // Security Form
  document.getElementById('pinChangeForm')?.addEventListener('submit', changeAdminPin);

  // Backup Buttons
  document.getElementById('btnExportBackup')?.addEventListener('click', exportFullBackup);
  document.getElementById('btnImportBackupFile')?.addEventListener('change', (e) => {
    importBackupFile(e.target.files[0]);
  });
  document.getElementById('btnFactoryReset')?.addEventListener('click', factoryReset);

  // Live Clock
  setInterval(() => {
    const clk = document.getElementById('topbarClock');
    if (clk) clk.textContent = new Date().toLocaleTimeString('ru-RU');
  }, 1000);
});
