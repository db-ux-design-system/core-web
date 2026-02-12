import{j as a}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./accordion-item-BeVn-J0G.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBAccordionItem/Disabled",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{headlinePlain:{control:"text"},disabled:{control:"boolean"},defaultOpen:{control:"boolean"},text:{control:"text"},name:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{headlinePlain:"(Default) False",disabled:!1,children:"(Default) False"},render:o=>a.jsx("div",{children:a.jsx(t,{...o})})},r={args:{headlinePlain:"True",disabled:!0,children:"True"},render:o=>a.jsx("div",{children:a.jsx(t,{...o})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "headlinePlain": "(Default) False",
    "disabled": false,
    "children": "(Default) False"
  },
  render: (properties: any) => <div><DBAccordionItem {...properties} /></div>
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "headlinePlain": "True",
    "disabled": true,
    "children": "True"
  },
  render: (properties: any) => <div><DBAccordionItem {...properties} /></div>
}`,...r.parameters?.docs?.source}}};const u=["DefaultFalse","True"];export{e as DefaultFalse,r as True,u as __namedExportsOrder,p as default};
