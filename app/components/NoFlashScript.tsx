export default function NoFlashScript() {
  const code = `(() => {
  try {
    var d = document.documentElement;
    d.classList.add('dark');
    try { localStorage.setItem('theme', 'dark'); } catch {}
  } catch {}
})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}


