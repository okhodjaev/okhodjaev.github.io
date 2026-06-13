document.addEventListener('DOMContentLoaded', function () {
  var btn = document.createElement('button');
  btn.innerHTML = '↑';
  btn.title = 'Back to top';
  btn.style.cssText = [
    'display:none',
    'position:fixed',
    'bottom:32px',
    'right:32px',
    'z-index:9999',
    'width:46px',
    'height:46px',
    'background:#222',
    'color:#fff',
    'border:none',
    'border-radius:50%',
    'font-size:22px',
    'line-height:46px',
    'text-align:center',
    'cursor:pointer',
    'box-shadow:0 2px 10px rgba(0,0,0,0.4)',
    'transition:opacity 0.25s'
  ].join(';');
  document.body.appendChild(btn);

  window.addEventListener('scroll', function () {
    btn.style.display = window.pageYOffset > 400 ? 'block' : 'none';
  });
  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
