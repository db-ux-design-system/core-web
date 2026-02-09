import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./textarea-u_BYpwTf.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";import"./constants-BqjZCLvV.js";import"./form-components-DAXh6kxU.js";import"./infotext-DSB5wS-D.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,b={title:"Components/DBTextarea/Validation",component:t,render:l=>r.jsx(t,{...l,children:l.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},showMessage:{control:"boolean"},message:{control:"text"},disabled:{control:"boolean"},readOnly:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},rows:{control:"text"},showResizer:{control:"boolean"},fieldSizing:{control:"text"}}},a={args:{label:"Label",validation:"no-validation",placeholder:"(Default) No validation"}},e={args:{label:"Label",validation:"invalid",invalidMessage:"Invalid Message",placeholder:"Invalid"}},o={args:{label:"Label",validation:"valid",validMessage:"Valid message",placeholder:"Valid"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "validation": "no-validation",
    "placeholder": "(Default) No validation"
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "validation": "invalid",
    "invalidMessage": "Invalid Message",
    "placeholder": "Invalid"
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "validation": "valid",
    "validMessage": "Valid message",
    "placeholder": "Valid"
  }
}`,...o.parameters?.docs?.source}}};const u=["DefaultNovalidation","Invalid","Valid"];export{a as DefaultNovalidation,e as Invalid,o as Valid,u as __namedExportsOrder,b as default};
