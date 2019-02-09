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

    invalidate(error: any) {
        this.valid = false;
        this.showMessage = true;
        if (error.status === 422) {
            this.message = `${error.error}: Verifique os campos destacados!`;
        } else {
            this.message = error; 
        }
        if (!this.message || this.message === '') {
            this.message = 'Erro inesperado!';
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
