// script.js - Global Header, Footer, Slider, Cart Logic

// ===== Build & Inject Site Header =====
function buildHeader() {
  const path = window.location.pathname.split("/").pop() || "index.html";

  return `
        <header class="sticky-nav">
            <div class="header-layout flex items-center justify-between gap-6 px-1 md:px-0  lg:px-8">
                <div class="flex items-center gap-4">
                    <a href="index.html" class="flex items-center gap-0">
    <img src="Assets/icons/favicon.png" alt="Spirita logo"
        class="w-25 h-16 object-contain m-0 p-0" />

    <img src="Assets/icons/logo.png" alt="Spirita logo"
        class="w-25 h-16 object-contain m-0 p-0 -ml-2" />
</a>
                </div>
                <nav class="hidden lg:flex items-center gap-8 text-sm md:text-base font-medium">
                    <a href="index.html" class="nav-link">Home</a>
                    <a href="about.html" class="nav-link">About</a>
                    <div class="relative nav-dropdown group">
                        <span class="nav-link inline-flex items-center gap-2 cursor-pointer">Religions <i class="fas fa-chevron-down text-[10px]"></i></span>
                        <div class="dropdown-panel absolute left-0 top-full min-w-[200px] rounded-[26px] bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl opacity-0 pointer-events-none transition-all duration-300 translate-y-2 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0">
                            <a href="religion.html?rel=Islam" class="dropdown-link">Islam</a>
                            <a href="religion.html?rel=Christianity" class="dropdown-link">Christianity</a>
                            <a href="religion.html?rel=Hinduism" class="dropdown-link">Hinduism</a>
                            <a href="religion.html?rel=Buddhism" class="dropdown-link">Buddhism</a>
                            <a href="religion.html?rel=Sikhism" class="dropdown-link">Sikhism</a>
                            <a href="religion.html?rel=Judaism" class="dropdown-link">Judaism</a>
                        </div>
                    </div>
                    <a href="books.html" class="nav-link">Books</a>
                    <a href="timeline.html" class="nav-link">Timeline</a>
                    <a href="shop.html" class="nav-link">Shop</a>
                    <a href="team.html" class="nav-link">Team</a>
                    <a href="contact.html" class="nav-link">Contact Us</a>
                </nav>
                <div class="flex items-center gap-4">
                    
                    <a href="wishlist.html" class="relative hover:text-secondary transition-all duration-300">
                        <i class="fas fa-heart text-xl"></i>
                        <span id="wishlist-count" class="absolute -top-2 -right-2 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
                    </a>
                    <a href="cart.html" class="relative hover:text-secondary transition-all duration-300">
                        <i class="fas fa-shopping-cart text-xl"></i>
                        <span id="cart-count" class="absolute -top-2 -right-2 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
                    </a>
                    
                    <div id="user-menu" class="hidden relative">
                        <button id="user-menu-btn" class="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-sm transition-all hover:shadow-lg hover:scale-105">
                            <i class="fas fa-user text-sm"></i>
                        </button>
                        <div id="user-dropdown" class="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 opacity-0 pointer-events-none transition-all duration-300 translate-y-2 z-50">
                            <a href="index.html" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition">
                                <i class="fas fa-home w-5 text-center mr-2 text-secondary"></i> Home
                            </a>
                            <a href="wishlist.html" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition">
                                <i class="fas fa-heart w-5 text-center mr-2 text-secondary"></i> Wishlist
                            </a>
                            <a href="cart.html" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition">
                                <i class="fas fa-shopping-cart w-5 text-center mr-2 text-secondary"></i> Cart
                            </a>
                            <hr class="my-2 border-gray-100">
                            <button id="logout-btn" class="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition">
                                <i class="fas fa-sign-out-alt w-5 text-center mr-2"></i> Logout
                            </button>
                            
                        </div>
                        
                    </div>
                     <button id="sidebar-toggle" class="flex items-center justify-center w-10 h-10 rounded-xl bg-white/80 border border-primary/30 hover:bg-white transition" aria-label="Open sidebar">
                            <i class="fas fa-bars text-gray-700"></i>
                        </button>
                </div>
            </div>
        </header>

        <aside class="minimal-sidebar sidebar-collapsed" id="minimal-sidebar">
            <div class="flex justify-between items-center mb-8">
                <div class="sidebar-logo">
                    <div class="sidebar-logo-badge">S</div>
                    <span class="sidebar-logo-text">Spirita</span>
                </div>
                <button id="close-sidebar" class="text-gray-400 hover:text-secondary transition" aria-label="Close sidebar">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>
            
            <div class="sidebar-section">
                <h3 class="sidebar-heading">Introduction</h3>
                <p class="sidebar-intro">Spirita celebrates the world's spiritual traditions — festivals, wisdom, and sacred practices from every faith, presented with reverence and beauty.</p>
                <a href="about.html" class="sidebar-link mt-3 text-sm !text-secondary font-medium hover:!text-primary transition">
                    <i class="fas fa-arrow-right text-xs"></i>
                    Read More
                </a>
            </div>
            
            <div class="sidebar-section">
                <h3 class="sidebar-heading">Quick Links</h3>
                <div class="sidebar-links">
                    <a href="index.html" class="sidebar-link">
                        <i class="fas fa-home"></i>
                        Home
                    </a>
                    <a href="religion.html" class="sidebar-link">
                        <i class="fas fa-globe"></i>
                        Religions
                    </a>
                    <a href="books.html" class="sidebar-link">
                        <i class="fas fa-book"></i>
                        Sacred Library
                    </a>
                    <a href="about.html" class="sidebar-link">
                        <i class="fas fa-info-circle"></i>
                        About Us
                    </a>
                </div>
            </div>
            
            <a href="contact.html" class="sidebar-contact-btn">
                <i class="fas fa-envelope"></i>
                Contact Us
            </a>
        </aside>
        
        <div class="sidebar-overlay" id="minimal-sidebar-overlay"></div>
    `;
}

