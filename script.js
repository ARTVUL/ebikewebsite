// Product detail modal functionality
const productModal = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');
const modalImage = document.getElementById('modalImage');
const modalCategory = document.getElementById('modalCategory');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalDescription = document.getElementById('modalDescription');
const modalFeatures = document.getElementById('modalFeatures');
const modalShopifyContainer = document.getElementById('modalShopifyContainer');
const modalBuyNow = document.getElementById('modalBuyNow');

// Product specifications data
const productSpecs = {
    'battery-48v-18ah': [
        { label: 'Voltage', value: '48V' },
        { label: 'Capacity', value: '18Ah (864Wh)' },
        { label: 'Range', value: '20-40 miles' },
        { label: 'Charge Time', value: '4-6 hours' },
        { label: 'Weight', value: '3.2kg' },
        { label: 'Dimensions', value: '360 × 110 × 90mm' }
    ],
    'motor-1500w-mid': [
        { label: 'Power', value: '1500W' },
        { label: 'Torque', value: '160Nm' },
        { label: 'Speed', value: '45+ km/h' },
        { label: 'Voltage', value: '48V-52V' },
        { label: 'Sensor', value: 'Torque + Speed' },
        { label: 'Threading', value: 'BSA 68/70mm' }
    ],
    'motor-750w-rear': [
        { label: 'Power', value: '750W' },
        { label: 'Torque', value: '80Nm' },
        { label: 'Speed', value: '32 km/h' },
        { label: 'Voltage', value: '48V' },
        { label: 'Wheel Size', value: '26"/27.5"/29"' },
        { label: 'Cassette', value: '8/9/10 Speed' }
    ],
    'display-sw900': [
        { label: 'Screen Type', value: 'LCD Color' },
        { label: 'Size', value: '3.5"' },
        { label: 'Connection', value: '5-Pin Waterproof' },
        { label: 'Features', value: 'Speed, Battery, Trip' },
        { label: 'Assist Levels', value: '0-9 Levels' },
        { label: 'Backlight', value: 'Yes' }
    ],
    'kit-1500w-power': [
        { label: 'Motor Power', value: '1500W Mid-Drive' },
        { label: 'Battery', value: '48V 18Ah Included' },
        { label: 'Display', value: 'SW900 LCD' },
        { label: 'Range', value: '40-80 miles' },
        { label: 'Top Speed', value: '45+ km/h' },
        { label: 'Installation', value: 'Professional Recommended' }
    ]
};

// Open product modal
function openProductModal(productData) {
    modalImage.src = productData.image;
    modalImage.alt = productData.title;
    modalCategory.textContent = productData.categoryDisplay;
    modalTitle.textContent = productData.title;
    modalPrice.textContent = productData.price;
    modalDescription.textContent = productData.description;
    
    // Populate specifications
    const specs = productSpecs[productData.productId] || [];
    modalFeatures.innerHTML = '';
    specs.forEach(spec => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="feature-label">${spec.label}</span>
            <span class="feature-value">${spec.value}</span>
        `;
        modalFeatures.appendChild(li);
    });
    
    // Handle Shopify button or styled Buy Now button
    modalShopifyContainer.innerHTML = '';
    modalBuyNow.style.display = 'none';
    
    if (productData.hasShopify === 'true' && productData.shopifyId) {
        // Get the existing Shopify button container
        const existingShopifyEl = document.getElementById(productData.shopifyId);
        if (existingShopifyEl) {
            // Create a new container for the modal
            const shopifyContainer = document.createElement('div');
            shopifyContainer.id = productData.shopifyId + '-modal';
            modalShopifyContainer.appendChild(shopifyContainer);
            
            // Reinitialize the Shopify button in the modal
            if (window.ShopifyBuy && window.ShopifyBuy.UI) {
                const client = ShopifyBuy.buildClient({
                    domain: 'shpc0w-dg.myshopify.com',
                    storefrontAccessToken: '93306c42de16cb72117fb6bf4e97521f'
                });
                
                ShopifyBuy.UI.onReady(client).then(function(ui) {
                    let productId;
                    if (productData.shopifyId === 'product-component-1755095138217') {
                        productId = '15076670931319'; // 1500W Kit
                    } else if (productData.shopifyId === 'product-component-1755383100544') {
                        productId = '15091393921399'; // 48V Battery
                    }
                    
                    if (productId) {
                        ui.createComponent('product', {
                            id: productId,
                            node: shopifyContainer,
                            moneyFormat: '%C2%A3%7B%7Bamount%7D%7D',
                            options: {
                                product: {
                                    contents: {
                                        img: false,
                                        button: true,
                                        buttonWithQuantity: false,
                                        title: false,
                                        price: false
                                    },
                                    styles: {
                                        product: {
                                            '@media (min-width: 601px)': {
                                                'max-width': '100%',
                                                'margin-left': '0',
                                                'margin-bottom': '0'
                                            }
                                        },
                                        button: {
                                            'font-family': "'Inter', sans-serif",
                                            'font-weight': '600',
                                            'background-color': '#2563eb !important',
                                            ':hover': {
                                                'background-color': '#1d4ed8 !important'
                                            },
                                            'border-radius': '1rem !important',
                                            'padding': '1rem 2rem !important'
                                        }
                                    }
                                },
                                cart: {
                                    popup: false,
                                    styles: {
                                        button: {
                                            'background-color': '#2563eb !important',
                                            ':hover': {
                                                'background-color': '#1d4ed8 !important'
                                            }
                                        }
                                    }
                                }
                            }
                        });
                    }
                });
            }
        }
    } else {
        modalBuyNow.style.display = 'inline-flex';
    }
    
    productModal.classList.add('visible');
    document.body.style.overflow = 'hidden';
}

// Close product modal
function closeProductModal() {
    productModal.classList.remove('visible');
    document.body.style.overflow = '';
}

// Event listeners for modal
modalClose.addEventListener('click', closeProductModal);
productModal.addEventListener('click', (e) => {
    if (e.target === productModal) {
        closeProductModal();
    }
});

// Add click handlers to all clickable products
document.addEventListener('click', function(e) {
    const productCard = e.target.closest('.clickable-product');
    if (productCard) {
        e.preventDefault();
        
        const productData = {
            productId: productCard.dataset.productId,
            title: productCard.dataset.title,
            categoryDisplay: productCard.dataset.categoryDisplay,
            price: productCard.dataset.price,
            image: productCard.dataset.image,
            description: productCard.dataset.description,
            hasShopify: productCard.dataset.hasShopify,
            shopifyId: productCard.dataset.shopifyId
        };
        
        openProductModal(productData);
    }
});

// Keyboard navigation for modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && productModal.classList.contains('visible')) {
        closeProductModal();
    }
});

// Navigation functionality
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('visible');
            section.classList.add('hidden');
        });
        
        const sectionId = this.id.replace('NavBtn', 'Section');
        document.getElementById(sectionId).classList.remove('hidden');
        setTimeout(() => {
            document.getElementById(sectionId).classList.add('visible');
        }, 10);
    });
});

// Hero section button navigation
document.getElementById('shopKitsBtn').addEventListener('click', () => {
    document.getElementById('kitsNavBtn').click();
});

document.getElementById('shopPartsBtn').addEventListener('click', () => {
    document.getElementById('partsNavBtn').click();
});

document.getElementById('bookServicesBtn').addEventListener('click', () => {
    document.getElementById('servicesNavBtn').click();
});

// Category tabs functionality
document.querySelectorAll('.category-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        const category = this.getAttribute('data-category');
        
        document.querySelectorAll('.product-card').forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});
