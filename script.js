// Progressive enhancement: Parallax panels for Cadance marketing site
// Requirements: no external deps, works without JS, respects prefers-reduced-motion

// If loaded as a module with defer, DOM is parsed already

const mqlReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

function clamp(n, min, max) { return Math.min(max, Math.max(min, n)); }

function computeProgress(rect, vh) {
  // Normalize distance of panel center from viewport center to [-1, 1]
  const panelCenter = rect.top + rect.height / 2;
  const viewportCenter = vh / 2;
  const distance = viewportCenter - panelCenter;
  return clamp(distance / viewportCenter, -1, 1);
}

function bindPanels() {
  const nodes = document.querySelectorAll('.parallax-panel');
  const panels = [];
  nodes.forEach(el => {
    const bg = el.querySelector('.parallax-bg');
    if (!bg) return;
    panels.push({ el, bg });
  });
  return panels;
}

function initParallax() {
  try {
    if (mqlReduced.matches) return; // respect reduced motion
    const panels = bindPanels();
    if (!panels.length) return;

    let ticking = false;
    let active = true;

    function update() {
      if (!active) return;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      for (let i = 0; i < panels.length; i++) {
        const p = panels[i];
        const rect = p.el.getBoundingClientRect();
        const progress = computeProgress(rect, vh);
        // Set CSS var on the panel element; CSS handles amplitude per breakpoint
        p.el.style.setProperty('--parallax', String(progress));
      }
    }

    function requestTick() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        update();
      });
    }

    // Initial update
    requestTick();

    // Listeners
    window.addEventListener('scroll', requestTick, { passive: true });
    window.addEventListener('resize', requestTick);

    document.addEventListener('visibilitychange', () => {
      active = !document.hidden;
      if (active) requestTick();
    });

    // React to changes in reduced-motion without reload
    if (typeof mqlReduced.addEventListener === 'function') {
      mqlReduced.addEventListener('change', (e) => {
        if (e.matches) {
          // Turn off effect
          window.removeEventListener('scroll', requestTick);
          window.removeEventListener('resize', requestTick);
          panels.forEach(p => p.el.style.setProperty('--parallax', '0'));
        } else {
          // Re-enable
          window.addEventListener('scroll', requestTick, { passive: true });
          window.addEventListener('resize', requestTick);
          requestTick();
        }
      });
    }
  } catch (_) {
    // Fail silently to preserve no-JS baseline
  }
}

// Auto-init when module loads (defer ensures DOM is parsed)
initParallax();

// Named exports for potential future progressive enhancement usage
export { initParallax, bindPanels, computeProgress };

/**
 * Selectable personas/targets (progressive enhancement)
 * - Home (#personas): toggle items, update H2 title with count, and build mailto CTA body
 * - Other sections (e.g., #who): toggle items only
 */
