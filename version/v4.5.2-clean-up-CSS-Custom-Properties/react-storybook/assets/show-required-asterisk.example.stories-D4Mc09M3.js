import{j as s}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./checkbox-DFZAbe3o.js";import"./index-D2E5Z_bU.js";import"./iframe-CiUFPK1z.js";import"./preload-helper-BVVqbGQe.js";import"./constants-C-ysBZRi.js";import"./form-components-OaQ73I72.js";import"./infotext-Cob0CtK7.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBCheckbox/Show Required Asterisk",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},message:{control:"text"},showMessage:{control:"boolean"},size:{control:"select",options:["small","medium"]},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{name:"Asterisk",required:!0,showRequiredAsterisk:!0,children:"(Default) True"},render:o=>s.jsx(t,{...o})},r={args:{name:"Asterisk",required:!0,showRequiredAsterisk:!1,children:"False"},render:o=>s.jsx(t,{...o})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
