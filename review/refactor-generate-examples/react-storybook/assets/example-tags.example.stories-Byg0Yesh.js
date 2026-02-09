import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as l}from"./custom-select-DqMMWHiw.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";import"./constants-BqjZCLvV.js";import"./form-components-DAXh6kxU.js";import"./button-CXbufVX4.js";import"./infotext-DSB5wS-D.js";import"./input-C0ADyTR3.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,v={title:"Components/DBCustomSelect/Example tags",component:l,render:o=>t.jsx(l,{...o,children:o.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"text"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"text"},variant:{control:"text"},values:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},formFieldWidth:{control:"text"},dropdownWidth:{control:"text"},placement:{control:"text"},selectedType:{control:"text"},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"text"},searchValue:{control:"text"},selectedLabels:{control:"text"},transformSelectedLabels:{control:"text"},searchFilter:{control:"text"}}},e={args:{options:[{value:"Option 1",id:"53xbfd1o6"},{value:"Option 2",id:"fq8ypeiz2"},{value:"Option 3",id:"jtd3wevz2"},{value:"Option 4",id:"srr1toi8f"},{value:"Option 5",id:"srr1toi7f"}],multiple:!0,removeTagsTexts:["Remove Option entry 1","Remove Option entry 2","Remove Option entry 3","Remove Option entry 4"],selectedType:"tag",label:"Tag grow",listLabel:"id-10271-Tag grow"},decorators:[o=>t.jsx("div",{style:{width:"200px"},children:t.jsx(o,{})})]},r={args:{options:[{value:"Option 1",id:"jn3s5kl9t"},{value:"Option 2",id:"iesayujhy"},{value:"Option 3",id:"55kavoeem"},{value:"Option 4",id:"xi4qhrdg8"},{value:"Option 5",id:"xi4qhrdg7"}],multiple:!0,selectedType:"tag",formFieldWidth:"auto",label:"Tag grow + auto",listLabel:"id-10272-Tag grow + auto"},decorators:[o=>t.jsx("div",{style:{width:"200px"},children:t.jsx(o,{})})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
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
  decorators: [Story => <div style={{
    width: '200px'
  }}>
        <Story />
      </div>]
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
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
  decorators: [Story => <div style={{
    width: '200px'
  }}>
        <Story />
      </div>]
}`,...r.parameters?.docs?.source}}};const O=["Taggrow","Taggrowauto"];export{e as Taggrow,r as Taggrowauto,O as __namedExportsOrder,v as default};
