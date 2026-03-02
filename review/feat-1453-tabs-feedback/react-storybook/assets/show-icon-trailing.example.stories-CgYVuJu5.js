import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as n,a as t}from"./tab-list-W7jmHY0i.js";import"./index-C0vvPcr0.js";import"./iframe-BEJyqQqS.js";import"./preload-helper--tLyh50B.js";import"./tooltip-Clvnog7X.js";import"./constants-C-ysBZRi.js";import"./document-scroll-listener-C19Ex2M_.js";import"./floating-components-DAXMbqch.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBTabItem/Show Icon Trailing",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},noText:{control:"boolean"},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{label:"(Default) False",iconTrailing:"x_placeholder",showIconTrailing:!1},render:a=>r.jsx(t,{children:r.jsx(n,{...a})})},e={args:{label:"True",iconTrailing:"x_placeholder",showIconTrailing:!0},render:a=>r.jsx(t,{children:r.jsx(n,{...a})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) False",
    "iconTrailing": "x_placeholder",
    "showIconTrailing": false
  },
  render: (properties: any) => <DBTabList><DBTabItem {...properties} /></DBTabList>
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "True",
    "iconTrailing": "x_placeholder",
    "showIconTrailing": true
  },
  render: (properties: any) => <DBTabList><DBTabItem {...properties} /></DBTabList>
}`,...e.parameters?.docs?.source}}};const x=["DefaultFalse","True"];export{o as DefaultFalse,e as True,x as __namedExportsOrder,g as default};
