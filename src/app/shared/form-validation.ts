export class FormValidation {

    public editMode = false;
    public showMessage = false;
    public valid = false;
    public alreadyNew = true;
    public message = '';
    public typeMessage = 'info';

    constructor() { }

    validate(message: string) {
        this.valid = true;
        this.showMessage = true;
        this.editMode = true;
        this.message = message;
        if (!this.message || this.message === '') {
            this.message = 'Sucesso!';
        }
        this.typeMessage = 'success';
    }

    invalidate(message: string, error?: any) {
        this.valid = false;
        this.showMessage = true;
        this.message = message;
        if (error && error.status) {
            this.message = error.error;
        } else if (error && error.status === 500) {
            this.message == 'Erro inesperado'
        }
        this.typeMessage = 'danger';
    }

    reset() {
        this.editMode = false;
        this.showMessage = false;
        this.valid = false;
        this.alreadyNew = true;
        this.message = '';
        this.typeMessage = 'info';
    }
}
