import{j as s}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./input-C0ADyTR3.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";import"./constants-BqjZCLvV.js";import"./form-components-DAXh6kxU.js";import"./infotext-DSB5wS-D.js";const{fn:v}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBInput/Example Floating Label",component:n,render:r=>s.jsx(n,{...r,children:r.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},iconTrailing:{control:"text"},showIconTrailing:{control:"boolean"},minLength:{control:"text"},maxLength:{control:"text"},type:{control:"text"},min:{control:"text"},max:{control:"text"},dataList:{control:"text"},placeholder:{control:"text"}}},e={args:{label:"Label",variant:"floating",placeholder:"(Default) Empty"}},a={args:{label:"Label",value:"Filled",variant:"floating",placeholder:"Filled"}},l={args:{disabled:!0,label:"Label",variant:"floating",placeholder:"Disabled"}},o={args:{readOnly:!0,label:"Label",value:"Readonly - Filled",variant:"floating",placeholder:"Readonly - Filled"}},t={args:{label:"Label",validation:"invalid",invalidMessage:"Invalid Message",variant:"floating",placeholder:"Invalid"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "variant": "floating",
    "placeholder": "(Default) Empty"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "value": "Filled",
    "variant": "floating",
    "placeholder": "Filled"
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "disabled": true,
    "label": "Label",
    "variant": "floating",
    "placeholder": "Disabled"
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "readOnly": true,
    "label": "Label",
    "value": "Readonly - Filled",
    "variant": "floating",
    "placeholder": "Readonly - Filled"
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "validation": "invalid",
    "invalidMessage": "Invalid Message",
    "variant": "floating",
    "placeholder": "Invalid"
  }
}`,...t.parameters?.docs?.source}}};const h=["DefaultEmpty","Filled","Disabled","ReadonlyFilled","Invalid"];export{e as DefaultEmpty,l as Disabled,a as Filled,t as Invalid,o as ReadonlyFilled,h as __namedExportsOrder,x as default};
