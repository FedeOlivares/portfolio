// ── Nav: toggle + current page label ─────────────────────────────────────────

(function () {
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  if (!toggle || !links) return;

  // Open / close dropdown
  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });

  // Close when a link is clicked
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      toggle.classList.remove('open');
      links.classList.remove('open');
    });
  });

  // Close when clicking outside
  document.addEventListener('click', function () {
    toggle.classList.remove('open');
    links.classList.remove('open');
  });
})();
