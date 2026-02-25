import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as n,a as t}from"./tab-list-BsuWMwG7.js";import"./index-C0vvPcr0.js";import"./iframe-CR40E5l_.js";import"./preload-helper--tLyh50B.js";import"./tooltip-_2pZ-EIT.js";import"./constants-C-ysBZRi.js";import"./document-scroll-listener-C19Ex2M_.js";import"./floating-components-BNmGdAgy.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,h={title:"Components/DBTabItem/Show Icon Trailing",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},noText:{control:"boolean"},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{label:"(Default) False",icon:"x_placeholder",iconTrailing:"x_placeholder",showIcon:!1,showIconTrailing:!1},render:a=>r.jsx(t,{children:r.jsx(n,{...a})})},e={args:{label:"True",icon:"x_placeholder",iconTrailing:"x_placeholder",showIcon:!0,showIconTrailing:!0},render:a=>r.jsx(t,{children:r.jsx(n,{...a})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const g=["DefaultFalse","True"];export{o as DefaultFalse,e as True,g as __namedExportsOrder,h as default};
