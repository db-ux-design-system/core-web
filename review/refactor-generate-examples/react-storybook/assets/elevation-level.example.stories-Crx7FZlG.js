import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as s}from"./card-D9SKJ6GV.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBCard/Elevation Level",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{behavior:{control:"select",options:["static","interactive"]},elevationLevel:{control:"select",options:["1","2","3"]},spacing:{control:"select",options:["medium","small","large","none"]},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},o={args:{elevationLevel:"1",children:e.jsx("strong",{children:"(Default) 1"})},render:r=>e.jsx(s,{...r})},n={args:{elevationLevel:"2",children:e.jsx("strong",{children:"2"})},render:r=>e.jsx(s,{...r})},t={args:{elevationLevel:"3",children:e.jsx("strong",{children:"3"})},render:r=>e.jsx(s,{...r})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "1",
    "children": <strong>(Default) 1</strong>
  },
  render: (properties: any) => <DBCard {...properties} />
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "2",
    "children": <strong>2</strong>
  },
  render: (properties: any) => <DBCard {...properties} />
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "3",
    "children": <strong>3</strong>
  },
  render: (properties: any) => <DBCard {...properties} />
}`,...t.parameters?.docs?.source}}};const v=["DefaultLevel1","Level2","Level3"];export{o as DefaultLevel1,n as Level2,t as Level3,v as __namedExportsOrder,m as default};
