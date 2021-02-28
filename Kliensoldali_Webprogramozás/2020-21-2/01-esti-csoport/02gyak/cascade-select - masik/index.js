class CascadeSelect {
  constructor(elem) {
      this.typeSelect = elem;
  }

  init() {
      this.createAnimalSelect();
      this.changeTypeSelect();
      this.typeSelect.addEventListener('change', this.createAnimalSelect.bind(this));
  }

  createAnimalSelect() {
      const animals = document.querySelectorAll("option");
      const petgroup = document.getElementById('petgroup');
      let compare = '';
      if (petgroup) {
          compare = this.typeSelect.value;
      }
      const select = document.createElement('select');
      select.id = 'petgroup';
      let tmp = '<option>Please choose</option>';
      animals.forEach(
          (animal) => {
              if (!petgroup) {
                  tmp += `<option value="${animal.value}" data-group="${animal.parentElement.label}">${animal.innerText}</option>`;
              } else {
                  if (animal.dataset.group == compare) {
                      tmp += `<option value="${animal.value}" data-group="${animal.dataset.group}">${animal.innerText}</option>`;
                  } else {
                      if (animal.dataset.group) {
                          tmp += `<option value="${animal.value}" data-group="${animal.dataset.group}" style="display:none">${animal.innerText}</option>`;
                      }
                  }
              }
          }
      );

      select.innerHTML += tmp;
      if (!petgroup) {
          this.typeSelect.insertAdjacentElement('afterend', select);
      } else {
          petgroup.innerHTML = tmp;
      }
  }

  changeTypeSelect() {
      const animals = document.querySelectorAll("optgroup");
      let tmp = '<option>Please choose</option>';

      animals.forEach(
          (group) => {
              tmp += `<option>${group.label}</option>`;
          }
      );

      this.typeSelect.innerHTML = tmp;
  }
}

// ha változik a tí­pus, változzon az állat

const elem = document.querySelector('select');
const cascadeSelect = new CascadeSelect(elem);
cascadeSelect.init();

