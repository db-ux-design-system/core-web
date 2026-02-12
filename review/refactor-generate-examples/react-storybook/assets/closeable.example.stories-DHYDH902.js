import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as s}from"./notification-CMgpyPCI.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./button-DnZnbJNC.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBNotification/Closeable",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{headline:{control:"text"},showIcon:{control:"boolean"},variant:{control:"select",options:["docked","standalone","overlay"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},closeable:{control:"boolean"},linkVariant:{control:"select",options:["block","inline"]},showHeadline:{control:"boolean"},showTimestamp:{control:"boolean"},timestamp:{control:"text"},ariaLive:{control:"select",options:["assertive","polite","off"]},text:{control:"text"},role:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},delay:{control:"select",options:["none","slow","fast"]},animation:{control:"boolean"},width:{control:"select",options:["auto","fixed"]},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},o={args:{closeable:!1,children:"(Default) False"},render:r=>t.jsx("div",{style:{width:"300px"},children:t.jsx(s,{...r})})},e={args:{closeable:!0,children:"True"},render:r=>t.jsx("div",{style:{width:"300px"},children:t.jsx(s,{...r})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "closeable": false,
    "children": "(Default) False"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "closeable": true,
    "children": "True"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...e.parameters?.docs?.source}}};const x=["DefaultFalse","True"];export{o as DefaultFalse,e as True,x as __namedExportsOrder,u as default};
