// Initialize Shopify for 1500W kit
(function() {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }

    function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: 'shpc0w-dg.myshopify.com',
            storefrontAccessToken: '93306c42de16cb72117fb6bf4e97521f'
        });

        ShopifyBuy.UI.onReady(client).then(function(ui) {
            ui.createComponent('product', {
                id: '15076670931319',
                node: document.getElementById('product-component-1755095138217'),
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
        });
    }
})();

// Initialize Shopify for 48V 18Ah Battery
(function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit2();
        } else {
            loadScript2();
        }
    } else {
        loadScript2();
    }
    function loadScript2() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit2;
    }
    function ShopifyBuyInit2() {
        var client = ShopifyBuy.buildClient({
            domain: 'shpc0w-dg.myshopify.com',
            storefrontAccessToken: '93306c42de16cb72117fb6bf4e97521f',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
                id: '15091393921399',
                node: document.getElementById('product-component-1755383100544'),
                moneyFormat: '%C2%A3%7B%7Bamount%7D%7D',
                options: {
                    "product": {
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0",
                                    "margin-bottom": "0"
                                }
                            },
                            "button": {
                                "font-family": "'Inter', sans-serif",
                                "font-weight": "600",
                                "background-color": "#2563eb !important",
                                ":hover": {
                                    "background-color": "#1d4ed8 !important"
                                },
                                "border-radius": "1rem !important",
                                "padding": "1rem 2rem !important"
                            }
                        },
                        "contents": {
                            "img": false,
                            "title": false,
                            "price": false,
                            "button": true,
                            "buttonWithQuantity": false
                        }
                    },
                    "cart": {
                        "popup": false,
                        "styles": {
                            "button": {
                                "background-color": "#2563eb !important",
                                ":hover": {
                                    "background-color": "#1d4ed8 !important"
                                }
                            }
                        }
                    },
                    "toggle": {
                        "styles": {
                            "toggle": {
                                "background-color": "#2563eb !important",
                                ":hover": {
                                    "background-color": "#1d4ed8 !important"
                                }
                            }
                        }
                    }
                }
            });
        });
    }
})();
