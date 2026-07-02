function showPage(pageId) {
  const activePage = document.querySelector('.page.active');
  if (activePage && activePage.id === pageId) {
    return;
  }

  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
    page.setAttribute('aria-hidden', 'true');
  });

  const nextPage = document.getElementById(pageId);
  if (nextPage) {
    nextPage.classList.add('active');
    nextPage.setAttribute('aria-hidden', 'false');

    const heading = nextPage.querySelector('[tabindex="-1"]');
    if (heading) {
      heading.focus();
    }
  }

  document.querySelectorAll('nav button').forEach(button => {
    button.removeAttribute('aria-current');
    if (button.dataset.target === pageId) {
      button.setAttribute('aria-current', 'page');
    }
  });
}

function surprise() {
  for (let i = 0; i < 50; i++) {
    const kiss = document.createElement('div');
    kiss.classList.add('kiss');
    kiss.innerHTML = '<span class="emoji">💋</span>';
    kiss.style.left = `${Math.random() * 100}vw`;
    kiss.style.bottom = '0px';
    document.body.appendChild(kiss);

    setTimeout(() => {
      kiss.remove();
    }, 4000);
  }

  confettiOnLoad(120);

  document.getElementById('kisses').innerHTML = `
<div class="kiss-card">
  <img src="photos/stickers/sticker9.png" alt="Happy sticker" class="kiss-sticker">
  <div>
    <h2>I choose you in every universe,<br>every lifetime,<br>and every version of us.</h2>
    <p>Happy Birthday My Love 💚</p>
  </div>
</div>
`;
}

function confettiOnLoad(count = 80) {
  const container = document.getElementById('confetti-container');
  const colors = ['#f47b9d', '#8bd3ff', '#ffd87d', '#b6ffca', '#e9d2ff', '#ffa8b6', '#f9b8ff', '#6ad1ff'];

  for (let i = 0; i < count; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    const size = Math.random() * 10 + 8;
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size * 1.4}px`;
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.top = `-${Math.random() * 20 + 10}px`;
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.opacity = `${Math.random() * 0.4 + 0.6}`;
    confetti.style.animationDelay = `${Math.random() * 1}s`;
    confetti.style.animationDuration = `${Math.random() * 1.2 + 3.2}s`;
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    container.appendChild(confetti);

    confetti.addEventListener('animationend', () => {
      confetti.remove();
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  confettiOnLoad();
});