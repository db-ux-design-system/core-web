import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./switch-DwHEq2ET.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";import"./constants-BqjZCLvV.js";import"./form-components-DAXh6kxU.js";import"./infotext-DSB5wS-D.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBSwitch/Validation",component:n,render:t=>r.jsx(n,{...t,children:t.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},visualAid:{control:"boolean"},iconLeading:{control:"text"},iconTrailing:{control:"text"},size:{control:"text"},label:{control:"text"},variant:{control:"text"},showLabel:{control:"boolean"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},showMessage:{control:"boolean"},message:{control:"text"},icon:{control:"text"}}},e={args:{children:"(Default) No validation"}},a={args:{children:"Invalid",validation:"invalid",invalidMessage:"Invalid Message"}},o={args:{children:"Valid",checked:!0,validation:"valid",validMessage:"Valid message"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: "(Default) No validation"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Invalid",
    "validation": "invalid",
    "invalidMessage": "Invalid Message"
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Valid",
    "checked": true,
    "validation": "valid",
    "validMessage": "Valid message"
  }
}`,...o.parameters?.docs?.source}}};const h=["DefaultNovalidation","Invalid","Valid"];export{e as DefaultNovalidation,a as Invalid,o as Valid,h as __namedExportsOrder,u as default};
