document.addEventListener('DOMContentLoaded', () => {
  initAOS();
  initForms();
  initPhoneInput();
  initYear();
  initFAQ();
  initCounters();
  initModals();
  initUTMs();
});

/* ==========================================
   AOS
   ========================================== */
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 700,
      easing: 'ease-out',
      once: true,
      disableMutationObserver: true
    });
  }
}



/* ==========================================
   FAQ ACCORDION
   ========================================== */
function initFAQ() {
  const items = document.querySelectorAll('.accordion-item');
  items.forEach(item => {
    const btn = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    
    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all others
      items.forEach(otherItem => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.accordion-content').style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
}

/* ==========================================
   COUNTERS
   ========================================== */
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-target'));
        animateCounter(entry.target, target, 600);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el, target, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    el.innerHTML = Math.floor(progress * target);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

/* ==========================================
   FORMULÁRIOS
   ========================================== */


function initForms() {
  document.querySelectorAll('form[data-form]').forEach(form => {
    form.addEventListener('submit', handleFormSubmit);
    
    // Floating label logic setup if needed
    const inputs = form.querySelectorAll('.form-input');
    inputs.forEach(input => {
      input.addEventListener('focus', () => {
        const label = form.querySelector(`label[for="${input.id}"]`);
        if (label) label.style.transform = 'translateY(-2px) scale(0.98)';
      });
      input.addEventListener('blur', () => {
        const label = form.querySelector(`label[for="${input.id}"]`);
        if (label && !input.value) label.style.transform = 'translateY(0) scale(1)';
      });
    });
  });
}

async function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const btn = form.querySelector('[type="submit"]');
  const feedback = form.querySelector('.form-feedback');

  let valid = true;
  form.querySelectorAll('[required]').forEach(field => {
    field.style.borderColor = 'rgba(58,191,181,0.3)';

    if (!field.value.trim()) {
      field.style.borderColor = '#ef4444';
      valid = false;
    }

    if (field.type === 'tel') {
      const iti = field._iti;
      if (iti && !iti.isValidNumber()) {
        field.style.borderColor = '#ef4444';
        valid = false;
      }
    }
  });

  if (!valid) {
    showFeedback(feedback, 'error', 'Por favor, preencha todos os campos corretamente.');
    return;
  }

  const nome = form.querySelector('[name="nome"]')?.value || '';

  const phone = form.querySelector('input[type="tel"]');
  if (phone && phone._iti) {
    phone.value = phone._iti.getNumber();
  }

  const originalText = btn.textContent;
  btn.disabled = true;
  btn.textContent = 'Enviando...';

  try {
    const res = await fetch(form.getAttribute('action') || window.location.pathname, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString()
    });

    if (res.ok) {
      if (typeof fbq === 'function') fbq('track', 'Lead');
      if (typeof dataLayer !== 'undefined') dataLayer.push({ event: 'generate_lead', form_name: form.getAttribute('name') });

      const interesseEl = form.querySelector('[name="interesse"]');
      const interesse = interesseEl ? interesseEl.value : '';
      
      let primeiroNome = nome.trim().split(' ')[0];
      if (primeiroNome) {
        primeiroNome = primeiroNome.charAt(0).toUpperCase() + primeiroNome.slice(1).toLowerCase();
      }

      let mensagemWa = '';
      if (interesse === 'Adulto') {
        mensagemWa = `Olá, me chamo ${primeiroNome} e tenho interesse em agendar uma consulta para um adulto.`;
      } else {
        mensagemWa = `Olá, me chamo ${primeiroNome} e tenho interesse em agendar uma consulta para uma ${interesse.toLowerCase()}.`;
      }

      const foneMariana = '5511985879529';
      const whatsappUrl = `https://wa.me/${foneMariana}?text=${encodeURIComponent(mensagemWa)}`;

      window.location.href = whatsappUrl;
      return;
    } else {
      throw new Error('Erro no servidor');
    }
  } catch (error) {
    showFeedback(feedback, 'error', 'Houve um erro ao enviar. Tente novamente mais tarde.');
  } finally {
    btn.disabled = false;
    btn.textContent = originalText;
  }
}

function showFeedback(el, type, msg) {
  if (!el) return;
  el.style.display = 'block';
  el.style.padding = '12px 16px';
  el.style.marginBottom = '24px';
  el.style.borderRadius = '8px';
  el.textContent = msg;
  
  if (type === 'success') {
    el.style.backgroundColor = '#ecfdf5';
    el.style.color = '#065f46';
    el.style.border = '1px solid #a7f3d0';
  } else {
    el.style.backgroundColor = '#fef2f2';
    el.style.color = '#991b1b';
    el.style.border = '1px solid #fecaca';
  }

  setTimeout(() => {
    el.style.display = 'none';
    el.textContent = '';
  }, 5000);
}

/* ==========================================
   TELEFONE INTERNACIONAL
   ========================================== */
function initPhoneInput() {
  if (typeof intlTelInput === 'undefined') return;

  document.querySelectorAll('input[type="tel"]').forEach(input => {
    input._iti = intlTelInput(input, {
      initialCountry: 'br',
      preferredCountries: ['br', 'us', 'pt'],
      separateDialCode: true,
      strictMode: true,
      loadUtilsOnInit: 'https://cdn.jsdelivr.net/npm/intl-tel-input@24.6.0/build/js/utils.js'
    });
  });
}

/* ==========================================
   UTILS
   ========================================== */
function initYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ==========================================
   MODAL
   ========================================== */
function initModals() {
  document.querySelectorAll('[data-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = document.getElementById(btn.dataset.modal);
      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  document.querySelectorAll('.modal-overlay').forEach(modal => {
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) closeBtn.addEventListener('click', () => closeModal(modal));
    modal.addEventListener('click', (e) => { 
      if (e.target === modal) closeModal(modal); 
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const active = document.querySelector('.modal-overlay.active');
      if (active) closeModal(active);
    }
  });
}

function closeModal(modal) {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

/* ==========================================
   UTMS
   ========================================== */
function initUTMs() {
  const params = new URLSearchParams(window.location.search);
  const utms = ['utm_source', 'utm_medium', 'utm_campaign', 'gclid', 'fbclid'];
  
  utms.forEach(utm => {
    const value = params.get(utm);
    if (value) {
      document.querySelectorAll(`input[name="${utm}"]`).forEach(input => {
        input.value = value;
      });
    }
  });
}
