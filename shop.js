// Shop JS
const shopItems = [
    { id: 101, title: 'Sandalwood Mala', category: 'beads', price: 14.99, img: 'https://images.unsplash.com/photo-1567634509930-717088927050?auto=format&fit=crop&q=80&w=400', desc: 'Traditional 108-bead sandalwood mala for meditation.' },
    { id: 102, title: 'Ceramic Diya Set', category: 'decor', price: 19.99, img: 'https://images.unsplash.com/photo-1543157143-417937397637?auto=format&fit=crop&q=80&w=400', desc: 'Hand-painted ceramic lamps for festivals.' },
    { id: 103, title: 'Meditation Cushion', category: 'meditation', price: 39.99, img: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&q=80&w=400', desc: 'Ergonomic zafu cushion for comfortable spiritual practice.' },
    { id: 104, title: 'Incense Burner', category: 'decor', price: 24.50, img: 'https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&q=80&w=400', desc: 'Elegant lotus-shaped brass incense holder.' },
    { id: 105, title: 'Tibetan Singing Bowl', category: 'meditation', price: 55.00, img: 'https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=400', desc: 'Handcrafted singing bowl for sound healing.' },
    { id: 106, title: 'Pooja Thali Set', category: 'decor', price: 45.00, img: 'https://images.unsplash.com/photo-1594911775101-72948c267b1f?auto=format&fit=crop&q=80&w=400', desc: 'Silver-plated thali set for traditional ceremonies.' }
];

function renderShop(data) {
    let html = '';
    data.forEach(item => {
        html += `
            <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 p-4">
                <div class="h-64 rounded-xl overflow-hidden mb-4 relative group">
                    <img src="${item.img}" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                        <button class="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition add-to-cart" data-id="${item.id}"><i class="fas fa-shopping-cart"></i></button>
                    </div>
                </div>
                <h4 class="text-lg font-bold mb-2">${item.title}</h4>
                <p class="text-primary font-bold">$${item.price}</p>
            </div>`;
    });
    $('#shop-grid').html(html);
}

$(document).ready(() => {
    renderShop(shopItems);

    // Check login before adding to cart
    $(document).on('click', '.add-to-cart', function(e) {
        if (typeof isLoggedIn === 'function' && !isLoggedIn()) {
            e.preventDefault();
            if (typeof showLoginRequiredModal === 'function') {
                showLoginRequiredModal('buy');
            } else {
                alert('Please log in to add items to your cart.');
                window.location.href = 'login.html';
            }
            return false;
        }
    });
});
