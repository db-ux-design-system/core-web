import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./navigation-item-CIgotSvV.js";import"./index-D2E5Z_bU.js";import"./iframe-CiUFPK1z.js";import"./preload-helper-BVVqbGQe.js";import"./constants-C-ysBZRi.js";import"./floating-components-DAXMbqch.js";import"./button-B3gJE3R1.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBNavigationItem/Disabled",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{disabled:{control:"boolean"},active:{control:"boolean"},showIcon:{control:"boolean"},width:{control:"select",options:["full","auto"]},wrap:{control:"boolean"},text:{control:"text"},subNavigationExpanded:{control:"boolean"},backButtonId:{control:"text"},backButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},o={args:{disabled:!1,children:e.jsx("a",{href:"#",children:"(Default) False"})},render:t=>e.jsx("ul",{children:e.jsx(a,{...t})})},r={args:{disabled:!0,children:e.jsx("a",{href:"#",children:"True"})},render:t=>e.jsx("ul",{children:e.jsx(a,{...t})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "disabled": false,
    "children": <a href="#">(Default) False</a>
  },
  render: (properties: any) => <ul><DBNavigationItem {...properties} /></ul>
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "disabled": true,
    "children": <a href="#">True</a>
  },
  render: (properties: any) => <ul><DBNavigationItem {...properties} /></ul>
}`,...r.parameters?.docs?.source}}};const f=["DefaultFalse","True"];export{o as DefaultFalse,r as True,f as __namedExportsOrder,x as default};
