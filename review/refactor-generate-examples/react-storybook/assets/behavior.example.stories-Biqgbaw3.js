import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as a,a as s}from"./tab-list-tX2m9HAE.js";import"./index-cGbbigiG.js";import"./iframe-6D4xCEbg.js";import"./preload-helper-D8o24SmT.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBTabItem/Behavior",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},noText:{control:"boolean"},checked:{control:"boolean"},name:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{label:"(Default) Auto Width"},render:r=>t.jsx(s,{children:t.jsx(a,{...r})})},e={args:{label:"Width full"},render:r=>t.jsx(s,{style:{blockSize:"100%"},children:t.jsx(a,{...r})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const b=["DefaultAutoWidth","Widthfull"];export{o as DefaultAutoWidth,e as Widthfull,b as __namedExportsOrder,m as default};
