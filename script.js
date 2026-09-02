// Shows the sticky "Support Kayley's Trip" bar on mobile once the visitor
// has scrolled past the hero section, so the ask is always one tap away.
(function () {
  var hero = document.querySelector('.hero');
  var stickyCta = document.getElementById('stickyCta');
  if (!hero || !stickyCta) return;

  if (!('IntersectionObserver' in window)) {
    stickyCta.classList.add('is-visible');
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        stickyCta.classList.toggle('is-visible', !entry.isIntersecting);
      });
    },
    { rootMargin: '0px 0px -80% 0px' }
  );

  observer.observe(hero);
})();
