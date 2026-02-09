import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./textarea-u_BYpwTf.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";import"./constants-BqjZCLvV.js";import"./form-components-DAXh6kxU.js";import"./infotext-DSB5wS-D.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBTextarea/Examples Floating Label",component:t,render:r=>n.jsx(t,{...r,children:r.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},showMessage:{control:"boolean"},message:{control:"text"},disabled:{control:"boolean"},readOnly:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},rows:{control:"text"},showResizer:{control:"boolean"},fieldSizing:{control:"text"}}},e={args:{label:"Label",variant:"floating",placeholder:"(Default) Empty"}},a={args:{label:"Label",value:"Filled",variant:"floating",placeholder:"Filled"}},l={args:{disabled:!0,label:"Label",variant:"floating",placeholder:"Disabled"}},o={args:{readOnly:!0,label:"Label",value:"Readonly - Filled",variant:"floating",placeholder:"Readonly - Filled"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const f=["DefaultEmpty","Filled","Disabled","ReadonlyFilled"];export{e as DefaultEmpty,l as Disabled,a as Filled,o as ReadonlyFilled,f as __namedExportsOrder,x as default};