// ===== Build & Inject Site Footer =====
function buildFooter() {
  return `
        <footer class="bg-dark text-white pt-20 pb-8 px-6 md:px-12 mt-20">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 max-w-7xl mx-auto">

                <!-- LEFT: Logo + Newsletter + Socials -->
                <div>
                    <a href="index.html" class="footer-logo flex items-center mb-6">
                        <img src="Assets/icons/logo.png" alt="Spirita logo" class="w-20 h-20 object-contain" />
                    </a>
                    <p class="text-gray-400 text-sm mb-5 leading-relaxed">Promoting cultural harmony and spiritual enlightenment through the world's sacred traditions.</p>

                    <h4 class="font-bold mb-3 text-sm uppercase tracking-widest">Subscribe to our Newsletter</h4>
                    <form class="flex flex-col sm:flex-row gap-2 mb-6" onsubmit="event.preventDefault(); this.querySelector('input').value=''; alert('Subscribed successfully!');">
                        <input type="email" required placeholder="Your email" class="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-secondary text-sm">
                        <button type="submit" class="bg-secondary hover:bg-secondary/80 text-white px-5 py-3 rounded-full text-sm font-bold transition">Join</button>
                    </form>

                    <div class="flex gap-3">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="Facebook" class="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-secondary hover:border-secondary transition !text-white"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram" class="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-secondary hover:border-secondary transition !text-white"><i class="fab fa-instagram"></i></a>
                        <a href="https://x.com/" target="_blank" rel="noopener" aria-label="X (Twitter)" class="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-secondary hover:border-secondary transition !text-white"><i class="fab fa-twitter"></i></a>
                        <a href="https://pk.linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn" class="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-secondary hover:border-secondary transition !text-white"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>

                <!-- MIDDLE: Quick Links -->
                <div class="md:pl-8">
                    <h4 class="font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
                    <ul class="ft-quick-links space-y-3 text-gray-400 text-sm">
                        <li><a href="index.html" class="hover:#2fa084 transition !text-grey">Home</a></li>
                        <li><a href="about.html" class="hover:#2fa084 transition text-grey">About Us</a></li>
                        <li><a href="religion.html" class="hover:#2fa084 transition text-grey">Religions</a></li>
                        <li><a href="timeline.html" class="hover:#2fa084 transition text-grey">Timeline</a></li>
                        <li><a href="team.html" class="hover:#2fa084 transition text-grey">Our Team</a></li>
                        <li><a href="contact.html" class="hover:#2fa084 transition text-grey">Contact Us</a></li>
                    </ul>
                </div>

                <!-- RIGHT: Socials, Email, Phone, Location -->
                <div>
                    <h4 class="font-bold mb-6 uppercase tracking-widest text-sm">Get in Touch</h4>

                    <div class="flex gap-3 mb-6">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="Facebook" class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition !text-white"><i class="fab fa-facebook-f text-sm"></i></a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram" class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition !text-white"><i class="fab fa-instagram text-sm"></i></a>
                        <a href="https://x.com/" target="_blank" rel="noopener" aria-label="X (Twitter)" class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition !text-white"><i class="fab fa-twitter text-sm"></i></a>
                        <a href="https://pk.linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn" class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition !text-white"><i class="fab fa-linkedin-in text-sm"></i></a>
                    </div>

                    <ul class="space-y-4 text-gray-400 text-sm">
                        <li class="flex items-start gap-3">
                            <i class="fas fa-envelope text-secondary mt-1"></i>
                            <a href="mailto:hello@spirita.com" class=" hover:!#2fa084 transition">hello@spirita.com</a>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-phone text-secondary mt-1"></i>
                            <a href="tel:+12345678900" class=" hover:!#2fa084 transition">+1 (234) 567-8900</a>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="fas fa-map-marker-alt text-secondary mt-1"></i>
                            <span class="">R-322 Sector 15-A 5, Bufferzone, North Nazimabad Karachi.</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Copyright -->
            <div class="text-center pt-8 border-t border-gray-800 text-gray-500 text-sm">
                <p><i class="far fa-copyright"></i> Spirita 2026 — All Rights Reserved.</p>
            </div>
        </footer>

        <!-- Back to Top -->
        <button id="back-to-top" aria-label="Back to top" class="fixed bottom-8 right-8 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center shadow-lg opacity-0 transition-opacity z-50">
            <i class="fas fa-arrow-up"></i>
        </button>
    `;
}

