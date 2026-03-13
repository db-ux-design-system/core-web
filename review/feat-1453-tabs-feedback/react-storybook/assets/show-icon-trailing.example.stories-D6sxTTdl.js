import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as n,a as t}from"./tab-list-C6yGXU2D.js";import"./index-D2E5Z_bU.js";import"./iframe-D3q740OC.js";import"./preload-helper--tLyh50B.js";import"./tooltip-DkmsD6Q8.js";import"./document-scroll-listener-C9UMSkzw.js";import"./floating-components-DAXMbqch.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBTabItem/Show Icon Trailing",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},noText:{control:"boolean"},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{label:"(Default) False",iconTrailing:"x_placeholder",showIconTrailing:!1},render:a=>r.jsx(t,{children:r.jsx(n,{...a})})},e={args:{label:"True",iconTrailing:"x_placeholder",showIconTrailing:!0},render:a=>r.jsx(t,{children:r.jsx(n,{...a})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const g=["DefaultFalse","True"];export{o as DefaultFalse,e as True,g as __namedExportsOrder,u as default};
