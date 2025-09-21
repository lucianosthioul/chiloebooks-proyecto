document.addEventListener('DOMContentLoaded', () => {
    // --- Seleccionar elementos del DOM ---
    const bookModal = document.getElementById('bookModal');
    
    // Si no existe el modal en esta página, salir
    if (!bookModal) return;
    
    const modalContent = document.getElementById('modalContent');
    const closeModalButton = document.getElementById('closeModalButton');
    
    // --- Elementos del contenido del modal ---
    const modalCover = document.getElementById('modal-book-cover');
    const modalTitle = document.getElementById('modal-book-title');
    const modalAuthor = document.getElementById('modal-book-author');
    const modalSynopsis = document.getElementById('modal-book-synopsis');
    const modalIsbn = document.getElementById('modal-book-isbn');
    const modalGenre = document.getElementById('modal-book-genre'); 

    // --- Función para abrir el modal y llenarlo con datos ---
    const openModal = (data) => {
        if (modalCover) modalCover.src = data.cover || '';
        if (modalCover) modalCover.alt = `Portada de ${data.title}`;
        if (modalTitle) modalTitle.textContent = data.title;
        if (modalAuthor) modalAuthor.textContent = data.author;
        if (modalGenre) modalGenre.textContent = data.genre || '';
        if (modalSynopsis) modalSynopsis.textContent = data.synopsis;
        if (modalIsbn) modalIsbn.textContent = data.isbn || '';

        bookModal.classList.remove('opacity-0', 'invisible', 'pointer-events-none');
        document.body.style.overflow = 'hidden';
    };

    // --- Función para cerrar el modal ---
    const closeModal = () => {
        bookModal.classList.add('opacity-0', 'invisible', 'pointer-events-none');
        document.body.style.overflow = 'auto';
    };

    // Adjunta evento a diferentes contenedores
    
    // Para catalogo.html (libros dentro de booksGrid)
    const booksGrid = document.getElementById('booksGrid');
    if (booksGrid) {
        booksGrid.addEventListener('click', (event) => {
            // Encontrar el elemento book-item más cercano al click
            const bookItem = event.target.closest('.book-item');
            
            if (bookItem) {
                const bookData = {
                    title: bookItem.dataset.title || '',
                    author: bookItem.dataset.author || '',
                    cover: bookItem.dataset.cover || '',
                    synopsis: bookItem.dataset.synopsis || '',
                    isbn: bookItem.dataset.isbn || '',
                    genre: bookItem.dataset.genre || '',
                };
                openModal(bookData);
            }
        });
    }
    
    // Para index.html (libros en el carrusel)
    const carousel = document.getElementById('carousel');
    if (carousel) {
        carousel.addEventListener('click', (event) => {
            const bookItem = event.target.closest('.book-item');
            
            if (bookItem) {
                const bookData = {
                    title: bookItem.dataset.title || '',
                    author: bookItem.dataset.author || '',
                    cover: bookItem.dataset.cover || '',
                    synopsis: bookItem.dataset.synopsis || '',
                    isbn: bookItem.dataset.isbn || '',
                    genre: bookItem.dataset.genre || '',
                };
                openModal(bookData);
            }
        });
    }
    
    // Para index.html (libro destacado en la sección principal)
    const mainSection = document.querySelector('main');
    if (mainSection) {
        mainSection.addEventListener('click', (event) => {
            const bookItem = event.target.closest('.book-item');
            
            if (bookItem) {
                const bookData = {
                    title: bookItem.dataset.title || '',
                    author: bookItem.dataset.author || '',
                    cover: bookItem.dataset.cover || '',
                    synopsis: bookItem.dataset.synopsis || '',
                    isbn: bookItem.dataset.isbn || '',
                    genre: bookItem.dataset.genre || '',
                };
                openModal(bookData);
            }
        });
    }

    // 2. Cerrar modal con el botón 'X'
    if (closeModalButton) {
        closeModalButton.addEventListener('click', closeModal);
    }

    // 3. Cerrar modal al hacer clic fuera del contenido
    bookModal.addEventListener('click', (event) => {
        if (event.target === bookModal) {
            closeModal();
        }
    });

    // 4. Cerrar modal con la tecla 'Escape'
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !bookModal.classList.contains('opacity-0')) {
            closeModal();
        }
    });
});