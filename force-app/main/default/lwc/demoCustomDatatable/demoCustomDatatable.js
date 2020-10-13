import { LightningElement, track } from 'lwc';

const columns = [
  // diable the default actions
  { 
    label: 'Label', 
    fieldName: 'name', 
    hideDefaultActions: true 
  },

  { 
    label: 'Website', 
    fieldName: 'website', 
    type: 'url', 
    hideDefaultActions: true 
  },

  // Icon in the table header
  { 
    label: 'Phone', 
    fieldName: 'phone', 
    type: 'phone', 
    iconName: 'standard:account',
    hideDefaultActions: true 
  },

  // Apply css to the cell
  { 
    label: 'Balance', 
    fieldName: 'amount', 
    type: 'currency',  
    hideDefaultActions: true,
    cellAttributes: {
      class: 'slds-theme_shade slds-theme_alert-texture slds-border_left',
    }
  },

  // display an icon in the cell
  { 
    label: 'Close date', 
    fieldName: 'closeAt', 
    type: 'date', 
    sortable: true, 
    editable: true, 
    hideDefaultActions: true, 
    cellAttributes: { 
      iconName: 'utility:clock', variant: 'neural', iconPosition: 'right', alignment: 'right', iconAlternativeText: 'Close Date' 
    }
  },

  // Header level actions
  { 
    label: 'CloseAt', 
    fieldName: 'closeAt', 
    type: 'date', 
    hideDefaultActions: true,
    actions: [
      { label: 'All', checked: true, name:'all' },
      { label: 'Published', checked: false, name:'show_published' },
      { label: 'Unpublished', checked: false, name:'show_unpublished' }
    ]
  },

  // Display a button in the cell
  { 
    label: 'Approval', 
    type: 'button-icon', 
    typeAttributes: { 
      title: 'buttons', iconName: 'action:delete', variant: 'base', disabled: false 
    }
  },

  // Row actions
  { 
    type: 'action', 
    typeAttributes: { 
      rowActions: [
        { label: 'Show details', name: 'show_details' },
        { label: 'Delete', name: 'delete' }
      ], 
      //menuAlignment: 'right'
    }
  },

  // Custom Cell Layout
    // Apply css to the cell
    { 
      label: 'Balance', 
      fieldName: 'name', 
      type: 'text',  
     // hideDefaultActions: true,
      cellAttributes: {
        class: { fieldName: 'dietCSSClass' },
      }
    },
  /*
  {
    label: '',
    type: 'customTextStandardLayout',
    cellAttributes: {
       // class: 'slds-theme_shade slds-theme_alert-texture slds-border_left',
        iconName: { fieldName: 'myIcon' },
        iconPosition: { fieldName: 'myIconPosition' },
        alignment: 'left',
    }
  },
  */

  // Picklist
  {
    label: 'Picklist values',
    type: 'picklist',
    fixedWidth: 110,
    fieldName: 'id',
    typeAttributes: {
      name: 'picklist1',
      options: ["option 1", "another option", "third option"]
    }
  },

  // Picklist
  {
    label: 'Another picklist',
    type: 'picklist',
    fixedWidth: 110,
    fieldName: 'id',
    typeAttributes: {
      name: 'picklist222',
      options: ["xxxxx", "another option", "third option"]
    }
  },

  // Radio
  {
    label: 'Primary',
    type: 'radio',
    fieldName: 'id',
    typeAttributes: {
      name: 'radio 123',
      label: 'radio 123'
    }
  },

  // Radio
  {
    label: 'Secondary',
    type: 'radio',
    fieldName: 'id',
    typeAttributes: {
      name: 'radio abc'
    }
  },

  // Delete row button
  {
    label: '',
    type: 'rowButton',
    fieldName: 'id',
    fixedWidth: 70,
    typeAttributes: {
      iconName: 'utility:delete'
    }
  },

  // Custom button group
  {
    label: '',
    type: 'buttonGroup',
    fieldName: 'id',
    typeAttributes: {
      buttons: [
        {
          name: "btn1",
          iconName: "utility:adduser",
          variant: 'brand',
          class: "slds-m-left_xx-small" 
        },
        {
          name: "btn2",
          iconName: "utility:bookmark",
          class: "slds-m-left_xx-small" 
        },
        {
          name: "btn3",
          iconName: "utility:zoomin",
          class: "slds-m-left_xx-small" 
        }
      ],
    }
  },

];

export default class DemoCustomDatatable extends LightningElement {
  columns = columns;
  errors=[];

