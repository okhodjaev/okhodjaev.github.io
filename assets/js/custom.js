(function () {

  // === URL-маппинг EN ↔ RU ===
  var enToRu = {
    '/':                       '/ru/',
    '/institutional-ceiling/': '/ru/institutional-ceiling/',
    '/governance-residual/':   '/ru/governance-residual/',
    '/beyond-control/':        '/ru/beyond-control/',
    '/governance-briefs/':     '/ru/governance-briefs/',
  };
  var ruToEn = {};
  for (var k in enToRu) { ruToEn[enToRu[k]] = k; }

  // === Навигация для русских страниц ===
  var navRu = {
    '/institutional-ceiling/': { label: 'Институциональный потолок', href: '/ru/institutional-ceiling/' },
    '/governance-residual/':   { label: 'Остаток управляемости',     href: '/ru/governance-residual/' },
    '/beyond-control/':        { label: 'Серия эссе',                href: '/ru/beyond-control/' },
    '/governance-briefs/':     { label: 'Аналитические записки',     href: '/ru/governance-briefs/' },
    '/analysis/':              { label: 'Анализ',                    href: '/analysis/' },
    '/framework/':             { label: 'Методология',               href: '/framework/' },
    '/about/':                 { label: 'О проекте',                 href: '/about/' },
    '/media/':                 { label: 'В СМИ',                     href: '/media/' },
    '/contact/':               { label: 'Контакты',                  href: '/contact/' },
  };

  function normPath(href) {
    try {
      var p = new URL(href, location.origin).pathname;
      return p.endsWith('/') ? p : p + '/';
    } catch(e) { return href; }
  }

  var currentPath = normPath(location.pathname);
  var isRu = currentPath === '/ru/' || currentPath.startsWith('/ru/');

  document.addEventListener('DOMContentLoaded', function () {

    // === ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА ===
    var targetEn = isRu ? (ruToEn[currentPath] || '/') : currentPath;
    var targetRu = isRu ? currentPath : (enToRu[currentPath] || '/ru/');

    var sw = document.createElement('div');
    sw.style.cssText = [
      'position:fixed', 'top:13px', 'right:18px', 'z-index:10000',
      'display:flex', 'border-radius:3px', 'overflow:hidden',
      'border:1px solid #ccc',
      'box-shadow:0 1px 4px rgba(0,0,0,0.18)',
      'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif',
      'font-size:12px', 'letter-spacing:0.05em',
    ].join(';');

    function mkBtn(href, text, active) {
      var a = document.createElement('a');
      a.href = href; a.textContent = text;
      a.style.cssText = [
        'padding:5px 11px', 'text-decoration:none',
        'font-weight:' + (active ? '700' : '400'),
        'background:'   + (active ? '#1a1a1a' : '#f2f2f2'),
        'color:'        + (active ? '#fff'     : '#999'),
      ].join(';');
      return a;
    }

    sw.appendChild(mkBtn(targetEn, 'EN', !isRu));
    sw.appendChild(mkBtn(targetRu, 'РУ',  isRu));
    document.body.appendChild(sw);

    // === ПЕРЕВОД НАВИГАЦИИ (только на /ru/ страницах) ===
    if (isRu) {
      var links = document.querySelectorAll('nav.greedy-nav li a');
      links.forEach(function (a) {
        var p = normPath(a.getAttribute('href'));
        if (navRu[p]) {
          a.textContent = navRu[p].label;
          a.setAttribute('href', navRu[p].href);
        }
      });
    }

    // === КНОПКА «ВВЕРХ» ===
    var btn = document.createElement('button');
    btn.innerHTML = '↑';
    btn.style.cssText = [
      'display:none', 'position:fixed', 'bottom:32px', 'right:32px',
      'z-index:9999', 'width:46px', 'height:46px',
      'background:#222', 'color:#fff', 'border:none',
      'border-radius:50%', 'font-size:22px', 'line-height:46px',
      'text-align:center', 'cursor:pointer',
      'box-shadow:0 2px 10px rgba(0,0,0,0.4)',
    ].join(';');
    document.body.appendChild(btn);

    window.addEventListener('scroll', function () {
      btn.style.display = window.pageYOffset > 400 ? 'block' : 'none';
    });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

  });
})();
