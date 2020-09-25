import { LightningElement, api } from 'lwc';

export default class KDatatablePicklistType extends LightningElement {
  @api rowId;
  @api name;
  @api options = [];

  handleChange(event) {
    event.preventDefault();

    const evt = CustomEvent('picklistchange', {
      composed: true,
      bubbles: true,
      cancelable: true,
      detail: {
        rowId: this.rowId,
        name: this.name,
        value: event.target.value
      },
    });
    this.dispatchEvent(evt);
  }
}