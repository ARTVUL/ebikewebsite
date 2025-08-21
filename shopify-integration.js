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
            // 1500W Power Conversion Kit
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
                                'background-color': '#2563eb',
                                ':hover': {
                                    'background-color': '#1d4ed8'
                                },
                                'border-radius': '1rem',
                                'padding': '1rem 2rem'
                            }
                        }
                    },
                    cart: {
                        popup: false,
                        styles: {
                            button: {
                                'background-color': '#2563eb',
                                ':hover': {
                                    'background-color': '#1d4ed8'
                                }
                            }
                        }
                    }
                }
            });

            // 48V 18Ah Battery
            ui.createComponent('product', {
                id: '15091393921399',
                node: document.getElementById('product-component-1755383100544'),
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
                                'background-color': '#2563eb',
                                ':hover': {
                                    'background-color': '#1d4ed8'
                                },
                                'border-radius': '1rem',
                                'padding': '1rem 2rem'
                            }
                        }
                    },
                    cart: {
                        popup: false,
                        styles: {
                            button: {
                                'background-color': '#2563eb',
                                ':hover': {
                                    'background-color': '#1d4ed8'
                                }
                            }
                        }
                    }
                }
            });

            // SW900 LCD Display
            ui.createComponent('product', {
                id: '15100297118071',
                node: document.getElementById('product-component-1755798710229'),
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
                                'background-color': '#2563eb',
                                ':hover': {
                                    'background-color': '#1d4ed8'
                                },
                                'border-radius': '1rem',
                                'padding': '1rem 2rem'
                            }
                        }
                    },
                    cart: {
                        popup: false,
                        styles: {
                            button: {
                                'background-color': '#2563eb',
                                ':hover': {
                                    'background-color': '#1d4ed8'
                                }
                            }
                        }
                    }
                }
            });
        });
    }
})();
