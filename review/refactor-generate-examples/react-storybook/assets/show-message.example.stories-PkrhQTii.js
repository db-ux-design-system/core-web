import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as l}from"./select-CHH7Wk3C.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./form-components-B5fJjToM.js";import"./infotext-CZi0xQss.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,v={title:"Components/DBSelect/Show Message",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},showIcon:{control:"boolean"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},size:{control:"number"},multiple:{control:"boolean"},showEmptyOption:{control:"boolean"},autocomplete:{control:"text"},messageIcon:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},e={args:{label:"Label",message:"Message",placeholder:"(Default) False",options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}],showMessage:!1},render:a=>t.jsx("div",{style:{width:"300px"},children:t.jsx(l,{...a})})},o={args:{label:"Label",message:"Message",placeholder:"True",options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}],showMessage:!0},render:a=>t.jsx("div",{style:{width:"300px"},children:t.jsx(l,{...a})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "message": "Message",
    "placeholder": "(Default) False",
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
    }],
    "showMessage": false
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBSelect {...properties} /></div>
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "message": "Message",
    "placeholder": "True",
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
    }],
    "showMessage": true
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBSelect {...properties} /></div>
}`,...o.parameters?.docs?.source}}};const g=["DefaultFalse","True"];export{e as DefaultFalse,o as True,g as __namedExportsOrder,v as default};
