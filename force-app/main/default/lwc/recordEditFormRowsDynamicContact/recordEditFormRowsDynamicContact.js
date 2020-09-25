import { LightningElement, api, track } from 'lwc';

export default class RecordEditFormRowsDynamicContact extends LightningElement {
  @api recordId;
  @api objectApiName;

  trail = [
    {
      "id": 1,
      "label": "Parent Entity",
      "href": "javascript:void(0)",
      handleClick : function() {
        console.log('click parent entity');
      }
    },
    {
      "id": 2,
      "label": "Parent Record Name",
      "href": "javascript:void(0)",
      handleClick : function() {
        console.log('click parent record name');
      }
    }
  ];
}