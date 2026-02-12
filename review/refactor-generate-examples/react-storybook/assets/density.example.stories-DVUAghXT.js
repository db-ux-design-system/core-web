import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as o}from"./accordion-item-BeVn-J0G.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBAccordionItem/Density",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{headlinePlain:{control:"text"},disabled:{control:"boolean"},defaultOpen:{control:"boolean"},text:{control:"text"},name:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},n={args:{"data-density":"functional",headlinePlain:"Functional",children:"Functional"},render:r=>e.jsx("div",{children:e.jsx(o,{...r})})},a={args:{"data-density":"regular",headlinePlain:"(Default) Regular",children:"(Default) Regular"},render:r=>e.jsx("div",{children:e.jsx(o,{...r})})},t={args:{"data-density":"expressive",headlinePlain:"Expressive",children:"Expressive"},render:r=>e.jsx("div",{children:e.jsx(o,{...r})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "headlinePlain": "Functional",
    "children": "Functional"
  },
  render: (properties: any) => <div><DBAccordionItem {...properties} /></div>
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "headlinePlain": "(Default) Regular",
    "children": "(Default) Regular"
  },
  render: (properties: any) => <div><DBAccordionItem {...properties} /></div>
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "headlinePlain": "Expressive",
    "children": "Expressive"
  },
  render: (properties: any) => <div><DBAccordionItem {...properties} /></div>
}`,...t.parameters?.docs?.source}}};const m=["Functional","DefaultRegular","Expressive"];export{a as DefaultRegular,t as Expressive,n as Functional,m as __namedExportsOrder,u as default};
