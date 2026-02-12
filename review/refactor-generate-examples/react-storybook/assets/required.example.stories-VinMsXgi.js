import{j as a}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./radio-h3b26zTk.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./form-components-B5fJjToM.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBRadio/Required",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},size:{control:"select",options:["small","medium"]},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},label:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{name:"Requirement",required:!1,children:"(Default) False"},render:o=>a.jsx(t,{...o})},r={args:{name:"Requirement",required:!0,children:"True"},render:o=>a.jsx(t,{...o})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Requirement",
    "required": false,
    "children": "(Default) False"
  },
  render: (properties: any) => <DBRadio {...properties} />
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Requirement",
    "required": true,
    "children": "True"
  },
  render: (properties: any) => <DBRadio {...properties} />
}`,...r.parameters?.docs?.source}}};const p=["DefaultFalse","True"];export{e as DefaultFalse,r as True,p as __namedExportsOrder,u as default};
