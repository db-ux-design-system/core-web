import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./card-D9SKJ6GV.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBCard/Density",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{behavior:{control:"select",options:["static","interactive"]},elevationLevel:{control:"select",options:["1","2","3"]},spacing:{control:"select",options:["medium","small","large","none"]},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},s={args:{"data-density":"functional",children:e.jsx("strong",{children:"Functional"})},render:r=>e.jsx(a,{...r})},n={args:{"data-density":"regular",children:e.jsx("strong",{children:"(Default) Regular"})},render:r=>e.jsx(a,{...r})},t={args:{"data-density":"expressive",children:e.jsx("strong",{children:"Expressive"})},render:r=>e.jsx(a,{...r})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "children": <strong>Functional</strong>
  },
  render: (properties: any) => <DBCard {...properties} />
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "children": <strong>(Default) Regular</strong>
  },
  render: (properties: any) => <DBCard {...properties} />
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "children": <strong>Expressive</strong>
  },
  render: (properties: any) => <DBCard {...properties} />
}`,...t.parameters?.docs?.source}}};const g=["Functional","DefaultRegular","Expressive"];export{n as DefaultRegular,t as Expressive,s as Functional,g as __namedExportsOrder,u as default};
