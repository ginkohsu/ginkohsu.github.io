/* Shared navigation. Works on GitHub Pages or any normal HTTP(S) site. */
(async function () {
  const mount = document.getElementById('nav-placeholder');
  if (!mount) return;
  try {
    const response = await fetch('nav.html');
    if (!response.ok) throw new Error(`Navigation HTTP ${response.status}`);
    mount.innerHTML = await response.text();

    const page = window.location.pathname.split('/').pop() || 'index.html';
    const oemkPages = ['oemk.html', 'oemk-0.html', 'oemk-1.html', 'oemk-proxies.html'];
    const workPages = [
      'once.html', 'gate.html', 'demian.html', 'witch.html',
      'dormant.html', 'mayfly.html', 'water.html', 'painting.html'
    ];
    const researchMenu = document.getElementById('oemk-menu');
    const worksMenu = document.getElementById('works-menu');
    if (researchMenu && oemkPages.includes(page)) researchMenu.open = true;
    if (worksMenu && workPages.includes(page)) worksMenu.open = true;

    mount.querySelectorAll('a[href]').forEach(link => {
      const destination = new URL(link.getAttribute('href'), window.location.href);
      if (destination.origin === window.location.origin &&
          destination.pathname.split('/').pop() === page) {
        link.setAttribute('aria-current', 'page');
      }
    });
  } catch (error) {
    console.error('Could not load navigation:', error);
    mount.innerHTML = '<nav class="nav-fallback" aria-label="Main navigation"><a href="index.html">Ginko Hsu</a> · <a href="oemk.html">Of No Origin</a> · <a href="info.html">Info / CV</a></nav>';
  }
})();
