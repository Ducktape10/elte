class DefinitionTooltip {
  constructor(elem) {
    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-question');

    const button = document.createElement('button');
    button.classList.add('btn', 'btn-secondary');
    button.dataset.bsToggle = 'tooltip';
    button.dataset.bsPlacement = 'top';
    button.title = elem.dataset.definition;

    button.appendChild(icon);
    elem.insertAdjacentElement('afterend', button);
  }
}

document.querySelectorAll('[data-definition]').forEach(
  (elem) => new DefinitionTooltip(elem)
);

//! Ez legyen legalul! Ez alá már ne írj semmit!
// imported from BS
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});