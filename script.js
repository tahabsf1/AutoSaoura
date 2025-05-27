const discoverBtn = document.getElementById('discoverBtn');
const welcomeScreen = document.getElementById('welcomeScreen');
const mainContent = document.getElementById('mainContent');
const carsSection = document.getElementById('carsSection');

discoverBtn.addEventListener('click', () => {
  welcomeScreen.style.display = 'none';
  mainContent.style.display = 'flex';
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

for (let i = 1; i <= 6; i++) {
  const card = document.createElement('div');
  card.className = 'car-card';

  const imgPlaceholder = document.createElement('div');
  imgPlaceholder.className = 'car-image-placeholder';

  const title = document.createElement('h3');
  title.className = 'car-title';
  title.textContent = `سيارة رقم ${i}`;

  const desc = document.createElement('p');
  desc.className = 'car-description';
  desc.textContent = 'مواصفات مختصرة للسيارة';

  card.appendChild(imgPlaceholder);
  card.appendChild(title);
  card.appendChild(desc);

  carsSection.appendChild(card);
}
