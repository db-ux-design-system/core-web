import{j as a}from"./jsx-runtime-u17CrQMm.js";import{D as o}from"./input-CZfMhmXc.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./form-components-B5fJjToM.js";import"./infotext-CZi0xQss.js";const{fn:v}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBInput/Example Floating Label",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},minLength:{control:"number"},maxLength:{control:"number"},type:{control:"select",options:["color","date","datetime-local","email","file","hidden","month","number","password","range","search","tel","text","time","url","week"]},min:{control:"text"},max:{control:"text"},step:{control:"text"},dataList:{control:"object"},dataListId:{control:"text"},placeholder:{control:"text"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},size:{control:"number"},pattern:{control:"text"},accept:{control:"text"},multiple:{control:"boolean"},enterkeyhint:{control:"select",options:["enter","done","go","next","previous","search","send"]},inputmode:{control:"select",options:["none","text","decimal","numeric","tel","search","email","url"]},autocomplete:{control:"text"},messageIcon:{control:"text"},messageSize:{control:"select",options:["small","medium"]},validMessageSize:{control:"select",options:["small","medium"]},invalidMessageSize:{control:"select",options:["small","medium"]},fieldSizing:{control:"select",options:["fixed","content"]},id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{label:"Label",variant:"floating",placeholder:"(Default) Empty"},render:e=>a.jsx(o,{...e})},l={args:{label:"Label",value:"Filled",variant:"floating",placeholder:"Filled"},render:e=>a.jsx(o,{...e})},n={args:{label:"Label",variant:"floating",placeholder:"Disabled",disabled:!0},render:e=>a.jsx(o,{...e})},r={args:{label:"Label",value:"Readonly - Filled",variant:"floating",placeholder:"Readonly - Filled",readOnly:!0},render:e=>a.jsx(o,{...e})},s={args:{label:"Label",validation:"invalid",invalidMessage:"Invalid Message",variant:"floating",placeholder:"Invalid"},render:e=>a.jsx(o,{...e})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "variant": "floating",
    "placeholder": "(Default) Empty"
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "value": "Filled",
    "variant": "floating",
    "placeholder": "Filled"
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "variant": "floating",
    "placeholder": "Disabled",
    "disabled": true
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "value": "Readonly - Filled",
    "variant": "floating",
    "placeholder": "Readonly - Filled",
    "readOnly": true
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "validation": "invalid",
    "invalidMessage": "Invalid Message",
    "variant": "floating",
    "placeholder": "Invalid"
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...s.parameters?.docs?.source}}};const h=["DefaultEmpty","Filled","Disabled","ReadonlyFilled","Invalid"];export{t as DefaultEmpty,n as Disabled,l as Filled,s as Invalid,r as ReadonlyFilled,h as __namedExportsOrder,x as default};
