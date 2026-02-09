import{j as a}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./textarea-u_BYpwTf.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";import"./constants-BqjZCLvV.js";import"./form-components-DAXh6kxU.js";import"./infotext-DSB5wS-D.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,b={title:"Components/DBTextarea/Show Resizer",component:t,render:r=>a.jsx(t,{...r,children:r.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},showMessage:{control:"boolean"},message:{control:"text"},disabled:{control:"boolean"},readOnly:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},rows:{control:"text"},showResizer:{control:"boolean"},fieldSizing:{control:"text"}}},e={args:{showResizer:!0,label:"Label",placeholder:"(Default) True"}},o={args:{showResizer:!1,label:"Label",placeholder:"False"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "showResizer": true,
    "label": "Label",
    "placeholder": "(Default) True"
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "showResizer": false,
    "label": "Label",
    "placeholder": "False"
  }
}`,...o.parameters?.docs?.source}}};const x=["DefaultTrue","False"];export{e as DefaultTrue,o as False,x as __namedExportsOrder,b as default};
