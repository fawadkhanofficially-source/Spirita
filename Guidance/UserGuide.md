
## User Guide

### Getting Started

Spirita is a web application — no download or installation is required. Simply open `index.html` in any modern web browser (Chrome, Firefox, Safari, or Edge). The site is fully responsive and works on desktop, tablet, and mobile devices.

### Navigating the Site

The top navigation bar is available on every page. Use it to jump between sections:

| Link | Page |
|------|------|
| Home | Landing page with festival highlights and religion grid |
| About | Mission, vision, and values of Spirita |
| Religions | Deep-dive pages for each religion |
| Books | Sacred library — browse and search religious books |
| Timeline | Platform development journey |
| Shop | Sacred items marketplace |
| Team | Meet the Spirita team |
| Contact Us | Send a message or find our contact details |

A slim side panel is also available on most pages by clicking the **hamburger icon** (☰) in the header — it provides quick-links to Home, Religions, Sacred Library, About Us, and Contact Us.

### Exploring Religions

Each supported religion has its own dedicated page at `religion.html?rel=<Name>`:

- **Islam** — Learn about the Five Pillars, Ramadan, Eid al-Fitr, Eid al-Adha, and Hajj.
- **Christianity** — Explore Christmas, Easter, Lent, Epiphany, and Pentecost.
- **Hinduism** — Discover Diwali, Holi, Navratri, and the philosophies of Dharma, Karma, and Moksha.
- **Buddhism** — Journey through Vesak, Magha Puja, Losar, Nirvana Day, and the Eightfold Path.
- **Judaism** — Read about Passover, Hanukkah, Rosh Hashanah, and Yom Kippur.
- **Sikhism** — Explore Vaisakhi, Guru Nanak Gurpurab, Bandi Chhor Divas, and the Khalsa.

Each religion page includes:

- **Sacred Philosophy** — Core beliefs and spiritual significance.
- **Major Festivals** — Quick reference cards for key celebrations.
- **Sacred History Timeline** — Key dates and historical events.
- **Top Pilgrimage Sites** — A list of holy locations.
- **Sacred Visuals Video** — An embedded YouTube documentary.
- **Cultural Gallery** — A 16-image grid; click any image to open a full-screen lightbox viewer with left/right navigation.
- **Auto-advancing Hero Slider** — Rotating hero images with captions; use the arrow buttons, pagination dots, or let it loop automatically.

Tip: Use the **Explore Image Gallery** button in the hero to scroll directly to the gallery section.

### Sacred Books

The book library (`books.html`) contains a curated collection of festival and tradition books across all six religions. Books are stored as an array in the page's inline `<script>` block and rendered dynamically by jQuery.

**Available features:**

- **Search by title or religion** — Type in the search bar to filter instantly.
- **Religion filter tabs** — Click a religion badge (All / Islam / Christianity / Hinduism / Buddhism / Judaism / Sikhism) to narrow the list.
- **Description modal** — Click the **Description** button on any book card to open a modal with full details (cover image, full description, price, and action buttons).
- **Add to Cart** — Click **Buy Now** or the **Buy Now** button inside the description modal to add a book to your cart.
- **Download Sample** — Click **Download** inside the description modal to trigger a simulated animated download progress bar. Once complete, the sample PDF is downloaded to your device.
- **Wishlist** — Click the heart icon on any book card to add or remove it from your wishlist (requires login).

### Sacred Shop & Shopping Cart

**Shop** (`shop.html`)

The shop sells 36 hand-picked spiritual items (prayer beads, statues, incense holders, meditation kits, etc.) across all six religions.

- **Search** — Filter items by name or religion.
- **Religion tabs** — Filter by faith tradition.
- **Add to Cart** — Click the **Add** button on any item card (requires login).
- **Wishlist** — Click the heart icon to save items.
- **Star ratings** — Each item displays a visual star rating.

**Cart** (`cart.html`)

- Lists all items currently in your cart with quantity subtotals.
- **Remove** — Click the trash icon on any line to remove that item.
- **Order Summary** — Shows the grand total.
- **Checkout Now** — Opens a checkout form with two payment options:
  - **Credit / Debit Card** — Collects card number, expiry, and CVV (demo mode only; no real charges).
  - **Cash on Delivery** — No card details needed.
- **Confetti celebration** — On successful order submission, a confetti animation plays, the cart is cleared, and a confirmation modal displays.

> **Note:** The shop has two overlapping data sources (`shopItems` in `shop.html` line 75 and `shopItems` in `shop.js` line 2). The inline `shopItems` array in `shop.html` (36 items with `id`, `title`, `religion`, `price`, `rating`, `img`) takes precedence at runtime because it is embedded in the page's inline `<script>` block before `shop.js` loads.

### Wishlist

**Wishlist** (`wishlist.html`)

- View all items you've saved across both the book library and the shop.
- **Add to Cart** — Moves an item from wishlist to cart with one click.
- **Remove** — Un-heart an item to remove it from your wishlist.
- The wishlist is backed by `localStorage` and persists across sessions.
- The item catalogue (`ALL_WISHLIST_ITEMS`) in `wishlist.html` covers all 22 book IDs (1–18, 101–121) and 22 shop item IDs (101–122).

### User Accounts

**Register** (`register.html`) — Create a new account with:
- First name, last name, email, and password (minimum 8 characters).
- Password strength meter (Weak → Fair → Good → Strong).
- Confirm password field.
- Terms of Service agreement checkbox.

**Login** (`login.html`) — Sign in with:
- Email address and password.
- **Remember Me** — Stores session in `localStorage` (persistent across browser restarts).
- Toggle password visibility with the eye icon.
- **Forgot Password** — Displays a success notification (demo placeholder — no real email is sent).

On loading any page, if no user is logged in, a **Welcome Modal** appears prompting sign-in or sign-up. Users can dismiss it and browse as a guest.

When logged in, clicking your profile avatar in the header opens a dropdown with:
- Home, Wishlist, and Cart links.
- A **Logout** button (clears both `localStorage` and `sessionStorage`).

### Sharing a Festival

From the home page (`index.html`), scroll to the **Share a Festival We Missed** section. Click **Add a Festival** to open a form where you can submit:

- Festival name
- Religion
- Time of year
- Location / country
- Short description
- Featured image URL

Submitted festivals are saved to `localStorage` and rendered in a **"Festivals from our Community"** grid directly below the form. Each community entry has a **delete** button (trash icon).

### Contact & FAQ

**Contact** (`contact.html`) provides:

- Email, phone, and physical address cards.
- A full contact form with first name, last name, email, subject, and message fields.
- An embedded Google Maps widget showing the Karachi, Pakistan office location.
- An **FAQ accordion** with four expandable questions about contributing festivals, religious equality, order processing, and contributor opportunities.

Submitting the contact form displays a **"Message Sent"** success modal.
