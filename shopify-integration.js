(function() {
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    const products = [
        { id: '15076670931319', node: 'product-component-1755095138217' }, // 1500W Power Conversion Kit
        { id: '15091393921399', node: 'product-component-1755383100544' }, // 48V 18Ah Battery
        { id: '15100297118071', node: 'product-component-1755798710229' }  // SW900 LCD Display
    ];

    function loadScript() {
        const script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.head || document.body).appendChild(script);
        script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
        const client = ShopifyBuy.buildClient({
            domain: 'shpc0w-dg.myshopify.com',
            storefrontAccessToken: '93306c42de16cb72117fb6bf4e97521f'
        });

        ShopifyBuy.UI.onReady(client).then(function(ui) {
            products.forEach(product => {
                ui.createComponent('product', {
                    id: product.id,
                    node: document.getElementById(product.node),
                    moneyFormat: '%C2%A3%7B%7Bamount%7D%7D',
                    options: {
                        product: {
                            styles: {
                                product: {
                                    '@media (min-width: 601px)': {
                                        'max-width': 'calc(25% - 20px)',
                                        'margin-left': '20px',
                                        'margin-bottom': '50px'
                                    }
                                },
                                title: { color: '#000000' },
                                button: {
                                    'font-weight': 'bold',
                                    ':hover': { 'background-color': '#2056d1' },
                                    'background-color': '#2460e8',
                                    ':focus': { 'background-color': '#2056d1' },
                                    'border-radius': '40px'
                                },
                                price: { 'font-weight': 'bold', color: '#074de6' },
                                compareAt: { 'font-weight': 'bold', color: '#074de6' },
                                unitPrice: { 'font-weight': 'bold', color: '#074de6' }
                            },
                            contents: { img: false, title: false, price: false },
                            text: { button: 'Add to cart' }
                        },
                        modalProduct: {
                            contents: { img: false, imgWithCarousel: true, button: false, buttonWithQuantity: true },
                            styles: {
                                product: {
                                    '@media (min-width: 601px)': { 'max-width': '100%', 'margin-left': '0px', 'margin-bottom': '0px' }
                                },
                                button: {
                                    'font-weight': 'bold',
                                    ':hover': { 'background-color': '#2056d1' },
                                    'background-color': '#2460e8',
                                    ':focus': { 'background-color': '#2056d1' },
                                    'border-radius': '40px'
                                },
                                title: {
                                    'font-family': 'Helvetica Neue, sans-serif',
                                    'font-weight': 'bold',
                                    'font-size': '26px',
                                    color: '#4c4c4c'
                                },
                                price: {
                                    'font-family': 'Helvetica Neue, sans-serif',
                                    'font-weight': 'normal',
                                    'font-size': '18px',
                                    color: '#4c4c4c'
                                },
                                compareAt: {
                                    'font-family': 'Helvetica Neue, sans-serif',
                                    'font-weight': 'normal',
                                    'font-size': '15.299999999999999px',
                                    color: '#4c4c4c'
                                },
                                unitPrice: {
                                    'font-family': 'Helvetica Neue, sans-serif',
                                    'font-weight': 'normal',
                                    'font-size': '15.299999999999999px',
                                    color: '#4c4c4c'
                                }
                            },
                            text: { button: 'Add to cart' }
                        },
                        option: { styles: { label: { color: '#2d2b2b' } } },
                        cart: {
                            styles: {
                                button: {
                                    'font-weight': 'bold',
                                    ':hover': { 'background-color': '#2056d1' },
                                    'background-color': '#2460e8',
                                    ':focus': { 'background-color': '#2056d1' },
                                    'border-radius': '40px'
                                },
                                title: { color: '#191818' },
                                header: { color: '#191818' },
                                lineItems: { color: '#191818' },
                                subtotalText: { color: '#191818' },
                                subtotal: { color: '#191818' },
                                notice: { color: '#191818' },
                                currency: { color: '#191818' },
                                close: { color: '#191818', ':hover': { color: '#191818' } },
                                empty: { color: '#191818' },
                                noteDescription: { color: '#191818' },
                                discountText: { color: '#191818' },
                                discountIcon: { fill: '#191818' },
                                discountAmount: { color: '#191818' }
                            },
                            text: { total: 'Subtotal', button: 'Checkout' },
                            popup: false
                        },
                        toggle: {
                            styles: {
                                toggle: {
                                    'font-weight': 'bold',
                                    'background-color': '#2460e8',
                                    ':hover': { 'background-color': '#2056d1' },
                                    ':focus': { 'background-color': '#2056d1' }
                                }
                            }
                        },
                        lineItem: {
                            styles: {
                                variantTitle: { color: '#191818' },
                                title: { color: '#191818' },
                                price: { color: '#191818' },
                                fullPrice: { color: '#191818' },
                                discount: { color: '#191818' },
                                discountIcon: { fill: '#191818' },
                                quantity: { color: '#191818' },
                                quantityIncrement: { color: '#191818', 'border-color': '#191818' },
                                quantityDecrement: { color: '#191818', 'border-color': '#191818' },
                                quantityInput: { color: '#191818', 'border-color': '#191818' }
                            }
                        }
                    }
                });
            });
        });
    }

    if (window.ShopifyBuy && window.ShopifyBuy.UI) {
        ShopifyBuyInit();
    } else {
        loadScript();
    }
})();
