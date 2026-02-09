import{j as s}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./checkbox-BwPsfrNb.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";import"./constants-BqjZCLvV.js";import"./form-components-DAXh6kxU.js";import"./infotext-DSB5wS-D.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,h={title:"Components/DBCheckbox/Show Required Asterisk",component:t,render:o=>s.jsx(t,{...o,children:o.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},size:{control:"text"},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},e={args:{children:"(Default) True",required:!0,showRequiredAsterisk:!0,name:"Asterisk"}},r={args:{children:"False",required:!0,showRequiredAsterisk:!1,name:"Asterisk"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: "(Default) True",
    "required": true,
    "showRequiredAsterisk": true,
    "name": "Asterisk"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: "False",
    "required": true,
    "showRequiredAsterisk": false,
    "name": "Asterisk"
  }
}`,...r.parameters?.docs?.source}}};const k=["DefaultTrue","False"];export{e as DefaultTrue,r as False,k as __namedExportsOrder,h as default};
