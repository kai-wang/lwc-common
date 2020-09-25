import { LightningElement, track } from 'lwc';

export default class KCarousel extends LightningElement {

  @track images = [
    {
      id: 1,
      src: "https://blog.nationalparks.nsw.gov.au/uploads/2019/10/171404-56-400x300.jpg",
      header: "first card",
      description: "first card description",
      alternative: "first card alternative",
      href: "https://www.salesforce.com"
    },
    {
      id: 2,
      src: "https://blog.nationalparks.nsw.gov.au/uploads/2019/11/OEH_2019_SouthernRangesSummer_RobMulallyDJI_0142-e1575435127987-400x300.jpg",
      header: "second card",
      description: "second card description",
      alternative: "second card alternative",
      href: "https://www.salesforce.com"
    },
    {
      id: 3,
      src: "https://blog.nationalparks.nsw.gov.au/uploads/2019/10/OEH_2019_SouthernRangesSummer_RobMulally_RM34653-400x300.jpg",
      header: "third card",
      description: "third card description",
      alternative: "third card alternative",
      href: "https://www.salesforce.com"
    }
  ];
}