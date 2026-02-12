import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./checkbox-Danbg_dH.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./form-components-B5fJjToM.js";import"./infotext-CZi0xQss.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBCheckbox/Validation",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},message:{control:"text"},showMessage:{control:"boolean"},size:{control:"select",options:["small","medium"]},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},a={args:{name:"Validation",validation:"no-validation",children:"(Default) No validation"},render:e=>r.jsx(t,{...e})},o={args:{name:"Validation",validation:"invalid",invalidMessage:"Invalid Message",children:"Invalid"},render:e=>r.jsx(t,{...e})},n={args:{name:"Validation",validation:"valid",validMessage:"Valid message",children:"Valid"},render:e=>r.jsx(t,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Validation",
    "validation": "no-validation",
    "children": "(Default) No validation"
  },
  render: (properties: any) => <DBCheckbox {...properties} />
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Validation",
    "validation": "invalid",
    "invalidMessage": "Invalid Message",
    "children": "Invalid"
  },
  render: (properties: any) => <DBCheckbox {...properties} />
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Validation",
    "validation": "valid",
    "validMessage": "Valid message",
    "children": "Valid"
  },
  render: (properties: any) => <DBCheckbox {...properties} />
}`,...n.parameters?.docs?.source}}};const x=["DefaultNovalidation","Invalid","Valid"];export{a as DefaultNovalidation,o as Invalid,n as Valid,x as __namedExportsOrder,u as default};
