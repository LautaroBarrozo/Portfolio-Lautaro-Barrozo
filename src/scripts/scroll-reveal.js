function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          // Al salir de pantalla se le saca la clase para que
          // la animación se repita la próxima vez que entre.
          entry.target.classList.remove('is-visible');
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', initScrollReveal);
document.addEventListener('astro:page-load', initScrollReveal);