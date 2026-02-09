import{j as a}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./input-C0ADyTR3.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";import"./constants-BqjZCLvV.js";import"./form-components-DAXh6kxU.js";import"./infotext-DSB5wS-D.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBInput/Show Required Asterisk",component:r,render:t=>a.jsx(r,{...t,children:t.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},iconTrailing:{control:"text"},showIconTrailing:{control:"boolean"},minLength:{control:"text"},maxLength:{control:"text"},type:{control:"text"},min:{control:"text"},max:{control:"text"},dataList:{control:"text"},placeholder:{control:"text"}}},e={args:{required:!0,showRequiredAsterisk:!0,label:"Label",placeholder:"(Default) True"}},o={args:{required:!0,showRequiredAsterisk:!1,label:"Label",placeholder:"False"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "required": true,
    "showRequiredAsterisk": true,
    "label": "Label",
    "placeholder": "(Default) True"
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "required": true,
    "showRequiredAsterisk": false,
    "label": "Label",
    "placeholder": "False"
  }
}`,...o.parameters?.docs?.source}}};const h=["DefaultTrue","False"];export{e as DefaultTrue,o as False,h as __namedExportsOrder,x as default};
