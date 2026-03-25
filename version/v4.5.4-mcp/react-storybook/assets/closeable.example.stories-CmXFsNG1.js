import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as s}from"./notification-BTPtdLlH.js";import"./index-D2E5Z_bU.js";import"./iframe-DOGZb9UQ.js";import"./preload-helper-6AdaFMoN.js";import"./constants-C-ysBZRi.js";import"./button-BtsyxPWT.js";const{fn:a}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBNotification/Closeable",component:s,parameters:{layout:"centered"},tags:["autodocs"],args:{onClose:a()},argTypes:{headline:{control:"text"},showIcon:{control:"boolean"},variant:{control:"select",options:["docked","standalone","overlay"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},closeable:{control:"boolean"},linkVariant:{control:"select",options:["block","inline"]},showHeadline:{control:"boolean"},showTimestamp:{control:"boolean"},timestamp:{control:"text"},ariaLive:{control:"select",options:["assertive","polite","off"]},text:{control:"text"},role:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},e={args:{closeable:!1,children:"(Default) False"},render:r=>t.jsx("div",{style:{width:"300px"},children:t.jsx(s,{...r})})},o={args:{closeable:!0,children:"True"},render:r=>t.jsx("div",{style:{width:"300px"},children:t.jsx(s,{...r})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "closeable": false,
    "children": "(Default) False"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "closeable": true,
    "children": "True"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...o.parameters?.docs?.source}}};const x=["DefaultFalse","True"];export{e as DefaultFalse,o as True,x as __namedExportsOrder,u as default};
