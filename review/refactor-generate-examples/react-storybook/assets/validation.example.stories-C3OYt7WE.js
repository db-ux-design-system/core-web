import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./textarea-Ce19kOwE.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./form-components-B5fJjToM.js";import"./infotext-CZi0xQss.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBTextarea/Validation",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},showLabel:{control:"boolean"},showMessage:{control:"boolean"},message:{control:"text"},disabled:{control:"boolean"},readOnly:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},rows:{control:"number"},cols:{control:"number"},showResizer:{control:"boolean"},fieldSizing:{control:"select",options:["fixed","content"]},resize:{control:"select",options:["none","both","horizontal","vertical"]},spellCheck:{control:"boolean"},wrap:{control:"select",options:["hard","soft","off"]},placeholder:{control:"text"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},minLength:{control:"number"},maxLength:{control:"number"},autocomplete:{control:"text"},messageIcon:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{label:"Label",validation:"no-validation",placeholder:"(Default) No validation"},render:e=>n.jsx(r,{...e})},a={args:{label:"Label",validation:"invalid",invalidMessage:"Invalid Message",placeholder:"Invalid"},render:e=>n.jsx(r,{...e})},t={args:{label:"Label",validation:"valid",validMessage:"Valid message",placeholder:"Valid"},render:e=>n.jsx(r,{...e})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "validation": "no-validation",
    "placeholder": "(Default) No validation"
  },
  render: (properties: any) => <DBTextarea {...properties} />
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "validation": "invalid",
    "invalidMessage": "Invalid Message",
    "placeholder": "Invalid"
  },
  render: (properties: any) => <DBTextarea {...properties} />
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "validation": "valid",
    "validMessage": "Valid message",
    "placeholder": "Valid"
  },
  render: (properties: any) => <DBTextarea {...properties} />
}`,...t.parameters?.docs?.source}}};const u=["DefaultNovalidation","Invalid","Valid"];export{o as DefaultNovalidation,a as Invalid,t as Valid,u as __namedExportsOrder,g as default};
