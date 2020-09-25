import { LightningElement, api } from 'lwc';

export default class KDatatableBtnGroup extends LightningElement {
  @api rowId;
  @api buttons = [{}];

  handleClick(event) {
    event.preventDefault();

    console.log(event.currentTarget.dataset.item);
    
    const evt = CustomEvent('groupclick', {
      composed: true,
      bubbles: true,
      cancelable: true,
      detail: {
        rowId: this.rowId,
        name: event.currentTarget.dataset.item
      },
    });
    this.dispatchEvent(evt);
  }
}