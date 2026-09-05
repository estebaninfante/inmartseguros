(function () {
  var doc = document.documentElement;
  doc.classList.add('js');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* cascade: dígitos segmentados del hero */
  function cascade(el) {
    var text = el.textContent;
    el.setAttribute('aria-label', text);
    el.setAttribute('role', 'img');
    el.textContent = '';
    for (var i = 0; i < text.length; i++) {
      var c = document.createElement('span');
      c.className = 'cell'; c.setAttribute('aria-hidden', 'true');
      var s = document.createElement('span'); s.textContent = text[i];
      c.appendChild(s); el.appendChild(c);
      if (!reduced) {
        c.classList.add('flip');
        c.style.setProperty('--d', (120 + i * 90) + 'ms');
      }
    }
  }
  var cascades = document.querySelectorAll('.js-cascade');
  for (var i = 0; i < cascades.length; i++) { cascade(cascades[i]); }

  /* reveal + triggers */
  var io = ('IntersectionObserver' in window) && !reduced
    ? new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        el.classList.add('in-rv');
        if (el.classList.contains('cta-band')) { el.classList.add('in'); }
        io.unobserve(el);
      });
    }, { threshold: .18, rootMargin: '0px 0px -8% 0px' })
    : null;

  function arm(sel) {
    var els = document.querySelectorAll(sel);
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (io) { io.observe(el); }
      else { el.classList.add('in-rv', 'in'); }
    }
  }
  arm('.pre');
  arm('.cta-band');

  /* El hero es above-the-fold: revelar de inmediato. El IO con rootMargin
     negativo no dispara si el elemento cae por debajo del umbral en
     viewports de poca altura y el hero (100svh) nunca lo acerca. */
  var heroPres = document.querySelectorAll('#inicio .pre');
  for (var j = 0; j < heroPres.length; j++) { heroPres[j].classList.add('in-rv', 'in'); }

  /* readout brackets al cargar */
  window.addEventListener('load', function () {
    var rd = document.querySelector('.readout');
    if (rd) { rd.classList.add('loaded'); }
  });

  /* lema rotativo de la tarjeta del hero */
  var ticks = [
    'Atendemos en toda Colombia',
    'Trabajamos en todos los sectores',
    'Empresas y personas',
    'Acompañamos sus siniestros'
  ];
  var tickEl = document.getElementById('readout-tick');
  var ti = 0;
  if (tickEl && ticks.length > 1) {
    setInterval(function () {
      tickEl.classList.add('out');
      setTimeout(function () {
        ti = (ti + 1) % ticks.length;
        tickEl.textContent = ticks[ti];
        tickEl.classList.remove('out');
      }, reduced ? 0 : 300);
    }, 3200);
  }

  /* nav sólido al hacer scroll */
  var nav = document.getElementById('nav');
  var hero = document.querySelector('.hero');
  function navState() {
    var h = hero ? hero.offsetHeight - 90 : 80;
    nav.classList.toggle('solid', window.scrollY > h * 0.55 || window.scrollY > 420);
  }
  navState();
  window.addEventListener('scroll', navState, { passive: true });

  /* año */
  var y = document.getElementById('year');
  if (y) { y.textContent = new Date().getFullYear(); }

  /* ===== drawer móvil ===== */
  var burger = document.getElementById('nav-burger');
  var drawer = document.getElementById('drawer');
  var drawerX = document.getElementById('drawer-x');
  var drawerOpen = false;
  var lastFocus = null;

  function setDrawer(open) {
    drawerOpen = open;
    drawer.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    document.body.style.overflow = open ? 'hidden' : '';
    updateFab();
    if (open) {
      lastFocus = document.activeElement;
      drawerX.focus();
    } else if (lastFocus) {
      lastFocus.focus();
      lastFocus = null;
    }
  }

  burger.addEventListener('click', function () { setDrawer(!drawerOpen); });
  drawerX.addEventListener('click', function () { setDrawer(false); });
  /* cerrar al elegir un ancla del drawer */
  var drawerLinks = drawer.querySelectorAll('a');
  for (var d = 0; d < drawerLinks.length; d++) {
    drawerLinks[d].addEventListener('click', function () { setDrawer(false); });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawerOpen) { setDrawer(false); return; }
    /* trampa de foco: cicla dentro del drawer mientras esté abierto */
    if (e.key === 'Tab' && drawerOpen) {
      var focusables = drawer.querySelectorAll('button, a[href]');
      var first = focusables[0], last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ===== tabs Empresas / Particulares ===== */
  var tabs = { empresas: document.getElementById('tab-empresas'), particulares: document.getElementById('tab-particulares') };
  var panels = { empresas: document.getElementById('panel-empresas'), particulares: document.getElementById('panel-particulares') };

  function selectSeg(seg, scroll) {
    if (!tabs[seg]) { return; }
    for (var k in tabs) {
      var on = k === seg;
      tabs[k].setAttribute('aria-selected', String(on));
      tabs[k].tabIndex = on ? 0 : -1;
      panels[k].hidden = !on;
    }
    /* feedback de cambio: reanima la entrada del panel recién mostrado */
    var at = panels[seg];
    if (at) {
      at.classList.remove('tab-swap');
      void at.offsetWidth;
      at.classList.add('tab-swap');
    }
    if (scroll) {
      var target = document.getElementById('servicios');
      if (target) { target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' }); }
    }
  }

  Object.keys(tabs).forEach(function (k) {
    tabs[k].addEventListener('click', function () {
      selectSeg(k, false);
      history.replaceState(null, '', '#' + k);
    });
    tabs[k].addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') { return; }
      e.preventDefault();
      var other = k === 'empresas' ? 'particulares' : 'empresas';
      tabs[other].focus();
      selectSeg(other, false);
      history.replaceState(null, '', '#' + other);
    });
  });

  /* #empresas / #particulares en la URL preseleccionan el tab */
  function hashSeg() {
    var h = location.hash.replace('#', '');
    return (h === 'empresas' || h === 'particulares') ? h : null;
  }
  window.addEventListener('hashchange', function () {
    var seg = hashSeg();
    if (seg) { selectSeg(seg, true); }
  });
  if (hashSeg()) { selectSeg(hashSeg(), true); }

  /* ===== buscador de seguros: filtra las tarjetas del panel activo ===== */
  var searchIn = document.getElementById('search-input');
  var searchBtn = document.getElementById('search-btn');
  var servRoot = document.getElementById('servicios');
  if (searchIn && searchBtn && servRoot) {
    var prodCards = Array.prototype.slice.call(servRoot.querySelectorAll('.prod-card'));
    var noResults = Array.prototype.slice.call(servRoot.querySelectorAll('.no-results'));
    var searchChips = document.querySelector('#servicios .search-chips');

    function runSearch(q) {
      var needle = (q || '').trim().toLowerCase();
      var visible = 0;
      prodCards.forEach(function (card) {
        if (!needle) { card.classList.remove('is-hidden'); visible++; return; }
        var hay = (card.textContent || '').toLowerCase();
        var tokens = needle.split(/[|&,]/);
        var ok = tokens.some(function (t) {
          t = t.trim();
          return t && hay.indexOf(t.toLowerCase()) !== -1;
        });
        card.classList.toggle('is-hidden', !ok);
        if (ok) { visible++; }
      });
      noResults.forEach(function (n) { n.hidden = visible > 0; });
    }

    function apply(q) { runSearch(q); if (searchIn.value !== q) { searchIn.value = q; } }

    searchBtn.addEventListener('click', function () {
      if (searchChips) { searchChips.hidden = false; }
      apply(searchIn.value);
    });
    searchIn.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (searchChips) { searchChips.hidden = false; }
        apply(searchIn.value);
      }
    });
    Array.prototype.forEach.call(document.querySelectorAll('.chip'), function (chip) {
      chip.addEventListener('click', function () {
        var q = chip.getAttribute('data-q') || '';
        apply(q);
        servRoot.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
      });
    });
  }

  /* ===== botón flotante WhatsApp ===== */
  var fab = document.getElementById('fab');
  var ctaBand = document.getElementById('hablemos');
  var pastHero = false;
  var ctaVisible = false;

  function updateFab() {
    if (!fab) { return; }
    var on = pastHero && !ctaVisible && !drawerOpen;
    fab.classList.toggle('on', on);
    fab.classList.toggle('off', ctaVisible || drawerOpen);
  }

  window.addEventListener('scroll', function () {
    pastHero = window.scrollY > (hero ? hero.offsetHeight * 0.7 : 500);
    updateFab();
  }, { passive: true });

  if ('IntersectionObserver' in window && ctaBand) {
    var fabIo = new IntersectionObserver(function (entries) {
      ctaVisible = entries[0].isIntersecting;
      updateFab();
    }, { threshold: 0 });
    fabIo.observe(ctaBand);
  }

  pastHero = window.scrollY > (hero ? hero.offsetHeight * 0.7 : 500);
  updateFab();
})();

