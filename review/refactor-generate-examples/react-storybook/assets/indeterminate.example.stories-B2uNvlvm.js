import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./checkbox-Danbg_dH.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./form-components-B5fJjToM.js";import"./infotext-CZi0xQss.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBCheckbox/Indeterminate",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},message:{control:"text"},showMessage:{control:"boolean"},size:{control:"select",options:["small","medium"]},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{name:"Indeterminate",indeterminate:!1,children:"(Default) False"},render:t=>n.jsx(r,{...t})},o={args:{name:"Indeterminate",indeterminate:!0,children:"True"},render:t=>n.jsx(r,{...t})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Indeterminate",
    "indeterminate": false,
    "children": "(Default) False"
  },
  render: (properties: any) => <DBCheckbox {...properties} />
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Indeterminate",
    "indeterminate": true,
    "children": "True"
  },
  render: (properties: any) => <DBCheckbox {...properties} />
}`,...o.parameters?.docs?.source}}};const b=["DefaultFalse","True"];export{e as DefaultFalse,o as True,b as __namedExportsOrder,x as default};
