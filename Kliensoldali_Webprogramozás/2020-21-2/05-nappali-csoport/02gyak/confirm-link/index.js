class ConfirmLink {
    constructor(selector) {
        this.link = document.querySelector(selector);
    }

    init() {
        this.link.addEventListener('click', this.onClick);
    }

    onClick(e) {
        // confirm ablak
        // elfogadok -> elnavigál
        // ha nem, akkor maradok

        let yesOrNo = confirm("Szeretnél elmenni az oldalra?");
        if (!yesOrNo) {
            e.preventDefault();
        }
    }

}

const confirmLink = new ConfirmLink('a');
confirmLink.init();