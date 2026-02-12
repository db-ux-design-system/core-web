import{j as l}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./input-CZfMhmXc.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./form-components-B5fJjToM.js";import"./infotext-CZi0xQss.js";const{fn:v}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBInput/Validation",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},minLength:{control:"number"},maxLength:{control:"number"},type:{control:"select",options:["color","date","datetime-local","email","file","hidden","month","number","password","range","search","tel","text","time","url","week"]},min:{control:"text"},max:{control:"text"},step:{control:"text"},dataList:{control:"object"},dataListId:{control:"text"},placeholder:{control:"text"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},size:{control:"number"},pattern:{control:"text"},accept:{control:"text"},multiple:{control:"boolean"},enterkeyhint:{control:"select",options:["enter","done","go","next","previous","search","send"]},inputmode:{control:"select",options:["none","text","decimal","numeric","tel","search","email","url"]},autocomplete:{control:"text"},messageIcon:{control:"text"},messageSize:{control:"select",options:["small","medium"]},validMessageSize:{control:"select",options:["small","medium"]},invalidMessageSize:{control:"select",options:["small","medium"]},fieldSizing:{control:"select",options:["fixed","content"]},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{label:"Label",validation:"no-validation",placeholder:"(Default) No validation"},render:e=>l.jsx(n,{...e})},t={args:{label:"Label",validation:"invalid",invalidMessage:"Invalid Message",placeholder:"Invalid"},render:e=>l.jsx(n,{...e})},a={args:{label:"Label",validation:"valid",validMessage:"Valid message",placeholder:"Valid"},render:e=>l.jsx(n,{...e})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "validation": "no-validation",
    "placeholder": "(Default) No validation"
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "validation": "invalid",
    "invalidMessage": "Invalid Message",
    "placeholder": "Invalid"
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "validation": "valid",
    "validMessage": "Valid message",
    "placeholder": "Valid"
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...a.parameters?.docs?.source}}};const b=["DefaultNovalidation","Invalid","Valid"];export{o as DefaultNovalidation,t as Invalid,a as Valid,b as __namedExportsOrder,g as default};
