// ── Active nav link + dynamic Pages button label ──────────────────────────────

(function () {
  const path = window.location.pathname.split('/').pop() || 'index.html';

  // Map filename → display label (EN + ES)
  const labels = {
    'index.html':              'Home',
    'esp.html':                'Inicio',
    'contact.html':            'Contact',
    'contacto.html':           'Contacto',
    'project-anmartini.html':  'Projects',
    'proyecto-anmartini.html': 'Proyectos',
  };

  // Which nav href should be active for each page
  const activeHref = {
    'index.html':              '#projects',
    'esp.html':                '#proyectos',
    'contact.html':            'contact.html',
    'contacto.html':           'contacto.html',
    'project-anmartini.html':  '#projects',        // project pages → highlight Projects
    'proyecto-anmartini.html': '#proyectos',
  };

  // Update Pages button text
  const btn = document.getElementById('navToggle');
  if (btn) {
    const label = labels[path] || 'Pages';
    btn.innerHTML = label + ' <span class="pages-chevron">&#9662;</span>';
  }

  // Highlight the correct nav link
  const target = activeHref[path];
  if (target) {
    document.querySelectorAll('.nav-links a').forEach(a => {
      const href = a.getAttribute('href') || '';
      // Match exact href OR href that ends with the target (e.g. "index.html#projects")
      if (href === target || href.endsWith(target)) {
        a.classList.add('active');
      }
    });
  }
})();
