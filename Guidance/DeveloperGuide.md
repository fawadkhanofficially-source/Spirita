
## Developer Guide

### Technology Stack

| Technology | Role |
|------------|------|
| HTML5 | Page structure |
| CSS3 + Tailwind CSS v4 (CDN) | Utility-first styling |
| JavaScript (ES6+) | Application logic |
| jQuery 3.6.0 (CDN) | DOM manipulation and event handling |
| Font Awesome 6.4 (CDN) | Icons |
| Google Fonts (Playfair Display, Poppins) | Typography |
| jsPDF 2.5.1 (CDN) | PDF generation in `books.html` |
| canvas-confetti (CDN) | Confetti animation in `cart.html` |

All dependencies are loaded via CDN — there is no build step, bundler, package manager, or server-side component.

### Project Structure

```
Spirita Approved/
├── index.html          Home page — hero slider, festival grid, festival detail modal, community form
├── about.html          Mission, vision, values, stats, feature cards
├── books.html          Sacred book library — search, filter, wishlist, description modal, download
├── cart.html           Shopping cart, checkout modal, order confirmation with confetti
├── contact.html        Contact form, contact info cards, FAQ accordion, Google Maps
├── login.html          Login form with validation + password toggle
├── register.html       Registration with password-strength meter + validation
├── religion.html       Dynamic religion pages (6 faiths) — hero gallery, philosophy, festivals, timeline, video, image grid + modal
├── shop.html           Spiritual items shop with search, category filter, cart + wishlist
├── sitemap.html        Visual site navigation map
├── team.html           Team member bios with scroll-reveal animations
├── timeline.html       Platform development timeline (5 phases)
├── wishlist.html       Wishlist viewer with move-to-cart + remove
├── styles.css          Global CSS — variables, header, sidebar, hero, footer, theme overrides, responsive rules
├── script.js           Global — header/footer injection, wishlist/cart helpers, auth modals, hero slider, sidebar toggle
├── shop.js             Legacy shop data + render logic (superseded by inline script in shop.html)
└── Assets/
    ├── icons/          favicon.png, logo.png
    ├── People/         fawadowner.webp, aneedajee.webp, owais.webp, hamzariaz.webp
    ├── *.webp          Team page hero and site asset images
    └── ...
```

### Architecture Overview

Spirita is a **static multi-page application (MPA)**. Navigation between pages is handled by standard HTTP document navigation (anchor tags). State is persisted entirely in the browser via `localStorage` (and optionally `sessionStorage`).

**Global Layout Injection:**
`script.js` defines `buildHeader()` and `buildFooter()` functions. On every page load, `injectLayout()` strips any statically written `<header>`, `<footer>`, and `#back-to-top` elements, then injects the dynamic versions at the top and bottom of the `<body>`. This ensures visual and navigational consistency across every HTML page without repeating header/footer markup.

**State is persisted via `localStorage` keys:**

| Key | Type | Description |
|-----|------|-------------|
| `spirita-cart` | `JSONArray` | Shopping cart items `{ id, qty, … }` |
| `spirita-wishlist` | `JSONArray<number>` | Wishlist book/shop item IDs |
| `spirita-logged-in` | `"true"` \| absent | Persistent login flag |
| `spirita-current-user` | `JSONObject` | `{ name, email }` of the current user |
| `spirita-user` | `JSONObject` | Registered user credentials `{ email, password, name }` |
| `spirita-festivals` | `JSONArray` | Community-submitted festival objects |

### Global Script Functions

Defined in `script.js`:

```javascript
// Layout
buildHeader()           // Returns header HTML string
buildFooter()           // Returns footer HTML string
injectLayout()          // Replace body header/footer with injected versions

// Auth
isLoggedIn()            // Returns true if user session exists (localStorage or sessionStorage)
checkLoginStatus()      // Updates header dropdown based on login state

// Wishlist
getWishlist()           // Returns array of wishlisted book/shop IDs
setWishlist(list)       // Saves wishlist array to localStorage
addToWishlist(id)       // Adds ID; returns false if already present
removeFromWishlist(id)  // Removes ID from wishlist
isInWishlist(id)        // Returns true/false

// Cart (exposed globally from script.js)
updateCartCount()       // Reads cart array, sets badge count
updateWishlistCount()   // Reads wishlist array, sets badge count

// Modals
showWelcomeModal()      // Displays the first-time visitor signup/login modal
showLoginRequiredModal(action) // "Login required" modal for wishlist/buy actions

// Sidebar
// Minimal sidebar toggle: click #sidebar-toggle or #close-sidebar
// overlay: #minimal-sidebar-overlay
```

Exposed globally (on `window`): `updateCartCount`, `updateWishlistCount`, `getWishlist`, `setWishlist`, `addToWishlist`, `removeFromWishlist`, `isInWishlist`, `checkLoginStatus`, `isLoggedIn`.

