// Voltrix theme JS — placeholder, se irá completando según necesidad
document.addEventListener('DOMContentLoaded', function () {
  // Reservado para futuras interacciones (menú móvil, validaciones, etc.)

  // ── Sistema global de revelado al hacer scroll ──
  // Cualquier elemento con class="vx-reveal" aparece con fade + subida
  // al entrar en pantalla. Añade data-vx-delay="1" (2, 3...) a elementos
  // hermanos para escalonar la entrada sin tocar JS.
  var revealEls = document.querySelectorAll('.vx-reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var delay = parseInt(entry.target.getAttribute('data-vx-delay') || '0', 10);
          setTimeout(function () { entry.target.classList.add('vx-reveal--in'); }, delay * 90);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('vx-reveal--in'); });
  }
});
