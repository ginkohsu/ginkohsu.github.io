/* Shared navigation loader; all pages use the same nav.html. */
(async function () {
  const mount = document.getElementById('nav-placeholder');
  if (!mount) return;
  try {
    const response = await fetch('nav.html');
    if (!response.ok) throw new Error(`Navigation HTTP ${response.status}`);
    mount.innerHTML = await response.text();
    const page = window.location.pathname.split('/').pop() || 'index.html';
    const oemkPages = ['oemk.html', 'oemk-0.html', 'oemk-1.html'];
    const menu = document.getElementById('oemk-menu');
    if (menu && oemkPages.includes(page)) menu.open = true;
    mount.querySelectorAll('a[href]').forEach(link => {
      const destination = new URL(link.getAttribute('href'), window.location.href);
      if (destination.pathname.split('/').pop() === page) {
        link.setAttribute('aria-current', 'page');
      }
    });
  } catch (error) {
    console.error('Could not load navigation:', error);
    mount.innerHTML = '<nav class="nav-fallback"><a href="index.html">Ginko Hsu</a> · <a href="oemk.html">OEMK</a> · <a href="info.html">Info</a></nav>';
  }
})();
