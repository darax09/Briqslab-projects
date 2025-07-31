document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.menu-btn');
  const closeBtn = document.querySelector('.close-btn');
  const nav = document.querySelector('nav');

  if (!menuBtn || !closeBtn || !nav) {
    console.error('One or more elements not found: menuBtn, closeBtn, or nav');
    return;
  }

  menuBtn.addEventListener('click', function () {
    nav.classList.add('show');
  });

  closeBtn.addEventListener('click', function () {
    nav.classList.remove('show');
  });

  // Slider logic
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slider img');
  let index = 0;

  function showSlide(i) {
    if (i < 0) index = slides.length - 1;
    else if (i >= slides.length) index = 0;
    else index = i;
    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  prev.addEventListener('click', () => showSlide(index - 1));
  next.addEventListener('click', () => showSlide(index + 1));
  setInterval(() => showSlide(index + 1), 5000);
  showSlide(0);

  // Comment Modal Logic
  const modal = document.getElementById('commentModal');
  const closeModal = document.querySelector('.close-modal');
  const form = document.getElementById('commentForm');
  let currentPostId = null;

  document.querySelectorAll('.comment-btn').forEach(btn =>
    btn.addEventListener('click', e => {
      currentPostId = e.target.dataset.post;
      modal.classList.remove('hide');
    })
  );

  closeModal.addEventListener('click', () => modal.classList.add('hide'));
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.add('hide');
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('commentName').value;
    const text = document.getElementById('commentText').value;
    const postDiv = document.querySelector(`#${currentPostId} .comments`);
    const div = document.createElement('div');
    div.classList.add('comment');
    div.innerHTML = `<strong>${name}</strong><p>${text}</p>`;
    postDiv.appendChild(div);
    form.reset();
    modal.classList.add('hide');
  });
});