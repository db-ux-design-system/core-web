import{j as s}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./checkbox-Danbg_dH.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./form-components-B5fJjToM.js";import"./infotext-CZi0xQss.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBCheckbox/Show Required Asterisk",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},message:{control:"text"},showMessage:{control:"boolean"},size:{control:"select",options:["small","medium"]},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{name:"Asterisk",required:!0,showRequiredAsterisk:!0,children:"(Default) True"},render:o=>s.jsx(t,{...o})},r={args:{name:"Asterisk",required:!0,showRequiredAsterisk:!1,children:"False"},render:o=>s.jsx(t,{...o})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Asterisk",
    "required": true,
    "showRequiredAsterisk": true,
    "children": "(Default) True"
  },
  render: (properties: any) => <DBCheckbox {...properties} />
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Asterisk",
    "required": true,
    "showRequiredAsterisk": false,
    "children": "False"
  },
  render: (properties: any) => <DBCheckbox {...properties} />
}`,...r.parameters?.docs?.source}}};const h=["DefaultTrue","False"];export{e as DefaultTrue,r as False,h as __namedExportsOrder,x as default};
