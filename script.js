// Highlight active nav link on scroll
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-links a');

function onScroll() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', onScroll);

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      e.preventDefault();
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Certificate modal logic
  const modal = document.getElementById('certificate-modal');
  const modalImg = document.getElementById('certificate-modal-img');
  const modalCaption = document.getElementById('certificate-modal-caption');
  const modalClose = document.getElementById('certificate-modal-close');
  const thumbs = document.querySelectorAll('.certificate-thumb');

  thumbs.forEach(function(thumb) {
    thumb.addEventListener('click', function() {
      const imgSrc = thumb.getAttribute('data-img');
      const label = thumb.querySelector('.certificate-label')?.textContent || '';
      modal.style.display = 'flex';
      modalImg.src = imgSrc;
      modalCaption.textContent = label;
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.style.display = 'none';
    modalImg.src = '';
    modalCaption.textContent = '';
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
  document.addEventListener('keydown', function(e) {
    if (modal.style.display === 'flex' && (e.key === 'Escape' || e.key === 'Esc')) {
      closeModal();
    }
  });
}); 