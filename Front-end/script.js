const overlay = document.getElementById('modalOverlay');
        const modalClose = document.getElementById('modalClose');
        const modalTitle = document.getElementById('modalTitle');
        const modalSpecs = document.getElementById('modalSpecs');
        const modalPrice = document.getElementById('modalPrice');
        const detailButtons = document.querySelectorAll('.detalhes-btn');

        const openModal = (button) => {
            const title = button.dataset.title || 'Detalhes';
            const specs = (button.dataset.specs || '').split('|').filter(Boolean);
            const price = button.dataset.price || '';
            modalTitle.textContent = title;
            modalPrice.textContent = price;

            modalSpecs.innerHTML = '';
            specs.forEach((spec) => {
                const item = document.createElement('li');
                item.textContent = spec.trim();
                modalSpecs.appendChild(item);
            });

            overlay.classList.add('is-open');
            overlay.setAttribute('aria-hidden', 'false');
        };

        const closeModal = () => {
            overlay.classList.remove('is-open');
            overlay.setAttribute('aria-hidden', 'true');
        };

        detailButtons.forEach((button) => {
            button.addEventListener('click', () => openModal(button));
        });

        modalClose.addEventListener('click', closeModal);
        overlay.addEventListener('click', (event) => {
            if (event.target === overlay) {
                closeModal();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && overlay.classList.contains('is-open')) {
                closeModal();
            }
        });