/* ===== contacto: formulario con mensaje preconfigurado (WhatsApp o correo) ===== */
(function () {
  var form = document.getElementById('cform');
  if (!form) { return; }

  var nombre = document.getElementById('cf-nombre');
  var tel = document.getElementById('cf-tel');
  var mail = document.getElementById('cf-mail');
  var msg = document.getElementById('cf-msg');
  var WA = '573103082226';
  var EMAIL = 'gerencia@inmartseguros.com';

  function compose() {
    var n = nombre.value.trim();
    var m = msg.value.trim();
    var firma = '\n\n— ' + n + '.';
    var contacto = [];
    if (tel.value.trim()) { contacto.push('Teléfono: ' + tel.value.trim()); }
    if (mail.value.trim()) { contacto.push('Correo: ' + mail.value.trim()); }

    /* Mensaje ya redactado desde un CTA (trae su propio saludo): no repetir "Hola" */
    if (/^hola\b/i.test(m)) {
      var cuerpo = m.replace(/\s+$/, '');
      if (contacto.length) { cuerpo += '\n' + contacto.join('\n'); }
      return cuerpo + firma;
    }

    /* Mensaje escrito por el usuario: presentar y firmar */
    var lineas = ['Hola, soy ' + n + '.', '', m];
    if (contacto.length) { lineas.push('', contacto.join('\n')); }
    return lineas.join('\n');
  }

  function validar() {
    var ok = true;
    [nombre, msg].forEach(function (f) {
      var vacio = !f.value.trim();
      f.setAttribute('aria-invalid', vacio ? 'true' : 'false');
      if (vacio && ok) { f.focus(); ok = false; }
    });
    return ok;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validar()) { return; }
    window.open('https://wa.me/' + WA + '?text=' + encodeURIComponent(compose()), '_blank', 'noopener');
  });

  document.getElementById('cf-mail-btn').addEventListener('click', function () {
    if (!validar()) { return; }
    var subject = 'Solicitud de cotización — ' + nombre.value.trim();
    location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(compose());
  });

  /* CTAs con data-msg: prellenan el formulario antes de llegar a Contacto */
  document.addEventListener('click', function (e) {
    var link = e.target.closest ? e.target.closest('[data-msg]') : null;
    if (!link) { return; }
    msg.value = link.getAttribute('data-msg');
    msg.setAttribute('aria-invalid', 'false');
  });
})();