  data = [
    {
        "name": "Kylee Abshire",
        "email": "Rex.Brekke@gmail.com",
        "website": "https://luigi.net",
        "amount": "891.20",
        "phone": "1-365-280-8441",
        "closeAt": "2021-08-26T05:55:52.954Z",
        "id": "0ebd1957-4b53-4cb2-b8ac-cb89f90b0e4e",
        myIcon: 'utility:checkin',
        myIconPosition: 'left',
        dietCSSClass: 'slds-icon-custom-custom9'
    },
    {
        "name": "Jerrold West",
        "email": "Elian_Keebler98@gmail.com",
        "website": "http://tracey.name",
        "amount": "964.07",
        "phone": "(384) 837-4830 x371",
        "closeAt": "2020-11-06T12:41:07.913Z",
        "id": "69127356-ddf4-4875-99a4-6f5ab3ae4e5a",
        dietCSSClass: 'slds-icon-custom-custom7'
    },
    {
        "name": "Edyth Johnson",
        "email": "Angela_Rice45@gmail.com",
        "website": "https://axel.net",
        "amount": "756.88",
        "phone": "361.625.3038 x49826",
        "closeAt": "2020-10-26T07:40:55.196Z",
        "id": "98c00393-281f-44e4-bfa0-f3e4342e7637",
        dietCSSClass: 'slds-icon-custom-custom79'
    },
    {
        "name": "Ellsworth Wuckert",
        "email": "Reese_Dare27@yahoo.com",
        "website": "https://jovanny.info",
        "amount": "491.38",
        "phone": "513-369-4300 x95446",
        "closeAt": "2021-06-06T11:44:14.827Z",
        "id": "acbb5ec5-ba46-47aa-b79c-27727eacde0c",
        dietCSSClass: 'slds-icon-custom-custom102'
    },
    {
        "name": "Joel Jacobs",
        "email": "Micaela_Boyle@hotmail.com",
        "website": "https://aidan.info",
        "amount": "53.47",
        "phone": "(475) 083-2790 x7034",
        "closeAt": "2020-12-22T13:54:10.431Z",
        "id": "102af050-f4c8-4c40-ba0b-3b9e97bab9ad",
        dietCSSClass: 'slds-color__background_gray-7'
    },
    {
        "name": "Jayda Moore",
        "email": "Greg_Lemke77@hotmail.com",
        "website": "https://danny.name",
        "amount": "674.31",
        "phone": "664-790-1764 x879",
        "closeAt": "2021-04-16T06:27:24.650Z",
        "id": "d8b504fb-0608-4dff-b453-67bea91d7271"
    },
    {
        "name": "Ora Grant",
        "email": "Jodie.King92@hotmail.com",
        "website": "http://hobart.biz",
        "amount": "213.96",
        "phone": "1-457-613-3917",
        "closeAt": "2021-03-04T22:24:00.030Z",
        "id": "69968272-aaaf-4b9f-8e17-add651ac8099"
    },
    {
        "name": "Jon Beahan",
        "email": "Chanelle.Cormier@gmail.com",
        "website": "https://herman.com",
        "amount": "145.63",
        "phone": "716-373-8441 x301",
        "closeAt": "2021-03-07T17:12:31.082Z",
        "id": "1a87de13-2c65-46c0-af17-94095c423a4f"
    },
    {
        "name": "Willa Schaden",
        "email": "Trycia_Ratke@hotmail.com",
        "website": "https://stone.name",
        "amount": "358.55",
        "phone": "528.140.0410 x085",
        "closeAt": "2021-01-16T13:01:49.559Z",
        "id": "16a4cb5f-6af3-4688-8f4b-5042f68dc843"
    },
    {
        "name": "Garett Kozey",
        "email": "Monique_Osinski@gmail.com",
        "website": "https://nora.net",
        "amount": "745.54",
        "phone": "1-611-170-4745",
        "closeAt": "2021-04-11T09:26:57.000Z",
        "id": "5482323c-2dec-4e03-b6c2-f4c325eeab5d"
    }
  ];


  @track selectedRows = [];

  handleHeaderAction(event) {
    // Retrieves the name of the selected filter
    const actionName = event.detail.action.name;
    // Retrieves the current column definition
    // based on the selected filter
    const colDef = event.detail.columnDefinition;
    const columns = this.columns;
    const activeFilter = this.activeFilter;
    
    if (actionName !== activeFilter) {
        let idx = columns.indexOf(colDef);
        // Update the column definition with the updated actions data
        let actions = columns[idx].actions;
        console.log(actions);

        columns[idx].actions = actions.map((action) => {
            action.checked = action.name === actionName;
            return action;
        });

        this.activeFilter = actionName;
        this.columns = columns;
    }
  }


  handleRowAction(event) {
    const action = event.detail.action;
    const row = event.detail.row;
    switch (action.name) {
      case 'show_details':
        alert('Showing Details: ' + JSON.stringify(row));
        break;
      case 'delete':
        alert('delete: ' + JSON.stringify(row));
        break;
    }
  }

  handleSelect() {
    if(this.selectedRows.length === 0) {
      const rows = ["69968272-aaaf-4b9f-8e17-add651ac8099"];
      this.selectedRows = rows;
    } else {
      this.selectedRows = [];
    }
  }

  // Save changed data;
  handleSave(event) {
    event.preventDefault();

    if(this.errors) {
      console.log(this.errors);
    } else {
      this.saveDraftValues = event.detail.draftValues;
      console.log(this.saveDraftValues);
    }
  }


  triggerError(event) {
    this.errors = {
        rows: {
          "69968272-aaaf-4b9f-8e17-add651ac8099": {
            title: 'We found 2 errors.',
            messages: [
              'Enter a valid amount.',
              'Verify the email address and try again.'
            ],
            fieldNames: ['closeAt']
          }
        },
        table: {
          title: 'Your entry cannot be saved. Fix the errors and try again.',
          messages: [
            'Row 2 amount must be number',
            'Row 2 email is invalid'
          ]
        }
     };
  }

  deleteRow(event) {
    const { rowId } = event.detail;
    // Remove the row
    console.log('row is deleted ', rowId);
  }


  handleBtnGroupClick(event) {
    const { rowId, name } = event.detail;

    console.log(rowId, name);
  }

  handlePicklistChange(event) {
    const { rowId, name, value } = event.detail;

    console.log(rowId, name, value);
  }

  handleRadioChange(event) {
    const { rowId, name } = event.detail;
    console.log(rowId, name);
  }
}