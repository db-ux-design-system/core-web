import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as t,a as n}from"./tab-list-FCTvQach.js";import"./index-D2E5Z_bU.js";import"./iframe-DeaTI8aV.js";import"./preload-helper--tLyh50B.js";import"./tooltip-DurPrCFu.js";import"./constants-C-ysBZRi.js";import"./document-scroll-listener-C9UMSkzw.js";import"./floating-components-DAXMbqch.js";const{fn:T}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBTabItem/Show Icon Leading",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},noText:{control:"boolean"},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{label:"(Default) False",icon:"x_placeholder",showIcon:!1},render:a=>r.jsx(n,{children:r.jsx(t,{...a})})},e={args:{label:"True",icon:"x_placeholder",showIcon:!0},render:a=>r.jsx(n,{children:r.jsx(t,{...a})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) False",
    "icon": "x_placeholder",
    "showIcon": false
  },
  render: (properties: any) => <DBTabList><DBTabItem {...properties} /></DBTabList>
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "True",
    "icon": "x_placeholder",
    "showIcon": true
  },
  render: (properties: any) => <DBTabList><DBTabItem {...properties} /></DBTabList>
}`,...e.parameters?.docs?.source}}};const D=["DefaultFalse","True"];export{o as DefaultFalse,e as True,D as __namedExportsOrder,x as default};
