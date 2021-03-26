import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CUSTOMER from '@salesforce/schema/Customer__c';
import NAME from '@salesforce/schema/Customer__c.Name';
import CONTACT_NUMBER from '@salesforce/schema/Customer__c.Contact_Number__c';
import EMAIL_ID from '@salesforce/schema/Customer__c.Email_Id__c';
import PICKUP_ADDRESS from '@salesforce/schema/Customer__c.Pickup_Address__c';
import SHIPPING_ADDRESS from '@salesforce/schema/Customer__c.Shipping_Address__c';
import PINCODE from '@salesforce/schema/Customer__c.Pincode__c';


export default class Customer extends LightningElement {
    customerName = CUSTOMER;
    fields = [NAME,EMAIL_ID, CONTACT_NUMBER,PICKUP_ADDRESS, SHIPPING_ADDRESS,PINCODE];

    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: "Form created",
            message: "Record Id: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(evt);
    }
}


