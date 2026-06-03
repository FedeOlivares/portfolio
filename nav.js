// ── Active nav link + dynamic Pages button label ──────────────────────────────

(function () {
  const path = window.location.pathname.split('/').pop() || 'index.html';

  // Map filename → display label (EN + ES)
  const labels = {
    'index.html':             'Home',
    'esp.html':               'Inicio',
    'contact.html':           'Contact',
    'contacto.html':          'Contacto',
    'project-anmartini.html': 'Projects',
    'proyecto-anmartini.html':'Proyectos',
  };

  // Update Pages button text
  const btn = document.getElementById('navToggle');
  if (btn) {
    const label = labels[path] || 'Pages';
    btn.innerHTML = label + ' <span class="pages-chevron">▾</span>';
  }

  // Highlight active nav link
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href') || '';
    const hrefFile = href.split('#')[0].split('/').pop();
    if (hrefFile && hrefFile === path) {
      a.classList.add('active');
    }
    // Highlight anchor links when on home/esp
    if (href.startsWith('#') && (path === 'index.html' || path === 'esp.html' || path === '')) {
      // Don't auto-mark anchors as active on load — scroll handles that
    }
  });
})();
