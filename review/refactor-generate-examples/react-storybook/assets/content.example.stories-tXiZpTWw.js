import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./select-CHH7Wk3C.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./form-components-B5fJjToM.js";import"./infotext-CZi0xQss.js";const{fn:v}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBSelect/Content",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},showIcon:{control:"boolean"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},size:{control:"number"},multiple:{control:"boolean"},showEmptyOption:{control:"boolean"},autocomplete:{control:"text"},messageIcon:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},o={args:{label:"Label",placeholder:"(Default) Text",options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}]},render:l=>t.jsx("div",{style:{width:"300px"},children:t.jsx(a,{...l})})},e={args:{label:"Label",icon:"x_placeholder",placeholder:"Text - Leading Icon",options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}]},render:l=>t.jsx("div",{style:{width:"300px"},children:t.jsx(a,{...l})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "placeholder": "(Default) Text",
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
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "icon": "x_placeholder",
    "placeholder": "Text - Leading Icon",
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
}`,...e.parameters?.docs?.source}}};const m=["DefaultText","TextLeadingIcon"];export{o as DefaultText,e as TextLeadingIcon,m as __namedExportsOrder,x as default};
