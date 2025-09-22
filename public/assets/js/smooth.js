// Funcionalidad de desplazamiento suave

// Desplazamiento a la sección "Más Vendidos" cuando se hace clic en el botón
const botonIr = document.getElementById('irMasVendidos');
const seccion = document.getElementById('masVendidos');

botonIr.addEventListener('click', () => {
    // Desplaza suavemente hasta la sección objetivo
    seccion.scrollIntoView({ behavior: 'smooth' });
});

// Desplazamiento suave para todos los enlaces internos que comienzan con "#"
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Previene el comportamiento por defecto del enlace
        
        // Obtiene el elemento objetivo usando el atributo href
        const target = document.querySelector(this.getAttribute('href'));
        
        // Si el elemento objetivo existe, desplazamiento suave.
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Fin