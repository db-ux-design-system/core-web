import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./textarea-Ce19kOwE.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./form-components-B5fJjToM.js";import"./infotext-CZi0xQss.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,b={title:"Components/DBTextarea/Density",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},showLabel:{control:"boolean"},showMessage:{control:"boolean"},message:{control:"text"},disabled:{control:"boolean"},readOnly:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},rows:{control:"number"},cols:{control:"number"},showResizer:{control:"boolean"},fieldSizing:{control:"select",options:["fixed","content"]},resize:{control:"select",options:["none","both","horizontal","vertical"]},spellCheck:{control:"boolean"},wrap:{control:"select",options:["hard","soft","off"]},placeholder:{control:"text"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},minLength:{control:"number"},maxLength:{control:"number"},autocomplete:{control:"text"},messageIcon:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{"data-density":"functional",label:"Label",placeholder:"Functional"},render:e=>n.jsx(a,{...e})},r={args:{"data-density":"regular",label:"Label",placeholder:"(Default) Regular"},render:e=>n.jsx(a,{...e})},t={args:{"data-density":"expressive",label:"Label",placeholder:"Expressive"},render:e=>n.jsx(a,{...e})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "label": "Label",
    "placeholder": "Functional"
  },
  render: (properties: any) => <DBTextarea {...properties} />
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "label": "Label",
    "placeholder": "(Default) Regular"
  },
  render: (properties: any) => <DBTextarea {...properties} />
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "label": "Label",
    "placeholder": "Expressive"
  },
  render: (properties: any) => <DBTextarea {...properties} />
}`,...t.parameters?.docs?.source}}};const g=["Functional","DefaultRegular","Expressive"];export{r as DefaultRegular,t as Expressive,o as Functional,g as __namedExportsOrder,b as default};
