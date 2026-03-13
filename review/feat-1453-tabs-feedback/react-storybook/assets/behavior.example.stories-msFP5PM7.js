import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as a,a as s}from"./tab-list-C-bEvdn3.js";import"./index-D2E5Z_bU.js";import"./iframe-Cb8Zj9Gf.js";import"./preload-helper--tLyh50B.js";import"./tooltip-BRo0YR4l.js";import"./document-scroll-listener-C9UMSkzw.js";import"./floating-components-DAXMbqch.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,D={title:"Components/DBTabItem/Behavior",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},noText:{control:"boolean"},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{label:"(Default) Auto Width"},render:r=>t.jsx(s,{children:t.jsx(a,{...r})})},e={args:{label:"Width full"},render:r=>t.jsx(s,{style:{blockSize:"100%"},children:t.jsx(a,{...r})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) Auto Width"
  },
  render: (properties: any) => <DBTabList><DBTabItem {...properties} /></DBTabList>
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Width full"
  },
  render: (properties: any) => <DBTabList style={{
    blockSize: '100%'
  }}><DBTabItem {...properties} /></DBTabList>
}`,...e.parameters?.docs?.source}}};const T=["DefaultAutoWidth","Widthfull"];export{o as DefaultAutoWidth,e as Widthfull,T as __namedExportsOrder,D as default};
