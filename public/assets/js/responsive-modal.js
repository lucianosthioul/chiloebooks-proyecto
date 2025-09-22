// responsive-modal.js

document.addEventListener('DOMContentLoaded', () => {
    // Esperar a que el DOM esté listo y modal.js haya sido cargado
    setTimeout(() => {
        initResponsiveModal();
    }, 100);
});

function initResponsiveModal() {
    const bookModal = document.getElementById('bookModal');
    if (!bookModal) return;

    // Función para detectar si es móvil
    function isMobile() {
        return window.innerWidth < 768; // md breakpoint de Tailwind
    }

    // Interceptar y mejorar la función openModal original
    const originalOpenModal = window.openModal;
    
    // Sobrescribir el comportamiento del click en book-items
    document.querySelectorAll('.book-item').forEach(button => {
        // Remover listeners existentes clonando el elemento
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
        
        // Agregar nuevo listener con lógica responsiva
        newButton.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            
            const bookData = {
                title: this.dataset.title || '',
                author: this.dataset.author || '',
                cover: this.dataset.cover || '',
                coverDesktop: this.dataset.coverDesktop || this.dataset.cover || '',
                coverMobile: this.dataset.coverMobile || this.dataset.cover || '',
                synopsis: this.dataset.synopsis || '',
                isbn: this.dataset.isbn || '',
                genre: this.dataset.genre || '',
            };
            
            openResponsiveModal(bookData);
        });
    });

    // Nueva función que maneja imágenes responsivas
    function openResponsiveModal(data) {
        // Usar la imagen apropiada según el dispositivo
        const coverToUse = isMobile() ? data.coverMobile : data.coverDesktop;
        
        // Crear objeto con la imagen correcta para el modal original
        const modalData = {
            ...data,
            cover: coverToUse
        };
        
        // Poblar elementos del modal original
        const modalCover = document.getElementById('modal-book-cover');
        const modalTitle = document.getElementById('modal-book-title');
        const modalAuthor = document.getElementById('modal-book-author');
        const modalSynopsis = document.getElementById('modal-book-synopsis');
        const modalIsbn = document.getElementById('modal-book-isbn');
        const modalGenre = document.getElementById('modal-book-genre');

        if (modalCover) {
            modalCover.src = coverToUse;
            modalCover.alt = `Portada de ${data.title}`;
        }
        if (modalTitle) modalTitle.textContent = data.title;
        if (modalAuthor) modalAuthor.textContent = data.author;
        if (modalGenre) modalGenre.textContent = data.genre;
        if (modalSynopsis) modalSynopsis.textContent = data.synopsis;
        if (modalIsbn) modalIsbn.textContent = data.isbn;

        // Mostrar modal usando las clases originales
        bookModal.classList.remove('opacity-0', 'invisible', 'pointer-events-none');
        document.body.style.overflow = 'hidden';

        // Aplicar estilos responsivos dinámicamente
        applyResponsiveStyles();
    }

    // Aplicar estilos responsivos al modal
    function applyResponsiveStyles() {
        const modalContent = document.getElementById('modalContent');
        const modalCover = document.getElementById('modal-book-cover');
        
        if (!modalContent || !modalCover) return;

        if (isMobile()) {
            // Estilos para móvil
            modalContent.style.maxWidth = '90vw';
            modalContent.style.margin = '0 auto';
            
            // Ajustar imagen para móvil (más grande)
            modalCover.style.width = '280px';
            modalCover.style.height = '380px';
            modalCover.style.objectFit = 'cover';
            modalCover.style.margin = '2.5rem auto 0.75rem auto';
            modalCover.style.display = 'block';
            
            // Reorganizar layout para móvil
            const modalBody = modalContent.querySelector('.p-8, .p-10, .md\\:p-10');
            if (modalBody) {
                modalBody.style.flexDirection = 'column';
                modalBody.style.alignItems = 'center';
                modalBody.style.textAlign = 'center';
                modalBody.style.padding = '1.5rem';
            }
            
            // Ajustar texto para móvil
            const titleElement = document.getElementById('modal-book-title');
            if (titleElement) {
                titleElement.style.fontSize = '1.5rem';
                titleElement.style.lineHeight = '1.3';
                titleElement.style.marginBottom = '0.5rem';
            }

        } else {
            // Estilos para desktop (restaurar originales)
            modalContent.style.maxWidth = '';
            modalContent.style.margin = '';
            modalCover.style.width = '';
            modalCover.style.height = '';
            modalCover.style.objectFit = '';
            modalCover.style.margin = '';
            modalCover.style.display = '';
            
            const modalBody = modalContent.querySelector('.p-8, .p-10, .md\\:p-10');
            if (modalBody) {
                modalBody.style.flexDirection = '';
                modalBody.style.textAlign = '';
                modalBody.style.padding = '';
            }
            
            const titleElement = document.getElementById('modal-book-title');
            if (titleElement) {
                titleElement.style.fontSize = '';
                titleElement.style.lineHeight = '';
                titleElement.style.marginBottom = '';
            }
        }
    }

    // Reaplica estilos cuando cambia el tamaño de pantalla
    window.addEventListener('resize', () => {
        if (!bookModal.classList.contains('invisible')) {
            setTimeout(applyResponsiveStyles, 100);
        }
    });

    // Hook para cuando se abre el modal desde otros lugares
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const target = mutation.target;
                if (target.id === 'bookModal' && !target.classList.contains('invisible')) {
                    setTimeout(applyResponsiveStyles, 50);
                }
            }
        });
    });

    observer.observe(bookModal, {
        attributes: true,
        attributeFilter: ['class']
    });
}

// Función auxiliar para refrescar los event listeners (útil para contenido dinámico)
function refreshResponsiveModalListeners() {
    setTimeout(() => {
        initResponsiveModal();
    }, 100);
}