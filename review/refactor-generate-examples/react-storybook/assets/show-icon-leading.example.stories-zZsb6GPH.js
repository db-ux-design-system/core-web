import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as n,a as t}from"./tab-list-CmpYvehF.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBTabItem/Show Icon Leading",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},noText:{control:"boolean"},checked:{control:"boolean"},name:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{label:"(Default) False",icon:"x_placeholder",showIcon:!1},render:a=>r.jsx(t,{children:r.jsx(n,{...a})})},o={args:{label:"True",icon:"x_placeholder",showIcon:!0},render:a=>r.jsx(t,{children:r.jsx(n,{...a})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) False",
    "icon": "x_placeholder",
    "showIcon": false
  },
  render: (properties: any) => <DBTabList><DBTabItem {...properties} /></DBTabList>
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "True",
    "icon": "x_placeholder",
    "showIcon": true
  },
  render: (properties: any) => <DBTabList><DBTabItem {...properties} /></DBTabList>
}`,...o.parameters?.docs?.source}}};const b=["DefaultFalse","True"];export{e as DefaultFalse,o as True,b as __namedExportsOrder,m as default};
