export default function NoFlashScript() {
  const code = `(() => {
  try {
    var d = document.documentElement;
    var ls = localStorage.getItem('theme');
    var systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var dark = ls ? ls === 'dark' : systemDark;
    if (dark) d.classList.add('dark'); else d.classList.remove('dark');
  } catch {}
})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}


