import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as i}from"./select-CHH7Wk3C.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./form-components-B5fJjToM.js";import"./infotext-CZi0xQss.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,b={title:"Components/DBSelect/Validation",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},showIcon:{control:"boolean"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},size:{control:"number"},multiple:{control:"boolean"},showEmptyOption:{control:"boolean"},autocomplete:{control:"text"},messageIcon:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},a={args:{label:"Label",validation:"no-validation",placeholder:"(Default) No validation",options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}]},render:o=>e.jsx("div",{style:{width:"300px"},children:e.jsx(i,{...o})})},t={args:{label:"Label",validation:"invalid",invalidMessage:"Invalid Message",placeholder:"Invalid",options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}]},render:o=>e.jsx("div",{style:{width:"300px"},children:e.jsx(i,{...o})})},l={args:{label:"Label",validation:"valid",validMessage:"Valid message",placeholder:"Valid",options:[{value:"Valid",selected:!0},{value:"Option 2"}]},render:o=>e.jsx("div",{style:{width:"300px"},children:e.jsx(i,{...o})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "validation": "no-validation",
    "placeholder": "(Default) No validation",
    "options": [{
      value: 'Option 1'
    }, {
      value: 'Option 2'
    }, {
      value: 'Option 3'
    }, {
      value: 'Option 4'
    }, {
      value: 'Option 5'
    }]
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBSelect {...properties} /></div>
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "validation": "invalid",
    "invalidMessage": "Invalid Message",
    "placeholder": "Invalid",
    "options": [{
      value: 'Option 1'
    }, {
      value: 'Option 2'
    }, {
      value: 'Option 3'
    }, {
      value: 'Option 4'
    }, {
      value: 'Option 5'
    }]
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBSelect {...properties} /></div>
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "validation": "valid",
    "validMessage": "Valid message",
    "placeholder": "Valid",
    "options": [{
      value: 'Valid',
      selected: true
    }, {
      value: 'Option 2'
    }]
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBSelect {...properties} /></div>
}`,...l.parameters?.docs?.source}}};const x=["DefaultNovalidation","Invalid","Valid"];export{a as DefaultNovalidation,t as Invalid,l as Valid,x as __namedExportsOrder,b as default};
