const contactDetails = {
  whatsapp: 'https://wa.me/254795678466',
  phone: '+254 795 678 466',
  email: 'mukombiwaithaka@gmail.com',
  instagram: 'https://instagram.com/waithaka.interiors',
  tiktok: 'https://tiktok.com/@waithakaz',
  facebook: 'https://facebook.com/waithakainteriors'
};

document.querySelectorAll('.footer-connect').forEach((connect) => {
  connect.innerHTML = `
    <h3>Connect</h3>
    <a class="social-link whatsapp-link" href="${contactDetails.whatsapp}" target="_blank" rel="noopener">
      <span>WhatsApp</span><strong>${contactDetails.phone}</strong>
    </a>
    <a class="social-link email-link" href="mailto:${contactDetails.email}">
      <span>Email</span><strong>${contactDetails.email}</strong>
    </a>
    <a class="social-link" href="${contactDetails.instagram}" target="_blank" rel="noopener">
      <span>Instagram</span><strong>@waithaka.interiors</strong>
    </a>
    <a class="social-link" href="${contactDetails.tiktok}" target="_blank" rel="noopener">
      <span>TikTok</span><strong>@waithakaz</strong>
    </a>
    <a class="social-link" href="${contactDetails.facebook}" target="_blank" rel="noopener">
      <span>Facebook</span><strong>/waithakainteriors</strong>
    </a>`;
});

document.querySelectorAll('a[href*="wa.me/"]').forEach((link) => {
  link.href = contactDetails.whatsapp;
});

document.querySelectorAll('.footer-brand > span').forEach((element) => {
  element.textContent = 'Nairobi, Kenya';
});

document.querySelectorAll('.footer-bottom > span').forEach((element) => {
  element.textContent = '© 2026 Waithaka Interiors. All rights reserved.';
});
