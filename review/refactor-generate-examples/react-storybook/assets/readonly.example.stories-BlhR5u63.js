import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./textarea-u_BYpwTf.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";import"./constants-BqjZCLvV.js";import"./form-components-DAXh6kxU.js";import"./infotext-DSB5wS-D.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,b={title:"Components/DBTextarea/Readonly",component:r,render:o=>t.jsx(r,{...o,children:o.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},showMessage:{control:"boolean"},message:{control:"text"},disabled:{control:"boolean"},readOnly:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},rows:{control:"text"},showResizer:{control:"boolean"},fieldSizing:{control:"text"}}},e={args:{readOnly:!1,label:"Label",value:"(Default) False",placeholder:"(Default) False"}},a={args:{readOnly:!0,label:"Label",value:"True",placeholder:"True"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "readOnly": false,
    "label": "Label",
    "value": "(Default) False",
    "placeholder": "(Default) False"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "readOnly": true,
    "label": "Label",
    "value": "True",
    "placeholder": "True"
  }
}`,...a.parameters?.docs?.source}}};const x=["DefaultFalse","True"];export{e as DefaultFalse,a as True,x as __namedExportsOrder,b as default};
