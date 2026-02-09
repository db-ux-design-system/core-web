import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./input-C0ADyTR3.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";import"./constants-BqjZCLvV.js";import"./form-components-DAXh6kxU.js";import"./infotext-DSB5wS-D.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBInput/Example - Length",component:a,render:n=>r.jsx(a,{...n,children:n.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},iconTrailing:{control:"text"},showIconTrailing:{control:"boolean"},minLength:{control:"text"},maxLength:{control:"text"},type:{control:"text"},min:{control:"text"},max:{control:"text"},dataList:{control:"text"},placeholder:{control:"text"}}},e={args:{minLength:3,label:"Label",placeholder:"MinLength"}},t={args:{maxLength:5,label:"Label",placeholder:"MaxLength"}},o={args:{minLength:3,maxLength:5,label:"Label",placeholder:"MinMaxLength"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "minLength": 3,
    "label": "Label",
    "placeholder": "MinLength"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "maxLength": 5,
    "label": "Label",
    "placeholder": "MaxLength"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "minLength": 3,
    "maxLength": 5,
    "label": "Label",
    "placeholder": "MinMaxLength"
  }
}`,...o.parameters?.docs?.source}}};const L=["MinLength","MaxLength","MinMaxLength"];export{t as MaxLength,e as MinLength,o as MinMaxLength,L as __namedExportsOrder,d as default};
