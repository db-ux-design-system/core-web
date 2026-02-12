import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as n,a as l}from"./tab-list-CmpYvehF.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,T={title:"Components/DBTabItem/Show Icon Trailing",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},noText:{control:"boolean"},checked:{control:"boolean"},name:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{label:"(Default) False",icon:"x_placeholder",iconTrailing:"x_placeholder",showIcon:!1,showIconTrailing:!1},render:a=>r.jsx(l,{children:r.jsx(n,{...a})})},e={args:{label:"True",icon:"x_placeholder",iconTrailing:"x_placeholder",showIcon:!0,showIconTrailing:!0},render:a=>r.jsx(l,{children:r.jsx(n,{...a})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) False",
    "icon": "x_placeholder",
    "iconTrailing": "x_placeholder",
    "showIcon": false,
    "showIconTrailing": false
  },
  render: (properties: any) => <DBTabList><DBTabItem {...properties} /></DBTabList>
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "True",
    "icon": "x_placeholder",
    "iconTrailing": "x_placeholder",
    "showIcon": true,
    "showIconTrailing": true
  },
  render: (properties: any) => <DBTabList><DBTabItem {...properties} /></DBTabList>
}`,...e.parameters?.docs?.source}}};const m=["DefaultFalse","True"];export{o as DefaultFalse,e as True,m as __namedExportsOrder,T as default};
