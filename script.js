const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const tourModal = document.querySelector('.tour-modal');
const tourButton = document.querySelector('[data-tour]');
const modalClose = document.querySelector('.modal-close');
const featuredProjects = document.querySelector('#featuredProjects');

const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 24);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.classList.toggle('active', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const closeTour = () => {
  tourModal.hidden = true;
  document.body.style.overflow = '';
};

tourButton.addEventListener('click', () => {
  tourModal.hidden = false;
  document.body.style.overflow = 'hidden';
  modalClose.focus();
});
modalClose.addEventListener('click', closeTour);
tourModal.addEventListener('click', (event) => {
  if (event.target === tourModal) closeTour();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !tourModal.hidden) closeTour();
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const renderFeaturedProjects = (projects) => {
  featuredProjects.innerHTML = projects.map((project) => `
    <a class="project-card reveal visible" href="${project.link || '#contact'}">
      <div class="project-image" style="background-image: linear-gradient(0deg, rgba(10,10,10,.9), transparent 62%), url('${project.image}')"></div>
      <div class="project-meta"><p>${project.category}</p><h3>${project.title}</h3><span>${project.caption} <b>↗</b></span></div>
    </a>
  `).join('');
};

fetch('projects.json')
  .then((response) => {
    if (!response.ok) throw new Error('Featured project data unavailable');
    return response.json();
  })
  .then(renderFeaturedProjects)
  .catch(() => {
    featuredProjects.innerHTML = '<p class="projects-loading">Featured projects are unavailable right now.</p>';
  });
