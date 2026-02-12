import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./card-D9SKJ6GV.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBCard/Behavior",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{behavior:{control:"select",options:["static","interactive"]},elevationLevel:{control:"select",options:["1","2","3"]},spacing:{control:"select",options:["medium","small","large","none"]},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},e={args:{behavior:"static",children:t.jsx("strong",{children:"(Default) Static"})},render:o=>t.jsx(n,{...o})},r={args:{behavior:"interactive",children:t.jsx("strong",{children:"Interactive"})},render:o=>t.jsx("button",{type:"button",children:t.jsx(n,{...o})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "static",
    "children": <strong>(Default) Static</strong>
  },
  render: (properties: any) => <DBCard {...properties} />
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "interactive",
    "children": <strong>Interactive</strong>
  },
  render: (properties: any) => <button type="button"><DBCard {...properties} /></button>
}`,...r.parameters?.docs?.source}}};const m=["DefaultStatic","Interactive"];export{e as DefaultStatic,r as Interactive,m as __namedExportsOrder,d as default};
