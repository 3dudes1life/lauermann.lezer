const families = [
  ['LAUERMANN', 'The American bridge', 'Charles Joseph Lauermann through Peter Lauermann, with earlier Saarland leads awaiting parish evidence.', 'lead'],
  ['LEZER', 'East Prussian origins', 'Anamae Lezer’s line, with Kurkau and Neidenburg research connecting Lezer and Grabinski families.', 'probable'],
  ['LIMPERICH', 'A German village question', 'Margaretha Limperich and the Herschbach–Assenmacher bridge.', 'lead'],
  ['GROSSMANN', 'Through Sp oo & Freywald', 'Anne Katherine Grossmann’s line across Grossmann, Sp oo, and Freywald families.', 'probable'],
  ['BRENNAN', 'The adopted & biological lines', 'The Brennan, Walsh, and Warren lines connected to Edward J. Lauermann.', 'lead'],
  ['CONNECTED LINES', 'Still unfolding', 'Herschbach, Assenmacher, Walsh, Warren, Grabinski, and more.', 'lead']
];
const research = [
  ['Lauermann', '~1702 Nicolaus / Nicolas Peter Lauermann', 'lead', 'Read until the 1794 baptism and preceding parish chain are found.'],
  ['Sp oo', '~1756 Richardus / Richard Sp oo', 'lead', 'A locality and original parish record are needed.'],
  ['Grossmann', '1784 Mathias Grossmann', 'probable', 'Pending an original parish linkage.'],
  ['Freywald', '1789 Gerdrudis Freywald', 'probable', 'Pending an original parish linkage.'],
  ['Herschbach', '1809 Heinrich Herschbach', 'probable', 'Bridge candidate; exact German origin still to prove.'],
  ['Lezer / Grabinski', '~1881 Fred Lezer', 'lead', 'East Prussian / Polish investigation in progress.'],
  ['Brennan / Walsh / Warren', 'Claimed 1682 James Warren', 'lead', 'Tree-only extension; visibly unverified.']
];
document.querySelector('#familyGrid').innerHTML = families.map(([name, title, copy, status], i) => `<article class="family-card ${status}"><span>0${i + 1}</span><div><p>${name}</p><h3>${title}</h3><small>${copy}</small></div><b>↗</b></article>`).join('');
const renderRows = filter => document.querySelector('#researchTable').innerHTML = research.filter(r => filter === 'all' || r[2] === filter).map(([line, ancestor, status, note]) => `<article><div><span class="status ${status}">${status === 'lead' ? 'RESEARCH LEAD' : status.toUpperCase()}</span><h3>${line}</h3></div><div><strong>${ancestor}</strong><p>${note}</p></div><a href="#records" aria-label="View ${line} records">→</a></article>`).join('');
renderRows('all');
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('[data-filter]').forEach(b => b.classList.toggle('active', b === button)); renderRows(button.dataset.filter); }));
const menu = document.querySelector('.menu'); menu.addEventListener('click', () => { const open = document.body.classList.toggle('nav-open'); menu.setAttribute('aria-expanded', open); });
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => document.body.classList.remove('nav-open')));
