import{j as a}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./checkbox-Danbg_dH.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./form-components-B5fJjToM.js";import"./infotext-CZi0xQss.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBCheckbox/Size",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},message:{control:"text"},showMessage:{control:"boolean"},size:{control:"select",options:["small","medium"]},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{name:"Size",children:"(Default) Medium"},render:t=>a.jsx(r,{...t})},o={args:{name:"Size",size:"small",children:"Small"},render:t=>a.jsx(r,{...t})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Size",
    "children": "(Default) Medium"
  },
  render: (properties: any) => <DBCheckbox {...properties} />
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Size",
    "size": "small",
    "children": "Small"
  },
  render: (properties: any) => <DBCheckbox {...properties} />
}`,...o.parameters?.docs?.source}}};const b=["DefaultMedium","Small"];export{e as DefaultMedium,o as Small,b as __namedExportsOrder,x as default};
