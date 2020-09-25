import { LightningElement, track, api } from 'lwc';

export default class DemoImageCard extends LightningElement {

  @track cards = [
    {
      "id": 1,
      "title": "ROAD TRIPS",
      "description": "teMust do itineraries for day trips and multi-day adventuresst",
      "href": "#",
      "image": {
        "src": "https://blog.nationalparks.nsw.gov.au/uploads/2019/10/171404-56-400x300.jpg",
        "alt": "Three people hiking on the Bouddi Coastal walk near Little Beach campground, Bouddi National Park. Photo: John Spencer/DPIE"
      }
    },
    {
      "id": 2,
      "title": "ROAD TRIPS",
      "description": "teMust do itineraries for day trips and multi-day adventuresst",
      "href": "#",
      "image": {
        "src": "https://blog.nationalparks.nsw.gov.au/uploads/2019/10/171404-56-400x300.jpg",
        "alt": "Three people hiking on the Bouddi Coastal walk near Little Beach campground, Bouddi National Park. Photo: John Spencer/DPIE"
      }
    },
    {
      "id": 3,
      "title": "ROAD TRIPS",
      "description": "teMust do itineraries for day trips and multi-day adventuresst",
      "href": "#",
      "image": {
        "src": "https://blog.nationalparks.nsw.gov.au/uploads/2019/10/171404-56-400x300.jpg",
        "alt": "Three people hiking on the Bouddi Coastal walk near Little Beach campground, Bouddi National Park. Photo: John Spencer/DPIE"
      }
    },
    {
      "id": 4,
      "title": "ROAD TRIPS",
      "description": "teMust do itineraries for day trips and multi-day adventuresst",
      "href": "#",
      "image": {
        "src": "https://blog.nationalparks.nsw.gov.au/uploads/2019/10/171404-56-400x300.jpg",
        "alt": "Three people hiking on the Bouddi Coastal walk near Little Beach campground, Bouddi National Park. Photo: John Spencer/DPIE"
      }
    },
    {
      "id": 5,
      "title": "ROAD TRIPS",
      "description": "teMust do itineraries for day trips and multi-day adventuresst",
      "href": "#",
      "image": {
        "src": "https://blog.nationalparks.nsw.gov.au/uploads/2019/10/171404-56-400x300.jpg",
        "alt": "Three people hiking on the Bouddi Coastal walk near Little Beach campground, Bouddi National Park. Photo: John Spencer/DPIE"
      }
    }
  ];

}