import{j as s}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./radio-h3b26zTk.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./form-components-B5fJjToM.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBRadio/Show Required Asterisk",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},size:{control:"select",options:["small","medium"]},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},label:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{name:"Asterisk",required:!0,showRequiredAsterisk:!0,children:"(Default) True"},render:o=>s.jsx(t,{...o})},r={args:{name:"Asterisk",required:!0,showRequiredAsterisk:!1,children:"False"},render:o=>s.jsx(t,{...o})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Asterisk",
    "required": true,
    "showRequiredAsterisk": true,
    "children": "(Default) True"
  },
  render: (properties: any) => <DBRadio {...properties} />
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Asterisk",
    "required": true,
    "showRequiredAsterisk": false,
    "children": "False"
  },
  render: (properties: any) => <DBRadio {...properties} />
}`,...r.parameters?.docs?.source}}};const p=["DefaultTrue","False"];export{e as DefaultTrue,r as False,p as __namedExportsOrder,m as default};
