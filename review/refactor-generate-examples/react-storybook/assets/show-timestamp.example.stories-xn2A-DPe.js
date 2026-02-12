import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./notification-CMgpyPCI.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./button-DnZnbJNC.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBNotification/Show Timestamp",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{headline:{control:"text"},showIcon:{control:"boolean"},variant:{control:"select",options:["docked","standalone","overlay"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},closeable:{control:"boolean"},linkVariant:{control:"select",options:["block","inline"]},showHeadline:{control:"boolean"},showTimestamp:{control:"boolean"},timestamp:{control:"text"},ariaLive:{control:"select",options:["assertive","polite","off"]},text:{control:"text"},role:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},delay:{control:"select",options:["none","slow","fast"]},animation:{control:"boolean"},width:{control:"select",options:["auto","fixed"]},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},o={args:{variant:"overlay",timestamp:"10 min ago",showTimestamp:!1,children:"(Default) False"},render:a=>e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{...a})})},t={args:{variant:"overlay",timestamp:"10 min ago",showTimestamp:!0,children:"True"},render:a=>e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{...a})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "timestamp": "10 min ago",
    "showTimestamp": false,
    "children": "(Default) False"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "timestamp": "10 min ago",
    "showTimestamp": true,
    "children": "True"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...t.parameters?.docs?.source}}};const x=["DefaultFalse","True"];export{o as DefaultFalse,t as True,x as __namedExportsOrder,u as default};
