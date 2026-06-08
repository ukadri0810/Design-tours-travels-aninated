const mobileMenu = document.getElementById('mobileMenu');
const mainNav = document.getElementById('mainNav');
const modeButtons = [...document.querySelectorAll('[data-mode-trigger]')];
const panels = [...document.querySelectorAll('[data-mode-panel]')];
const packageModal = document.getElementById('packageModal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const form = document.getElementById('inquiryForm');
const formStatus = document.getElementById('formStatus');
const year = document.getElementById('year');

year.textContent = new Date().getFullYear();

mobileMenu?.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

mainNav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

function setMode(mode){
  document.body.classList.toggle('mode-pilgrimage', mode === 'pilgrimage');
  document.body.classList.toggle('mode-travel', mode === 'travel');

  modeButtons.forEach(btn => {
    const active = btn.dataset.modeTrigger === mode;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  panels.forEach(panel => {
    panel.classList.toggle('active', panel.dataset.modePanel === mode);
  });
}

modeButtons.forEach(btn => {
  btn.addEventListener('click', () => setMode(btn.dataset.modeTrigger));
});

document.querySelectorAll('.details-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    modalTitle.textContent = btn.dataset.title || 'Package Details';
    packageModal.classList.add('show');
    packageModal.setAttribute('aria-hidden', 'false');
  });
});

closeModal?.addEventListener('click', closePackageModal);
packageModal?.addEventListener('click', event => {
  if (event.target === packageModal) closePackageModal();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closePackageModal();
});

function closePackageModal(){
  packageModal.classList.remove('show');
  packageModal.setAttribute('aria-hidden', 'true');
}

form?.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);

  const fields = {
    name: data.get('name') || '',
    phone: data.get('phone') || '',
    email: data.get('email') || '',
    travelType: data.get('travelType') || '',
    destination: data.get('destination') || '',
    travelers: data.get('travelers') || '',
    date: data.get('date') || '',
    budget: data.get('budget') || '',
    message: data.get('message') || ''
  };

  const lines = [
    'New inquiry from Design Tours and Travels website',
    '',
    `Name: ${fields.name}`,
    `Phone: ${fields.phone}`,
    `Email: ${fields.email || 'Not provided'}`,
    `Service: ${fields.travelType}`,
    `Destination / Package: ${fields.destination || 'Not specified'}`,
    `Travelers: ${fields.travelers || 'Not specified'}`,
    `Preferred Date: ${fields.date || 'Not specified'}`,
    `Budget: ${fields.budget || 'Not specified'}`,
    `Message: ${fields.message || 'No additional message'}`
  ];

  const whatsappUrl = `https://wa.me/910000000000?text=${encodeURIComponent(lines.join('\n'))}`;
  formStatus.textContent = 'Opening WhatsApp with your inquiry...';
  window.open(whatsappUrl, '_blank', 'noopener');
  form.reset();
});

setMode('travel');
