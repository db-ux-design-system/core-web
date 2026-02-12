import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./select-CHH7Wk3C.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./form-components-B5fJjToM.js";import"./infotext-CZi0xQss.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,O={title:"Components/DBSelect/Density",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},showIcon:{control:"boolean"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},size:{control:"number"},multiple:{control:"boolean"},showEmptyOption:{control:"boolean"},autocomplete:{control:"text"},messageIcon:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},t={args:{"data-density":"functional",label:"Label",placeholder:"Functional",options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}]},render:o=>e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{...o})})},a={args:{"data-density":"regular",label:"Label",placeholder:"(Default) Regular",options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}]},render:o=>e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{...o})})},l={args:{"data-density":"expressive",label:"Label",placeholder:"Expressive",options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}]},render:o=>e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{...o})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "label": "Label",
    "placeholder": "Functional",
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "label": "Label",
    "placeholder": "(Default) Regular",
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
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "label": "Label",
    "placeholder": "Expressive",
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
}`,...l.parameters?.docs?.source}}};const x=["Functional","DefaultRegular","Expressive"];export{a as DefaultRegular,l as Expressive,t as Functional,x as __namedExportsOrder,O as default};