function initSelectablePersonas() {
  try {
    const sections = [
      { id: 'personas', mode: 'home' },
      { id: 'teachers', mode: 'home' },
      { id: 'who', mode: 'generic' }
    ];

    sections.forEach(({ id, mode }) => {
      const section = document.getElementById(id);
      if (!section) return;

      const list = section.querySelector('ul.personas-grid');
      const h2 = section.querySelector('h2');
      if (!list || !h2) return;

      // Cache default title to restore when count == 0
      if (!h2.dataset.defaultTitle) {
        h2.dataset.defaultTitle = h2.textContent.trim();
      }

      // Make list items togglable (checkbox-like)
      const items = Array.from(list.querySelectorAll('li'));
      items.forEach((li) => {
        li.setAttribute('role', 'checkbox');
        if (!li.hasAttribute('aria-checked')) {
          li.setAttribute('aria-checked', 'false');
        }
        li.setAttribute('tabindex', '0');

        function toggle() {
          const checked = li.getAttribute('aria-checked') === 'true';
          li.setAttribute('aria-checked', checked ? 'false' : 'true');
          updateUI();
        }

        li.addEventListener('click', toggle);
        li.addEventListener('keydown', (e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            toggle();
          }
        });
      });

      const cta = document.getElementById('needs-cta');

      function getSelected() {
        return items
          .filter(li => li.getAttribute('aria-checked') === 'true')
          .map(li => li.textContent.trim())
          .filter(Boolean);
      }

      function updateHeader(count) {
        if (mode !== 'home') return;
        const defaultTitle = h2.dataset.defaultTitle || 'You should consider auditioning Cadance';
        if (count > 0) {
          h2.textContent = `You have ${count} reasons to audition Cadance`;
        } else {
          h2.textContent = defaultTitle;
        }
      }

      function updateCTA(selected) {
        if (!cta) return;
        const subject = 'Cadance — What I need';
        let body = '';
        if (selected.length) {
          body += 'Selected options:\r\n';
          body += selected.map(s => `- ${s}`).join('\r\n');
          body += '\r\n\r\n';
        }
        body += 'One more thing I would love:';
        const href = `mailto:info.rondo@cadance.music?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        cta.setAttribute('href', href);
      }

      function updateUI() {
        const selected = getSelected();
        updateHeader(selected.length);
        updateCTA(selected);
      }

      // Initialize UI
      updateUI();
    });
  } catch (_) {
    // Fail silently to preserve no-JS baseline
  }
}

// Auto-init selectable personas/groups
initSelectablePersonas();

// Tempo Notes: fetch YouTube video titles via oEmbed (progressive enhancement; no API key)
function initResourceTitles() {
  try {
    const cards = document.querySelectorAll('.resource-card[data-yt-id]');
    if (!cards.length) return;

    cards.forEach((card) => {
      const id = card.getAttribute('data-yt-id');
      if (!id) return;

      const titleEl = card.querySelector('.resource-title');
      const imgEl = card.querySelector('img.thumb');
      const oembed = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${encodeURIComponent(id)}&format=json`;

      fetch(oembed, { mode: 'cors' })
        .then((res) => (res.ok ? res.json() : Promise.reject(new Error('oEmbed fetch failed'))))
        .then((data) => {
          if (data && data.title) {
            if (titleEl) titleEl.textContent = data.title;
            if (imgEl) imgEl.setAttribute('alt', data.title);
          }
        })
        .catch(() => {
          if (titleEl && titleEl.textContent === 'Loading title…') {
            titleEl.textContent = 'External video';
          }
        });
    });
  } catch (_) {
    // Preserve no-JS baseline
  }
}

// Auto-init resource titles
initResourceTitles();

/**
 * Mobile hamburger menu toggle (progressive enhancement)
 */
function initMobileMenu() {
  try {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.primary-nav');
    
    if (!toggle || !nav) return;

    function toggleMenu() {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      const newState = !isOpen;
      
      toggle.setAttribute('aria-expanded', String(newState));
      nav.classList.toggle('menu-open', newState);
      
      // Prevent body scroll when menu is open
      document.body.style.overflow = newState ? 'hidden' : '';
    }

    function closeMenu() {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('menu-open');
      document.body.style.overflow = '';
    }

    // Toggle menu on button click
    toggle.addEventListener('click', toggleMenu);

    // Close menu when clicking nav links
    nav.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        closeMenu();
      }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('menu-open')) {
        closeMenu();
        toggle.focus(); // Return focus to toggle button
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (nav.classList.contains('menu-open') &&
          !nav.contains(e.target) &&
          !toggle.contains(e.target)) {
        closeMenu();
      }
    });

    // Close menu on window resize (if user rotates device or resizes window)
    window.addEventListener('resize', () => {
      if (window.innerWidth > 599 && nav.classList.contains('menu-open')) {
        closeMenu();
      }
    });

  } catch (_) {
    // Fail silently to preserve no-JS baseline
  }
}

// Auto-init mobile menu
initMobileMenu();
