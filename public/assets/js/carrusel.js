document.addEventListener('DOMContentLoaded', function() {
            function initializeCarousel(containerId, prevBtnId, nextBtnId) {
                const container = document.getElementById(containerId);
                const prevBtn = document.getElementById(prevBtnId);
                const nextBtn = document.getElementById(nextBtnId);

                if (!container || !prevBtn || !nextBtn) {
                    return;
                }
                
                const moveCarousel = (direction) => {
                    // Obtiene el ancho del primer item.
                    const itemWidth = container.querySelector('.carousel-item').offsetWidth;
                    // El 16 es por el `space-x-4` que equivale a 1rem (16px) de gap
                    const scrollAmount = (itemWidth + 16) * direction; // direction será 1 para next, -1 para prev
                    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                };

                nextBtn.addEventListener('click', () => moveCarousel(1));
                prevBtn.addEventListener('click', () => moveCarousel(-1));
            }

            // Inicializamos el carrusel de Mas Vendidos
            initializeCarousel('carousel-container', 'prevBtn', 'nextBtn');
        });