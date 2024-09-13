import { api, LightningElement } from 'lwc';

export default class Snackbar extends LightningElement {

    snackbarMessage;

    @api
    showSnackBar(message) {
        // Get the snackbar class
        const snackbar = this.template.querySelector('.snackbar');

        this.snackbarMessage = message;
      
        // Add the "show" class to class list
        snackbar.classList.add('show');
      
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ snackbar.classList.remove('show'); }, 2800);
      }
}