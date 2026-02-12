import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as s}from"./brand-CJj_VJxS.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBBrand/Density",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{hideLogo:{control:"boolean"},showIcon:{control:"boolean"},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},r={args:{"data-density":"functional",children:"Functional"},render:e=>t.jsx(s,{...e})},a={args:{"data-density":"regular",children:"(Default) Regular"},render:e=>t.jsx(s,{...e})},n={args:{"data-density":"expressive",children:"Expressive"},render:e=>t.jsx(s,{...e})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "children": "Functional"
  },
  render: (properties: any) => <DBBrand {...properties} />
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "children": "(Default) Regular"
  },
  render: (properties: any) => <DBBrand {...properties} />
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "children": "Expressive"
  },
  render: (properties: any) => <DBBrand {...properties} />
}`,...n.parameters?.docs?.source}}};const g=["Functional","DefaultRegular","Expressive"];export{a as DefaultRegular,n as Expressive,r as Functional,g as __namedExportsOrder,m as default};
