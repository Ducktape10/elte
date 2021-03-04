class AnimalImage {
  constructor(elem) {
    this.image = document.querySelector(`#${elem.innerHTML.toLowerCase()}Image`);
    this.image.addEventListener('click', this.handleImageClick.bind(this));
    elem.insertAdjacentElement('afterend', this.image);
  }

  handleImageClick() {
    // a html-ben 15vw van, aminél a 20 több
    this.image.style.width = '20vw';
  }
}

document.querySelectorAll('.animal-name').forEach(
  (elem) => new AnimalImage(elem)
);


//! Ez legyen legalul! Ez alá már ne írj semmit!
// imported from BS
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});