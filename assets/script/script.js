
        const menuButton = document.getElementById('menu-toggle');
        const closeButton = document.getElementById('close-menu');
        const mobileMenu = document.getElementById('mobile-menu');

        menuButton.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Disable scroll
        });

        closeButton.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            document.body.style.overflow = 'auto'; // Enable scroll
        });