class Modal {
    constructor(buttonId, modalId) {

        this.$modalOpenerElement = $(`#${buttonId}`);
        this.$modalElement = $(`#${modalId}`);
        this.$modalOverlay = $("#modal-overlay");

        this.start();
    }

    start() {

        this.addEvents();
    }

    toggleClassModal() {
        if (this.$modalElement.hasClass('active')) {

            this.$modalElement.toggleClass('active');
            this.$modalOverlay.toggleClass('active');
            this.$modalElement.toggleClass('inactive');

            setTimeout(() => {
                this.$modalElement.hide();
                this.$modalElement.toggleClass('inactive');

            }, 200);
            return;
        }

        this.$modalElement.show();
        this.$modalElement.toggleClass('active');
        this.$modalOverlay.toggleClass('active');
    }

    addEvents() {

        this.$modalOpenerElement.click(() => {
            this.toggleClassModal();
        })

        this.$modalOverlay.click(() => {
            this.toggleClassModal();
        })

    }

}

new Modal('view-profile', 'custom-modal');