import { LightningElement, track, api } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import customStyle from '@salesforce/resourceUrl/customStyle';


export default class KImageCard extends LightningElement {

  @api showTitle = false;

  @api card = {
  };

  connectedCallback() {
    this.showTitle = false;
    /*
    Promise.all([
        loadStyle(this, customStyle)
    ]);
    */
  }
}