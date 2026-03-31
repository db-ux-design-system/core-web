import{j as a}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./checkbox-CTCIg1yO.js";import"./index-D2E5Z_bU.js";import"./iframe-B17vDKiL.js";import"./preload-helper-B3mKHU88.js";import"./constants-C-ysBZRi.js";import"./form-components-OaQ73I72.js";import"./infotext-C8DP_CpH.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBCheckbox/Density",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},message:{control:"text"},showMessage:{control:"boolean"},size:{control:"select",options:["small","medium"]},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{"data-density":"functional",name:"Density",children:"Functional"},render:e=>a.jsx(n,{...e})},r={args:{"data-density":"regular",name:"Density",children:"(Default) Regular"},render:e=>a.jsx(n,{...e})},t={args:{"data-density":"expressive",name:"Density",children:"Expressive"},render:e=>a.jsx(n,{...e})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "name": "Density",
    "children": "Functional"
  },
  render: (properties: any) => <DBCheckbox {...properties} />
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "name": "Density",
    "children": "(Default) Regular"
  },
  render: (properties: any) => <DBCheckbox {...properties} />
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "name": "Density",
    "children": "Expressive"
  },
  render: (properties: any) => <DBCheckbox {...properties} />
}`,...t.parameters?.docs?.source}}};const y=["Functional","DefaultRegular","Expressive"];export{r as DefaultRegular,t as Expressive,o as Functional,y as __namedExportsOrder,g as default};
