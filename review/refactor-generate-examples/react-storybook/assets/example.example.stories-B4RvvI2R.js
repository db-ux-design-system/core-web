import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./card-D9SKJ6GV.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBCard/Example",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{behavior:{control:"select",options:["static","interactive"]},elevationLevel:{control:"select",options:["1","2","3"]},spacing:{control:"select",options:["medium","small","large","none"]},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},r={args:{elevationLevel:"1",behavior:"interactive",children:e.jsx("strong",{children:"Level 1 - Interactive"})},render:t=>e.jsx("button",{type:"button",children:e.jsx(a,{...t})})},n={args:{elevationLevel:"2",behavior:"interactive",children:e.jsx("strong",{children:"Level 2 - Interactive"})},render:t=>e.jsx("button",{type:"button",children:e.jsx(a,{...t})})},o={args:{elevationLevel:"3",behavior:"interactive",children:e.jsx("strong",{children:"Level 3 - Interactive"})},render:t=>e.jsx("button",{type:"button",children:e.jsx(a,{...t})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "1",
    "behavior": "interactive",
    "children": <strong>Level 1 - Interactive</strong>
  },
  render: (properties: any) => <button type="button"><DBCard {...properties} /></button>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "2",
    "behavior": "interactive",
    "children": <strong>Level 2 - Interactive</strong>
  },
  render: (properties: any) => <button type="button"><DBCard {...properties} /></button>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "3",
    "behavior": "interactive",
    "children": <strong>Level 3 - Interactive</strong>
  },
  render: (properties: any) => <button type="button"><DBCard {...properties} /></button>
}`,...o.parameters?.docs?.source}}};const u=["Level1Interactive","Level2Interactive","Level3Interactive"];export{r as Level1Interactive,n as Level2Interactive,o as Level3Interactive,u as __namedExportsOrder,d as default};