// ===== Inject Header and Footer Globally =====
function injectLayout() {
  // Remove any existing static header so the global one wins
  const existingHeader = document.querySelector("body > header.sticky-nav");
  if (existingHeader) existingHeader.remove();

  const existingFooter = document.querySelector("body > footer");
  if (existingFooter) existingFooter.remove();

  const existingBackTop = document.querySelector("body > #back-to-top");
  if (existingBackTop) existingBackTop.remove();

  // Inject new header and sidebar at top
  document.body.insertAdjacentHTML("afterbegin", buildHeader());

  // Inject footer right before any scripts at end of body
  document.body.insertAdjacentHTML("beforeend", buildFooter());
}

// Inject favicon into head
(function injectFavicon() {
  const path = "Assets/icons/favicon.png";
  if (!document.querySelector('link[rel="icon"]')) {
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    link.href = path;
    document.head.appendChild(link);
  }
})();

// Run injection immediately
injectLayout();

// ===== WISHLIST HELPERS =====
function normalizeWishlist(list) {
  return (Array.isArray(list) ? list : [])
    .map(Number)
    .filter((id) => Number.isFinite(id));
}

function getWishlist() {
  return normalizeWishlist(
    JSON.parse(localStorage.getItem("spirita-wishlist")) || [],
  );
}

function setWishlist(list) {
  localStorage.setItem(
    "spirita-wishlist",
    JSON.stringify(normalizeWishlist(list)),
  );
}

function addToWishlist(id) {
  id = Number(id);
  if (!Number.isFinite(id)) return false;

  // Check if user is logged in
  if (typeof isLoggedIn === "function" && !isLoggedIn()) {
    if (typeof showLoginRequiredModal === "function") {
      showLoginRequiredModal("wishlist");
    } else {
      alert("Please log in to add items to your wishlist.");
      window.location.href = "login.html";
    }
    return false;
  }

  const wl = getWishlist();
  if (wl.includes(id)) return false;
  wl.push(id);
  setWishlist(wl);
  updateWishlistCount();
  return true;
}

function removeFromWishlist(id) {
  id = Number(id);
  if (!Number.isFinite(id)) return;
  const wl = getWishlist().filter((itemId) => itemId !== id);
  setWishlist(wl);
  updateWishlistCount();
}

