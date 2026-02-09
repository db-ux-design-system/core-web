import{j as i}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./radio-DQum7n_3.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";import"./form-components-DAXh6kxU.js";const{fn:v}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBRadio/Validation",component:r,render:n=>i.jsx(r,{...n,children:n.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},validation:{control:"text"},size:{control:"text"},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},a={args:{children:"(Default) No validation",name:"No validation",validation:"no-validation"}},o={args:{children:"Invalid",name:"invalid",validation:"invalid"}},e={args:{children:"Valid",checked:!0,name:"valid",validation:"valid"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: "(Default) No validation",
    "name": "No validation",
    "validation": "no-validation"
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Invalid",
    "name": "invalid",
    "validation": "invalid"
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Valid",
    "checked": true,
    "name": "valid",
    "validation": "valid"
  }
}`,...e.parameters?.docs?.source}}};const u=["DefaultNovalidation","Invalid","Valid"];export{a as DefaultNovalidation,o as Invalid,e as Valid,u as __namedExportsOrder,p as default};
