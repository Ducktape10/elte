// document.querySelectorAll('a') -> $('a')

console.log($('.my-3'));

// ?number=42&name=Robin
//  number=42&name=Robin

const obj = {
  number: 42,
  name: 'Robin'
};

console.log($.param(obj));
console.log(new URLSearchParams(obj).toString());


document.addEventListener('scroll', _.throttle(() => {

  //? ha legörgetünk 200px-nyit, akkor alkalmazzuk a bg-light stílusosztályt a nav elemen
  //? amúgy bg-dark
  const navDoc = document.querySelector("nav");
  if (scrollY >= 200) {
    navDoc.classList.add("bg-light");
    navDoc.classList.remove("bg-dark");
  } else {
    navDoc.classList.add("bg-dark");
    navDoc.classList.remove("bg-light");
  }
  // console.log(scrollY);
  // console.log(window.scrollY);

  const scrolled = scrollY; // most hol járunk
  const viewportHeight = document.body.clientHeight; // dokumentum kliens magassága
  const windowHeight = window.innerHeight; // az ablak belső magassága
  const scrolledRatio = scrolled / (viewportHeight - windowHeight);
  document.querySelector('progress').value = scrolledRatio * 100;
}, 200));


const animationObserver = new IntersectionObserver((entries) => {

  //! html-be
  //? pl: data-scroll-animation="wobble"

  entries.filter(
    (entry) => entry.isIntersecting
  ).forEach(
    (entry) => {
      //? data-scroll-animation legyen az osztály
      //! template string
      const elem = entry.target;
      const animation = elem.dataset.scrollAnimation;
                   // elem.dataset['scroll-animation']
      elem.classList.add('animate__animated', `animate__${animation}`);
      setTimeout(() => {
        elem.classList.remove('animate__animated', `animate__${animation}`);
      }, 1000);
    }
  );
});

//? data-scroll-animation
//! selectort megváltoztatni
document.querySelectorAll('not([data-scroll-animation=""])').forEach(
  (elem) => animationObserver.observe(elem)
);