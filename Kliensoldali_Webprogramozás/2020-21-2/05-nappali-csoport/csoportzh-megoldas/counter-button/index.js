class CounterButton extends HTMLButtonElement {

  connectedCallback() {
    console.log('How are you world?');
    //? igazából ez a count se kellene ide, de talán valamennyivel szebb a kód tőle
    this.count = 0;
    this.innerText = this.count;
    this.dataset.number = this.count;

    this.addEventListener('click', () => {
      this.count++;
      this.innerText = this.count;
      this.dataset.number = this.count;
    });
  }

}

customElements.define('counter-button', CounterButton, { extends: 'button' });