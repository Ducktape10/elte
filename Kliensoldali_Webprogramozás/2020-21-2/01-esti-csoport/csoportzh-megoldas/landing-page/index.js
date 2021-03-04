document.addEventListener('scroll', _.throttle(() => {
  const nav = document.querySelector('nav');
  if (scrollY > 200) {
    nav.classList.add('navbar-scrolled');
  } else {
    // opcionális
    nav.classList.remove('navbar-scrolled');
  }

  const scrolledRatio = window.scrollY / (document.body.scrollHeight - document.body.clientHeight);
  document.querySelector('progress').value = scrolledRatio * 100;
}, 200));

const intersectionObserver = new IntersectionObserver((entries) => {
  entries.filter(
    (entry) => entry.isIntersecting
  ).forEach(
    (entry) => entry.target.classList.add('animate__animated', `animate__${entry.target.dataset.scrollAnimation}`)
  );
});

document.querySelectorAll('[data-scroll]').forEach(
  (elem) => intersectionObserver.observe(elem)
);