/* ===== carruseles móviles: auto-desplazamiento infinito + botones prev/next.
   En desktop la pista es una grilla sin desborde: el motor no arranca. ===== */
(function () {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var mql = window.matchMedia('(max-width: 720px)');
  var sels = ['.sec-grid-sectores', '.prod-grid'];
  var SPEED = 30; /* px por segundo */
  var CHEV = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">';

  sels.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (sc) {
      var wrap = document.createElement('div');
      wrap.className = 'car-wrap';
      sc.parentNode.insertBefore(wrap, sc);
      wrap.appendChild(sc);

      [['prev', 'Anterior', -1], ['next', 'Siguiente', 1]].forEach(function (cfg) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'car-btn ' + cfg[0];
        b.setAttribute('aria-label', cfg[1] + ' tarjeta');
        b.innerHTML = CHEV + '<path d="' + (cfg[2] < 0 ? 'M15 18l-6-6 6-6' : 'M9 6l6 6-6 6') + '"/></svg>';
        b.addEventListener('click', function () {
          pause(2200);
          sc.scrollBy({ left: cfg[2] * sc.clientWidth * .8, behavior: reduced ? 'auto' : 'smooth' });
        });
        wrap.appendChild(b);
      });
      var prevBtn = wrap.querySelector('.car-btn.prev');
      var nextBtn = wrap.querySelector('.car-btn.next');

      /* ---- motor de bucle infinito ---- */
      var unit = 0;      /* ancho del set original: salto invisible de vuelta */
      var raf = null;
      var last = 0;
      var running = false;
      var resumeT = null;

      function build() {
        sc.querySelectorAll('[data-clone]').forEach(function (n) { n.remove(); });
        unit = 0;
        if (reduced || !mql.matches) { return false; }
        if (sc.scrollWidth <= sc.clientWidth + 4) { return false; } /* sin desborde: no hay carrusel */
        var kids = Array.prototype.slice.call(sc.children);
        var firstL = kids[0].offsetLeft;
        kids.forEach(function (n) {
          var c = n.cloneNode(true);
          c.setAttribute('data-clone', '1');
          c.setAttribute('aria-hidden', 'true');
          if (c.matches('a')) { c.setAttribute('tabindex', '-1'); }
          sc.appendChild(c);
        });
        /* salto invisible: ancho exacto de un set completo (incluye gap) */
        unit = sc.children[kids.length].offsetLeft - firstL;
        return true;
      }

      function edge() {
        var max = sc.scrollWidth - sc.clientWidth - 1;
        var loop = unit > 0;
        prevBtn.classList.toggle('hide', !loop && sc.scrollLeft <= 1);
        nextBtn.classList.toggle('hide', !loop && sc.scrollLeft >= max);
      }

      function step(ts) {
        if (!running) { return; }
        if (last) {
          sc.scrollLeft += (ts - last) / 1000 * SPEED;
          if (unit && sc.scrollLeft >= unit) { sc.scrollLeft -= unit; }
          edge();
        }
        last = ts;
        raf = requestAnimationFrame(step);
      }

      function start() {
        if (running || reduced || !mql.matches || !unit) { return; }
        running = true;
        last = 0;
        sc.classList.add('no-snap');
        raf = requestAnimationFrame(step);
      }

      function stop() {
        running = false;
        if (raf) { cancelAnimationFrame(raf); raf = null; }
        sc.classList.remove('no-snap');
      }

      function pause(delay) {
        stop();
        clearTimeout(resumeT);
        resumeT = setTimeout(start, delay || 2600);
      }

      function setup() {
        stop();
        clearTimeout(resumeT);
        sc.scrollLeft = 0;
        var ok = build();
        edge();
        if (ok) { start(); }
      }

      /* interacción del usuario: pausa y reanuda */
      ['touchstart', 'pointerdown', 'wheel'].forEach(function (ev) {
        sc.addEventListener(ev, function () { pause(2800); }, { passive: true });
      });
      sc.addEventListener('mouseenter', function () { stop(); });
      sc.addEventListener('mouseleave', function () { start(); });

      sc.addEventListener('scroll', edge, { passive: true });

      /* visibilidad: (re)construir al entrar; detener al salir.
         Cubre paneles de tabs ocultos (display:none → scrollWidth 0). */
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(function (es) {
          es.forEach(function (e) {
            if (e.isIntersecting) { setup(); } else { stop(); }
          });
        }, { threshold: .05 }).observe(sc);
      } else {
        setup();
      }

      /* cambio desktop↔móvil: reconstruir */
      var rT;
      window.addEventListener('resize', function () {
        clearTimeout(rT);
        rT = setTimeout(setup, 180);
      });
    });
  });
})();

