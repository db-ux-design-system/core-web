import{j as a}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./checkbox-Danbg_dH.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./form-components-B5fJjToM.js";import"./infotext-CZi0xQss.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBCheckbox/Disabled",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},message:{control:"text"},showMessage:{control:"boolean"},size:{control:"select",options:["small","medium"]},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{name:"Disabled",disabled:!1,children:"(Default) False"},render:r=>a.jsx(t,{...r})},o={args:{name:"Disabled",disabled:!0,children:"True"},render:r=>a.jsx(t,{...r})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Disabled",
    "disabled": false,
    "children": "(Default) False"
  },
  render: (properties: any) => <DBCheckbox {...properties} />
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Disabled",
    "disabled": true,
    "children": "True"
  },
  render: (properties: any) => <DBCheckbox {...properties} />
}`,...o.parameters?.docs?.source}}};const x=["DefaultFalse","True"];export{e as DefaultFalse,o as True,x as __namedExportsOrder,u as default};
