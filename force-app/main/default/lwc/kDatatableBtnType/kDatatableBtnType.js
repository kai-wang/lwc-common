import { LightningElement, api } from 'lwc';
import { baseNavigation } from 'lightning/datatableKeyboardMixins';

export default class KDatatableDeleteRowBtn extends baseNavigation(LightningElement) {
  @api rowId;
  @api iconName;

  handleClick() {
    event.preventDefault();

    const event = CustomEvent('rowbtnclick', {
      composed: true,
      bubbles: true,
      cancelable: true,
      detail: {
        rowId: this.rowId,
      },
    });
    this.dispatchEvent(event);
  }
}