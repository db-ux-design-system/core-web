import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as r,a as s}from"./tab-list-CmpYvehF.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBTabItem/Behavior",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},noText:{control:"boolean"},checked:{control:"boolean"},name:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{label:"(Default) Auto Width"},render:a=>t.jsx(s,{children:t.jsx(r,{...a})})},e={args:{label:"Width full"},render:a=>t.jsx(s,{className:"w-full",children:t.jsx(r,{...a})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) Auto Width"
  },
  render: (properties: any) => <DBTabList><DBTabItem {...properties} /></DBTabList>
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Width full"
  },
  render: (properties: any) => <DBTabList className="w-full"><DBTabItem {...properties} /></DBTabList>
}`,...e.parameters?.docs?.source}}};const u=["DefaultAutoWidth","Widthfull"];export{o as DefaultAutoWidth,e as Widthfull,u as __namedExportsOrder,p as default};
