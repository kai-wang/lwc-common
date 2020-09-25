import { LightningElement, api } from 'lwc';

export default class KDatatableRadioType extends LightningElement {
  @api rowId;
  @api checked = false;
  @api name;
  @api label;

  handleChange(event) {
    event.preventDefault();
    
    const evt = CustomEvent('radiochange', {
      composed: true,
      bubbles: true,
      cancelable: true,
      detail: {
        rowId: this.rowId,
        name: this.name
      },
    });
    this.dispatchEvent(evt);
  }
}