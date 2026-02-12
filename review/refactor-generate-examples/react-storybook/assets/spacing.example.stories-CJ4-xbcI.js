import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./card-D9SKJ6GV.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBCard/Spacing",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{behavior:{control:"select",options:["static","interactive"]},elevationLevel:{control:"select",options:["1","2","3"]},spacing:{control:"select",options:["medium","small","large","none"]},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},s={args:{spacing:"small",children:r.jsx("strong",{children:"(Default) Small"})},render:e=>r.jsx(n,{...e})},o={args:{spacing:"medium",children:r.jsx("strong",{children:"Medium"})},render:e=>r.jsx(n,{...e})},a={args:{spacing:"large",children:r.jsx("strong",{children:"Large"})},render:e=>r.jsx(n,{...e})},t={args:{spacing:"none",children:r.jsx("strong",{children:"None"})},render:e=>r.jsx(n,{...e})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "small",
    "children": <strong>(Default) Small</strong>
  },
  render: (properties: any) => <DBCard {...properties} />
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "medium",
    "children": <strong>Medium</strong>
  },
  render: (properties: any) => <DBCard {...properties} />
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "large",
    "children": <strong>Large</strong>
  },
  render: (properties: any) => <DBCard {...properties} />
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "none",
    "children": <strong>None</strong>
  },
  render: (properties: any) => <DBCard {...properties} />
}`,...t.parameters?.docs?.source}}};const u=["DefaultSmall","Medium","Large","None"];export{s as DefaultSmall,a as Large,o as Medium,t as None,u as __namedExportsOrder,g as default};
