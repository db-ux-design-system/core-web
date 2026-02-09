import{_ as r}from"./custom-select-CASOXR0w.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./button-YbkVn8kv.js";import"./infotext-C1MSMu4c.js";import"./input-CODHB90g.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBCustomSelect/Example tags",component:r,render:o=>({components:{DBCustomSelect:r},setup(){return{args:o}},template:`
      <DBCustomSelect v-bind="args">
      ${o.default}
      </DBCustomSelect>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"text"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"text"},variant:{control:"text"},values:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},formFieldWidth:{control:"text"},dropdownWidth:{control:"text"},placement:{control:"text"},selectedType:{control:"text"},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"text"},searchValue:{control:"text"},selectedLabels:{control:"text"},transformSelectedLabels:{control:"text"},searchFilter:{control:"text"}}},t={args:{default:"",options:[{value:"Option 1",id:"53xbfd1o6"},{value:"Option 2",id:"fq8ypeiz2"},{value:"Option 3",id:"jtd3wevz2"},{value:"Option 4",id:"srr1toi8f"},{value:"Option 5",id:"srr1toi7f"}],multiple:!0,removeTagsTexts:["Remove Option entry 1","Remove Option entry 2","Remove Option entry 3","Remove Option entry 4"],selectedType:"tag",label:"Tag grow",listLabel:"id-10271-Tag grow"},decorators:[()=>({template:'<div style="  width:200px"><story /></div>'})]},e={args:{default:"",options:[{value:"Option 1",id:"jn3s5kl9t"},{value:"Option 2",id:"iesayujhy"},{value:"Option 3",id:"55kavoeem"},{value:"Option 4",id:"xi4qhrdg8"},{value:"Option 5",id:"xi4qhrdg7"}],multiple:!0,selectedType:"tag",formFieldWidth:"auto",label:"Tag grow + auto",listLabel:"id-10272-Tag grow + auto"},decorators:[()=>({template:'<div style="  width:200px"><story /></div>'})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "options": [{
      value: 'Option 1',
      id: '53xbfd1o6'
    }, {
      value: 'Option 2',
      id: 'fq8ypeiz2'
    }, {
      value: 'Option 3',
      id: 'jtd3wevz2'
    }, {
      value: 'Option 4',
      id: 'srr1toi8f'
    }, {
      value: 'Option 5',
      id: 'srr1toi7f'
    }],
    "multiple": true,
    "removeTagsTexts": ['Remove Option entry 1', 'Remove Option entry 2', 'Remove Option entry 3', 'Remove Option entry 4'],
    "selectedType": "tag",
    "label": "Tag grow",
    "listLabel": "id-10271-Tag grow"
  },
  decorators: [() => ({
    template: \`<div style="  width:200px"><story /></div>\`
  })]
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "options": [{
      value: 'Option 1',
      id: 'jn3s5kl9t'
    }, {
      value: 'Option 2',
      id: 'iesayujhy'
    }, {
      value: 'Option 3',
      id: '55kavoeem'
    }, {
      value: 'Option 4',
      id: 'xi4qhrdg8'
    }, {
      value: 'Option 5',
      id: 'xi4qhrdg7'
    }],
    "multiple": true,
    "selectedType": "tag",
    "formFieldWidth": "auto",
    "label": "Tag grow + auto",
    "listLabel": "id-10272-Tag grow + auto"
  },
  decorators: [() => ({
    template: \`<div style="  width:200px"><story /></div>\`
  })]
}`,...e.parameters?.docs?.source}}};const v=["Taggrow","Taggrowauto"];export{t as Taggrow,e as Taggrowauto,v as __namedExportsOrder,g as default};