/* ===== flujo del método: mide los centros de los nodos y los expone como
   variables CSS (--f0..--f3) para que el pulso haga pausa exacta en cada uno
   y el riel termine en el nodo 04 (segmentos por paso en styles.css). ===== */
(function () {
  var flows = document.querySelectorAll('.flow');
  if (!flows.length) { return; }
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var mql = window.matchMedia('(max-width: 900px)');

  function measure() {
    flows.forEach(function (fl) {
      fl.querySelectorAll('.flow-step').forEach(function (st, i) {
        var n = st.querySelector('.flow-node');
        if (!n) { return; }
        /* offset* ignora transforms (cascade/.pre aún sin revelar): posición real */
        var v = mql.matches
          ? st.offsetTop + n.offsetTop + n.offsetHeight / 2
          : st.offsetLeft + n.offsetLeft + n.offsetWidth / 2;
        fl.style.setProperty('--f' + i, v.toFixed(1) + 'px');
      });
    });
  }

  if (reduced) { return; }
  measure();
  var t;
  window.addEventListener('resize', function () {
    clearTimeout(t);
    t = setTimeout(measure, 180);
  }, { passive: true });
  if (document.fonts && document.fonts.ready) { document.fonts.ready.then(measure); }
  window.addEventListener('load', measure);
})();
