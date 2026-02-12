import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./select-CHH7Wk3C.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./form-components-B5fJjToM.js";import"./infotext-CZi0xQss.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBSelect/Examples Floating Label",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},showIcon:{control:"boolean"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},size:{control:"number"},multiple:{control:"boolean"},showEmptyOption:{control:"boolean"},autocomplete:{control:"text"},messageIcon:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},t={args:{label:"Label",variant:"floating",placeholder:"(Default) Empty",options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}]},render:o=>e.jsx("div",{style:{width:"300px"},children:e.jsx(a,{...o})})},l={args:{label:"Label",value:"Filled",variant:"floating",placeholder:"Filled",options:[{value:"Filled",selected:!0},{value:"Option 2"}]},render:o=>e.jsx("div",{style:{width:"300px"},children:e.jsx(a,{...o})})},r={args:{label:"Label",variant:"floating",value:"Disabled",placeholder:"Disabled",options:[{value:"Disabled",selected:!0},{value:"Option 2"}],disabled:!0},render:o=>e.jsx("div",{style:{width:"300px"},children:e.jsx(a,{...o})})},i={args:{label:"Label",placeholder:"Invalid",variant:"floating",validation:"invalid",invalidMessage:"Invalid Message",options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}]},render:o=>e.jsx("div",{style:{width:"300px"},children:e.jsx(a,{...o})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "variant": "floating",
    "placeholder": "(Default) Empty",
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
    "value": "Filled",
    "variant": "floating",
    "placeholder": "Filled",
    "options": [{
      value: 'Filled',
      selected: true
    }, {
      value: 'Option 2'
    }]
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBSelect {...properties} /></div>
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "variant": "floating",
    "value": "Disabled",
    "placeholder": "Disabled",
    "options": [{
      value: 'Disabled',
      selected: true
    }, {
      value: 'Option 2'
    }],
    "disabled": true
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBSelect {...properties} /></div>
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "placeholder": "Invalid",
    "variant": "floating",
    "validation": "invalid",
    "invalidMessage": "Invalid Message",
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
}`,...i.parameters?.docs?.source}}};const x=["DefaultEmpty","Filled","Disabled","Invalid"];export{t as DefaultEmpty,r as Disabled,l as Filled,i as Invalid,x as __namedExportsOrder,g as default};
