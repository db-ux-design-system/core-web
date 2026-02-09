import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./textarea-u_BYpwTf.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";import"./constants-BqjZCLvV.js";import"./form-components-DAXh6kxU.js";import"./infotext-DSB5wS-D.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBTextarea/Show Message",component:r,render:a=>t.jsx(r,{...a,children:a.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},showMessage:{control:"boolean"},message:{control:"text"},disabled:{control:"boolean"},readOnly:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},rows:{control:"text"},showResizer:{control:"boolean"},fieldSizing:{control:"text"}}},e={args:{showMessage:!1,label:"Label",placeholder:"(Default) False"}},o={args:{showMessage:!0,label:"Label",message:"Message",placeholder:"true"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "showMessage": false,
    "label": "Label",
    "placeholder": "(Default) False"
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "showMessage": true,
    "label": "Label",
    "message": "Message",
    "placeholder": "true"
  }
}`,...o.parameters?.docs?.source}}};const b=["DefaultFalse","True"];export{e as DefaultFalse,o as True,b as __namedExportsOrder,g as default};
