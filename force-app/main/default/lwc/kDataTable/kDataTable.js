import { LightningElement } from 'lwc';
import LightningDatatable from 'lightning/datatable';
import custom from './customlayout.html';
import btnType from './btnType.html';
import btnGroupType from './btnGroupType.html';
import picklistType from './picklistType.html';
import radioType from './radioType.html';

export default class KDataTable extends LightningDatatable {
  static customTypes = {
    customTextStandardLayout: {
      template: custom,
      standardCellLayout: true
    },

    rowButton: {
      template: btnType,
      standardCellLayout: true,
      // Provide template data here if needed
      typeAttributes: ['iconName']
    },

    buttonGroup: {
      template: btnGroupType,
      standardCellLayout: true,
      typeAttributes: ['buttons']
    },

    picklist: {
      template: picklistType,
      standardCellLayout: true,
      typeAttributes: ['options', 'name']
    },

    radio: {
      template: radioType,
      standardCellLayout: true,
      typeAttributes: ['name', 'checked', 'label']
    }
  }
}