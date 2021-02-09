console.log($('a'));

// { ... } -> ?a=s&b=k

const obj = {
    number: 42,
    name: 'Robin'
};

console.log($.param(obj));

console.log(new URLSearchParams(obj).toString());

document.addEventListener('scroll', _.throttle((e) => {
    // nav elem -> Y koordinátán scrollozok
    // 200 px felett bg-light osztály
    // 200 px alatta bg-dark osztály

    // const nav = $('nav');

    if (window.scrollY >= 200) {
        document.querySelector('nav').classList.add('bg-light');
        document.querySelector('nav').classList.remove('bg-dark');
    } else {
        document.querySelector('nav').classList.add('bg-dark');
        document.querySelector('nav').classList.remove('bg-light');
    }

    const scrolled = window.scrollY; // mennyit/hova scrolloztam
    const viewportHeight = document.body.clientHeight; // kliensnek a magassága
    const windowHeight = window.innerHeight; // ablak belső magassága
    const scrolledRatio = scrolled / (viewportHeight - windowHeight);
    document.querySelector('progress').value = scrolledRatio * 100;
}, 100));

const animationObserver = new IntersectionObserver((entries) => {
    // data-scroll-animation="fadeInUp"

    entries.filter(
        (entry) => entry.isIntersecting
    ).forEach(
        // template string
        // data-scroll-animation -> .dataset.scrollAnimation
        // csak ahol van data-scroll-animation
        (entry) => entry.target.classList.add('animate__animated', `animate__${entry.target.dataset.scrollAnimation}`)
    );
});

document.querySelectorAll('.my-3').forEach(
    (elem) => animationObserver.observe(elem)
);