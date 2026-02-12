import{j as a}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./radio-h3b26zTk.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./form-components-B5fJjToM.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBRadio/Size",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},size:{control:"select",options:["small","medium"]},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},label:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{name:"Size",children:"(Default) Medium"},render:r=>a.jsx(t,{...r})},o={args:{name:"Size",size:"small",children:"Small"},render:r=>a.jsx(t,{...r})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Size",
    "children": "(Default) Medium"
  },
  render: (properties: any) => <DBRadio {...properties} />
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Size",
    "size": "small",
    "children": "Small"
  },
  render: (properties: any) => <DBRadio {...properties} />
}`,...o.parameters?.docs?.source}}};const u=["DefaultMedium","Small"];export{e as DefaultMedium,o as Small,u as __namedExportsOrder,p as default};
