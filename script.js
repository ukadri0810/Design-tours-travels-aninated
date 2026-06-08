const mobileMenu = document.getElementById('mobileMenu');
const mainNav = document.getElementById('mainNav');
const packageModal = document.getElementById('packageModal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const form = document.getElementById('inquiryForm');
const formStatus = document.getElementById('formStatus');
const year = document.getElementById('year');

year.textContent = new Date().getFullYear();

mobileMenu.addEventListener('click', () => mainNav.classList.toggle('open'));
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => mainNav.classList.remove('open')));

document.querySelectorAll('.details-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    modalTitle.textContent = btn.dataset.title || 'Package Details';
    packageModal.classList.add('show');
    packageModal.setAttribute('aria-hidden', 'false');
  });
});

closeModal.addEventListener('click', closePackageModal);
packageModal.addEventListener('click', event => {
  if (event.target === packageModal) closePackageModal();
});

function closePackageModal(){
  packageModal.classList.remove('show');
  packageModal.setAttribute('aria-hidden', 'true');
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get('name');
  const phone = data.get('phone');
  const destination = data.get('destination') || 'Not selected';
  const travelType = data.get('travelType') || 'Not selected';
  const travelers = data.get('travelers') || 'Not mentioned';
  const date = data.get('date') || 'Not mentioned';
  const message = data.get('message') || 'No message';

  const whatsappMessage = `New Inquiry from Design Tours and Travels Website%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0ADestination: ${encodeURIComponent(destination)}%0ATravel Type: ${encodeURIComponent(travelType)}%0ATravelers: ${encodeURIComponent(travelers)}%0APreferred Date: ${encodeURIComponent(date)}%0AMessage: ${encodeURIComponent(message)}`;

  formStatus.textContent = 'Inquiry ready. Opening WhatsApp...';
  window.open(`https://wa.me/910000000000?text=${whatsappMessage}`, '_blank');
  form.reset();
});
