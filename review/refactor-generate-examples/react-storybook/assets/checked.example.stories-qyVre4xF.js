import{j as a}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./radio-h3b26zTk.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./form-components-B5fJjToM.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBRadio/Checked",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},size:{control:"select",options:["small","medium"]},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},label:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{name:"Checked",children:"(Default) False"},render:r=>a.jsx(t,{...r})},o={args:{name:"Checked",checked:!0,children:"True"},render:r=>a.jsx(t,{...r})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Checked",
    "children": "(Default) False"
  },
  render: (properties: any) => <DBRadio {...properties} />
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Checked",
    "checked": true,
    "children": "True"
  },
  render: (properties: any) => <DBRadio {...properties} />
}`,...o.parameters?.docs?.source}}};const u=["DefaultFalse","True"];export{e as DefaultFalse,o as True,u as __namedExportsOrder,p as default};
