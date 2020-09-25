import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import styles from '@salesforce/resourceUrl/';


export default class KNavbarContainer extends LightningElement {
  navigationItems = {

    hello: {
        title: 'Hello',
        value: 'hello',
        visible: false
    },
    composition: {
        title: 'Composition',
        value: 'composition',
        visible: false
    },
    child: {
        title: 'Child-to-Parent',
        value: 'child',
        visible: false
    },
    parent: {
        title: 'Parent-to-Child',
        value: 'parent',
        visible: false
    },
    // wire: {
    //     title: 'Wire',
    //     value: 'wire',
    //     visible: false
    // },
    misc: {
        title: 'Misc',
        value: 'misc',
        visible: false
    },
    party: {
        title: '3rd Party Libs',
        value: 'party',
        visible: false
    }
  };
  
  navigationElements = [
    'hello',
    'composition',
    'child',
    'parent',
    'misc',
    'party'
  ];

  currentNavigationItem = 'hello';

  connectedCallback() {
   // loadStyle(this, styles + '/main.css');

    this.navigationItems[this.currentNavigationItem].visible = true;
    this.calculateNavFooterElements();
  }

  calculateNavFooterElements() {
    this.nextNavigationItem = this.navigationItems[
        this.navigationElements[
            this.navigationElements.indexOf(this.currentNavigationItem) + 1
        ]
    ];
    this.previousNavigationItem = this.navigationItems[
        this.navigationElements[
            this.navigationElements.indexOf(this.currentNavigationItem) - 1
        ]
    ];
  }

  handleCategoryChange(event) {
    if (event) {
        if (this.currentNavigationItem !== event.detail) {
            this.navigationItems[
                this.currentNavigationItem
            ].visible = false;
            this.currentNavigationItem = event.detail;
        } else {
            return;
        }
    }
    this.calculateNavFooterElements();
    this.navigationItems[this.currentNavigationItem].visible = true;
  }

}