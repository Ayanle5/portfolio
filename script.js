const languages = [
  { name: 'HTML5' },
  { name: 'CSS3' },
  { name: 'JavaScript' },
  { name: 'Python' },
  { name: 'C#' },
  { name: 'SQL' },
];

const tools = [
  { name: 'Unity' },
  { name: 'Git' },
  { name: 'GitHub' },
  { name: 'VS Code' },
  { name: 'Netlify' },
  { name: 'Chrome DevTools' },
  { name: 'Figma' },
];

function buildTrack(id, items) {
  const track = document.getElementById(id);
  const all = [...items, ...items, ...items, ...items];
  all.forEach(s => {
    const pill = document.createElement('div');
    pill.className = 'skill-pill';
    pill.innerHTML = `<span class="skill-dot"></span>${s.name}`;
    track.appendChild(pill);
  });
}

buildTrack('track1', languages);
buildTrack('track2', tools);
