async function check() {
  try {
    const res = await fetch('http://localhost:3000/');
    const html = await res.text();
    console.log('Homepage status:', res.status);
    const cssMatches = html.match(/href="(\/_next\/static\/css\/[^"]+)"/g);
    console.log('CSS matches:', cssMatches);
    if (cssMatches) {
      for (const m of cssMatches) {
        const url = m.replace('href="', '').replace('"', '');
        const r = await fetch('http://localhost:3000' + url);
        console.log(url, 'status:', r.status);
      }
    } else {
      console.log('NO CSS LINK FOUND IN HTML! Head section:');
      const head = html.match(/<head>[\s\S]*?<\/head>/);
      console.log(head ? head[0].slice(0, 500) : 'No head');
    }
  } catch (e) {
    console.error('Error fetching:', e.message);
  }
}
check();
