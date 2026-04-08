document.addEventListener('DOMContentLoaded', function () {
    var navToggle = document.querySelector('[data-nav-toggle]');
    var navWrap = document.querySelector('.cosmo-nav-wrap');
    var cartDrawer = document.querySelector('[data-cart-drawer]');
    var cartToggles = document.querySelectorAll('[data-cart-toggle], [data-open-cart]');
    var cartClose = document.querySelectorAll('[data-cart-close]');
    var copyButtons = document.querySelectorAll('[data-copy-value]');
    var revealNodes = document.querySelectorAll('.cosmo-reveal');
    var checkoutButtons = document.querySelectorAll('[data-checkout-launch]');
    var basketIdent = document.body.getAttribute('data-basket-ident');

    function launchCheckout(ident) {
        if (!ident || !window.Tebex || !window.Tebex.checkout) {
            return;
        }

        window.Tebex.checkout.init({
            ident: ident,
            theme: 'default',
            colors: [
                { name: 'primary', color: getComputedStyle(document.documentElement).getPropertyValue('--cosmo-primary').trim() || '#8f63ff' },
                { name: 'secondary', color: getComputedStyle(document.documentElement).getPropertyValue('--cosmo-accent').trim() || '#5ce1ff' }
            ]
        });
        window.Tebex.checkout.launch();
    }

    if (navToggle && navWrap) {
        navToggle.addEventListener('click', function () {
            navWrap.classList.toggle('is-open');
        });
    }

    function openCart() {
        if (!cartDrawer) {
            return;
        }

        cartDrawer.classList.add('is-open');
        cartDrawer.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeCart() {
        if (!cartDrawer) {
            return;
        }

        cartDrawer.classList.remove('is-open');
        cartDrawer.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    cartToggles.forEach(function (toggle) {
        toggle.addEventListener('click', openCart);
    });

    cartClose.forEach(function (toggle) {
        toggle.addEventListener('click', closeCart);
    });

    copyButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var value = button.getAttribute('data-copy-value');

            if (!value || !navigator.clipboard) {
                return;
            }

            navigator.clipboard.writeText(value).then(function () {
                var valueTarget = button.querySelector('.cosmo-pill-value');

                if (!valueTarget) {
                    return;
                }

                var original = valueTarget.textContent;
                valueTarget.textContent = 'Copied';

                window.setTimeout(function () {
                    valueTarget.textContent = original;
                }, 1400);
            });
        });
    });

    if (revealNodes.length > 0 && 'IntersectionObserver' in window) {
        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            });
        }, { threshold: 0.16 });

        revealNodes.forEach(function (node) {
            revealObserver.observe(node);
        });
    } else {
        revealNodes.forEach(function (node) {
            node.classList.add('is-visible');
        });
    }

    checkoutButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            if (basketIdent) {
                launchCheckout(basketIdent);
                return;
            }

            fetch('/checkout/ident')
                .then(function (response) { return response.json(); })
                .then(function (data) {
                    if (!data || !data.ident) {
                        return;
                    }

                    basketIdent = data.ident;
                    launchCheckout(basketIdent);
                })
                .catch(function () {
                    return null;
                });
        });
    });
});
