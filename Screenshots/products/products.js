import { LightningElement  } from 'lwc';
import NAME from '@salesforce/schema/Product2.Name';
import ProductCode from '@salesforce/schema/Product2.ProductCode';
import DRIVER_NAME from '@salesforce/schema/Product2.Driver_Name__c';
import DRIVER_PHONE_NUMBER from '@salesforce/schema/Product2.Driver_Contact_Number__c';
import Product_Description from '@salesforce/schema/Product2.Product_Description__c';
import PRODUCT2_OBJECT from '@salesforce/schema/Product2';
import PRICE from '@salesforce/schema/Product2.Price__c';
import QUANTITY from '@salesforce/schema/Product2.Quantity__c';
import TOTAL_PRICE from '@salesforce/schema/Product2.Total_Price__c';

export default class products extends LightningElement {
    
 
    objectName = PRODUCT2_OBJECT;
    

    objectFields = [NAME,Product_Description,ProductCode,PRICE,QUANTITY,TOTAL_PRICE,DRIVER_NAME,DRIVER_PHONE_NUMBER];

    handleLoad(event) {
       console.log(NAME_FIELD);
       console.log(PRODUCT2_OBJECT);
       console.log(event.type);
       console.log(JSON.stringify(event.detail));
   }

   handleCancel(event) {
       console.log(event.type);
       console.log(JSON.stringify(event.detail));
   }

   handleSubmit(event) {
       console.log(event.type);
       console.log(JSON.stringify(event.detail));
   }

    handleSuccess(event) {
        console.log(event.type);
        console.log(JSON.stringify(event.detail));
    }
  
    handleError(event) {
       console.log(event.type);
       console.log(JSON.stringify(event.detail));
   }
}
