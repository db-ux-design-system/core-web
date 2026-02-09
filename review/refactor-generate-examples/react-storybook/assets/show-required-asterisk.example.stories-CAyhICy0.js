import{j as a}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./textarea-u_BYpwTf.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";import"./constants-BqjZCLvV.js";import"./form-components-DAXh6kxU.js";import"./infotext-DSB5wS-D.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,b={title:"Components/DBTextarea/Show Required Asterisk",component:t,render:o=>a.jsx(t,{...o,children:o.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},showMessage:{control:"boolean"},message:{control:"text"},disabled:{control:"boolean"},readOnly:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},rows:{control:"text"},showResizer:{control:"boolean"},fieldSizing:{control:"text"}}},e={args:{required:!0,showRequiredAsterisk:!0,label:"Label",placeholder:"(Default) True"}},r={args:{required:!0,showRequiredAsterisk:!1,label:"Label",placeholder:"False"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "required": true,
    "showRequiredAsterisk": true,
    "label": "Label",
    "placeholder": "(Default) True"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "required": true,
    "showRequiredAsterisk": false,
    "label": "Label",
    "placeholder": "False"
  }
}`,...r.parameters?.docs?.source}}};const x=["DefaultTrue","False"];export{e as DefaultTrue,r as False,x as __namedExportsOrder,b as default};
