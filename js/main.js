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
  var tipo = document.getElementById('cf-tipo');
  var msg = document.getElementById('cf-msg');
  var WA = '573103082226';
  var EMAIL = 'gerencia@inmartseguros.com';

  function compose() {
    var lines = ['Hola, soy ' + nombre.value.trim() + ', ' + tipo.value + '.'];
    lines.push(msg.value.trim());
    var extra = [];
    if (tel.value.trim()) { extra.push('Tel: ' + tel.value.trim()); }
    if (mail.value.trim()) { extra.push('Correo: ' + mail.value.trim()); }
    if (extra.length) { lines.push('(' + extra.join(' · ') + ')'); }
    return lines.join('\n');
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
    var subject = 'Cotización web — ' + nombre.value.trim();
    location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(compose());
  });

  /* CTAs con data-msg: prellenan el formulario antes de llegar a Contacto */
  document.addEventListener('click', function (e) {
    var link = e.target.closest ? e.target.closest('[data-msg]') : null;
    if (!link) { return; }
    msg.value = link.getAttribute('data-msg');
    msg.setAttribute('aria-invalid', 'false');
    var t = link.getAttribute('data-tipo');
    if (t) {
      for (var i = 0; i < tipo.options.length; i++) {
        if (tipo.options[i].value === t) { tipo.selectedIndex = i; break; }
      }
    }
  });
})();
