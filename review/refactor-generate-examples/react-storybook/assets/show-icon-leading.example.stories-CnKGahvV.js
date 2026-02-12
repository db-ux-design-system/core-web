import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./input-CZfMhmXc.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./form-components-B5fJjToM.js";import"./infotext-CZi0xQss.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBInput/Show Icon Leading",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},minLength:{control:"number"},maxLength:{control:"number"},type:{control:"select",options:["color","date","datetime-local","email","file","hidden","month","number","password","range","search","tel","text","time","url","week"]},min:{control:"text"},max:{control:"text"},step:{control:"text"},dataList:{control:"object"},dataListId:{control:"text"},placeholder:{control:"text"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},size:{control:"number"},pattern:{control:"text"},accept:{control:"text"},multiple:{control:"boolean"},enterkeyhint:{control:"select",options:["enter","done","go","next","previous","search","send"]},inputmode:{control:"select",options:["none","text","decimal","numeric","tel","search","email","url"]},autocomplete:{control:"text"},messageIcon:{control:"text"},messageSize:{control:"select",options:["small","medium"]},validMessageSize:{control:"select",options:["small","medium"]},invalidMessageSize:{control:"select",options:["small","medium"]},fieldSizing:{control:"select",options:["fixed","content"]},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{label:"False",icon:"x_placeholder",placeholder:"(Default) False",showIcon:!1},render:t=>r.jsx(n,{...t})},o={args:{label:"True",icon:"x_placeholder",placeholder:"True",showIcon:!0},render:t=>r.jsx(n,{...t})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "False",
    "icon": "x_placeholder",
    "placeholder": "(Default) False",
    "showIcon": false
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "True",
    "icon": "x_placeholder",
    "placeholder": "True",
    "showIcon": true
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...o.parameters?.docs?.source}}};const h=["DefaultFalse","True"];export{e as DefaultFalse,o as True,h as __namedExportsOrder,x as default};
