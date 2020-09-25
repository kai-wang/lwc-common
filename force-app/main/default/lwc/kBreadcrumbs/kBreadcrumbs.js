import { LightningElement, api } from 'lwc';

export default class KBreadcrumbs extends LightningElement {
  @api trail = [];

  handleClick(event) {
    var idx = event.currentTarget.dataset.id;

    if(this.trail[idx]) {
      this.trail[idx].handleClick();
    }
  }
}