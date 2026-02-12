import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./infotext-CZi0xQss.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBInfotext/Semantic",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},size:{control:"select",options:["small","medium"]},showIcon:{control:"boolean"},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},a={args:{children:"(Default) Adaptive"},render:e=>n.jsx(r,{...e})},s={args:{semantic:"neutral",children:"Neutral"},render:e=>n.jsx(r,{...e})},t={args:{semantic:"critical",children:"Critical"},render:e=>n.jsx(r,{...e})},o={args:{semantic:"informational",children:"Informational"},render:e=>n.jsx(r,{...e})},c={args:{semantic:"successful",children:"Successful"},render:e=>n.jsx(r,{...e})},i={args:{semantic:"warning",children:"Warning"},render:e=>n.jsx(r,{...e})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "children": "(Default) Adaptive"
  },
  render: (properties: any) => <DBInfotext {...properties} />
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "neutral",
    "children": "Neutral"
  },
  render: (properties: any) => <DBInfotext {...properties} />
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "critical",
    "children": "Critical"
  },
  render: (properties: any) => <DBInfotext {...properties} />
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "informational",
    "children": "Informational"
  },
  render: (properties: any) => <DBInfotext {...properties} />
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "successful",
    "children": "Successful"
  },
  render: (properties: any) => <DBInfotext {...properties} />
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "warning",
    "children": "Warning"
  },
  render: (properties: any) => <DBInfotext {...properties} />
}`,...i.parameters?.docs?.source}}};const x=["DefaultAdaptive","Neutral","Critical","Informational","Successful","Warning"];export{t as Critical,a as DefaultAdaptive,o as Informational,s as Neutral,c as Successful,i as Warning,x as __namedExportsOrder,g as default};
