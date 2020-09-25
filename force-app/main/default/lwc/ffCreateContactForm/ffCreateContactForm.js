import { LightningElement, api, wire} from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_ID from '@salesforce/schema/Case.AccountId';
import FIRSTNAME from '@salesforce/schema/Case.First_Name__c';
import LASTNAME from '@salesforce/schema/Case.Last_Name__c';
import EMAIL from '@salesforce/schema/Case.Email__c';


export default class ffCrateContactForm extends LightningElement {
    @api recordId;

    @wire(getRecord, {recordId: '$recordId', fields: [FIRSTNAME, LASTNAME, EMAIL, ACCOUNT_ID]})
    case;

    get accountId() {
      return getFieldValue(this.case.data, ACCOUNT_ID);
    }

    get firstname() {
      return getFieldValue(this.case.data, FIRSTNAME);
    }

    get lastname() {
      return getFieldValue(this.case.data, LASTNAME);
    }

    get email() {
      return getFieldValue(this.case.data, EMAIL);
    }

    handleSuccess(event) {
      this.dispatchEvent(
        new ShowToastEvent({
            title: 'Success',
            message: 'Contact created',
            variant: 'success'
        })
      );
      console.log('onsuccess event recordEditForm',event.detail.id)
    }


    handleSubmit(event) {
        console.log('onsubmit event recordEditForm'+ event.detail.fields);
    }

    handleError(event) {
      this.dispatchEvent(
        new ShowToastEvent({
            title: 'Error',
            message: event.message,
            variant: 'error'
        })
      );      
    }
}