### LocalStorage Schema

```json
// spirita-cart — Array of cart line items
[
  { "id": 101, "title": "Sandalwood Mala", "religion": "Hinduism", "price": 14.99, "img": "https://…", "qty": 2 },
  { "id": 1,   "title": "Hindu Festivals…", "religion": "Hinduism", "price": 14.99, "qty": 1 }
]

// spirita-wishlist — Array of numeric item IDs
[1, 14, 101]

// spirita-current-user — Active session user
{ "name": "John Doe", "email": "john@example.com" }

// spirita-user — Registered user
{
  "firstName": "John",
  "lastName": "Doe",
  "name": "John Doe",
  "email": "john@example.com",
  "password": "secret123",
  "createdAt": "2025-01-01T00:00:00.000Z"
}

// spirita-festivals — Community-submitted festivals
[
  {
    "name": "Lohri",
    "religion": "Hinduism",
    "time": "January 13",
    "location": "Punjab, India",
    "description": "A harvest festival…",
    "image": "https://…"
  }
]
```

### Adding a New Religion

1. Open `religion.html` and find the `const religionData = { … }` object near the top of the file.
2. Add a new key-value pair following the existing structure:

```javascript
'Your Religion Name': {
    title: 'Your Religion Name',
    img: 'https://…/hero-image.jpg',
    intro: 'A short introduction to this faith.',
    importance: 'What makes this tradition significant.',
    festivals: [
        { name: 'Festival One', info: 'Description.' },
        { name: 'Festival Two', info: 'Description.' }
    ],
    timeline: [
        { year: '500 BCE', event: 'Description of the event.' }
    ],
    places: ['Sacred City', 'Temple Name', 'Mountain Shrine'],
    icon: 'fa-hand-sparkles',         // Any Font Awesome icon class
    videoId: 'YouTubeVideoId',        // Only the ID portion of the YouTube URL
    gallery: [
        { src: 'https://…/image1.jpg', title: 'Title', desc: 'Description sentence.' },
        // … up to 17 more images
    ]
},
```

3. The religion will automatically appear in these places:
   - The home page **religion grid** (`index.html` — add a new `<a>` card for manual appearance, or update the JS to auto-generate from `religionData`).
   - The **navigation dropdown** in `script.js` `buildHeader()` — add a new `<a>` link.
   - The **home page hero slider** data slides in `index.html`.

### Adding a New Book

1. Open `books.html` and locate the `const books = [ … ]` array.
2. Add a new object following the pattern:

```javascript
{
    id: 99,
    title: "Book Title",
    religion: "Hinduism",
    price: 14.99,
    file: "https://…/sample.pdf",          // Optional — only needed if you want the Download button functional
    img: "https://…/cover-image.jpg",
    desc: "A compelling description of the book's content and themes."
},
```

3. If the book has a downloadable sample, the `file` URL must point to a real `.pdf` file for the download button to work.

### Adding New Shop Items

1. Open `shop.html` and find the `const shopItems = [ … ]` array near the bottom / inline in the page.
2. Add a new object:

```javascript
{ id: 200, title: 'Item Name', religion: 'Buddhism', price: 29.99, rating: 4.5, img: 'https://…/image.jpg' },
```

3. Run the range `101–141` — pick any unused ID to avoid collisions. Currently used IDs: `101–121`.

### CSS Variables & Theming

All theme colours are defined in `:root` in `styles.css`. Change them once and the entire site updates:

```css
:root {
    --primary:   #8CC0EB;   /* Soft blue — used for accents, gradients, icons */
    --secondary: #2FA084;   /* Teal / forest green — brand primary */
    --accent:    #FF0000;   /* Red — wishlist/heart, badge counts, error states */
    --dark:      #1a1a1a;   /* Dark grey — body text, headings */
    --light:     #f9f9f9;   /* Off-white — page background */
}
```

The gradient used in `.btn-gradient` spans from `--primary` left to `--secondary` right:
```css
.btn-gradient {
    background: linear-gradient(135deg, var(--primary), var(--secondary));
}
```

### Build & Deployment

There is no build step — the project is a collection of plain HTML/CSS/JS files.

To **view locally**: Open `index.html` directly in a browser. All CDN dependencies load from the internet.

To **deploy**: Upload all files and directories to any static hosting provider. No server-side configuration is needed. Recommended static hosts:

| Provider | Notes |
|----------|-------|
| Vercel / Netlify | Drag-and-drop deployment |
| GitHub Pages | Push to a repo, enable Pages |
| Any shared web host | Upload via FTP |

**Minimum dependencies:** A working internet connection at runtime (for CDN-hosted Tailwind, jQuery, FontAwesome, and Google Fonts). No Node.js, Webpack, or build pipeline required.

---
