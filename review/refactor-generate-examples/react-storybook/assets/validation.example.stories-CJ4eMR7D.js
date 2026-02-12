import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./radio-h3b26zTk.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./form-components-B5fJjToM.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,v={title:"Components/DBRadio/Validation",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},size:{control:"select",options:["small","medium"]},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},label:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},a={args:{name:"No validation",validation:"no-validation",children:"(Default) No validation"},render:o=>t.jsx(r,{...o})},e={args:{name:"invalid",validation:"invalid",children:"Invalid"},render:o=>t.jsx(r,{...o})},n={args:{name:"valid",validation:"valid",checked:!0,children:"Valid"},render:o=>t.jsx(r,{...o})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "No validation",
    "validation": "no-validation",
    "children": "(Default) No validation"
  },
  render: (properties: any) => <DBRadio {...properties} />
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "invalid",
    "validation": "invalid",
    "children": "Invalid"
  },
  render: (properties: any) => <DBRadio {...properties} />
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "valid",
    "validation": "valid",
    "checked": true,
    "children": "Valid"
  },
  render: (properties: any) => <DBRadio {...properties} />
}`,...n.parameters?.docs?.source}}};const u=["DefaultNovalidation","Invalid","Valid"];export{a as DefaultNovalidation,e as Invalid,n as Valid,u as __namedExportsOrder,v as default};
