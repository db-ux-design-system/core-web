import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as i}from"./checkbox-BwPsfrNb.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";import"./constants-BqjZCLvV.js";import"./form-components-DAXh6kxU.js";import"./infotext-DSB5wS-D.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBCheckbox/Validation",component:i,render:n=>t.jsx(i,{...n,children:n.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},size:{control:"text"},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},a={args:{children:"(Default) No validation",name:"Validation",validation:"no-validation"}},e={args:{children:"Invalid",name:"Validation",validation:"invalid",invalidMessage:"Invalid Message"}},o={args:{children:"Valid",name:"Validation",validation:"valid",validMessage:"Valid message"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: "(Default) No validation",
    "name": "Validation",
    "validation": "no-validation"
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Invalid",
    "name": "Validation",
    "validation": "invalid",
    "invalidMessage": "Invalid Message"
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Valid",
    "name": "Validation",
    "validation": "valid",
    "validMessage": "Valid message"
  }
}`,...o.parameters?.docs?.source}}};const h=["DefaultNovalidation","Invalid","Valid"];export{a as DefaultNovalidation,e as Invalid,o as Valid,h as __namedExportsOrder,u as default};