function isInWishlist(id) {
  return getWishlist().includes(Number(id));
}

window.getWishlist = getWishlist;
window.setWishlist = setWishlist;
window.addToWishlist = addToWishlist;
window.removeFromWishlist = removeFromWishlist;
window.isInWishlist = isInWishlist;

// ===== jQuery Ready =====
$(document).ready(function () {
  // Back to top visibility on scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $("#back-to-top").addClass("opacity-100");
    } else {
      $("#back-to-top").removeClass("opacity-100");
    }
  });

  $("#back-to-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
      $("#back-to-top").addClass("opacity-100");
    } else {
      $("#back-to-top").removeClass("opacity-100");
    }
  });

  // Mobile Menu (left-side off-canvas)
  $(document).on("click", "#menu-btn", function () {
    $("#mobile-menu").removeClass("-translate-x-full");
    $("#menu-overlay").removeClass("hidden");
    $("body").css("overflow", "hidden");
  });
  $(document).on("click", "#close-menu, #menu-overlay", function () {
    $("#mobile-menu").addClass("-translate-x-full");
    $("#menu-overlay").addClass("hidden");
    $("body").css("overflow", "");
  });

  // Hero Slider (only runs if hero slides exist on page)
  let currentSlide = 0;
  const slides = $(".hero-slide-img");
  const contents = $(".hero-content");
  const dots = $(".dot");
  const totalSlides = Math.min(slides.length, contents.length, dots.length);

  if (totalSlides > 0) {
    slides.removeClass("active").css("opacity", "0");
    contents.removeClass("active").css("display", "none");
    dots.removeClass("bg-primary").addClass("bg-gray-200");

    slides.eq(0).addClass("active").css("opacity", "1");
    contents.eq(0).addClass("active").css("display", "block");
    dots.eq(0).addClass("bg-primary").removeClass("bg-gray-200");

    function showSlide(index) {
      index = ((index % totalSlides) + totalSlides) % totalSlides;
      slides.removeClass("active").css("opacity", "0");
      contents.removeClass("active").stop(true, true).css("display", "none");
      dots.removeClass("bg-primary").addClass("bg-gray-200");

      slides.eq(index).addClass("active").css("opacity", "1");
      contents
        .eq(index)
        .addClass("active")
        .css("display", "block")
        .hide()
        .fadeIn(700);
      dots.eq(index).addClass("bg-primary").removeClass("bg-gray-200");
      currentSlide = index;
    }

    $("#next-hero")
      .off("click")
      .on("click", () => showSlide(currentSlide + 1));
    $("#prev-hero")
      .off("click")
      .on("click", () => showSlide(currentSlide - 1));
    $(".dot")
      .off("click")
      .on("click", function () {
        const i = parseInt($(this).attr("data-index"), 10);
        if (!isNaN(i)) showSlide(i);
      });

    setInterval(() => showSlide(currentSlide + 1), 4000);
  }

  // WISHLIST COUNT
  function updateWishlistCount() {
    const wl = getWishlist();
    $("#wishlist-count").text(wl.length);
    $("#sidebar-wishlist-count").text(wl.length);
  }

  // CART COUNT
  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("spirita-cart")) || [];
    const count = cart.reduce((acc, item) => acc + item.qty, 0);
    $("#cart-count").text(count);
    $("#sidebar-cart-count").text(count);
  }

  updateCartCount();
  updateWishlistCount();
  window.updateCartCount = updateCartCount;
  window.updateWishlistCount = updateWishlistCount;

  // Minimal Sidebar Toggle
  $(document).on("click", "#sidebar-toggle, #close-sidebar", function () {
    $("#minimal-sidebar").toggleClass("sidebar-collapsed");
    $("#minimal-sidebar-overlay").toggleClass("visible");
    $("body").toggleClass("sidebar-open");
  });
  $(document).on("click", "#minimal-sidebar-overlay", function () {
    $("#minimal-sidebar").addClass("sidebar-collapsed");
    $("#minimal-sidebar-overlay").removeClass("visible");
    $("body").removeClass("sidebar-open");
  });

  // ===== USER AUTHENTICATION & MENU =====
  function isLoggedIn() {
    return (
      localStorage.getItem("spirita-logged-in") === "true" ||
      sessionStorage.getItem("spirita-logged-in") === "true"
    );
  }

  function checkLoginStatus() {
    const loggedIn = isLoggedIn();
    const currentUser = JSON.parse(
      localStorage.getItem("spirita-current-user") ||
        sessionStorage.getItem("spirita-current-user") ||
        "null",
    );

    // Always show profile icon (user menu button)
    $("#user-menu").removeClass("hidden");
    $("#user-menu-btn").html('<i class="fas fa-user text-sm"></i>');

    if (loggedIn && currentUser) {
      // User is logged in - show logout option, hide login/register
      $("#login-nav-link").addClass("hidden").removeClass("inline-flex");

      // Update dropdown to show user info and logout
      $("#user-dropdown").html(`
                <div class="px-4 py-3 border-b border-gray-100">
                    <p class="text-sm font-semibold text-gray-800">${currentUser.name || "User"}</p>
                    <p class="text-xs text-gray-500 truncate">${currentUser.email || ""}</p>
                </div>
                <a href="index.html" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition">
                    <i class="fas fa-home w-5 text-center mr-2 text-secondary"></i> Home
                </a>
                <a href="wishlist.html" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition">
                    <i class="fas fa-heart w-5 text-center mr-2 text-secondary"></i> Wishlist
                </a>
                <a href="cart.html" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition">
                    <i class="fas fa-shopping-cart w-5 text-center mr-2 text-secondary"></i> Cart
                </a>
                <hr class="my-2 border-gray-100">
                <button id="logout-btn" class="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition">
                    <i class="fas fa-sign-out-alt w-5 text-center mr-2"></i> Logout
                </button>
            `);
    } else {
      // User is not logged in - show login/register options
      $("#login-nav-link").removeClass("hidden").addClass("inline-flex");

      // Update dropdown to show login/register options
      $("#user-dropdown").html(`
                <div class="px-4 py-3 text-center border-b border-gray-100">
                    <p class="text-sm text-gray-600">Sign in to access your account</p>
                </div>
                <a href="login.html" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition">
                    <i class="fas fa-sign-in-alt w-5 text-center mr-2 text-secondary"></i> Sign In
                </a>
                <a href="register.html" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition">
                    <i class="fas fa-user-plus w-5 text-center mr-2 text-secondary"></i> Create Account
                </a>
                <hr class="my-2 border-gray-100">
                <a href="index.html" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition">
                    <i class="fas fa-home w-5 text-center mr-2 text-secondary"></i> Home
                </a>
                <a href="wishlist.html" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition">
                    <i class="fas fa-heart w-5 text-center mr-2 text-secondary"></i> Wishlist
                </a>
                <a href="cart.html" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition">
                    <i class="fas fa-shopping-cart w-5 text-center mr-2 text-secondary"></i> Cart
                </a>
            `);
    }
  }

  // Check login status on page load and show welcome modal if not logged in
  checkLoginStatus();

  // Show welcome modal if user is not logged in and hasn't dismissed it
  if (!isLoggedIn()) {
    const hasSeenWelcome = sessionStorage.getItem("spirita-welcome-shown");
    if (!hasSeenWelcome) {
      setTimeout(function () {
        showWelcomeModal();
      }, 500);
    }
  }

  window.checkLoginStatus = checkLoginStatus;
  window.isLoggedIn = isLoggedIn;

  // Show login required modal
  function showLoginRequiredModal(action) {
    const actionText =
      action === "wishlist"
        ? "add items to your wishlist"
        : "purchase products";
    const modalHTML = `
            <div id="login-required-modal" class="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center p-4">
                <div class="bg-white rounded-3xl max-w-md w-full p-8 text-center relative animate-[slideUp_0.4s_ease-out]">
                    <button id="close-login-required-modal" class="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition">
                        <i class="fas fa-times text-gray-500"></i>
                    </button>
                    <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <i class="fas fa-lock text-white text-xl"></i>
                    </div>
                    <h2 class="text-xl font-bold playfair mb-2">Login Required</h2>
                    <p class="text-gray-600 mb-6">You need to be logged in to ${actionText}. Please sign in or create an account to continue.</p>
                    <div class="flex flex-col gap-3">
                        <a href="login.html" class="w-full btn-gradient py-3 rounded-xl font-bold inline-flex items-center justify-center gap-2">
                            <i class="fas fa-sign-in-alt"></i> Sign In
                        </a>
                        <a href="register.html" class="w-full py-3 rounded-xl font-bold border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition inline-flex items-center justify-center gap-2">
                            <i class="fas fa-user-plus"></i> Create Account
                        </a>
                    </div>
                </div>
            </div>
        `;

    $("body").append(modalHTML);

    $("#close-login-required-modal").on("click", function () {
      $("#login-required-modal").fadeOut(200, function () {
        $(this).remove();
      });
    });

    $("#login-required-modal").on("click", function (e) {
      if (e.target === this) {
        $(this).fadeOut(200, function () {
          $(this).remove();
        });
      }
    });
  }

  // Welcome Modal HTML
  function showWelcomeModal() {
    const modalHTML = `
            <div id="welcome-modal" class="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center p-4">
                <div class="bg-white rounded-3xl max-w-md w-full p-8 text-center relative animate-[slideUp_0.4s_ease-out]">
                    <button id="close-welcome-modal" class="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition">
                        <i class="fas fa-times text-gray-500"></i>
                    </button>
                    <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <img src="Assets/icons/logo.png" alt="Spirita" class="w-12 h-12 object-contain" />
                    </div>
                    <h2 class="text-2xl font-bold playfair mb-2">Welcome to Spirita</h2>
                    <p class="text-gray-600 mb-8">Explore the world's spiritual traditions, festivals, and sacred wisdom. Sign in or create an account to personalize your journey.</p>
                    <div class="flex flex-col gap-3">
                        <a href="login.html" class="w-full btn-gradient py-3 rounded-xl font-bold inline-flex items-center justify-center gap-2">
                            <i class="fas fa-sign-in-alt"></i> Sign In
                        </a>
                        <a href="register.html" class="w-full py-3 rounded-xl font-bold border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition inline-flex items-center justify-center gap-2">
                            <i class="fas fa-user-plus"></i> Create Account
                        </a>
                    </div>
                    <p class="text-xs text-gray-400 mt-6">You can also explore the site without an account</p>
                </div>
            </div>
        `;

    $("body").append(modalHTML);
    sessionStorage.setItem("spirita-welcome-shown", "true");

    $("#close-welcome-modal").on("click", function () {
      $("#welcome-modal").fadeOut(200, function () {
        $(this).remove();
      });
    });

    $("#welcome-modal").on("click", function (e) {
      if (e.target === this) {
        $(this).fadeOut(200, function () {
          $(this).remove();
        });
      }
    });
  }

  // User menu dropdown toggle
  $(document).on("click", "#user-menu-btn", function (e) {
    e.preventDefault();
    e.stopPropagation();
    const $dropdown = $("#user-dropdown");
    const isOpen = $dropdown.hasClass("opacity-100");

    if (isOpen) {
      $dropdown
        .removeClass("opacity-100 translate-y-0 pointer-events-auto")
        .addClass("opacity-0 translate-y-2 pointer-events-none");
    } else {
      $dropdown
        .removeClass("opacity-0 translate-y-2 pointer-events-none")
        .addClass("opacity-100 translate-y-0 pointer-events-auto");
    }
  });

  // Close dropdown when clicking outside
  $(document).on("click", function (e) {
    if (!$(e.target).closest("#user-menu").length) {
      $("#user-dropdown")
        .removeClass("opacity-100 translate-y-0 pointer-events-auto")
        .addClass("opacity-0 translate-y-2 pointer-events-none");
    }
  });

  // Logout handler
  $(document).on("click", "#logout-btn", function () {
    localStorage.removeItem("spirita-logged-in");
    sessionStorage.removeItem("spirita-logged-in");
    localStorage.removeItem("spirita-current-user");
    sessionStorage.removeItem("spirita-current-user");

    $("#user-dropdown")
      .removeClass("opacity-100 translate-y-0 pointer-events-auto")
      .addClass("opacity-0 translate-y-2 pointer-events-none");

    checkLoginStatus();

    // Redirect to home if on login page
    if (window.location.pathname.includes("login.html")) {
      window.location.href = "index.html";
    }
  });
});
