import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as o}from"./radio-h3b26zTk.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./form-components-B5fJjToM.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBRadio/Density",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},size:{control:"select",options:["small","medium"]},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},label:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},r={args:{"data-density":"functional",name:"Density",value:"functional",children:"Functional"},render:e=>t.jsx(o,{...e})},a={args:{"data-density":"regular",name:"Density",value:"regular",children:"(Default) Regular"},render:e=>t.jsx(o,{...e})},n={args:{"data-density":"expressive",name:"Density",value:"expressive",children:"Expressive"},render:e=>t.jsx(o,{...e})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "name": "Density",
    "value": "functional",
    "children": "Functional"
  },
  render: (properties: any) => <DBRadio {...properties} />
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "name": "Density",
    "value": "regular",
    "children": "(Default) Regular"
  },
  render: (properties: any) => <DBRadio {...properties} />
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "name": "Density",
    "value": "expressive",
    "children": "Expressive"
  },
  render: (properties: any) => <DBRadio {...properties} />
}`,...n.parameters?.docs?.source}}};const x=["Functional","DefaultRegular","Expressive"];export{a as DefaultRegular,n as Expressive,r as Functional,x as __namedExportsOrder,m as default};
