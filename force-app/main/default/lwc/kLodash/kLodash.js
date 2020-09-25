import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';
import lodashPath from '@salesforce/resourceUrl/';

export default class KLodash extends LightningElement {

  lodashInitialized = false;

  connectedCallback() {

    if(this.lodashInitialized)
      return;

    Promise.all([
      loadScript(this, lodashPath + '/lodash.js')
    ])
    .then(() => {
      this.lodashInitialized = true;
      this.test();
    })
    .catch(error => {
      console.log('error');
    });
  }

  test() {
    let users = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred',   'age': 40, 'active': false }
    ];

    let output = _.filter(users, function(o) { return !o.active; });

    console.log(output);
  }
}