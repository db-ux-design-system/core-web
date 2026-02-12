import{j as o}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./navigation-item-CgYwv9u5.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./floating-components-BNmGdAgy.js";import"./button-DnZnbJNC.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,h={title:"Components/DBNavigationItem/Show Icon",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{disabled:{control:"boolean"},active:{control:"boolean"},showIcon:{control:"boolean"},width:{control:"select",options:["full","auto"]},wrap:{control:"boolean"},text:{control:"text"},subNavigationExpanded:{control:"boolean"},backButtonId:{control:"text"},backButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},e={args:{icon:"x_placeholder",showIcon:!1,children:o.jsx("a",{href:"#",children:"(Default) False"})},render:t=>o.jsx("ul",{children:o.jsx(n,{...t})})},r={args:{icon:"x_placeholder",showIcon:!0,children:o.jsx("a",{href:"#",children:"True"})},render:t=>o.jsx("ul",{children:o.jsx(n,{...t})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "showIcon": false,
    "children": <a href="#">(Default) False</a>
  },
  render: (properties: any) => <ul><DBNavigationItem {...properties} /></ul>
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "showIcon": true,
    "children": <a href="#">True</a>
  },
  render: (properties: any) => <ul><DBNavigationItem {...properties} /></ul>
}`,...r.parameters?.docs?.source}}};const x=["DefaultFalse","True"];export{e as DefaultFalse,r as True,x as __namedExportsOrder,h as default};
