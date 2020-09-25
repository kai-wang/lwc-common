import { LightningElement, api, track } from 'lwc';

export default class KResourcePane extends LightningElement {
  @track items = [
    {
      id: 1,
      icon: "utility:money",
      title: "Component Library",
      description: "The Component Library is the Lightning Components developer reference. Rapidly develop apps with our building blocks.",
      buttonLabel: "More Info",
      buttonHref: "https://www.salesforce.com"
    },
    {
      id: 2,
      icon: "utility:warning",
      title: "Component Library",
      description: "The Component Library is the Lightning Components developer reference. Rapidly develop apps with our building blocks.",
      buttonLabel: "More Info",
      buttonHref: "https://www.salesforce.com"
    },
    {
      id: 3,
      icon: "utility:error",
      title: "Component Library",
      description: "The Component Library is the Lightning Components developer reference. Rapidly develop apps with our building blocks.",
      buttonLabel: "More Info",
      buttonHref: "https://www.salesforce.com"
    }
  ];
}